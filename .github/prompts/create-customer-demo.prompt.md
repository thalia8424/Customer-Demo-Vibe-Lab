---
name: "Create Customer Demo"
description: "Create and validate a customer-specific demo from a completed customer brief"
argument-hint: "Enter the completed brief path, for example starter/my-customer.md"
agent: "agent"
---

Create a customer-specific demo using the completed brief at
`${input:briefFile}`.

## Inspect before editing

1. Read the completed brief.
2. Read `src/content/contoso-bank.js` and
   `src/content/fabrikam-manufacturing.js`.
3. Read `src/content/demo.js`.
4. Treat the existing content-object structure as the required schema.
5. Do not change the shared renderer or design system.

## Create the customer content

1. Derive a lowercase kebab-case filename from the customer name.
2. Derive a valid camelCase JavaScript export name.
3. Create `src/content/<customer-name>.js`.
4. Use the existing customer content files as structural examples.
5. Preserve every required property, nesting level, and value type.
6. Adapt all customer-facing copy, priorities, journey steps, capabilities,
   evidence guidance, POC details, document title, and theme.
7. Keep the experience structured as an MTT-led customer conversation:
   hero, what we heard, future state, Microsoft capabilities, evidence, and POC.
8. Use concise, professional, customer-centered language.
9. Present proposed experiences as possibilities, not guaranteed outcomes.
10. Retain human review, governance, security, compliance, and data-policy
    considerations where relevant.

## Evidence rules

- Do not invent statistics, customer results, quotations, product claims, or URLs.
- Use a claim only when the brief provides an approved source.
- Clearly distinguish current-state baselines, customer targets, and achieved results.
- Never present a target as an achieved result.
- When evidence is missing, use neutral wording and state that evidence must be
  reviewed before external use.
- Do not silently replace missing information with plausible-looking facts.
- Preserve `To be confirmed` where account-team input is still required.

## Select the new demo

Update only `src/content/demo.js` so it:

1. Imports the new customer export as `selectedDemo`.
2. Exports it as `demo`.
3. Uses a correct relative import ending in `.js`.

## Editing boundaries

Apart from the new content file, modify only `src/content/demo.js`.

Do not modify:

- `src/main.js`
- `src/styles.css`
- `index.html`
- `package.json`
- `vite.export.config.js`
- Existing customer content files

If the current schema cannot represent something from the brief, report the
limitation instead of changing the renderer or schema.

## Validate

After editing:

1. Run `npm run build`.
2. Run `npm run export`.
3. Confirm that `output/customer-demo.html` was created.
4. Confirm that the generated content contains the new customer name.
5. Confirm that no unsupported claims or invented URLs were introduced.
6. Fix errors caused by your changes and repeat the failed validation.

## Report

Summarize:

- The content file created
- The customer and industry selected
- The Microsoft capabilities included
- Any fields still marked `To be confirmed`
- Any claims requiring account-team review
- Build and export results
- The downloadable artifact path