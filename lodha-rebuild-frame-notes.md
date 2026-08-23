# Lodha Towers Rebuild Frame Notes

The user supplied two PNG archives for the reconstructed frame-scroll experience.

| Archive | Frames | Dimensions | Initial review |
| --- | ---: | --- | --- |
| `ezgif-7492d12ee8d47d82-png-split.zip` | 150 | `1280 × 720` | A 16:9 architectural ascent, opening beneath the scalloped canopy and concluding at the rooftop terraces above the city. This is the primary canvas sequence. |
| `ezgif-7ae95e6706e8a237-png-split.zip` | 151 | `1088 × 832` | A separate supplied PNG sequence that requires inspection before assigning it to an additional visual sequence. |

The reference Lodha Towers site uses the text labels `Lodha Towers`, `Mumbai · India`, `01 — Daylight`, `A new perspective on Mumbai`, `Daylight`, and `001 / 150`. The rebuilt page should preserve these narrative elements while using a faster scroll-to-frame relationship and a visible preload state.

The second sequence opens on a golden-hour ground-level tower view and concludes with a wide aerial city-and-waterfront view. It will be used as the **mobile / portrait source** so the supplied frame sets both contribute without distorting their native composition. The desktop experience will use the 16:9 150-frame architectural ascent from the first archive.

## Local Validation

The rebuilt desktop experience successfully fetched and decoded the 150-frame daytime archive. After the preload interval, the loader’s visibility changed to `hidden`, the displayed frame readout became `Daylight 001 / 150`, and the canvas rendered at device-density dimensions of `1280 × 1100` in the verification browser.

After WebP optimization, the loader displayed live progress at `135 / 150 frames decoded` while reporting `Preloading every viewpoint`. This confirms that the production preloader is driven by actual supplied-frame decoding rather than a synthetic timer.

## Public Release Verification

The dedicated Netlify deployment successfully decoded the daylight archive served from the public Lodha Towers repository. The production preloader changed to `hidden`, the canvas readout displayed `Daylight 001 / 150`, and the opening narrative remained `A new perspective / on Mumbai`.
