export const adatumRetail = {
  documentTitle: "Adatum Retail connected-shopping conversation",
  theme: { primary: "#173F35", accent: "#C74634", accentLight: "#F2B8A8" },
  hero: {
    eyebrow: "Adatum Retail connected-shopping conversation",
    title: "Create a more connected shopping experience",
    summary: "Explore how Adatum Retail could connect digital, service, and in-store moments while helping employees respond with relevant information and consistent guidance."
  },
  priorities: [
    { title: "Create continuity across shopping channels", description: "Explore how customers could move between digital, service, and in-store experiences without unnecessarily repeating information or restarting their journey." },
    { title: "Help employees find trusted information faster", description: "Discuss how associates and service representatives could access approved product, order, policy, and customer information in the flow of work." },
    { title: "Deliver relevant experiences with appropriate governance", description: "Clarify how permitted customer signals could support useful engagement while respecting consent, security, privacy, and data-retention policies." }
  ],
  futureState: {
    kicker: "02 / Future-state retail experience",
    title: "From fragmented context to a connected retail conversation",
    ariaLabel: "Illustrative connected shopping and assistance journey",
    steps: [
      { label: "Current challenge", title: "Customer context can become fragmented across channels", description: "A customer begins shopping online, contacts customer service, and later visits a store. Each interaction may rely on different information, requiring the journey to be reconstructed." },
      { label: "Improved employee experience", title: "Relevant context and approved guidance in the flow of work", description: "An associate or representative can review available order and interaction context, locate approved product and policy information, and determine the next action under established business rules." },
      { label: "Resulting customer experience", title: "A more coherent retail conversation", description: "The customer could receive clearer, more consistent assistance across supported channels while employees retain review and decision authority." }
    ]
  },
  capabilities: [
    {
      id: "commerce",
      title: "Connect digital and in-store commerce",
      solution: "Dynamics 365 Commerce",
      purpose: "Support connected commerce experiences across digital and physical channels while providing employees with relevant product, customer, and order information according to their roles.",
      scenario: "A customer starts an order online and visits a store for assistance. An authorized associate reviews available order context and helps determine an appropriate fulfillment option.",
      priority: "Supports greater continuity across shopping channels. Approved source URL: To be confirmed with the Microsoft account team."
    },
    {
      id: "insights",
      title: "Build a governed view of customer context",
      solution: "Dynamics 365 Customer Insights",
      purpose: "Bring permitted customer and interaction data together under Adatum Retail's consent, privacy, and data-governance policies.",
      scenario: "Authorized teams use available profile, purchase, preference, and interaction signals to understand a customer's recent journey before preparing an engagement.",
      priority: "Supports relevant experiences with appropriate governance. Approved source URL: To be confirmed with the Microsoft account team."
    },
    {
      id: "studio",
      title: "Provide guided self-service for common requests",
      solution: "Microsoft Copilot Studio",
      purpose: "Create and govern conversational experiences grounded in approved retail content, business rules, and defined escalation paths.",
      scenario: "A customer asks about an order, return policy, or product availability through a supported digital channel and receives approved guidance or direction to an employee when appropriate.",
      priority: "Supports faster access to consistent information across channels. Approved source URL: To be confirmed with the Microsoft account team."
    },
    {
      id: "service",
      title: "Support representatives during retail interactions",
      solution: "Copilot in Dynamics 365 Customer Service",
      purpose: "Assist representatives with finding approved knowledge, summarizing available context, and drafting responses that remain subject to human review.",
      scenario: "A representative reviews an order question, asks for relevant approved guidance, and edits a suggested response before sending it.",
      priority: "Supports faster access to trusted information. Approved source URL: To be confirmed with the Microsoft account team."
    }
  ],
  poc: {
    kicker: "05 / Four-week POC discussion",
    title: "Validate one connected assistance scenario",
    introduction: "This is an indicative starting point. Scope, data, approved evidence, success criteria, and review checkpoints must be confirmed with Adatum Retail and the account team.",
    items: [
      { label: "Indicative scope", title: "One connected customer-assistance scenario", description: "Begin with an online order or product inquiry and continue through customer service or a selected store, with agreed channels, data, knowledge, roles, escalations, and integration boundaries." },
      { label: "Proposed participants", title: "A cross-functional retail team", description: "Include retail operations, store, service, commerce, customer-experience, technology, data, security, privacy, compliance, and accessibility representatives." },
      { label: "Validation measures", title: "Observable experience and control signals", description: "Assess access to approved information, guidance consistency, employee review authority, role-based access, cross-channel continuity, and workflow practicality. These are evaluation criteria, not promised results." },
      { label: "Next action", title: "Schedule the planning workshop", description: "Confirm the scenario, participating store or team, owners, data requirements, approved evidence, success criteria, and review checkpoints with Adatum Retail and the account team." }
    ]
  }
};