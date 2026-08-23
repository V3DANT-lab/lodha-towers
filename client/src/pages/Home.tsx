/* Design direction: Architectural Film Strip — a transparent editorial overlay rides a rapid, full-viewport Lodha Towers frame sequence. */
import { useCallback, useEffect, useRef, useState } from "react";
import { unzipSync } from "fflate";

const FRAME_ARCHIVES = {
  landscape: "https://raw.githubusercontent.com/V3DANT-lab/lodha-towers/main/frame-archives/lodha-towers-daylight-webp-frames.zip",
  portrait: "https://raw.githubusercontent.com/V3DANT-lab/lodha-towers/main/frame-archives/lodha-towers-golden-hour-webp-frames.zip",
};

const STAGES = [
  ["A new perspective", "on Mumbai"],
  ["Lodha", "Towers"],
  ["Where form meets", "the horizon"],
  ["Designed to rise", "above the ordinary"],
  ["An icon", "in motion"],
  ["Architecture,", "composed in light"],
  ["A city", "above the city"],
  ["Space to pause.", "Space to belong."],
  ["Elevated living,", "in the heart of Mumbai"],
  ["The skyline,", "reimagined"],
  ["As day", "becomes night"],
  ["Mumbai,", "illuminated"],
  ["A presence that defines", "the horizon"],
  ["Live above", "the ordinary"],
  ["Lodha Towers,", "Mumbai"],
];

const decodeImage = (source: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("A frame could not be decoded."));
    image.src = source;
  });

const drawFrame = (canvas: HTMLCanvasElement, image: HTMLImageElement) => {
  const context = canvas.getContext("2d");
  if (!context) return;

  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(window.innerWidth * ratio));
  const height = Math.max(1, Math.round(window.innerHeight * ratio));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  const sourceRatio = image.naturalWidth / image.naturalHeight;
  const canvasRatio = width / height;
  const drawWidth = sourceRatio > canvasRatio ? height * sourceRatio : width;
  const drawHeight = sourceRatio > canvasRatio ? height : width / sourceRatio;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;

  context.clearRect(0, 0, width, height);
  context.drawImage(image, x, y, drawWidth, drawHeight);
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const urlsRef = useRef<string[]>([]);
  const targetFrameRef = useRef(0);
  const renderedFrameRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [frameCount, setFrameCount] = useState(0);
  const [status, setStatus] = useState("Preparing the frame study");
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  const renderCurrentFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const image = framesRef.current[index];
    if (canvas && image) drawFrame(canvas, image);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const isPortrait = window.matchMedia("(max-width: 760px), (orientation: portrait)").matches;
    const archiveUrl = isPortrait ? FRAME_ARCHIVES.portrait : FRAME_ARCHIVES.landscape;

    const loadFrames = async () => {
      try {
        setStatus("Receiving the architecture");
        const response = await fetch(archiveUrl);
        if (!response.ok) throw new Error("The frame archive is unavailable.");

        setStatus("Unspooling the visual sequence");
        const archive = unzipSync(new Uint8Array(await response.arrayBuffer()));
        const files = Object.entries(archive)
          .filter(([name]) => name.toLowerCase().endsWith(".webp"))
          .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }));

        if (!files.length) throw new Error("No PNG frames were found in the archive.");
        if (cancelled) return;

        setFrameCount(files.length);
        setStatus("Preloading every viewpoint");

        for (let index = 0; index < files.length; index += 1) {
          const [, bytes] = files[index];
          const objectUrl = URL.createObjectURL(new Blob([bytes], { type: "image/webp" }));
          urlsRef.current.push(objectUrl);
          const image = await decodeImage(objectUrl);
          framesRef.current.push(image);
          if (cancelled) return;
          setLoadedCount(index + 1);
        }

        if (!cancelled) {
          renderCurrentFrame(0);
          setStatus("Sequence ready");
          window.setTimeout(() => setReady(true), 420);
        }
      } catch (loadError) {
        console.error(loadError);
        if (!cancelled) setError(true);
      }
    };

    loadFrames();
    return () => {
      cancelled = true;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      urlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      urlsRef.current = [];
      framesRef.current = [];
    };
  }, [renderCurrentFrame]);

  useEffect(() => {
    if (!ready || !frameCount) return;

    const updateScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      targetFrameRef.current = nextProgress * (frameCount - 1);
      setProgress(nextProgress);
    };

    const resizeCanvas = () => renderCurrentFrame(Math.round(renderedFrameRef.current));

    const render = () => {
      const delta = targetFrameRef.current - renderedFrameRef.current;
      renderedFrameRef.current += delta * 0.42;
      if (Math.abs(delta) < 0.12) renderedFrameRef.current = targetFrameRef.current;
      renderCurrentFrame(Math.round(renderedFrameRef.current));
      animationRef.current = requestAnimationFrame(render);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [frameCount, ready, renderCurrentFrame]);

  const stageIndex = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));
  const stage = STAGES[stageIndex];
  const frameNumber = Math.min(frameCount, Math.max(1, Math.round(progress * Math.max(0, frameCount - 1)) + 1));
  const loadPercent = frameCount ? Math.round((loadedCount / frameCount) * 100) : 0;

  return (
    <main className="lodha-experience">
      <div className="lodha-viewport" aria-hidden={!ready}>
        <canvas ref={canvasRef} className="lodha-canvas" aria-label="Scroll-controlled Lodha Towers architectural sequence" />
        <div className="lodha-scrim" />

        <header className="lodha-header">
          <button className="lodha-wordmark" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="lodha-wordmark-mark" aria-hidden="true" />
            <span>Lodha <em>Towers</em></span>
          </button>
          <span className="lodha-location">Mumbai · India</span>
        </header>

        <aside className="lodha-rail" aria-hidden="true">
          <span>01</span>
          <span className="lodha-rail-line"><i style={{ transform: `scaleY(${Math.max(0.03, progress)})` }} /></span>
          <span>15</span>
        </aside>

        <section className="lodha-copy" key={stageIndex}>
          <p className="lodha-eyebrow">{String(stageIndex + 1).padStart(2, "0")} — Daylight</p>
          <h1>
            <span>{stage[0]}</span>
            <em>{stage[1]}</em>
          </h1>
        </section>

        <div className="lodha-index" aria-label={`Chapter ${stageIndex + 1} of ${STAGES.length}`}>
          <span>{String(stageIndex + 1).padStart(2, "0")}</span>
          <span>{String(STAGES.length).padStart(2, "0")}</span>
        </div>

        <div className="lodha-frame-readout">
          <span>Daylight</span>
          <span>{String(frameNumber).padStart(3, "0")} / {String(frameCount || 150).padStart(3, "0")}</span>
        </div>
      </div>

      <div className="lodha-scroll-track" aria-hidden="true" />

      <section className={`lodha-preloader ${ready ? "is-complete" : ""}`} aria-live="polite" aria-busy={!ready}>
        <div className="lodha-loader-mark"><span /> <strong>Lodha <em>Towers</em></strong></div>
        <div className="lodha-loader-center">
          <p>{error ? "Frame archive unavailable" : status}</p>
          <strong>{error ? "Retry the page" : `${String(loadPercent).padStart(3, "0")}%`}</strong>
        </div>
        <div className="lodha-loader-footer">
          <span>{error ? "Unable to load frames" : `${loadedCount} / ${frameCount || "—"} frames decoded`}</span>
          <span className="lodha-loader-rule"><i style={{ transform: `scaleX(${loadPercent / 100})` }} /></span>
          <span>Scroll film / 01</span>
        </div>
      </section>
    </main>
  );
}
