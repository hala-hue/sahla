# Sahala Subair — Developer Portfolio

A responsive, scrollable portfolio website built in the **Developer X** dark minimalist theme for **Sahala Subair**, Full Stack Developer (Java, React, TypeScript).

## 🚀 Live Preview & Quick Start

### Option 1: Direct in Browser
Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Python)
Run the following command from this directory:
```bash
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Theme Details (Developer X Aesthetic)

- **Palette**: Deep charcoal background (`#0b0e14`, `#111622`), electric blue accents (`#2563eb`), crisp typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Hero Section**: 3-column layout featuring the white accent bar, bold headline, smooth scroll action button, portrait showcase, and quick-access cards (*About Me*, *My Work*, *Follow Me*).
- **Interactive Sections**:
  - `/ ABOUT ME` with bold metric counters (`<15ms` edge latency, `16+` Vitest suites, `100%` type safety).
  - Specialized Tools & Organizations ticker (Tap Academy, Cloudflare Workers, Spring Boot, React 18, TypeScript, etc.).
  - `/ MY SKILLS` carousel with directional navigation buttons.
  - `/ FEATURED WORK` showcasing **MediSync** (Edge-Native Clinic Platform) and **Multimedia Chaotic Encryption** with live code mockups.
  - `/ CAREER & EDUCATION` timeline with Tap Academy internship and B.E. Computer Science credentials.
  - `/ GET IN TOUCH` with direct email/phone copy buttons, contact form, and Resume viewer modal.

---

## 📸 Customizing the Profile Picture
The website currently includes a vector illustration portrait (`assets/hero-portrait.svg`).
To use Sahala's actual headshot:
1. Place the photo in `assets/` (e.g., `assets/sahala.png` or `assets/sahala.jpg`).
2. In `index.html`, update the image tag:
   ```html
   <img src="assets/sahala.png" alt="Sahala Subair" class="portrait-image" id="heroPortraitImg">
   ```
