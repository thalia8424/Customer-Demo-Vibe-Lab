# Customer Demo Vibe Lab Guidelines

## Purpose

This project creates standalone, customer-specific conversation demos for
Microsoft Technical Trainers. Keep the experience useful for an MTT-led customer
discussion rather than turning it into a marketing landing page.

## Architecture

- `starter/*.md` contains fictional, sanitized, or approved customer briefs.
- `src/content/*.js` contains customer-specific structured content.
- `src/content/demo.js` selects the active customer as `selectedDemo`.
- `src/main.js` renders the shared conversation structure.
- `src/styles.css` provides the shared responsive design.
- `vite.export.config.js` creates `output/customer-demo.html`.

Keep customer content separate from the shared renderer and styles.

When creating a customer demo, add one content file and update only
`src/content/demo.js`. Change shared files only when the requested behavior must
apply to every customer.

## Content Schema

Follow an existing file in `src/content/` exactly. Preserve these fields and
value types:

- `documentTitle`
- `theme.primary`, `theme.accent`, and `theme.accentLight`
- `hero.eyebrow`, `hero.title`, and `hero.summary`
- Three `priorities`, each with `title` and `description`
- `futureState.kicker`, `title`, `ariaLabel`, and three `steps`
- Three or four `capabilities`
- `poc.kicker`, `title`, `introduction`, and four `items`

Each capability requires a unique lowercase `id`, plus `title`, `solution`,
`purpose`, `scenario`, and `priority`.

Use plain text values. Do not insert HTML into customer content.

## Customer Safety

- Use only fictional, sanitized, or customer-approved information.
- Never introduce confidential, personal, or sensitive customer data.
- Never invent statistics, outcomes, quotations, product capabilities, or URLs.
- Distinguish customer baselines, targets, and achieved results.
- Never present a target or proposed experience as an achieved result.
- Use `To be confirmed` when information has not been approved.
- Preserve the evidence-review warning.
- State that external use requires account-team and customer review.

## Writing Style

Use concise, professional, customer-centered language.

Structure the narrative around:

1. What the customer is experiencing
2. What future experience could be explored
3. Which Microsoft capabilities may support it
4. What evidence still requires review
5. What focused scenario could be validated

Use possibility language such as `could`, `may`, and `explore` for proposed
experiences. Avoid hype, guarantees, unsupported comparisons, and generic
marketing language.

## Design and Accessibility

Preserve semantic headings, native buttons, keyboard interaction, visible focus
states, reduced-motion support, responsive layouts, and adequate color contrast.

Do not add decorative complexity that distracts from the customer conversation.
Ensure content remains readable on desktop and narrow screens.

## Validation

After code or content changes, run:

```bash
npm run build
npm run export
