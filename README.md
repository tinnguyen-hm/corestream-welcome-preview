# Corestream welcome page — design preview

A review draft of Hike's Corestream landing page, built with React 19 and Mantine 7.17.7. It uses the supplied Hike logo and journey video. The page is not connected to authentication, scanning, checkout, or production.

## Live preview

[Open the landing page](https://tinnguyen-hm.github.io/corestream-welcome-preview/)

## Quick preview (no install)

Download this repository using **Code → Download ZIP**, extract it, then run this command from the extracted directory:

```sh
python3 -m http.server 4173 --directory preview
```

Open http://localhost:4173 in a browser. The prebuilt preview must be served over HTTP; double-clicking its index.html does not work because it uses root-relative asset URLs.

## Edit the draft

Use Node 20.19+ or Node 22.12+ and pnpm:

```sh
pnpm install
pnpm dev
```

Use the local URL printed by Vite. Run `pnpm build` for TypeScript validation and a production build.

## Files

- `src/CorestreamWelcome.tsx`: reusable client component with an `onContinue` callback.
- `public/assets/`: required logo, video, and poster.
- `src/main.tsx`: standalone review harness; buttons open an explanatory modal.
- `src/theme.ts`: subset of the product's Hike theme for this preview.
- `preview/`: prebuilt version of the current design.

## Product integration

Use the existing consumer-web ThemeProvider and copy the component plus required assets. Do not copy the Vite harness or replace the product theme. Layout, text, buttons, badges, cards, scrolling, and media framing use Mantine. The video uses native HTML playback; there is no original Vercel stylesheet or extra carousel dependency.

The app's actual theme overrides may change wrapping and sizing. Confirm those in an internal product preview before wiring the continuation callback and approved SSO route. This repository does not change live onboarding, database records, payments, consent, or analytics.

## Review status

This is a stakeholder review draft, not a production release. Payment availability and financing terms, the clinical price comparison, Fit Guarantee, testimonial, and benefit claims need business confirmation before publication. The displayed 50–85% savings matches $150 versus $300–$1,000.

Standalone TypeScript and build checks have passed; desktop/mobile visuals, video loading, card scrolling, and CTA preview behavior have been reviewed. Authenticated product integration remains future work.

## Sharing

This repository and its GitHub Pages preview are public. The page is a review draft; its buttons do not begin live onboarding.

GitHub Pages serves the committed `docs/` directory from `main`. After editing, run `pnpm build:pages`, ensure `docs/.nojekyll` exists, and commit and push the source and generated docs together.
