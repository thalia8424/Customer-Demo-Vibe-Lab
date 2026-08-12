export const fabrikamManufacturing = {
  documentTitle: "Fabrikam Manufacturing operations conversation",
  theme: { primary: "#063970", accent: "#c55412", accentLight: "#f59a3d" },
  hero: {
    eyebrow: "Fabrikam Manufacturing operations conversation",
    title: "Connect knowledge, service, and operational context",
    summary: "Explore how Fabrikam could help plant and field-service teams find approved guidance, coordinate work, and make informed operational decisions."
  },
  priorities: [
    { title: "Find approved guidance more easily", description: "Discuss where frontline teams spend time locating maintenance history, operating procedures, and approved troubleshooting guidance." },
    { title: "Improve cross-team handoffs", description: "Explore where context is lost between plant operations, engineering, and the distributed field-service workforce." },
    { title: "Identify operational issues earlier", description: "Clarify which service and operational signals could help teams recognize recurring issues and make more consistent decisions." }
  ],
  futureState: {
    kicker: "02 / Future-state operational experience",
    title: "From fragmented information to coordinated action",
    ariaLabel: "Illustrative before-and-after maintenance and service journey",
    steps: [
      { label: "Current challenge", title: "Maintenance context is spread across sources", description: "A frontline team member searches for equipment history, procedures, and troubleshooting guidance while production support is needed." },
      { label: "Improved team experience", title: "Approved guidance and equipment context in the flow of work", description: "The team member can review available history, find approved procedures, and coordinate the next action with engineering or field service." },
      { label: "Resulting operational experience", title: "A clearer, more consistent handoff", description: "Plant, engineering, and field-service teams share relevant context and can support production and customer needs with better continuity." }
    ]
  },
  capabilities: [
    {
      id: "service",
      title: "Connect work orders and field service",
      solution: "Dynamics 365 Field Service",
      purpose: "Coordinate service work, resources, assets, and work-order information across the service process.",
      scenario: "A plant issue creates a work order with available equipment context for assignment to the appropriate field-service resource.",
      priority: "Supports the discussion about clearer handoffs between plant operations, engineering, and field service."
    },
    {
      id: "copilot",
      title: "Assist teams with service knowledge and summaries",
      solution: "Copilot in Dynamics 365 Field Service",
      purpose: "Assist service teams with reviewing work-order information and preparing service updates while retaining human review.",
      scenario: "A field-service team member reviews available work-order context and prepares a summary for the next handoff.",
      priority: "Supports the discussion about access to relevant equipment context and more consistent service handoffs."
    },
    {
      id: "studio",
      title: "Create governed frontline conversations",
      solution: "Microsoft Copilot Studio",
      purpose: "Create and govern conversational experiences grounded in approved procedures, knowledge, and escalation paths.",
      scenario: "A frontline team member asks for approved troubleshooting guidance and is directed to engineering when escalation is required.",
      priority: "Supports the discussion about finding approved maintenance and troubleshooting guidance."
    },
    {
      id: "insights",
      title: "Unify service and operational insights",
      solution: "Microsoft Fabric and Power BI",
      purpose: "Bring governed service and operational data together for analysis and decision support.",
      scenario: "Operations leaders review recurring equipment issues and service demand across available plant and service data.",
      priority: "Supports the discussion about identifying issues earlier and making more consistent, data-informed decisions."
    }
  ],
  poc: {
    kicker: "05 / Four-week POC discussion",
    title: "Define a focused validation together",
    introduction: "This is an indicative starting point. The scope must be confirmed with the account team and customer.",
    items: [
      { label: "Indicative scope", title: "One plant, process, or equipment scenario", description: "Select a representative maintenance or service process, required data, approved knowledge, and clear boundaries for a four-week evaluation." },
      { label: "Proposed participants", title: "A cross-functional working team", description: "Identify plant operations, engineering, field-service, customer-service, technology, security, and data stakeholders relevant to the scenario." },
      { label: "Validation measures", title: "Observable operational signals", description: "Agree how to assess access to approved guidance, handoff consistency, information relevance, team confidence, and operational fit." },
      { label: "Next action", title: "Confirm the planning workshop", description: "Schedule time with the account team and customer to confirm the scenario, owners, evidence requirements, and review checkpoints." }
    ]
  }
};