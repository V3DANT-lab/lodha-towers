# Lodha Towers Frame Upgrade Notes

The public Lodha Towers experience at `https://lodhatower-5zoacygg.manus.space/` uses a scroll-controlled canvas and displays a **15-part** visual journey. Initial live resource inspection confirmed two directly requested image assets: `lodha-cinematic-reference_be646dfb.jpg` and `lodha-towers-mark_c674d8ee.png`.

The canvas sequence itself does not request individual raster frame files directly at initial page load. The high-resolution replacement workflow must therefore locate the sequence manifest or canvas-generation source before asset enhancement can begin.

The public client bundle references `lodha-towers-150-clean-frames_61e031d0.zip`, which contains **150 JPEG frames**. Representative source frames are `1280 × 720`; the final frame is `1088 × 832`. The current workspace contains no editable Lodha Towers project or matching frame manifest, so the live project source must be made available before enhanced frames can be integrated and redeployed to the supplied Manus URL.

The supplied `V3DANT-lab/lodha-towers` repository was cloned and inspected. It contains the earlier static landing project, but no Lodha Towers canvas implementation, frame manifest, or visual frame assets. It therefore cannot update the supplied Lodha Towers live site without replacing it with unrelated source.

A standalone deployable Lodha Towers static build has been created from the public application bundle and validated locally. It renders the original scroll-controlled canvas experience while resolving the hero reference and mark from local static assets; the bundled frame loader now targets the packaged high-resolution frame archive.
