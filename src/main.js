import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="hero">
    <div class="hero-content">
      <p class="eyebrow">Fabrikam Manufacturing operations conversation</p>
      <h1>Connect knowledge, service, and operational context</h1>
      <p class="summary">
        Explore how Fabrikam could help plant and field-service teams find approved
        guidance, coordinate work, and make informed operational decisions.
      </p>
      <div class="hero-actions">
        <button id="explore" type="button">What we heard</button>
        <button id="jump-to-poc" class="button-secondary" type="button">
          Begin POC planning
        </button>
      </div>
    </div>
    <aside class="conversation-note" aria-label="Conversation purpose">
      <span>Today&rsquo;s conversation</span>
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
    <p class="summary">
      Based on the customer brief, these are our starting discussion points. We would like
      to test the language, relative importance, and scope with your team.
    </p>
    <div class="priority-grid">
      <article>
        <span class="item-number" aria-hidden="true">01</span>
          <h3>Find approved guidance more easily</h3>
          <p>Discuss where frontline teams spend time locating maintenance history, operating procedures, and approved troubleshooting guidance.</p>
      </article>
      <article>
        <span class="item-number" aria-hidden="true">02</span>
        <h3>Improve cross-team handoffs</h3>
        <p>Explore where context is lost between plant operations, engineering, and the distributed field-service workforce.</p>
      </article>
      <article>
        <span class="item-number" aria-hidden="true">03</span>
        <h3>Identify operational issues earlier</h3>
        <p>Clarify which service and operational signals could help teams recognize recurring issues and make more consistent decisions.</p>
      </article>
    </div>
  </section>

  <section id="future-state" class="section-band" aria-labelledby="future-state-title">
    <div class="section-band-inner">
      <p class="section-kicker">02 / Future-state operational experience</p>
      <h2 id="future-state-title">From fragmented information to coordinated action</h2>
      <p class="section-intro">A simple journey for discussion, subject to confirmation through discovery and validation.</p>
      <div class="journey" aria-label="Illustrative before-and-after maintenance and service journey">
        <article class="journey-step journey-current">
          <p class="journey-label">Current challenge</p>
          <h3>Maintenance context is spread across sources</h3>
          <p>A frontline team member searches for equipment history, procedures, and troubleshooting guidance while production support is needed.</p>
        </article>
        <div class="journey-arrow" aria-hidden="true">&#8594;</div>
        <article class="journey-step">
          <p class="journey-label">Improved team experience</p>
          <h3>Approved guidance and equipment context in the flow of work</h3>
          <p>The team member can review available history, find approved procedures, and coordinate the next action with engineering or field service.</p>
        </article>
        <div class="journey-arrow" aria-hidden="true">&#8594;</div>
        <article class="journey-step journey-result">
          <p class="journey-label">Resulting operational experience</p>
          <h3>A clearer, more consistent handoff</h3>
          <p>Plant, engineering, and field-service teams share relevant context and can support production and customer needs with better continuity.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="capabilities" aria-labelledby="capabilities-title">
    <p class="section-kicker">03 / How Microsoft can help</p>
    <h2 id="capabilities-title">Capabilities mapped to the conversation</h2>
    <p class="section-intro">
      Expand each area to discuss its purpose, a relevant scenario, and the customer priority it may support.
    </p>
    <div class="capability-list">
      <div class="capability-item">
        <h3>
          <button class="capability-toggle" type="button" aria-expanded="false" aria-controls="capability-service">
            <span>Connect work orders and field service</span>
            <span class="capability-icon" aria-hidden="true"></span>
          </button>
        </h3>
        <div id="capability-service" class="capability-content" hidden>
          <p class="solution-name">Dynamics 365 Field Service</p>
          <dl>
            <div><dt>Business purpose</dt><dd>Coordinate service work, resources, assets, and work-order information across the service process.</dd></div>
            <div><dt>Relevant scenario</dt><dd>A plant issue creates a work order with available equipment context for assignment to the appropriate field-service resource.</dd></div>
            <div><dt>Priority connection</dt><dd>Supports the discussion about clearer handoffs between plant operations, engineering, and field service.</dd></div>
          </dl>
        </div>
      </div>
      <div class="capability-item">
        <h3>
          <button class="capability-toggle" type="button" aria-expanded="false" aria-controls="capability-copilot">
            <span>Assist teams with service knowledge and summaries</span>
            <span class="capability-icon" aria-hidden="true"></span>
          </button>
        </h3>
        <div id="capability-copilot" class="capability-content" hidden>
          <p class="solution-name">Copilot in Dynamics 365 Field Service</p>
          <dl>
            <div><dt>Business purpose</dt><dd>Assist service teams with reviewing work-order information and preparing service updates while retaining human review.</dd></div>
            <div><dt>Relevant scenario</dt><dd>A field-service team member reviews available work-order context and prepares a summary for the next handoff.</dd></div>
            <div><dt>Priority connection</dt><dd>Supports the discussion about access to relevant equipment context and more consistent service handoffs.</dd></div>
          </dl>
        </div>
      </div>
      <div class="capability-item">
        <h3>
          <button class="capability-toggle" type="button" aria-expanded="false" aria-controls="capability-studio">
            <span>Create governed frontline conversations</span>
            <span class="capability-icon" aria-hidden="true"></span>
          </button>
        </h3>
        <div id="capability-studio" class="capability-content" hidden>
          <p class="solution-name">Microsoft Copilot Studio</p>
          <dl>
            <div><dt>Business purpose</dt><dd>Create and govern conversational experiences grounded in approved procedures, knowledge, and escalation paths.</dd></div>
            <div><dt>Relevant scenario</dt><dd>A frontline team member asks for approved troubleshooting guidance and is directed to engineering when escalation is required.</dd></div>
            <div><dt>Priority connection</dt><dd>Supports the discussion about finding approved maintenance and troubleshooting guidance.</dd></div>
          </dl>
        </div>
      </div>
      <div class="capability-item">
        <h3>
          <button class="capability-toggle" type="button" aria-expanded="false" aria-controls="capability-insights">
            <span>Unify service and operational insights</span>
            <span class="capability-icon" aria-hidden="true"></span>
          </button>
        </h3>
        <div id="capability-insights" class="capability-content" hidden>
          <p class="solution-name">Microsoft Fabric and Power BI</p>
          <dl>
            <div><dt>Business purpose</dt><dd>Bring governed service and operational data together for analysis and decision support.</dd></div>
            <div><dt>Relevant scenario</dt><dd>Operations leaders review recurring equipment issues and service demand across available plant and service data.</dd></div>
            <div><dt>Priority connection</dt><dd>Supports the discussion about identifying issues earlier and making more consistent, data-informed decisions.</dd></div>
          </dl>
        </div>
      </div>
    </div>
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
    <p class="section-kicker">05 / Four-week POC discussion</p>
    <div class="poc-heading">
      <h2 id="poc-title">Define a focused validation together</h2>
      <p>This is an indicative starting point. The scope must be confirmed with the account team and customer.</p>
    </div>
    <div class="planning-grid">
      <article>
        <p class="planning-label">Indicative scope</p>
        <h3>One plant, process, or equipment scenario</h3>
        <p>Select a representative maintenance or service process, required data, approved knowledge, and clear boundaries for a four-week evaluation.</p>
      </article>
      <article>
        <p class="planning-label">Proposed participants</p>
        <h3>A cross-functional working team</h3>
        <p>Identify plant operations, engineering, field-service, customer-service, technology, security, and data stakeholders relevant to the scenario.</p>
      </article>
      <article>
        <p class="planning-label">Validation measures</p>
        <h3>Observable operational signals</h3>
        <p>Agree how to assess access to approved guidance, handoff consistency, information relevance, team confidence, and operational fit.</p>
      </article>
      <article>
        <p class="planning-label">Next action</p>
        <h3>Confirm the planning workshop</h3>
        <p>Schedule time with the account team and customer to confirm the scenario, owners, evidence requirements, and review checkpoints.</p>
      </article>
    </div>
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
  document.querySelector("#what-we-heard").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector("#jump-to-poc").addEventListener("click", () => {
  document.querySelector("#poc").scrollIntoView({
    behavior: "smooth"
  });
});
