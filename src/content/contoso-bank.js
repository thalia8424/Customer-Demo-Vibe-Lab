export const contosoBank = {
  documentTitle: "Contoso Bank customer-service conversation",
  theme: { primary: "#063970", accent: "#087e8b", accentLight: "#59d2dc" },
  hero: {
    eyebrow: "Contoso Bank customer-service conversation",
    title: "Shape a more connected service experience",
    summary: "Explore how Contoso Bank could help customer-service representatives respond with relevant context and consistent guidance across supported channels."
  },
  priorities: [
    { title: "Reduce time spent waiting for service", description: "Discuss where customers encounter delays across phone, chat, and online banking, and which moments matter most." },
    { title: "Find trusted information more easily", description: "Explore when customer-service representatives need better access to approved information during an interaction." },
    { title: "Create consistent, personalized support", description: "Clarify what a connected experience should feel like when customers move between service channels." }
  ],
  futureState: {
    kicker: "02 / Future-state service experience",
    title: "From fragmented interactions to connected service",
    ariaLabel: "Illustrative before-and-after service journey",
    steps: [
      { label: "Current challenge", title: "Context can be difficult to carry across channels", description: "A customer may repeat information while a representative searches across sources for the right guidance." },
      { label: "Improved representative experience", title: "Relevant context and guidance in the flow of work", description: "The representative can review available history, find approved knowledge, and prepare a response with human judgment." },
      { label: "Resulting customer experience", title: "A more coherent service conversation", description: "The customer receives support informed by available context, with clearer continuity between supported channels." }
    ]
  },
  capabilities: [
    {
      id: "service",
      title: "Unify customer-service case management",
      solution: "Dynamics 365 Customer Service",
      purpose: "Provide a shared workspace for managing cases, interactions, and relevant customer information across supported channels.",
      scenario: "A representative reviews a customer's case and prior interactions before continuing a service conversation.",
      priority: "Supports the discussion about consistent service and better continuity between channels."
    },
    {
      id: "copilot",
      title: "Support representatives during service interactions",
      solution: "Copilot in Dynamics 365 Customer Service",
      purpose: "Assist representatives with finding knowledge, drafting responses, and summarizing conversations while retaining human review.",
      scenario: "A representative asks for relevant approved knowledge and reviews a suggested response during a live interaction.",
      priority: "Supports the discussion about faster access to trusted information."
    },
    {
      id: "studio",
      title: "Design guided self-service experiences",
      solution: "Microsoft Copilot Studio",
      purpose: "Create and govern conversational self-service experiences grounded in approved content and escalation paths.",
      scenario: "A customer uses a digital channel for a common request and is directed to a representative when human support is appropriate.",
      priority: "Supports the discussion about wait times and consistent guidance across channels."
    },
    {
      id: "insights",
      title: "Build a more complete customer view",
      solution: "Dynamics 365 Customer Insights",
      purpose: "Bring permitted customer data together to inform customer understanding and relevant experiences under the bank's data policies.",
      scenario: "Available profile and interaction data helps the service team understand context before engaging the customer.",
      priority: "Supports the discussion about personalized support and cross-channel continuity."
    }
  ],
  poc: {
    kicker: "05 / Four-week POC discussion",
    title: "Define a focused validation together",
    introduction: "This is an indicative starting point. The scope must be confirmed with the account team and customer.",
    items: [
      { label: "Indicative scope", title: "One service scenario", description: "Select a representative scenario, the channels involved, required data, and clear boundaries for a four-week evaluation." },
      { label: "Proposed participants", title: "A cross-functional working team", description: "Identify customer-service representatives, service leaders, technology owners, security, compliance, and data stakeholders." },
      { label: "Validation measures", title: "Observable experience signals", description: "Agree how to assess usability, response consistency, information relevance, representative confidence, and operational fit." },
      { label: "Next action", title: "Confirm the planning workshop", description: "Schedule time with the account team and customer to confirm the scenario, owners, evidence requirements, and review checkpoints." }
    ]
  }
};