# Lodha Towers

> **A visual journey through a new perspective on Mumbai.**

## Live experience

Visit the live Lodha Towers website at **[lodhatower-5zoacygg.manus.space](https://lodhatower-5zoacygg.manus.space/)**.

The link has been verified to load the active Lodha Towers Daylight sequence.

| Resource | Link |
| --- | --- |
| **Live website** | [https://lodhatower-5zoacygg.manus.space/](https://lodhatower-5zoacygg.manus.space/) |
| **High-resolution deployment** | [https://lodha-towers-hires.netlify.app](https://lodha-towers-hires.netlify.app) |
| **GitHub repository** | [https://github.com/V3DANT-lab/lodha-towers](https://github.com/V3DANT-lab/lodha-towers) |

The live experience opens in **Daylight** and guides visitors through a fifteen-part visual sequence set in **Mumbai, India**.

## High-resolution frame upgrade

The repository now includes a deployable high-resolution version of the visual sequence in `hires-deployment/`.

| Asset | Details |
| --- | --- |
| **Enhanced sequence** | 150 JPEG frames, preserved in their original `frame-001.jpg` to `frame-150.jpg` order. |
| **Standard frame resolution** | `1280 × 720` → `2560 × 1440` (2×). |
| **Final frame resolution** | `1088 × 832` → `2176 × 1664` (2×). |
| **Frame archive** | `hires-deployment/assets/lodha-towers-150-frames-hires.zip` |
| **Deployable entry point** | `hires-deployment/index.html` |
| **Production archive delivery** | The static build loads the archive from the public GitHub raw-file URL, keeping the hosting deployment lightweight. |

The static build preserves the scroll-controlled canvas experience and redirects its frame loader to the included high-resolution archive.

The dedicated Netlify deployment has been verified to request the high-resolution archive from the repository’s public GitHub asset URL.

## Recreated supplied-frame scroll experience

The current deployment has been rebuilt from the two supplied Lodha Towers frame archives and keeps the reference’s fifteen editorial title stages, including `A new perspective / on Mumbai` and `Lodha Towers / Mumbai`.

| Capability | Implementation |
| --- | --- |
| **Desktop visual sequence** | 150 user-supplied architectural frames in a 16:9 daylight ascent. |
| **Mobile visual sequence** | 151 user-supplied golden-hour frames selected for portrait viewports. |
| **Preload state** | A visible percentage and decoded-frame counter track actual archive unpacking and image decoding. |
| **Scroll pacing** | A shorter `390vh` desktop scroll track and a `0.42` interpolation response make frame advancement rapid while retaining a smooth cinematic transition. |
| **Production frame delivery** | Optimized WebP frame archives in `frame-archives/`, loaded by the production canvas through public GitHub URLs. |

The recreated experience is live at [lodha-towers-hires.netlify.app](https://lodha-towers-hires.netlify.app).

## Author

**Vedu**  
Sales & Marketing
