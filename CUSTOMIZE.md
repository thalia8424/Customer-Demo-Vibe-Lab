# Customize Your Customer Demo

In this lab, you will use GitHub Copilot CLI and Copilot Agent mode to turn a
fictional customer brief into an interactive customer-conversation demo.

Your finished deliverable will be one standalone HTML file that you can download
and open in a browser.

## What you will create

The demo follows an MTT-led conversation:

1. What we heard
2. Future-state experience
3. Relevant Microsoft capabilities
4. Evidence requiring review
5. A focused proof-of-concept discussion

Use this development loop throughout the lab:

**Describe → Generate → Run → Inspect → Refine → Share**

## Customer-data guardrails

Use only fictional, sanitized, or customer-approved information.

Do not include:

- Confidential customer information
- Personal or sensitive data
- Unapproved customer quotations
- Invented statistics or outcomes
- Unsupported Microsoft product claims
- Fabricated source URLs

Treat Copilot output as a draft. You remain responsible for reviewing the
content, claims, code, and final customer experience.

---

## Checkpoint 1: Preview the starter

Open the VS Code terminal and run:

```bash
npm run dev
```

The application uses port `5173`. Codespaces should open the preview
automatically.

If it does not:

1. Select the **Ports** tab in the bottom panel.
2. Find port `5173`.
3. Select the globe or **Open in Browser** icon.

Explore the Contoso Bank starter and test:

- Presenter navigation
- What we heard
- Future-state journey
- Expandable capabilities
- Evidence notice
- POC button

Keep the development server running.

**Checkpoint:** You can view the Contoso Bank demo and use its interactions.

---

## Checkpoint 2: Explore the project with Copilot CLI

Open a second terminal by selecting the **+** icon in the Terminal panel.

Check whether Copilot CLI is available:

```bash
copilot --version
```

If the command is not found, install it inside the Codespace:

```bash
npm install -g @github/copilot
```

Then start Copilot CLI:

```bash
copilot
```

If prompted, follow the sign-in instructions using the same GitHub account that
has access to GitHub Copilot.

Ask:

```text
Explain this project to a new developer. Focus on how the selected customer
content flows from src/content/demo.js through src/main.js and into the
standalone HTML export. Do not change any files.
```

Review the explanation and identify these responsibilities:

- `starter/` contains customer briefs.
- `src/content/` contains structured demo content.
- `src/content/demo.js` selects the active customer.
- `src/main.js` renders the shared experience.
- `src/styles.css` provides the shared responsive design.
- `npm run export` creates the downloadable HTML file.

Exit Copilot CLI when finished:

```text
/exit
```

If `/exit` is unavailable, press `Ctrl+C`.

**Checkpoint:** You can explain the difference between customer content and the
shared application.

---

## Checkpoint 3: Create a customer brief

Choose a fictional customer name that is different from the supplied examples.

The repository already includes:

- Contoso Bank
- Fabrikam Manufacturing
- Adatum Retail

Copy the blank template. This example creates a fictional Northwind Retail
brief:

```bash
cp starter/customer-brief-template.md starter/northwind-retail.md
```

If you choose another customer, replace `northwind-retail` with a lowercase,
hyphenated filename.

Open the new brief in the Explorer and replace every `[Complete this]`
placeholder.

At minimum, define:

- Customer and industry
- Intended audience
- Business challenge
- Exactly three priorities
- Current and future-state journey
- Three or four Microsoft capabilities
- Evidence status
- POC scope and participants
- Validation measures
- Visual direction

Use `To be confirmed` when information or evidence has not been approved.

Before continuing, review the checklist at the bottom of the brief.

**Checkpoint:** Your brief contains a coherent customer story without
unsupported claims.

---

## Checkpoint 4: Generate the customer demo

Open GitHub Copilot Chat in VS Code.

1. Set the mode to **Agent**.
2. Type `/`.
3. Select **Create Customer Demo**.
4. Provide the path to your completed brief.

For the Northwind example, use:

```text
starter/northwind-retail.md
```

The prompt instructs Copilot to:

- Read the completed brief.
- Use the existing content files as its schema.
- Create one new customer content file.
- Update `src/content/demo.js`.
- Preserve the shared renderer and styles.
- Run the build and export checks.
- Report missing evidence or information.

Review Copilot's proposed changes before accepting them.

Expected changes for the Northwind example:

```text
src/content/northwind-retail.js
src/content/demo.js
```

Do not accept changes to these shared files during generation:

```text
src/main.js
src/styles.css
index.html
package.json
vite.export.config.js
```

If Copilot proposes shared-file changes, ask it to stop and follow the editing
boundaries in the prompt.

**Checkpoint:** A new customer content file exists and `demo.js` selects it.

---

## Checkpoint 5: Inspect the generated experience

Return to the browser preview. Vite should update it automatically.

Confirm that the experience includes:

- The correct customer name
- Exactly three customer priorities
- A three-step future-state journey
- Three or four relevant capabilities
- Working expandable capability sections
- A visible evidence-review warning
- A focused POC discussion
- The intended customer colors and tone

Check the browser at both desktop and narrow widths.

Ask these review questions:

- Does the experience sound like a customer conversation?
- Does it reflect the brief accurately?
- Are Microsoft products connected to customer priorities?
- Are proposed outcomes written as possibilities rather than guarantees?
- Are missing claims or sources clearly marked for review?
- Is any content generic, repetitive, or overly promotional?

**Checkpoint:** The generated experience is accurate, coherent, and usable.

---

## Checkpoint 6: Refine with focused prompts

Use Agent mode to make one focused improvement at a time.

Example content-refinement prompt:

```text
Review src/content/northwind-retail.js against
starter/northwind-retail.md. Improve the customer-centered narrative without
changing the schema or any shared files. Preserve all evidence warnings and do
not invent claims, metrics, product capabilities, or URLs.
```

Example presentation-refinement prompt:

```text
Review the customer priorities and future-state journey in
src/content/northwind-retail.js. Make the narrative more concise and easier for
an MTT to present aloud. Change only that customer content file.
```

Example POC-refinement prompt:

```text
Strengthen the POC discussion in src/content/northwind-retail.js so it defines
one focused scenario, appropriate participants, observable validation measures,
and a concrete next action. Do not add promised outcomes or percentages.
```

After each change:

1. Read the proposed diff.
2. Accept only relevant edits.
3. Refresh and inspect the preview.
4. Keep or revise the result.

**Checkpoint:** You have completed at least one inspect-and-refine cycle.

---

## Checkpoint 7: Validate the application

Stop the development server with `Ctrl+C`, or open another terminal.

Run the production build:

```bash
npm run build
```

Then create the standalone file:

```bash
npm run export
```

Both commands must finish without errors.

The export command creates:

```text
output/customer-demo.html
```

The `output/` directory is intentionally ignored by Git because it contains a
generated deliverable.

**Checkpoint:** The build succeeds and `customer-demo.html` exists.

---

## Checkpoint 8: Download and test the deliverable

In the VS Code Explorer:

1. Expand `output`.
2. Right-click `customer-demo.html`.
3. Select **Download**.
4. Open the downloaded file in a browser.

Test the downloaded file independently from Codespaces:

- Confirm the customer name and content.
- Use every navigation link.
- Expand every capability.
- Select the POC button.
- Resize the browser window.
- Confirm the page does not require a server or internet connection to render.

Do not share the file externally until the account team has reviewed its
customer information, Microsoft claims, evidence, links, and proposed outcomes.

**Checkpoint:** The downloaded standalone HTML file works in a browser.

---

## Checkpoint 9: Save your source work

Check which files changed:

```bash
git status
```

Stage the completed brief, generated content file, and demo selector.

For the Northwind example:

```bash
git add starter/northwind-retail.md src/content/northwind-retail.js src/content/demo.js
```

Commit the source files:

```bash
git commit -m "Add Northwind Retail customer demo"
```

Push the commit:

```bash
git push
```

Do not add `output/customer-demo.html`. Anyone using the source can regenerate
it with `npm run export`.

**Checkpoint:** Your reusable source files are saved in GitHub.

---

## Continue after the workshop

For another customer:

1. Create a new branch or repository.
2. Copy `starter/customer-brief-template.md`.
3. Complete the brief with approved information.
4. Run `/create-customer-demo` in Agent mode.
5. Inspect and refine the generated experience.
6. Run `npm run build`.
7. Run `npm run export`.
8. Download and review `output/customer-demo.html`.
9. Obtain the required customer, account-team, legal, privacy, security, and
   accessibility reviews before external use.

Keep customer-specific work in the brief and its matching content file. Change
the shared renderer only when you intentionally want to improve the experience
for every customer.

## Troubleshooting

### Port 5173 is already in use

Stop the earlier development server with `Ctrl+C`, then run:

```bash
npm run dev
```

### Copilot CLI is not found

Run:

```bash
npm install -g @github/copilot
```

Then verify:

```bash
copilot --version
```

### The prompt does not appear

Confirm the file exists at:

```text
.github/prompts/create-customer-demo.prompt.md
```

Then reload VS Code and type `/` in Copilot Chat again.

### The wrong customer appears

Open `src/content/demo.js` and confirm it imports your customer content file as
`selectedDemo`.

### The build fails after generation

Read the first error in the terminal. Ask Agent mode to fix only the new customer
content file and `src/content/demo.js`, then rerun:

```bash
npm run build
```

### The export file is missing

Run:

```bash
npm run export
```

Then look for:

```text
output/customer-demo.html
```

## Completion checklist

- [ ] I previewed the starter experience.
- [ ] I used Copilot CLI to understand the project.
- [ ] I completed a fictional or approved customer brief.
- [ ] I generated a customer-specific content file.
- [ ] I reviewed Copilot's changes.
- [ ] I completed at least one refinement cycle.
- [ ] I ran the build successfully.
- [ ] I exported and downloaded the standalone HTML file.
- [ ] I tested the downloaded file.
- [ ] I understand that evidence and claims require human review.