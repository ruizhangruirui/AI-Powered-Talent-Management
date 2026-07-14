const roles = {
  owner: {
    label: "Owner",
    scope: "All Research Center data and administration",
    businessUnits: "all",
    teams: "all",
    admin: true,
    canEditOrg: true,
    canEditTalentJudgment: true,
    canAddEmployees: true,
    canArchiveEmployees: true,
  },
  director: {
    label: "Research Center Director",
    scope: "Global read and review access",
    businessUnits: "all",
    teams: "all",
    admin: false,
    canEditOrg: false,
    canEditTalentJudgment: false,
    canAddEmployees: false,
    canArchiveEmployees: false,
  },
  labDirector: {
    label: "Lab Director / PLR",
    scope: "AI Platform Lab",
    businessUnits: ["AI Platform Lab"],
    teams: "all",
    admin: false,
    canEditOrg: false,
    canEditTalentJudgment: false,
    canAddEmployees: false,
    canArchiveEmployees: false,
  },
  teamLead: {
    label: "Team Lead",
    scope: "Agent Systems Team",
    businessUnits: ["AI Platform Lab"],
    teams: ["Agent Systems Team"],
    admin: false,
    canEditOrg: false,
    canEditTalentJudgment: false,
    canAddEmployees: false,
    canArchiveEmployees: false,
  },
  hrbp: {
    label: "HRBP",
    scope: "Agent Systems Team and Model Evaluation Team",
    businessUnits: ["AI Platform Lab"],
    teams: ["Agent Systems Team", "Model Evaluation Team"],
    admin: false,
    canEditOrg: false,
    canEditTalentJudgment: true,
    canAddEmployees: false,
    canArchiveEmployees: false,
  },
};

const navItems = [
  ["overview", "Overview", "Research Center summary, AI briefing and critical risks"],
  ["people", "People", "Directory, cards, tags, awards and capability indicators"],
  ["talent", "Talent & Development", "9-Box, actions, retention and promotion readiness"],
  ["capability", "Capability Intelligence", "Goal to capability to evidence to action workflow"],
  ["organization", "Organization", "Structure, annual plans and history"],
  ["culture", "Culture & Engagement", "Activities, sharing and collaboration"],
  ["administration", "Administration", "Owner-only configuration and governance"],
];

const organization = {
  centers: ["Advanced Systems Research Center"],
  businessUnits: [
    { name: "AI Platform Lab", type: "Research Lab", teams: ["Agent Systems Team", "Model Evaluation Team"] },
    { name: "Data Infrastructure Platform", type: "Platform", teams: ["Knowledge Systems Team", "Platform Reliability Team"] },
    { name: "Autonomous Research Team", type: "Independent Research Team", teams: [] },
  ],
};

const employees = [
  {
    id: "e1",
    number: "00128452",
    name: "Alice Chen",
    title: "Principal Research Engineer",
    level: "L6",
    unit: "AI Platform Lab",
    team: "Agent Systems Team",
    contract: "Employee",
    tenure: "4.2 years",
    tags: ["Technical Leader", "Key Position"],
    awards: ["Technical Breakthrough Award"],
    currentImpact: "High",
    growthPotential: "High",
    retentionRisk: "Medium",
    promotionReadiness: "Potentially Ready in 6-12 Months",
    openActions: 2,
    dependency: "Primary owner for Agent Architecture",
    nineBox: "High Impact / High Potential",
    capabilities: ["Agent Architecture", "LLM Engineering", "Tool Integration"],
    summary: "Alice is the confirmed primary expert for agent architecture and tool integration. Evidence shows strong cross-team technical impact, but backup coverage remains thin.",
  },
  {
    id: "e2",
    number: "00130988",
    name: "Charlie Singh",
    title: "Senior Software Engineer",
    level: "L5",
    unit: "AI Platform Lab",
    team: "Agent Systems Team",
    contract: "Employee",
    tenure: "2.1 years",
    tags: ["High Potential", "AI"],
    awards: ["Annual Innovation Award"],
    currentImpact: "Medium",
    growthPotential: "High",
    retentionRisk: "Low",
    promotionReadiness: "Evidence Needed",
    openActions: 1,
    dependency: "Developing backup for MCP Integration",
    nineBox: "Medium Impact / High Potential",
    capabilities: ["Python Services", "API Integration", "Agent Frameworks"],
    summary: "Charlie has strong adjacent skills and rapid learning signals. The system recommends a focused backup action for MCP Integration before confirming broader coverage.",
  },
  {
    id: "e3",
    number: "84011927",
    name: "Maya Novak",
    title: "Evaluation Scientist",
    level: "L5",
    unit: "AI Platform Lab",
    team: "Model Evaluation Team",
    contract: "Leased Labour",
    tenure: "1.4 years",
    tags: ["AI", "Outstanding Talent"],
    awards: [],
    currentImpact: "High",
    growthPotential: "Medium",
    retentionRisk: "High",
    promotionReadiness: "Not Applicable",
    openActions: 2,
    dependency: "Single-point risk for evaluation harness design",
    nineBox: "High Impact / Medium Potential",
    capabilities: ["LLM Evaluation", "Evaluation Framework", "Benchmark Design"],
    summary: "Maya provides high-impact evaluation expertise for active AI platform goals. Contract status and limited backup coverage create a retention-related dependency risk.",
  },
  {
    id: "e4",
    number: "00144820",
    name: "Jonas Meyer",
    title: "Research Data Engineer",
    level: "L4",
    unit: "Data Infrastructure Platform",
    team: "Knowledge Systems Team",
    contract: "Employee",
    tenure: "3.6 years",
    tags: ["Domain Knowledge"],
    awards: [],
    currentImpact: "Medium",
    growthPotential: "Medium",
    retentionRisk: "Low",
    promotionReadiness: "Not Ready",
    openActions: 0,
    dependency: "Secondary for retrieval pipelines",
    nineBox: "Medium Impact / Medium Potential",
    capabilities: ["Retrieval Pipelines", "Data Modeling", "Observability"],
    summary: "Jonas has confirmed retrieval and data modeling evidence, making him a candidate for cross-team support on RAG capability needs.",
  },
  {
    id: "e5",
    number: "50018429",
    name: "Lina Hoffmann",
    title: "Research Intern",
    level: "Intern",
    unit: "Autonomous Research Team",
    team: "",
    contract: "Intern",
    tenure: "0.7 years",
    tags: ["AI"],
    awards: [],
    currentImpact: "Emerging",
    growthPotential: "High",
    retentionRisk: "Low",
    promotionReadiness: "Not Applicable",
    openActions: 1,
    dependency: "Developing capability evidence",
    nineBox: "Emerging Impact / High Potential",
    capabilities: ["Prototype Evaluation", "Experiment Tracking"],
    summary: "Lina shows early evidence in prototype evaluation. More dated and validated evidence is needed before formal capability confirmation.",
  },
];

const capabilities = [
  {
    name: "Agent Architecture",
    category: "Technical",
    goal: "Build internal AI Agent Platform",
    target: "Expert",
    requiredPeople: "1 Primary, 2 Backup",
    coverage: [
      ["Alice Chen", "Expert", "Primary", "Strong", "Manager-confirmed"],
      ["Charlie Singh", "Basic", "Developing", "Moderate", "AI-inferred"],
    ],
    gap: "Backup Gap",
    severity: "High",
    recommendation: "Develop Charlie as Backup coverage through a 3-month project assignment with Alice as mentor.",
  },
  {
    name: "MCP Integration",
    category: "Platform",
    goal: "Build internal AI Agent Platform",
    target: "Working",
    requiredPeople: "1 Primary, 1 Backup",
    coverage: [["Charlie Singh", "Basic", "Developing", "Moderate", "AI-inferred"]],
    gap: "Future Gap",
    severity: "Medium",
    recommendation: "Create a Learning Action for Charlie and assign a prototype deliverable before Q4 platform review.",
  },
  {
    name: "LLM Evaluation",
    category: "Research",
    goal: "Create trusted agent evaluation framework",
    target: "Advanced",
    requiredPeople: "1 Primary, 1 Secondary, 1 Backup",
    coverage: [["Maya Novak", "Advanced", "Primary", "Strong", "Manager-confirmed"]],
    gap: "Single-Point Risk",
    severity: "High",
    recommendation: "Identify a secondary evaluator and start knowledge transfer from Maya within 30 days.",
  },
  {
    name: "AI Security",
    category: "Technical",
    goal: "Harden agent platform for internal research use",
    target: "Working",
    requiredPeople: "1 Primary, 1 Backup",
    coverage: [],
    gap: "No Coverage",
    severity: "High",
    recommendation: "Use cross-team support first, then open an external hiring request only if no internal candidate is confirmed.",
  },
];

const managerRecords = [
  ["Project contribution", "2026-05-18", "Agent orchestration refactor", "Alice led the decomposition of tool execution services and mentored two engineers."],
  ["Technical leadership", "2026-04-09", "Evaluation review", "Maya designed benchmark protocols and identified regression risks before release."],
  ["Management observation", "2026-03-22", "MCP prototype", "Charlie integrated three internal APIs and resolved auth handoff issues with limited support."],
];

const talentInsights = [
  ["Retention consideration", "2026-06-02", "HRBP", "Maya's evaluation expertise is critical and backup coverage is insufficient."],
  ["Development suggestion", "2026-05-27", "HRBP", "Charlie should receive a targeted MCP Integration learning action."],
  ["Promotion readiness evidence", "2026-04-30", "HRBP", "Alice needs more cross-lab leadership evidence before final promotion readiness confirmation."],
];

const annualGoals = [
  ["Build internal AI Agent Platform", "Agent Systems Team", "Future 1-2 year priority", "Needs architecture, tool integration, MCP integration and platform deployment coverage."],
  ["Create trusted agent evaluation framework", "Model Evaluation Team", "Major work", "Requires LLM evaluation, benchmark design, evidence quality and monitoring methods."],
  ["Harden agent platform for internal research use", "AI Platform Lab", "Strategic responsibility", "Requires AI security, access governance, observability and incident response readiness."],
];

const adminGroups = {
  Organization: ["Business Units & Teams", "Employee Transfers", "Organization History"],
  "People Operations": ["Bulk Import", "Bulk Archive", "Former Employees", "Data Export"],
  "Access & Governance": ["Leadership & Access", "HRBP Coverage", "Roles & Permissions", "Audit Log"],
  "Talent Configuration": ["Talent Tags", "Awards", "Talent Action Types", "Activity Types", "Capability Taxonomy", "Promotion Criteria"],
  System: ["Appearance", "Security", "Change Password", "System Preferences"],
};

const state = {
  page: "overview",
  role: "owner",
  selectedEmployee: "e1",
  talentTab: "Overview",
  adminSection: "Business Units & Teams",
  search: "",
};

const el = {
  nav: document.querySelector("#primaryNav"),
  roleSelect: document.querySelector("#roleSelect"),
  roleScope: document.querySelector("#roleScope"),
  centerFilter: document.querySelector("#centerFilter"),
  businessFilter: document.querySelector("#businessFilter"),
  teamFilter: document.querySelector("#teamFilter"),
  periodFilter: document.querySelector("#periodFilter"),
  scopeSummary: document.querySelector("#scopeSummary"),
  pageTitle: document.querySelector("#pageTitle"),
  pageSubtitle: document.querySelector("#pageSubtitle"),
  topbarActions: document.querySelector("#topbarActions"),
  content: document.querySelector("#contentArea"),
  drawer: document.querySelector("#drawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerTitle: document.querySelector("#drawerTitle"),
  drawerEyebrow: document.querySelector("#drawerEyebrow"),
  drawerBody: document.querySelector("#drawerBody"),
  closeDrawer: document.querySelector("#closeDrawer"),
  toast: document.querySelector("#toast"),
};

function currentRole() {
  return roles[state.role];
}

function allowedBusinessUnits() {
  const allowed = currentRole().businessUnits;
  if (allowed === "all") return organization.businessUnits.map((unit) => unit.name);
  return allowed;
}

function allowedTeamsFor(unitName) {
  const unit = organization.businessUnits.find((item) => item.name === unitName);
  const allTeams = unit ? unit.teams : [];
  const allowed = currentRole().teams;
  if (allowed === "all") return allTeams;
  return allTeams.filter((team) => allowed.includes(team));
}

function employeesInScope() {
  const role = currentRole();
  return employees.filter((employee) => {
    const unitOk = role.businessUnits === "all" || role.businessUnits.includes(employee.unit);
    const teamOk = role.teams === "all" || role.teams.includes(employee.team);
    const selectedUnit = el.businessFilter.value;
    const selectedTeam = el.teamFilter.value;
    const filterUnitOk = selectedUnit === "All permitted units" || employee.unit === selectedUnit;
    const filterTeamOk = selectedTeam === "All permitted teams" || employee.team === selectedTeam;
    return unitOk && teamOk && filterUnitOk && filterTeamOk;
  });
}

function setOptions(select, values, selectedValue) {
  select.innerHTML = values.map((value) => `<option>${value}</option>`).join("");
  if (values.includes(selectedValue)) select.value = selectedValue;
}

function init() {
  el.roleSelect.innerHTML = Object.entries(roles)
    .map(([key, role]) => `<option value="${key}">${role.label}</option>`)
    .join("");
  el.roleSelect.value = state.role;
  setOptions(el.centerFilter, organization.centers, organization.centers[0]);
  bindEvents();
  render();
}

function bindEvents() {
  el.roleSelect.addEventListener("change", () => {
    state.role = el.roleSelect.value;
    if (state.page === "administration" && !currentRole().admin) state.page = "overview";
    render();
  });
  el.businessFilter.addEventListener("change", () => {
    renderFilters(false);
    renderPage();
  });
  el.teamFilter.addEventListener("change", renderPage);
  el.periodFilter.addEventListener("change", renderPage);
  el.closeDrawer.addEventListener("click", closeDrawer);
  el.drawerBackdrop.addEventListener("click", closeDrawer);
}

function render() {
  renderNav();
  renderFilters(true);
  renderPage();
}

function renderNav() {
  const role = currentRole();
  el.roleScope.textContent = role.scope;
  el.nav.innerHTML = navItems
    .filter(([key]) => key !== "administration" || role.admin)
    .map(([key, label, description]) => {
      const active = state.page === key ? "active" : "";
      return `<button class="nav-button ${active}" data-page="${key}" title="${description}"><span>${navIcon(key)}</span>${label}</button>`;
    })
    .join("");
  el.nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.page = button.dataset.page;
      renderPage();
      renderNav();
    });
  });
}

function navIcon(key) {
  return {
    overview: "⌂",
    people: "◎",
    talent: "◇",
    capability: "▦",
    organization: "╬",
    culture: "✦",
    administration: "⚙",
  }[key];
}

function renderFilters(reset) {
  const units = ["All permitted units", ...allowedBusinessUnits()];
  const selectedUnit = reset || !units.includes(el.businessFilter.value) ? units[0] : el.businessFilter.value;
  setOptions(el.businessFilter, units, selectedUnit);
  const teamSource = selectedUnit === "All permitted units"
    ? allowedBusinessUnits().flatMap((unit) => allowedTeamsFor(unit))
    : allowedTeamsFor(selectedUnit);
  const teams = ["All permitted teams", ...teamSource];
  const selectedTeam = reset || !teams.includes(el.teamFilter.value) ? teams[0] : el.teamFilter.value;
  setOptions(el.teamFilter, teams, selectedTeam);
  updateScopeSummary();
}

function updateScopeSummary() {
  const parts = [el.centerFilter.value, el.businessFilter.value, el.teamFilter.value, el.periodFilter.value];
  el.scopeSummary.textContent = `Viewing: ${parts.filter(Boolean).join(" / ")}`;
}

function setHeader(title, subtitle, actions = "") {
  el.pageTitle.textContent = title;
  el.pageSubtitle.textContent = subtitle;
  el.topbarActions.innerHTML = actions;
  el.topbarActions.querySelectorAll("[data-toast]").forEach((button) => {
    button.addEventListener("click", () => showToast(button.dataset.toast));
  });
}

function renderPage() {
  updateScopeSummary();
  const pageMap = {
    overview: renderOverview,
    people: renderPeople,
    talent: renderTalent,
    capability: renderCapability,
    organization: renderOrganization,
    culture: renderCulture,
    administration: renderAdministration,
  };
  pageMap[state.page]();
}

function renderOverview() {
  const scoped = employeesInScope();
  setHeader(
    "Overview",
    "Research Center intelligence across capability demand, people coverage and talent actions.",
    `<button class="secondary-button" data-toast="AI briefing queued for the selected scope.">Regenerate briefing</button>
     <button class="primary-button" data-toast="Review queue opened.">Review AI outputs</button>`
  );
  el.content.innerHTML = `
    <div class="metric-grid">
      ${metric("Employees in scope", scoped.length, "Role and scope permissions applied")}
      ${metric("Critical capability gaps", capabilityCount(["No Coverage", "Single-Point Risk", "Backup Gap"]), "Explainable AI gap classifications")}
      ${metric("Open talent actions", scoped.reduce((sum, employee) => sum + employee.openActions, 0), "Linked to Talent Cards")}
      ${metric("AI outputs for review", 8, "Accepted only after human review")}
    </div>
    <div class="grid two">
      <article class="ai-panel">
        ${aiMeta("AI organizational briefing", "2026-07-14", "Jan 2026 - Jul 2026", "High", "Current")}
        <h2>Capability readiness needs attention in AI Platform Lab</h2>
        <p>The selected scope has strong primary experts for Agent Architecture and LLM Evaluation, but backup coverage is not mature enough for critical 2026 goals. The highest-risk dependency is evaluation harness design, where one specialist provides primary coverage.</p>
        <div class="button-row">
          <button class="secondary-button" data-drawer="briefing">View Evidence</button>
          <button class="primary-button" data-toast="AI briefing accepted as reviewed.">Accept</button>
          <button class="ghost-button" data-toast="AI briefing moved to edit mode.">Edit</button>
          <button class="ghost-button" data-toast="AI briefing dismissed.">Dismiss</button>
        </div>
      </article>
      <article class="card">
        <div class="section-header">
          <div>
            <h2>Critical Risks</h2>
            <p>Only professional evidence and organization records are used.</p>
          </div>
        </div>
        ${riskList()}
      </article>
    </div>
    <section>
      <div class="section-header">
        <div>
          <h2>Recommended Actions</h2>
          <p>Human approval is required before actions become confirmed records.</p>
        </div>
      </div>
      <div class="table-wrap">${recommendationTable()}</div>
    </section>
  `;
  bindDrawerButtons();
}

function metric(label, value, note) {
  return `<div class="metric"><strong>${value}</strong><span>${label}</span><p class="muted">${note}</p></div>`;
}

function capabilityCount(types) {
  return capabilities.filter((capability) => types.includes(capability.gap)).length;
}

function aiMeta(label, date, period, confidence, freshness) {
  return `
    <div class="ai-meta">
      <span class="badge ai">AI-generated</span>
      <span class="badge">${label}</span>
      <span class="badge">Generated ${date}</span>
      <span class="badge">${period}</span>
      <span class="badge">Confidence ${confidence}</span>
      <span class="badge blue">${freshness}</span>
    </div>
  `;
}

function riskList() {
  return capabilities
    .filter((capability) => capability.severity === "High")
    .map((capability) => `
      <div class="timeline-item">
        <h3>${capability.name} <span class="badge danger">${capability.gap}</span></h3>
        <p>${capability.recommendation}</p>
      </div>
    `)
    .join("");
}

function recommendationTable() {
  return `
    <table>
      <thead><tr><th>Recommendation</th><th>Source gap</th><th>Suggested owner</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${capabilities.map((capability) => `
          <tr>
            <td>${capability.recommendation}</td>
            <td><span class="badge ${capability.severity === "High" ? "danger" : "warning"}">${capability.gap}</span></td>
            <td>${capability.name === "LLM Evaluation" ? "HRBP + Team Lead" : "Team Lead"}</td>
            <td><span class="badge ai">AI Suggested</span></td>
            <td><button class="secondary-button" data-drawer="cap-${capability.name}">View Evidence</button></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderPeople() {
  const role = currentRole();
  setHeader(
    "People",
    "Directory with role-scoped access, talent tags, awards, 9-Box summary and capability indicators.",
    `${role.canAddEmployees ? '<button class="primary-button" data-toast="Add employee workflow opened.">Add employee</button>' : ""}`
  );
  const scoped = employeesInScope();
  el.content.innerHTML = `
    <section class="people-tools">
      <div>
        <label for="peopleSearch">Search employee number or name</label>
        <input id="peopleSearch" value="${state.search}" placeholder="Search people" />
      </div>
      <div><label>Contract type</label><select id="contractFilter"><option>All contracts</option><option>Employee</option><option>Leased Labour</option><option>Intern</option></select></div>
      <div><label>Talent tag</label><select id="tagFilter"><option>All tags</option><option>AI</option><option>High Potential</option><option>Key Position</option></select></div>
      <div><label>Open action</label><select id="actionFilter"><option>Any</option><option>Has open action</option><option>No open actions</option></select></div>
      <div><label>9-Box</label><select id="boxFilter"><option>All placements</option><option>High Impact / High Potential</option><option>Medium Impact / High Potential</option></select></div>
    </section>
    <section class="employee-grid" id="employeeGrid"></section>
  `;
  const searchInput = document.querySelector("#peopleSearch");
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    renderEmployeeGrid(scoped);
  });
  renderEmployeeGrid(scoped);
}

function renderEmployeeGrid(scoped) {
  const query = state.search.trim().toLowerCase();
  const filtered = scoped.filter((employee) => {
    return !query || employee.name.toLowerCase().includes(query) || employee.number.includes(query);
  });
  document.querySelector("#employeeGrid").innerHTML = filtered.length
    ? filtered.map(employeeCard).join("")
    : `<div class="empty-state"><h2>No people match this scope</h2><p>Adjust filters or select another permitted organization scope.</p></div>`;
  document.querySelectorAll("[data-employee]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedEmployee = button.dataset.employee;
      state.page = "talent";
      state.talentTab = "Overview";
      renderNav();
      renderPage();
    });
  });
}

function employeeCard(employee) {
  return `
    <article class="employee-card">
      <header>
        <div>
          <h3>${employee.name}</h3>
          <p class="muted">${employee.number} · ${employee.title}</p>
        </div>
        <span class="badge blue">${employee.contract}</span>
      </header>
      <p>${employee.unit}${employee.team ? ` / ${employee.team}` : ""}</p>
      <div class="tag-row">${employee.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}</div>
      <p><strong>9-Box:</strong> ${employee.nineBox}</p>
      <p><strong>Capabilities:</strong> ${employee.capabilities.join(", ")}</p>
      <p><strong>Critical indicator:</strong> ${employee.dependency}</p>
      <div class="button-row">
        <button class="secondary-button" data-employee="${employee.id}">Open Talent Card</button>
      </div>
    </article>
  `;
}

function renderTalent() {
  const scoped = employeesInScope();
  const employee = scoped.find((item) => item.id === state.selectedEmployee) || scoped[0] || employees[0];
  state.selectedEmployee = employee.id;
  setHeader(
    "Talent & Development",
    "Fixed talent summary with tabs for evidence, HRBP insights, capabilities and career history.",
    `<button class="secondary-button" data-toast="9-Box calibration opened.">Open 9-Box</button>
     ${currentRole().canEditTalentJudgment ? '<button class="primary-button" data-toast="Talent judgment editor opened.">Edit Talent Snapshot</button>' : ""}`
  );
  const tabs = ["Overview", "Performance Evidence", "Talent & Development", "Capabilities", "Career History"];
  el.content.innerHTML = `
    <section class="talent-header">
      <div class="talent-header-main">
        <div>
          <p class="eyebrow">Talent Card</p>
          <h2>${employee.name}</h2>
          <p>${employee.number} · ${employee.title} · ${employee.level} · ${employee.contract}</p>
          <div class="tag-row">${employee.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}${employee.awards.map((award) => `<span class="badge blue">${award}</span>`).join("")}</div>
        </div>
        <div class="button-row">
          <button class="secondary-button" data-drawer="employee-${employee.id}">View Evidence</button>
          <button class="ghost-button" data-toast="Read-only fields are separated from editable records.">Permission details</button>
        </div>
      </div>
      <div class="indicator-grid">
        ${indicator("Current Impact", employee.currentImpact)}
        ${indicator("Growth Potential", employee.growthPotential)}
        ${indicator("Retention Risk", visibleTalentValue("retentionRisk", employee))}
        ${indicator("Promotion Readiness", visibleTalentValue("promotionReadiness", employee))}
        ${indicator("Open Actions", employee.openActions)}
        ${indicator("Critical Dependency", employee.dependency)}
      </div>
    </section>
    <nav class="tabs" aria-label="Talent card tabs">
      ${tabs.map((tab) => `<button class="tab ${tab === state.talentTab ? "active" : ""}" data-tab="${tab}">${tab}</button>`).join("")}
    </nav>
    <section>${renderTalentTab(employee)}</section>
  `;
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.talentTab = button.dataset.tab;
      renderPage();
    });
  });
  bindDrawerButtons();
}

function visibleTalentValue(field, employee) {
  if ((field === "retentionRisk" || field === "promotionReadiness") && state.role === "teamLead") {
    return "Restricted";
  }
  return employee[field];
}

function indicator(label, value) {
  return `<div class="indicator"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderTalentTab(employee) {
  if (state.talentTab === "Overview") {
    return `
      <div class="grid two">
        <article class="ai-panel">
          ${aiMeta("AI Talent Summary", "2026-07-14", "Last 12 months", "Moderate", "New Evidence Available")}
          <h2>${employee.name}</h2>
          <p>${employee.summary}</p>
          <div class="button-row">
            <button class="secondary-button" data-drawer="employee-${employee.id}">View Evidence</button>
            <button class="primary-button" data-toast="Talent summary accepted for review history.">Accept</button>
            <button class="ghost-button" data-toast="Talent summary moved to edit mode.">Edit</button>
            <button class="ghost-button" data-toast="Talent summary dismissed.">Dismiss</button>
          </div>
        </article>
        <article class="card">
          <h2>Recent Records</h2>
          ${recordsList(managerRecords.slice(0, 2))}
        </article>
      </div>
    `;
  }
  if (state.talentTab === "Performance Evidence") {
    return `<div class="card"><h2>Manager Records</h2>${recordsList(managerRecords)}</div>`;
  }
  if (state.talentTab === "Talent & Development") {
    return `
      <div class="grid two">
        <article class="card"><h2>Talent Insights</h2>${state.role === "teamLead" ? restrictedState() : recordsList(talentInsights)}</article>
        <article class="card"><h2>Talent Action Plans</h2>${actionList(employee)}</article>
      </div>
    `;
  }
  if (state.talentTab === "Capabilities") {
    return `
      <div class="card">
        <h2>Employee Capability Intelligence</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Capability</th><th>Level</th><th>Coverage role</th><th>Evidence quality</th><th>Validation</th></tr></thead>
            <tbody>
              ${employee.capabilities.map((capability, index) => `
                <tr><td>${capability}</td><td>${index === 0 ? "Advanced" : "Working"}</td><td>${index === 0 ? "Primary" : "Secondary"}</td><td>${index === 0 ? "Strong" : "Moderate"}</td><td>${index === 0 ? "Manager-confirmed" : "AI-inferred"}</td></tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  return `
    <div class="card">
      <h2>Career History</h2>
      <div class="timeline">
        <div class="timeline-item"><h3>2026 · Capability milestone</h3><p>Confirmed contribution evidence for ${employee.capabilities[0]}.</p></div>
        <div class="timeline-item"><h3>2025 · Key project</h3><p>Delivered major work connected to team annual goals.</p></div>
        <div class="timeline-item"><h3>2024 · Organization assignment</h3><p>${employee.unit}${employee.team ? ` / ${employee.team}` : ""}; history preserved for restructuring traceability.</p></div>
      </div>
    </div>
  `;
}

function recordsList(records) {
  return `<div class="timeline">${records.map((record) => `
    <div class="timeline-item">
      <h3>${record[0]} <span class="badge">${record[1]}</span></h3>
      <p><strong>${record[2]}</strong></p>
      <p>${record[3]}</p>
    </div>
  `).join("")}</div>`;
}

function restrictedState() {
  return `<div class="empty-state"><h2>Restricted HRBP judgments</h2><p>This role can add manager evidence but cannot view or edit HRBP-only talent judgments.</p></div>`;
}

function actionList(employee) {
  return `
    <div class="timeline">
      <div class="timeline-item"><h3>Learning <span class="badge warning">Open</span></h3><p>Target capability: ${employee.capabilities[0]}. Required evidence: project contribution, manager validation and technical review.</p></div>
      <div class="timeline-item"><h3>Knowledge Transfer <span class="badge blue">Planned</span></h3><p>Coverage objective: create backup readiness for critical team goals.</p></div>
    </div>
  `;
}

function renderCapability() {
  setHeader(
    "Capability Intelligence",
    "The core workflow: goal to required capability to people evidence to gap to reviewed action.",
    `<button class="secondary-button" data-toast="Capability generation started: reviewing annual goals.">Generate with AI</button>
     <button class="primary-button" data-toast="Manual capability form opened.">Create manually</button>`
  );
  el.content.innerHTML = `
    <section class="workflow">
      ${["Organization Goal", "Required Capability", "Current People Coverage", "Capability Gap and Risk", "AI Recommendation", "Human Review", "Talent Action"].map((step, index) => `
        <div class="workflow-step"><strong>${step}</strong><span class="muted">${workflowCopy(index)}</span></div>
      `).join("")}
    </section>
    <section class="grid two">
      <article class="card">
        <div class="section-header">
          <div><h2>Annual Goals</h2><p>Capability demand is derived from future work, not only existing employees.</p></div>
        </div>
        ${recordsList(annualGoals)}
      </article>
      <article class="ai-panel">
        ${aiMeta("Required capability generation", "2026-07-14", "2026 annual plan", "High", "Requires Review")}
        <h2>Proposed capability model</h2>
        <p>AI proposed ${capabilities.length} required capabilities and detected overlap between LLM Evaluation, Model Evaluation and Evaluation Framework. Human approval is required before taxonomy changes.</p>
        <div class="button-row">
          <button class="secondary-button" data-drawer="taxonomy">View Evidence</button>
          <button class="primary-button" data-toast="Capability model accepted into review queue.">Accept</button>
          <button class="ghost-button" data-toast="Merge review opened.">Merge</button>
          <button class="ghost-button" data-toast="Capability proposal dismissed.">Reject</button>
        </div>
      </article>
    </section>
    <section>
      <div class="section-header">
        <div><h2>Coverage, Gaps and Recommendations</h2><p>Every inference includes evidence quality, confidence and validation status.</p></div>
      </div>
      <div class="capability-list">${capabilities.map(capabilityItem).join("")}</div>
    </section>
  `;
  bindDrawerButtons();
}

function workflowCopy(index) {
  return [
    "Annual goals and major work",
    "Reviewed taxonomy objects",
    "Employees, levels and evidence",
    "Depth, backup and dependency risks",
    "Explainable internal response",
    "Accept, edit or dismiss",
    "Learning or coverage action",
  ][index];
}

function capabilityItem(capability) {
  return `
    <article class="capability-item">
      <div>
        <h3>${capability.name}</h3>
        <p>${capability.category} · Target ${capability.target}</p>
        <p class="muted">${capability.goal}</p>
      </div>
      <div>
        <p><strong>Required:</strong> ${capability.requiredPeople}</p>
        <p><strong>Current coverage:</strong> ${capability.coverage.length ? capability.coverage.map((item) => `${item[0]} (${item[2]})`).join(", ") : "No validated coverage"}</p>
        <p><strong>AI recommendation:</strong> ${capability.recommendation}</p>
      </div>
      <div>
        <p><span class="badge ${capability.severity === "High" ? "danger" : "warning"}">${capability.gap}</span></p>
        <p><span class="badge ai">AI Suggested</span></p>
        <button class="secondary-button" data-drawer="cap-${capability.name}">View Evidence</button>
      </div>
    </article>
  `;
}

function renderOrganization() {
  setHeader(
    "Organization",
    "Research Center structure, annual growth plans and traceable assignment history.",
    `${currentRole().canEditOrg ? '<button class="primary-button" data-toast="Organization editor opened.">Edit structure</button>' : ""}`
  );
  el.content.innerHTML = `
    <div class="grid two">
      <article class="card">
        <h2>Research Center Structure</h2>
        <div class="timeline">
          ${organization.businessUnits.map((unit) => `
            <div class="timeline-item">
              <h3>${unit.name} <span class="badge">${unit.type}</span></h3>
              <p>${unit.teams.length ? unit.teams.join(", ") : "Standalone independent research team"}</p>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="card">
        <h2>Organization History</h2>
        <p>Transfers and restructuring preserve employee assignment history. Normal workflows archive former employees rather than permanently deleting records.</p>
        <div class="table-wrap">
          <table><thead><tr><th>Date</th><th>Change</th><th>Records affected</th></tr></thead><tbody>
            <tr><td>2026-06-30</td><td>Created Model Evaluation Team</td><td>5 employees</td></tr>
            <tr><td>2026-04-15</td><td>Moved retrieval work to Data Infrastructure Platform</td><td>3 employees</td></tr>
          </tbody></table>
        </div>
      </article>
    </div>
  `;
}

function renderCulture() {
  setHeader("Culture & Engagement", "Secondary activity records for research sharing and collaboration.", "");
  el.content.innerHTML = `
    <div class="grid three">
      ${["Technical sharing", "Research summit", "Cross-team collaboration"].map((title) => `
        <article class="card"><h2>${title}</h2><p>Activity records stay connected to professional contribution evidence without becoming a general employee self-service workflow.</p><span class="badge blue">Configurable activity type</span></article>
      `).join("")}
    </div>
  `;
}

function renderAdministration() {
  if (!currentRole().admin) {
    state.page = "overview";
    renderNav();
    renderPage();
    return;
  }
  setHeader(
    "Administration",
    "Owner-only configuration with secondary navigation, searchable lists and governance records.",
    `<button class="secondary-button" data-toast="Audit log opened.">View audit log</button>`
  );
  el.content.innerHTML = `
    <div class="admin-layout">
      <nav class="admin-nav" aria-label="Administration navigation">
        ${Object.entries(adminGroups).map(([group, items]) => `
          <h3>${group}</h3>
          ${items.map((item) => `<button class="${item === state.adminSection ? "active" : ""}" data-admin="${item}">${item}</button>`).join("")}
        `).join("")}
      </nav>
      <section class="admin-panel">
        <p class="eyebrow">Administration / ${adminGroupFor(state.adminSection)}</p>
        <h2>${state.adminSection}</h2>
        ${adminContent(state.adminSection)}
      </section>
    </div>
  `;
  document.querySelectorAll("[data-admin]").forEach((button) => {
    button.addEventListener("click", () => {
      state.adminSection = button.dataset.admin;
      renderPage();
    });
  });
}

function adminGroupFor(section) {
  return Object.entries(adminGroups).find(([, items]) => items.includes(section))[0];
}

function adminContent(section) {
  if (section === "Business Units & Teams") {
    return `
      <p>Organization configuration shows hierarchy and affected employee counts before high-impact changes are confirmed.</p>
      <div class="table-wrap"><table><thead><tr><th>Unit</th><th>Type</th><th>Teams</th><th>Employees</th></tr></thead><tbody>
        ${organization.businessUnits.map((unit) => `<tr><td>${unit.name}</td><td>${unit.type}</td><td>${unit.teams.join(", ") || "No team layer"}</td><td>${employees.filter((employee) => employee.unit === unit.name).length}</td></tr>`).join("")}
      </tbody></table></div>
    `;
  }
  if (section === "Capability Taxonomy") {
    return `<p>Structured capability names, synonyms and merge suggestions prevent duplicate terms.</p><div class="table-wrap"><table><thead><tr><th>Capability</th><th>Category</th><th>Status</th><th>Validation</th></tr></thead><tbody>${capabilities.map((capability) => `<tr><td>${capability.name}</td><td>${capability.category}</td><td>Active</td><td>Requires human review for AI changes</td></tr>`).join("")}</tbody></table></div>`;
  }
  if (section === "Roles & Permissions") {
    return `<p>Permissions are enforced by role, scope and field sensitivity. Front-end visibility mirrors the policy but is not the only enforcement layer.</p><div class="table-wrap"><table><thead><tr><th>Role</th><th>Scope</th><th>Organization edit</th><th>Talent judgment edit</th></tr></thead><tbody>${Object.values(roles).map((role) => `<tr><td>${role.label}</td><td>${role.scope}</td><td>${yesNo(role.canEditOrg)}</td><td>${yesNo(role.canEditTalentJudgment)}</td></tr>`).join("")}</tbody></table></div>`;
  }
  return `
    <p>This section uses the shared administration pattern: searchable tables, clear descriptions, auditability and consistent form actions.</p>
    <div class="empty-state"><h2>${section} is ready for configuration data</h2><p>Add records through Owner-approved workflows with audit logging and high-impact confirmations.</p><button class="primary-button" data-toast="${section} creation workflow opened.">Create record</button></div>
  `;
}

function yesNo(value) {
  return value ? '<span class="badge blue">Allowed</span>' : '<span class="badge">Read-only or hidden</span>';
}

function bindDrawerButtons() {
  document.querySelectorAll("[data-drawer]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.drawer));
  });
  document.querySelectorAll("[data-toast]").forEach((button) => {
    button.addEventListener("click", () => showToast(button.dataset.toast));
  });
}

function openDrawer(kind) {
  el.drawerEyebrow.textContent = "Evidence and explainability";
  el.drawerTitle.textContent = "Evidence details";
  el.drawerBody.innerHTML = drawerContent(kind);
  el.drawerBackdrop.hidden = false;
  el.drawer.classList.add("open");
  el.drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  el.drawerBackdrop.hidden = true;
  el.drawer.classList.remove("open");
  el.drawer.setAttribute("aria-hidden", "true");
}

function drawerContent(kind) {
  if (kind === "briefing") {
    return `
      ${aiMeta("Organization briefing", "2026-07-14", "Jan 2026 - Jul 2026", "High", "Current")}
      <h3>Source records</h3>
      ${recordsList(annualGoals)}
      <h3>Reasoning summary</h3>
      <p>Critical goals require agent architecture, evaluation and AI security coverage. Coverage is strong for primary experts but weak for backup readiness.</p>
      <h3>Missing information</h3>
      <p>AI Security has no validated internal evidence in the selected scope.</p>
    `;
  }
  if (kind === "taxonomy") {
    return `
      <h3>Merge suggestion</h3>
      <p>LLM Evaluation, Model Evaluation and Evaluation Framework overlap. Human review should decide whether these remain separate capabilities or become related taxonomy entries.</p>
      <div class="button-row"><button class="primary-button" data-toast="Merge suggestion accepted for review.">Accept merge review</button><button class="ghost-button" data-toast="Merge suggestion dismissed.">Dismiss</button></div>
    `;
  }
  if (kind.startsWith("employee-")) {
    const employee = employees.find((item) => item.id === kind.replace("employee-", ""));
    return `
      <h3>${employee.name}</h3>
      <p>${employee.summary}</p>
      <h3>Professional evidence</h3>
      ${recordsList(managerRecords)}
      <h3>AI safety boundary</h3>
      <p>Analysis excludes protected characteristics and uses only professional records, goals, capability evidence and human-entered talent records visible to the current role.</p>
    `;
  }
  if (kind.startsWith("cap-")) {
    const capability = capabilities.find((item) => `cap-${item.name}` === kind);
    return `
      ${aiMeta("Capability gap analysis", "2026-07-14", "2026 annual plan", capability.severity === "High" ? "High" : "Moderate", "Requires Review")}
      <h3>${capability.name}</h3>
      <p><strong>Gap:</strong> ${capability.gap}</p>
      <p><strong>Why it matters:</strong> ${capability.goal} requires ${capability.requiredPeople}; current validated coverage does not satisfy that need.</p>
      <h3>Coverage evidence</h3>
      <div class="table-wrap"><table><thead><tr><th>Employee</th><th>Level</th><th>Role</th><th>Evidence</th><th>Validation</th></tr></thead><tbody>
        ${capability.coverage.length ? capability.coverage.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("") : '<tr><td colspan="5">No professional evidence has confirmed this capability in the selected scope.</td></tr>'}
      </tbody></table></div>
      <h3>Recommended response</h3>
      <p>${capability.recommendation}</p>
      <div class="button-row"><button class="primary-button" data-toast="Learning Action draft created for human approval.">Create Learning Action</button><button class="ghost-button" data-toast="Recommendation dismissed.">Dismiss</button></div>
    `;
  }
  return "<p>No evidence selected.</p>";
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => el.toast.classList.remove("show"), 2400);
}

init();
