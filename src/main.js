import { demo } from "./content/demo.js";
import "./styles.css";

document.title = demo.documentTitle;
document.documentElement.style.setProperty("--color-primary", demo.theme.primary);
document.documentElement.style.setProperty("--color-accent", demo.theme.accent);
document.documentElement.style.setProperty("--color-accent-light", demo.theme.accentLight);

const renderPriorities = () => demo.priorities.map((priority, index) => `
  <article>
    <span class="item-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
    <h3>${priority.title}</h3>
    <p>${priority.description}</p>
  </article>
`).join("");

const renderJourney = () => demo.futureState.steps.map((step, index) => {
  const stepClass = index === 0
    ? " journey-current"
    : index === demo.futureState.steps.length - 1 ? " journey-result" : "";
  const arrow = index < demo.futureState.steps.length - 1
    ? '<div class="journey-arrow" aria-hidden="true">&#8594;</div>'
    : "";

  return `
    <article class="journey-step${stepClass}">
      <p class="journey-label">${step.label}</p>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    </article>
    ${arrow}
  `;
}).join("");

const renderCapabilities = () => demo.capabilities.map((capability) => `
  <div class="capability-item">
    <h3>
      <button class="capability-toggle" type="button" aria-expanded="false" aria-controls="capability-${capability.id}">
        <span>${capability.title}</span>
        <span class="capability-icon" aria-hidden="true"></span>
      </button>
    </h3>
    <div id="capability-${capability.id}" class="capability-content" hidden>
      <p class="solution-name">${capability.solution}</p>
      <dl>
        <div><dt>Business purpose</dt><dd>${capability.purpose}</dd></div>
        <div><dt>Relevant scenario</dt><dd>${capability.scenario}</dd></div>
        <div><dt>Priority connection</dt><dd>${capability.priority}</dd></div>
      </dl>
    </div>
  </div>
`).join("");

const renderPocItems = () => demo.poc.items.map((item) => `
  <article>
    <p class="planning-label">${item.label}</p>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </article>
`).join("");

document.querySelector("#app").innerHTML = `
  <header class="hero">
    <div class="hero-content">
      <p class="eyebrow">${demo.hero.eyebrow}</p>
      <h1>${demo.hero.title}</h1>
      <p class="summary">${demo.hero.summary}</p>
      <div class="hero-actions">
        <button id="explore" type="button">What we heard</button>
        <button id="jump-to-poc" class="button-secondary" type="button">Begin POC planning</button>
      </div>
    </div>
    <aside class="conversation-note" aria-label="Conversation purpose">
      <span>Today's conversation</span>
      <p>Confirm the priorities, explore a possible future state, and agree what would be useful to validate.</p>
    </aside>
  </header>

  <nav class="presenter-nav" aria-label="Presenter navigation">
    <div class="presenter-nav-inner">
      <span class="nav-label" aria-hidden="true">Conversation</span>
      <div class="nav-links">
        <a href="#what-we-heard">What we heard</a>
        <a href="#future-state">Future state</a>
        <a href="#capabilities">Microsoft capabilities</a>
        <a href="#evidence">Evidence</a>
        <a href="#poc">POC</a>
      </div>
    </div>
  </nav>

  <main>
    <section id="what-we-heard" aria-labelledby="priorities-title">
      <p class="section-kicker">01 / What we heard</p>
      <h2 id="priorities-title">Priorities to confirm together</h2>
      <p class="summary">Based on the customer brief, these are our starting discussion points. We would like to test the language, relative importance, and scope with your team.</p>
      <div class="priority-grid">${renderPriorities()}</div>
    </section>

    <section id="future-state" class="section-band" aria-labelledby="future-state-title">
      <div class="section-band-inner">
        <p class="section-kicker">${demo.futureState.kicker}</p>
        <h2 id="future-state-title">${demo.futureState.title}</h2>
        <p class="section-intro">A simple journey for discussion, subject to confirmation through discovery and validation.</p>
        <div class="journey" aria-label="${demo.futureState.ariaLabel}">${renderJourney()}</div>
      </div>
    </section>

    <section id="capabilities" aria-labelledby="capabilities-title">
      <p class="section-kicker">03 / How Microsoft can help</p>
      <h2 id="capabilities-title">Capabilities mapped to the conversation</h2>
      <p class="section-intro">Expand each area to discuss its purpose, a relevant scenario, and the customer priority it may support.</p>
      <div class="capability-list">${renderCapabilities()}</div>
    </section>

    <section id="evidence" class="section-band evidence" aria-labelledby="proof-points-title">
      <div class="section-band-inner evidence-inner">
        <div>
          <p class="section-kicker">04 / Evidence and validation</p>
          <h2 id="proof-points-title">Supporting proof points</h2>
          <p class="section-intro">Use this section to connect the proposed scenarios to evidence that has been reviewed for the specific conversation.</p>
        </div>
        <p class="proof-note"><strong>Required before external use</strong><span>Add reviewed Microsoft sources and approved customer evidence before use.</span></p>
      </div>
    </section>

    <section id="poc" class="poc-planning" aria-labelledby="poc-title" tabindex="-1">
      <p class="section-kicker">${demo.poc.kicker}</p>
      <div class="poc-heading">
        <h2 id="poc-title">${demo.poc.title}</h2>
        <p>${demo.poc.introduction}</p>
      </div>
      <div class="planning-grid">${renderPocItems()}</div>
    </section>
  </main>
`;

document.querySelectorAll(".capability-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = document.querySelector(`#${toggle.getAttribute("aria-controls")}`);
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isExpanded));
    content.hidden = isExpanded;
  });
});

document.querySelector("#explore").addEventListener("click", () => {
  document.querySelector("#what-we-heard").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#jump-to-poc").addEventListener("click", () => {
  document.querySelector("#poc").scrollIntoView({ behavior: "smooth" });
});
