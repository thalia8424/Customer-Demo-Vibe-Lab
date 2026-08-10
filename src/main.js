import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="hero">
    <p class="eyebrow">Customer briefing</p>
    <h1>Contoso Customer Demo</h1>
    <p class="summary">
      An interactive briefing ready to customize with GitHub Copilot.
    </p>
    <button id="explore">Explore scenarios</button>
  </header>

  <section id="scenarios">
    <h2>Business priorities</h2>
    <div class="scenario-grid">
      <article>
        <h3>Improve experiences</h3>
        <p>Give customers faster, more personalized service.</p>
      </article>
      <article>
        <h3>Increase efficiency</h3>
        <p>Help teams automate repetitive operational work.</p>
      </article>
      <article>
        <h3>Use trusted AI</h3>
        <p>Adopt AI with appropriate security and governance.</p>
      </article>
    </div>
  </section>
`;

document.querySelector("#explore").addEventListener("click", () => {
  document.querySelector("#scenarios").scrollIntoView({
    behavior: "smooth"
  });
});
