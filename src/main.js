import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="hero">
    <p class="eyebrow">Contoso Bank customer-service briefing</p>
    <h1>Transforming customer support across every banking channel</h1>
    <p class="summary">
      Contoso Bank is focused on reducing wait times and improving service consistency
      across phone, chat, and online banking with a trustworthy, modern approach.
    </p>
    <div class="hero-actions">
      <button id="explore" type="button">Explore scenarios</button>
      <button id="jump-to-poc" class="button-secondary" type="button">
        Start four-week proof of concept
      </button>
    </div>
  </header>

  <section id="scenarios" aria-labelledby="priorities-title">
    <p class="section-kicker">Focus areas</p>
    <h2 id="priorities-title">Business priorities</h2>
    <p class="section-intro">
      Three priorities define the customer-service transformation roadmap.
    </p>
    <div class="scenario-grid">
      <article>
        <h3>Reduce customer-service wait times</h3>
        <p>Shorten queue times and resolve requests faster for customers.</p>
      </article>
      <article>
        <h3>Accelerate agent access to trusted information</h3>
        <p>Help service teams find accurate answers quickly during live interactions.</p>
      </article>
      <article>
        <h3>Deliver consistent, personalized support</h3>
        <p>Provide a reliable customer experience across every channel.</p>
      </article>
    </div>
  </section>

  <section id="capabilities" aria-labelledby="capabilities-title">
    <p class="section-kicker">Plan</p>
    <h2 id="capabilities-title">Proposed capabilities</h2>
    <ul class="feature-list">
      <li>AI-assisted customer service workflows for faster resolution paths</li>
      <li>Automated case summaries to reduce manual wrap-up time</li>
      <li>A trusted knowledge assistant for agents across channels</li>
      <li>Customer-service analytics for trend and performance visibility</li>
    </ul>
  </section>

  <section id="outcomes" aria-labelledby="outcomes-title">
    <p class="section-kicker">Impact</p>
    <h2 id="outcomes-title">Expected outcomes</h2>
    <div class="outcomes-grid">
      <article>
        <h3>25% lower average handling time</h3>
        <p>Drive faster resolution and lower service friction at scale.</p>
      </article>
      <article>
        <h3>Faster agent onboarding</h3>
        <p>Help new and existing agents become productive more quickly.</p>
      </article>
      <article>
        <h3>Higher customer satisfaction</h3>
        <p>Improve trust and retention through responsive, dependable service.</p>
      </article>
      <article>
        <h3>More consistent responses</h3>
        <p>Reduce variation and improve quality across support channels.</p>
      </article>
    </div>
  </section>

  <section id="proof-of-concept" class="cta" aria-labelledby="poc-title">
    <p class="section-kicker">Next step</p>
    <h2 id="poc-title">Launch a four-week proof of concept</h2>
    <p>
      Align customer-service and digital banking teams on a focused pilot to validate
      value, speed, and operational readiness.
    </p>
    <button type="button" id="poc-button">Begin POC planning</button>
  </section>
`;

document.querySelector("#explore").addEventListener("click", () => {
  document.querySelector("#scenarios").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector("#jump-to-poc").addEventListener("click", () => {
  document.querySelector("#proof-of-concept").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector("#poc-button").addEventListener("click", () => {
  document.querySelector("#proof-of-concept").scrollIntoView({
    behavior: "smooth"
  });
});
