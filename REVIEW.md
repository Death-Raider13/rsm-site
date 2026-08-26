# ResolveSync Management Site — Repository Review

**Repository:** [Death-Raider13/rsm-site](https://github.com/Death-Raider13/rsm-site)  
**Reviewed commit:** `817cece` — `Initial commit of premium rebuild`  
**Review date:** 26 August 2026  
**Reviewer:** Manus AI

## Executive summary

This repository is a small, focused **React 19 + Vite + Tailwind CSS v4** single-page marketing site for ResolveSync Management, a Lagos-based project-delivery consultancy. The implementation is intentionally lightweight: it has one application entry point, seven presentational page-section components, a global CSS file, and no backend, routing library, database, analytics, CMS, or automated test suite. The page is visually polished and production-buildable, with responsive CSS embedded in each component and a clear WhatsApp/email conversion path.

The main functional concern is the contact card. It renders a name input and project textarea, but the “Send via WhatsApp” control is a static link to a pre-written WhatsApp message; it does not read or transmit the values entered by the visitor. The form therefore looks interactive while behaving as a simple outbound link. A second clear issue is the footer’s “Back to top” link, which currently points to the WhatsApp URL rather than an in-page anchor. There are also two lint warnings and some maintainability/accessibility opportunities.

## 1. Repository inventory

| Area | Contents | Assessment |
|---|---|---|
| Application | `src/main.jsx`, `src/App.jsx` | Single React entry point and page composition. |
| Sections | `Header`, `Hero`, `Statement`, `Services`, `Process`, `Proof`, `Contact`, `Footer` | Logical marketing-site decomposition. |
| Styling | `src/index.css` plus component-local inline styles and `<style>` blocks | Strong visual control, but repeated styles are harder to maintain. |
| Public assets | Logo PNG, favicon SVG, icon sprite SVG | Branding assets are present. |
| Build tooling | Vite, React plugin, Tailwind v4 Vite plugin, Oxlint | Modern and minimal frontend toolchain. |
| Documentation | `README.md` | The README is the default Vite starter documentation rather than project-specific setup or deployment documentation. |
| Tests | None detected | No unit, integration, end-to-end, or accessibility test scripts are defined. |
| Backend/data | None | Fully static frontend; contact handling is external via WhatsApp/email. |

The repository contains one Git commit and the working tree remained clean after dependency installation and validation. The tracked source is compact, and generated build output is not committed.

## 2. Application architecture

The runtime flow is straightforward:

```text
index.html
  └── src/main.jsx
        ├── global src/index.css
        └── src/App.jsx
              ├── top information bar
              ├── Header
              ├── Hero
              ├── Statement
              ├── Services
              ├── Process
              ├── Proof
              ├── Contact
              └── Footer
```

`src/main.jsx` mounts `<App />` into `#root` under React `StrictMode`. `src/App.jsx` owns the complete page order and provides the top information bar. The page is not routed; all navigation is handled with fragment links such as `#services`, `#process`, `#proof`, and `#contact`.

The site uses a shared set of CSS custom properties in `src/index.css` for navy, blue, pale-blue, canvas, surface, text, borders, easing, and font families. Typography is loaded from Google Fonts using Manrope for display text and Plus Jakarta Sans for body copy. Tailwind is imported, but most of the actual styling is written as inline React style objects, with component-local media queries in `<style>` tags.

## 3. Section-by-section walkthrough

### Header

`src/components/Header.jsx` implements a sticky, blurred header with desktop navigation, a WhatsApp call-to-action, and a mobile menu. The mobile menu state is handled with `useState`; clicking a mobile navigation link closes the menu. The component also registers a scroll listener and updates a `scrolled` state when the page passes 20 pixels.

The scroll state is currently unused, so it causes an Oxlint warning and has no visual effect. Either remove the listener/state or use it to change the header’s shadow, border, height, or background when scrolling. The mobile menu button has an accessible label, but it should also expose `aria-expanded={menuOpen}` and `aria-controls` for stronger assistive-technology support.

### Hero

`src/components/Hero.jsx` is the main conversion section. It presents the “Turn important work into forward movement” headline, a short positioning paragraph, a WhatsApp CTA, a services anchor link, location availability, and an abstract project-brief visual. The visual is built from CSS gradients, line elements, and floating cards rather than relying on the tracked `src/assets/hero.png` file.

The hero uses a small mount animation for the copy and visual, with a 100 ms stagger. The page has an appropriate `h1`, a clear primary action, and a responsive layout that collapses to one column below 980 px.

### Statement

`src/components/Statement.jsx` communicates the “Why RSM” proposition in a navy section. It uses an `IntersectionObserver` reveal animation that disconnects after the first intersection. The copy is concise and appropriately separated from the service catalog.

### Services

`src/components/Services.jsx` defines three services as an in-file data array: Business Launches, Software Implementation, and Strategy Execution. Each card includes a number, title, description, category tag, and a WhatsApp “Get started” link. The cards use a three-column desktop grid, two columns at medium widths, and one column on small screens.

The repeated WhatsApp URL is declared locally in more than one component. Centralizing it in a small constants/config module would reduce the chance that the phone number or default message diverges between sections.

### Process

`src/components/Process.jsx` presents three stages: Discovery, Planning, and Execution. It follows the same reveal-animation pattern and includes a WhatsApp “Let’s talk” link. The section is content-driven and has a good narrative relationship with the services section.

### Proof

`src/components/Proof.jsx` is an “Our approach” section rather than a conventional case-study portfolio. It explicitly states that RSM is building delivery evidence through real work and permission-based sharing. The left panel is a CSS-generated visual; the right panel lists delivery-first approach, permission-based sharing, and honest communication.

This is a credible choice for an early-stage consultancy because it avoids fabricated metrics. If client proof becomes available, this section is the natural place to add anonymized case studies, measurable outcomes, client-approved logos, or project snapshots.

### Contact

`src/components/Contact.jsx` has two columns: direct contact details on the left and a visually styled “Start a conversation” card on the right. The card renders a name field and a project-description textarea and then provides a “Send via WhatsApp” action.

The important implementation limitation is that the fields are uncontrolled and have no state, submit handler, validation, or serialization. The final anchor always uses the same static WhatsApp URL, regardless of what the visitor types. The UI should either be simplified to remove the fields, or converted into a real form that builds a URL-encoded WhatsApp message from the entered name and project description. If privacy or lead tracking is required, the form should instead submit to a backend or a trusted form provider.

### Footer

`src/components/Footer.jsx` renders the logo, contact details, location, dynamic copyright year, and a “Back to top” affordance. The copyright year is correctly generated at runtime.

The “Back to top” anchor is incorrectly assigned the same WhatsApp URL used by the contact CTAs. It should point to `#hero`, `#header`, or a dedicated top anchor. This is a visible navigation defect and should be fixed before release.

## 4. Validation performed

| Check | Result | Notes |
|---|---|---|
| Dependency installation | Passed | `npm ci --no-audit --no-fund` completed successfully. |
| Production build | Passed | `vite build` completed and emitted `dist/index.html`, CSS, and JS bundles. |
| Lint | Passed with warnings | Oxlint reported two warnings and zero errors. |
| Production dependency audit | Passed | `npm audit --omit=dev --audit-level=moderate` reported zero vulnerabilities. |
| Browser render | Passed | The local Vite page rendered with expected content and assets. |
| Automated tests | Not available | No test script or test files were found. |

The two lint warnings are:

1. `src/components/Header.jsx:4`: `scrolled` is declared but never used.
2. `src/components/Hero.jsx:92`: the mapped callback receives `i`, but the index is never used.

These do not block the build, but they should be resolved to keep lint output clean and prevent real issues from being hidden among warnings.

## 5. Findings by priority

| Priority | Finding | Location | Recommended action |
|---|---|---|---|
| High | Contact fields do not affect the WhatsApp message. | `src/components/Contact.jsx:62–77` | Add React state and construct an encoded message, or replace the fields with a true backend/form-provider submission. |
| High | “Back to top” navigates to WhatsApp instead of the page top. | `src/components/Footer.jsx:20–27` | Change `href={waLink}` to `href="#hero"` or `href="#header"`. |
| Medium | Header scroll state is dead code. | `src/components/Header.jsx:4–10` | Remove it or use it for a scroll-aware visual treatment. |
| Medium | Mobile menu lacks expanded/controlled semantics. | `src/components/Header.jsx:62` | Add `aria-expanded`, `aria-controls`, and an ID on the menu container. |
| Medium | No automated tests or accessibility checks. | `package.json` | Add at least a smoke test, link/anchor checks, and an accessibility audit in CI. |
| Medium | Contact links and phone/message are duplicated across components. | Header, Hero, Services, Process, Contact, Footer | Centralize business contact constants. |
| Low | README is generic Vite documentation. | `README.md` | Replace with project-specific setup, scripts, deployment, content-editing, and contact-update instructions. |
| Low | Styling is heavily inline and locally duplicated. | All components | Gradually extract shared buttons, section labels, cards, and responsive primitives. |
| Low | Several SVG icons have no accessible names. | Multiple components | Mark decorative SVGs `aria-hidden="true"`; provide accessible text where an icon conveys unique meaning. |
| Low | `src/assets/hero.png`, `react.svg`, and `vite.svg` appear unused. | `src/assets/` | Remove unused starter assets or document their intended use. |

## 6. Recommended implementation order

First, fix the two user-facing defects: make the contact card submit the visitor’s actual values and correct the footer back-to-top link. Next, clean the two lint warnings and centralize the WhatsApp/email constants. Then add semantic improvements to the mobile menu and decorative SVGs. After that, replace the generic README and add a small automated verification layer covering the build, critical links, form behavior, and responsive navigation.

For a production launch, the site should also add a canonical URL, Open Graph image dimensions and absolute URL metadata, a `robots.txt`, a sitemap if the domain is indexed, and a deployment configuration appropriate to the selected host. Because the current site is static, deployment can remain simple and does not require a server runtime unless a real contact form or analytics pipeline is introduced.

## 7. Local commands

From `/home/ubuntu/rsm-site`:

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

The repository is currently cloned at `/home/ubuntu/rsm-site`. No source changes were made during this review; the working tree remained clean.

## References

[1]: https://github.com/Death-Raider13/rsm-site "Death-Raider13/rsm-site GitHub repository"
