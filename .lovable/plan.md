## Plan: Site-wide UX fixes

### 1. Scroll-to-top on route change
Add a small `ScrollToTop` component in `src/components/ScrollToTop.tsx` that listens to `useLocation()` and calls `window.scrollTo(0, 0)` on pathname change. Mount it once inside the `BrowserRouter` in `src/App.tsx`. This fixes footer links (and all internal links) opening pages mid-scroll.

### 2. Fix invisible hover text on outline/secondary hero buttons
On the homepage hero, the "Get a Quote" button uses:
```
border-primary-foreground/60 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20
```
which keeps text visible on hover. Other pages (About Us, Contact Us, Industries, Resources, OrganisationalCertification, PeopleTrainingCertification, ISO* pages via `CertificationPageTemplate`) likely use `variant="outline"` whose default hover applies `bg-accent hover:text-accent-foreground` against a dark hero — text disappears.

Audit every hero/CTA on:
- `src/components/CertificationPageTemplate.tsx`
- `src/pages/AboutUs.tsx`, `ContactUs.tsx`, `Industries.tsx`, `Resources.tsx`, `OrganisationalCertification.tsx`, `PeopleTrainingCertification.tsx`

Replace those secondary hero buttons with the same className pattern as the homepage hero so text remains readable on hover.

### 3. Partners section: show logos in full color by default
In `src/components/PartnersSection.tsx`, remove the `grayscale` class so logos render in their brand colors. Keep a subtle hover (e.g. slight scale or shadow) for interactivity. Also verify the local logo images exist in `/public` (`britishcouncil.png`, `certnexus.png`, `microsoft.png`, `cisco.png`, `comptia.png`); if missing, swap back to the official URLs supplied earlier.

### 4. WhatsApp integration on all "Get a Quote / Consult / Contact" CTAs + bigger footer logo
- Create a tiny helper `src/lib/whatsapp.ts` exporting:
  ```
  export const WHATSAPP_NUMBER = "8801323577502";
  export const waLink = (msg: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  ```
- Convert every contact-style CTA button into an anchor (`<Button asChild><a href={waLink(...)} target="_blank" rel="noopener noreferrer">…</a></Button>`) with a context-appropriate prefilled message, e.g.:
  - Homepage hero "Get a Quote" → "Hi Ask Lumina, I'd like a quote for certification services."
  - ISO pages "Get a Quote / Consult with us" → "Hi, I'm interested in {ISO standard} certification."
  - About / Contact / Services pages "Contact Us / Talk to an expert" → generic inquiry message.
- Files to update: `HeroSection.tsx`, `CertificationPageTemplate.tsx`, `ServicesSection.tsx`, `ResourcesSection.tsx`, `AboutUs.tsx`, `ContactUs.tsx`, `Industries.tsx`, `Resources.tsx`, `OrganisationalCertification.tsx`, `PeopleTrainingCertification.tsx`, and the Header "Get a Quote" button if present.
- Optionally add a WhatsApp icon (lucide `MessageCircle` or inline SVG) next to the label.
- In `src/components/Footer.tsx`, increase the brand logo from `h-10` to `h-16` (and allow it to scale naturally with `w-auto`).

### Out of scope
No backend, no design-token changes, no content rewrites — purely targeted UI/behavior fixes.
