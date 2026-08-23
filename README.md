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

## Author

**Vedu**  
Sales & Marketing
