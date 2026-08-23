# Lodha Towers — Reference Reconstruction Specification

## Ground-Truth Reference

Recreate the visual language and information hierarchy of `lodhatower-5zoacygg.manus.space` using the user-supplied frame sequences as the canvas source. Fidelity to this reference overrides other page-style directions.

## Chosen Approach: Architectural Film Strip

**Design Movement:** Contemporary luxury architectural editorial, expressed as an immersive full-viewport frame-scroll film rather than a conventional webpage.

**Core Principles:**

1. The supplied architecture is the hero; typography remains light, sparse, and secondary.
2. The page is a single cinematic scroll sequence, not a collection of independently styled sections.
3. Motion feels immediate and rapid: small scroll gestures advance the visual journey decisively.
4. The loading state clearly communicates that the frame sequence is being prepared.

**Color Philosophy:** The interface stays nearly transparent over the supplied architectural imagery, using white for primary labels, warm ivory for display text, and muted gold for the second line of each title. Overlays are restrained charcoal gradients only where required for text legibility.

**Layout Paradigm:** A sticky full-viewport canvas occupies the entire visual field while a tall invisible scroll track maps page progress to a frame index. Editorial metadata sits at the perimeter; the title is offset from the left rather than conventionally centered.

**Signature Elements:** A thin numbered progress rail, a compact `01 / 15` chapter index, and a serif italic title treatment with a gold second line.

**Interaction Philosophy:** Scrolling is the primary control. The wordmark button returns the viewer to the beginning; no other interface competes with the experience.

**Animation:** Use only opacity and transform for interface transitions. The preloader’s percentage advances with the real decoded-frame count. Scroll-to-frame mapping is deliberately fast, with a short smoothing factor that retains a cinematic response.

**Typography System:** `DM Serif Display` carries the literary architectural titles; `Manrope` supports compact body labels; `IBM Plex Mono` is reserved for frame, chapter, and preload metadata.

**Brand Essence:** Lodha Towers is an immersive architectural perspective on Mumbai for viewers who want to inhabit a skyline before they visit it. **Elevated, cinematic, precise.**

**Brand Voice:** Headlines are spare and editorial; metadata is factual and quiet. Example lines: `A new perspective / on Mumbai` and `Daylight — 001 / 150`.

**Wordmark & Logo:** A compact `Lodha Towers` typographic wordmark with a fine architectural line marker, placed in the upper-left corner at a useful viewing size.

**Signature Brand Color:** **Horizon Gold — #C9A676** — used only to underscore the second line of the cinematic title.
