const STORAGE_KEY = "researchTalentSimple.v1";

const roles = {
  owner: {
    label: "Owner",
    scope: "All Research Center data",
    units: "all",
    teams: "all",
    canAddEmployee: true,
    canImport: true,
    canExport: true,
    canEditEmployee: true,
    canArchiveEmployee: true,
    canEditOrg: true,
    canManageSettings: true,
    canAddManagerRecord: true,
    canAddHrbpInsight: true,
    canEditTalentJudgment: true,
    canCreateAction: true,
  },
  director: {
    label: "Research Center Director",
    scope: "All Research Center review access",
    units: "all",
    teams: "all",
    canExport: true,
  },
  labDirector: {
    label: "Lab Director",
    scope: "GPU Research Lab",
    units: ["GPU Research Lab"],
    teams: "all",
    canAddManagerRecord: true,
    canCreateAction: true,
  },
  teamLead: {
    label: "Team Lead",
    scope: "GPU Compiler Team",
    units: ["GPU Research Lab"],
    teams: ["GPU Compiler Team"],
    canAddManagerRecord: true,
    canCreateAction: true,
  },
  hrbp: {
    label: "HRBP",
    scope: "GPU Compiler, Storage Performance, LLM Platform and MLOps",
    units: ["GPU Research Lab", "Storage Systems Research Lab", "Platform & Operations"],
    teams: ["GPU Compiler Team", "Storage Performance Team", "AI Platform Team", "MLOps Team"],
    canExport: true,
    canAddHrbpInsight: true,
    canEditTalentJudgment: true,
    canCreateAction: true,
  },
};

const navItems = [
  ["organization", "Organization Overview"],
  ["people", "People Library"],
  ["talent", "Team Management"],
  ["settings", "Settings"],
];

const roleKeys = Object.keys(roles);
const firstNames = ["Alice", "Brian", "Carla", "David", "Elena", "Farid", "Grace", "Hao", "Iris", "Jonas", "Keiko", "Lina", "Maya", "Nikhil", "Olivia", "Priya", "Rui", "Sofia", "Tomas", "Wei", "Yara", "Zoe", "Marco", "Anika", "Daniel", "Mei", "Victor", "Nora", "Ahmed", "Julia"];
const lastNames = ["Chen", "Singh", "Novak", "Meyer", "Hoffmann", "Kumar", "Garcia", "Wang", "Tanaka", "Smith", "Rossi", "Patel", "Kim", "Li", "Schneider", "Ivanov", "Zhang", "Andersson", "Brown", "Liu", "Martinez", "Dubois", "Khan", "Fischer", "Nguyen", "Silva", "Wilson", "Moreau", "Sato", "Bauer"];
const jobTitles = ["Research Engineer", "Senior Research Engineer", "Staff Engineer", "Principal Engineer", "Research Scientist", "Systems Engineer", "Algorithm Engineer", "Platform Engineer"];
const levels = ["P2", "P3", "P4", "P5", "P6", "P7"];
const contracts = ["Employee", "Leased Labour", "Intern"];

const orgTemplate = [
  ["GPU Research Lab", "Research Lab", "Rui Zhang", ["GPU Architecture Team", "GPU Compiler Team", "GPU Runtime Team", "Performance Optimization Team"]],
  ["Storage Systems Research Lab", "Research Lab", "Nora Fischer", ["Distributed Storage Team", "Filesystem Team", "Storage Performance Team", "Data Reliability Team"]],
  ["Camera Technology Research Lab", "Research Lab", "Keiko Tanaka", ["Computational Photography Team", "Image Processing Team", "ISP Team", "Computer Vision Team"]],
  ["Wireless Technologies Research Lab", "Research Lab", "Hao Wang", ["5G Research Team", "6G Research Team", "Radio Algorithms Team", "Signal Processing Team"]],
  ["Networking Research Lab", "Research Lab", "Sofia Rossi", ["Network Architecture Team", "Routing Team", "Switching Team", "Network Security Team"]],
  ["Platform & Operations", "Platform & Operations", "Daniel Smith", ["AI Platform Team", "Research IT Team", "DevOps Team", "MLOps Team", "HR Team", "Recruiting Team", "Administration Team", "Finance Team", "Procurement Team"]],
];
const extraStaffTeams = new Set(["GPU Architecture Team", "GPU Compiler Team", "GPU Runtime Team", "Performance Optimization Team", "Distributed Storage Team", "Filesystem Team", "Storage Performance Team"]);

let state = loadState();

const el = {
  nav: document.querySelector("#primaryNav"),
  roleSelect: document.querySelector("#roleSelect"),
  title: document.querySelector("#pageTitle"),
  actions: document.querySelector("#topbarActions"),
  content: document.querySelector("#contentArea"),
  drawer: document.querySelector("#drawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerTitle: document.querySelector("#drawerTitle"),
  drawerEyebrow: document.querySelector("#drawerEyebrow"),
  drawerBody: document.querySelector("#drawerBody"),
  closeDrawer: document.querySelector("#closeDrawer"),
  toast: document.querySelector("#toast"),
};

function defaultState() {
  const config = {
    tags: ["High Potential", "Technical Leader", "Key Person", "Domain Expert", "Mentor", "Critical Backup"].map((name, index) => item(`tag-${index}`, name)),
    awards: ["Annual Innovation Award", "Technical Breakthrough Award", "Research Impact Award", "Collaboration Award"].map((name, index) => item(`award-${index}`, name)),
    actionTypes: ["Learning", "IDP", "Mentoring", "Knowledge Transfer", "Backup Development", "Succession", "Internal Mobility", "Retention Action"].map((name, index) => item(`action-${index}`, name)),
    activityTypes: ["Team Event", "Technical Sharing", "Summit", "Cross-team Collaboration", "Team Building"].map((name, index) => item(`activity-${index}`, name)),
  };
  const units = orgTemplate.map(([name, type, leader, teams], index) => ({
    id: `u${index + 1}`,
    name,
    type,
    leader,
    teams: teams.map((teamName, teamIndex) => ({ id: `t${index + 1}-${teamIndex + 1}`, name: teamName, lead: "", active: true })),
    active: true,
  }));
  const people = buildPeople(units, config);
  const teamPlans = {};
  units.forEach((unit) => unit.teams.forEach((team) => {
    teamPlans[team.id] = {
      situation: "",
      goal: "",
      gap: "",
      work: "",
      history: [],
    };
  }));
  const roleAssignments = defaultRoleAssignments(people, units);
  return {
    page: "organization",
    role: "owner",
    system: { language: "English", appearance: "Light" },
    settingsSection: "Organization",
    talentTab: "Team Plan",
    selectedEmployeeId: people[0].id,
    editingTeamPlanId: "",
    editingTeamPlanRecordId: "",
    filters: { search: "", unit: "All", team: "All", contract: "All", tag: "All", year: "2026" },
    expanded: { root: true },
    config,
    units,
    people,
    archived: [],
    archivedActions: [],
    roleAssignments,
    aiInsights: { team: {}, person: {} },
    teamPlans,
    teamActions: [
      { id: "team-action-1", teamId: "t1-2", type: "Knowledge Transfer", startDate: "2026-07-15", due: "2026-09-15", owner: "Team Lead", status: "Open", description: "Create backup coverage for compiler optimization work." },
      { id: "team-action-2", teamId: "t2-3", type: "Cross-team Collaboration", startDate: "2026-08-01", due: "2026-10-05", owner: "HRBP", status: "Open", description: "Pair storage performance engineers with platform operations for applied project exposure." },
    ],
    activities: [
      { id: "act-1", type: "Technical Sharing", teamId: "t1-2", date: "2026-06-12", participants: 18, description: "Compiler optimization lessons shared with runtime engineers." },
      { id: "act-2", type: "Cross-team Collaboration", teamId: "t2-3", date: "2026-06-20", participants: 12, description: "Storage performance review with platform operations." },
    ],
  };
}

function item(id, name) {
  return { id, name, active: true };
}

function defaultRoleAssignments(people, units) {
  const firstPersonInTeam = (teamId) => people.find((person) => person.teamId === teamId)?.id || "";
  const firstPersonInUnit = (unitId) => people.find((person) => person.unitId === unitId)?.id || "";
  return {
    owner: [{ personId: people[0]?.id || "", units: "all", teams: "all" }],
    director: [{ personId: people[1]?.id || "", units: "all", teams: "all" }],
    labDirector: units.slice(0, 2).map((unit) => ({ personId: firstPersonInUnit(unit.id), units: [unit.name], teams: "all" })),
    teamLead: units[0]?.teams.slice(0, 2).map((team) => ({ personId: firstPersonInTeam(team.id), units: [units[0].name], teams: [team.name] })) || [],
    hrbp: [{ personId: people.find((person) => person.teamId === "t6-4")?.id || people[0]?.id || "", units: ["GPU Research Lab", "Storage Systems Research Lab", "Platform & Operations"], teams: ["GPU Compiler Team", "Storage Performance Team", "AI Platform Team", "MLOps Team"] }],
  };
}

function buildPeople(units, config) {
  const people = [];
  let n = 0;
  units.forEach((unit) => unit.teams.forEach((team) => {
    const baseCount = unit.name === "Platform & Operations" && /HR|Recruiting|Administration|Finance|Procurement/.test(team.name) ? 5 : 7;
    const count = baseCount + (extraStaffTeams.has(team.name) ? 1 : 0);
    for (let i = 0; i < count; i += 1) {
      n += 1;
      const contract = n <= 160 ? contracts[0] : n <= 190 ? contracts[1] : contracts[2];
      const startYear = 2017 + (n % 9);
      const startMonth = String((n % 12) + 1).padStart(2, "0");
      const employee = {
        id: `e${n}`,
        number: contract === "Employee" ? `00${120000 + n}` : contract === "Leased Labour" ? `84${230000 + n}` : `500${10000 + n}`,
        name: `${firstNames[n % firstNames.length]} ${lastNames[(n * 7) % lastNames.length]}`,
        unitId: unit.id,
        teamId: team.id,
        title: i === 0 ? "Team Lead" : jobTitles[(n + i) % jobTitles.length],
        level: i === 0 ? "P6" : levels[(n + i) % levels.length],
        contract,
        startDate: `${startYear}-${startMonth}-${String((n * 3) % 27 + 1).padStart(2, "0")}`,
        manager: i === 0 ? unit.leader : "",
        tags: [n % 5 === 0 ? "High Potential" : "", n % 7 === 0 ? "Technical Leader" : "", n % 11 === 0 ? "Key Person" : ""].filter(Boolean).slice(0, 3),
        awards: n % 16 === 0 ? [config.awards[n % config.awards.length].name] : [],
        summary: "",
        retentionRisk: n % 17 === 0 ? "High" : n % 6 === 0 ? "Medium" : "Low",
        promotionReadiness: n % 9 === 0 ? "Ready in 6-12 months" : n % 4 === 0 ? "Evidence needed" : "Not ready",
        successionStatus: n % 11 === 0 ? "Backup required" : "No formal succession case",
        internalMobility: n % 8 === 0 ? "Ready for adjacent project exposure" : "No active mobility plan",
        records: [],
        hrbpInsights: [],
        talentReviews: [],
        actions: [],
        history: [],
      };
      people.push(employee);
    }
  }));
  people.forEach((person) => {
    const lead = people.find((candidate) => candidate.teamId === person.teamId && candidate.title === "Team Lead");
    person.manager = person.title === "Team Lead" ? unitById(person.unitId, units).leader : lead?.name || person.manager;
    const team = teamById(person.teamId, units);
    if (person.title === "Team Lead") team.lead = person.name;
    person.summary = `${person.name} is a ${person.title} in ${team.name}. Recent records show reliable contribution and useful evidence for ${team.name.replace(" Team", "").toLowerCase()} priorities.`;
    person.records = [
      record("Outstanding contribution", "2026-05-18", "Delivered visible technical contribution on the team roadmap."),
      record("Project performance", "2026-06-08", "Improved delivery quality during a key research milestone."),
    ];
    if (person.retentionRisk !== "Low") {
      person.hrbpInsights = [record("Talent Risk", "2026-06-21", `Retention risk is ${person.retentionRisk.toLowerCase()}; review workload, backup coverage and manager support.`)];
    }
    if (person.retentionRisk !== "Low" || person.promotionReadiness !== "Not ready") {
      person.talentReviews = [talentReviewRecord(person, "2026-06-21")];
    }
    if (nudge(person)) {
      person.actions = [{ id: `a-${person.id}`, type: "Learning", status: "Open", owner: person.manager, due: "2026-09-30", description: "Build backup coverage and refresh evidence through a practical project." }];
    }
    person.history = [
      record("Role Change", person.startDate, `Joined ${team.name} as ${person.title}.`),
      record("Key Project", "2026-03-15", "Contributed to annual research priority delivery."),
    ];
  });
  return people.slice(0, 200);
}

function nudge(person) {
  const numeric = Number(person.id.replace("e", ""));
  return numeric % 4 === 0 || numeric % 9 === 0;
}

function record(type, date, text) {
  return { id: `${type}-${date}-${Math.random().toString(16).slice(2)}`, type, date, text };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved?.people?.length && saved?.units?.length && saved?.config?.tags ? hydrateState(saved) : defaultState();
  } catch {
    return defaultState();
  }
}

function hydrateState(saved) {
  saved.editingTeamPlanId = "";
  saved.editingTeamPlanRecordId = "";
  saved.archivedActions = saved.archivedActions || [];
  saved.roleAssignments = saved.roleAssignments || defaultRoleAssignments(saved.people, saved.units);
  saved.aiInsights = saved.aiInsights || { team: {}, person: {} };
  saved.aiInsights.team = saved.aiInsights.team || {};
  saved.aiInsights.person = saved.aiInsights.person || {};
  saved.teamActions = saved.teamActions || [];
  saved.teamPlans = saved.teamPlans || {};
  saved.units.forEach((unit) => unit.teams.forEach((team) => {
    const plan = saved.teamPlans[team.id] || {};
    const isLegacyDefault = !plan.history?.length
      && plan.situation === `${team.name} can support the 2026 roadmap with stable delivery capacity.`
      && plan.goal === `Deliver the annual research priorities for ${team.name}.`
      && plan.gap === "Backup coverage and evidence freshness need attention for a few key skills."
      && plan.work === "Complete manager evidence review, create backup learning actions, and record monthly team activities.";
    saved.teamPlans[team.id] = isLegacyDefault
      ? { situation: "", goal: "", gap: "", work: "", history: [] }
      : { situation: plan.situation || "", goal: plan.goal || "", gap: plan.gap || "", work: plan.work || "", history: plan.history || [] };
  }));
  return saved;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentRole() {
  return roles[state.role];
}

function unitById(id, units = state.units) {
  return units.find((unit) => unit.id === id);
}

function teamById(id, units = state.units) {
  return units.flatMap((unit) => unit.teams).find((team) => team.id === id);
}

function roleAllowsPerson(person) {
  const role = currentRole();
  const unit = unitById(person.unitId);
  const team = teamById(person.teamId);
  return (role.units === "all" || role.units.includes(unit.name)) && (role.teams === "all" || role.teams.includes(team.name));
}

function scopedPeople() {
  return state.people.filter(roleAllowsPerson).filter((person) => {
    const { search, unit, team, contract, tag } = state.filters;
    const query = search.trim().toLowerCase();
    return (!query || person.name.toLowerCase().includes(query) || person.number.toLowerCase().includes(query))
      && (unit === "All" || person.unitId === unit)
      && (team === "All" || person.teamId === team)
      && (contract === "All" || person.contract === contract)
      && (tag === "All" || person.tags.includes(tag));
  });
}

function scopedUnits() {
  const role = currentRole();
  return state.units.filter((unit) => role.units === "all" || role.units.includes(unit.name));
}

function scopedTeams() {
  const role = currentRole();
  return scopedUnits().flatMap((unit) => unit.teams.filter((team) => role.teams === "all" || role.teams.includes(team.name)).map((team) => ({ ...team, unitId: unit.id })));
}

function init() {
  document.body.classList.toggle("high-contrast", state.system?.appearance === "High contrast");
  el.roleSelect.innerHTML = roleKeys.map((key) => `<option value="${key}">${roles[key].label}</option>`).join("");
  el.roleSelect.value = state.role;
  el.roleSelect.addEventListener("change", () => {
    state.role = el.roleSelect.value;
    state.filters.unit = "All";
    state.filters.team = "All";
    if (state.page === "settings" && !currentRole().canManageSettings) state.page = "organization";
    save();
    render();
  });
  el.closeDrawer.addEventListener("click", () => closeDrawer());
  el.drawerBackdrop.addEventListener("click", () => closeDrawer());
  render();
}

function render() {
  renderNav();
  if (state.page === "settings" && !currentRole().canManageSettings) state.page = "organization";
  const pages = { organization: renderOrganization, people: renderPeople, talent: renderTalent, settings: renderSettings };
  pages[state.page]();
  save();
}

function renderNav() {
  el.nav.innerHTML = navItems
    .filter(([page]) => page !== "settings" || currentRole().canManageSettings)
    .map(([page, label]) => `<button class="nav-button ${state.page === page ? "active" : ""}" data-page="${page}">${label}</button>`)
    .join("");
  el.nav.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    state.page = button.dataset.page;
    render();
  }));
}

function setHeader(title, actions = "") {
  el.title.textContent = title;
  el.actions.innerHTML = actions;
  bindActions(el.actions);
}

function renderOrganization() {
  setHeader(
    "Organization Overview",
    currentRole().canEditOrg ? `<button class="primary-button" data-action="settingsOrg">Manage Organization</button>` : ""
  );
  const people = state.people.filter(roleAllowsPerson);
  el.content.innerHTML = `
    <section class="org-tree">
      ${renderRootNode(people)}
    </section>
  `;
  bindActions(el.content);
  bindExpanders();
}

function renderRootNode(people) {
  const rootOpen = state.expanded.root;
  return `
    <div class="tree-node root">
      <button class="tree-summary root-summary" data-expand="root">
        <span class="root-title-block">
          <strong>Von Neumann Research Center</strong>
          <small>Center Director: Rui Zhang</small>
        </span>
        <span class="root-metrics">
          <span>${scopedUnits().length}<small>Business Units</small></span>
          <span>${scopedTeams().length}<small>Teams</small></span>
          <span>${people.length}<small>Employees</small></span>
        </span>
        <span class="tree-toggle">${rootOpen ? "Collapse" : "Expand"}</span>
      </button>
      ${rootOpen ? `<div class="tree-children root-children">${scopedUnits().map(renderUnitNode).join("")}</div>` : ""}
    </div>
  `;
}

function renderUnitNode(unit) {
  if (!matchesOrg(unit)) return "";
  const employees = state.people.filter((person) => person.unitId === unit.id && roleAllowsPerson(person));
  const open = state.expanded[unit.id];
  const teams = unit.teams.filter((team) => scopedTeams().some((scoped) => scoped.id === team.id));
  return `
    <div class="tree-node">
      <button class="tree-summary" data-expand="${unit.id}">
        <span><strong>${unit.name}</strong><small>${unit.type} · Leader: ${unit.leader} · ${teams.length} Teams · ${employees.length} employees</small></span>
        <span>${open ? "Collapse" : "Expand"}</span>
      </button>
      ${open ? `<div class="tree-children">${teams.map((team) => renderTeamNode(unit, team)).join("")}</div>` : ""}
    </div>
  `;
}

function renderTeamNode(unit, team) {
  const employees = state.people.filter((person) => person.teamId === team.id && roleAllowsPerson(person));
  if (!matchesOrg(unit, team, employees)) return "";
  const open = state.expanded[team.id];
  return `
    <div class="tree-node team">
      <button class="tree-summary" data-expand="${team.id}">
        <span><strong>${team.name}</strong><small>Team Lead: ${team.lead || "Unassigned"} · ${employees.length} employees</small></span>
        <span>${open ? "Collapse" : "Expand"}</span>
      </button>
      ${open ? `<div class="people-rows">${employees.map((person) => `
        <button class="person-row" data-open-employee="${person.id}">
          <strong>${person.name}</strong><span>${person.title}</span><span>${person.number}</span>
        </button>`).join("")}</div>` : ""}
    </div>
  `;
}

function matchesOrg(unit, team, employees = []) {
  const q = state.filters.search.trim().toLowerCase();
  if (!q) return true;
  return unit.name.toLowerCase().includes(q)
    || team?.name.toLowerCase().includes(q)
    || employees.some((person) => person.name.toLowerCase().includes(q) || person.number.toLowerCase().includes(q));
}

function bindExpanders() {
  document.querySelectorAll("[data-expand]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.expand;
    state.expanded[key] = !state.expanded[key];
    renderOrganization();
  }));
}

function renderPeople() {
  setHeader(
    "People Library",
    `${currentRole().canAddEmployee ? `<button class="primary-button" data-action="addEmployee">Add Employee</button>` : ""}`
  );
  const people = scopedPeople();
  el.content.innerHTML = `
    <section class="people-layout">
      <div class="people-main">
        <div class="people-grid">
          ${people.slice(0, 60).map(personCard).join("") || empty("No employees found", "Adjust search or filters.")}
        </div>
      </div>
      ${peopleFacetPanel()}
    </section>
  `;
  bindFilters();
  bindActions(el.content);
}

function peopleFacetPanel() {
  const base = state.people.filter(roleAllowsPerson);
  const unitContext = peopleForFacet("unit");
  const teamContext = peopleForFacet("team");
  const contractContext = peopleForFacet("contract");
  const tagContext = peopleForFacet("tag");
  const visibleTeams = state.filters.unit === "All" ? scopedTeams() : scopedTeams().filter((team) => team.unitId === state.filters.unit);
  return `
    <aside class="people-filter-panel" aria-label="People filters">
      <div class="filter-panel-header">
        <h2>Filters</h2>
        <button class="secondary-button compact-button" data-filter-reset>Reset</button>
      </div>
      ${inputFilter("Search", "search", state.filters.search)}
      <div class="facet-section">
        <h3>Business Unit</h3>
        ${scopedUnits().map((unit) => {
          const unitPeople = unitContext.filter((person) => person.unitId === unit.id);
          return facetButton("unit", unit.id, unit.name, unitPeople.length);
        }).join("")}
      </div>
      <div class="facet-section">
        <h3>Team</h3>
        ${visibleTeams.map((team) => {
          const teamPeople = teamContext.filter((person) => person.teamId === team.id && (state.filters.unit === "All" || person.unitId === state.filters.unit));
          return facetButton("team", team.id, team.name, teamPeople.length);
        }).join("")}
      </div>
      <div class="facet-section">
        <h3>Contract Type</h3>
        ${contracts.map((contract) => facetButton("contract", contract, contract, contractContext.filter((person) => person.contract === contract).length)).join("")}
      </div>
      <div class="facet-section">
        <h3>Talent Tag</h3>
        ${active("tags").map((tag) => facetButton("tag", tag.name, tag.name, tagContext.filter((person) => person.tags.includes(tag.name)).length)).join("")}
      </div>
    </aside>
  `;
}

function peopleForFacet(excludeKey) {
  return state.people.filter(roleAllowsPerson).filter((person) => {
    const { search, unit, team, contract, tag } = state.filters;
    const query = search.trim().toLowerCase();
    return (!query || person.name.toLowerCase().includes(query) || person.number.toLowerCase().includes(query))
      && (excludeKey === "unit" || unit === "All" || person.unitId === unit)
      && (excludeKey === "team" || team === "All" || person.teamId === team)
      && (excludeKey === "contract" || contract === "All" || person.contract === contract)
      && (excludeKey === "tag" || tag === "All" || person.tags.includes(tag));
  });
}

function facetButton(key, value, label, count, note = "") {
  const active = state.filters[key] === value;
  return `
    <button class="facet-button ${active ? "active" : ""}" data-filter-set="${key}" data-filter-value="${escapeAttr(value)}">
      <span>${label}</span>
      <strong>${count}</strong>
      ${note ? `<small>${note}</small>` : ""}
    </button>
  `;
}

function personCard(person) {
  const team = teamById(person.teamId);
  const statusBadge = person.retentionRisk === "High"
    ? `<span class="badge danger">Attention</span>`
    : person.actions.some((action) => action.status !== "Completed")
      ? `<span class="badge warning">Open</span>`
      : "";
  return `
    <article class="person-card">
      <header>
        <div><h3>${person.name}</h3><p>${person.number}</p></div>
        ${statusBadge}
      </header>
      <dl class="facts">
        <div><dt>Job title</dt><dd>${person.title}</dd></div>
        <div><dt>Team</dt><dd>${team.name}</dd></div>
        <div><dt>Tenure</dt><dd>${tenure(person.startDate)}</dd></div>
        <div><dt>Contract</dt><dd>${person.contract}</dd></div>
      </dl>
      <div class="tags recognition-tags">${person.tags.slice(0, 2).map((tag) => `<span class="badge">${tag}</span>`).join("")}${person.awards[0] ? `<span class="badge blue">${person.awards[0]}</span>` : ""}</div>
      <button class="secondary-button" data-open-employee="${person.id}">Open Profile</button>
    </article>
  `;
}

function renderTalent() {
  setHeader("Team Management");
  const tabs = ["Team Plan", "Development Actions", "Team Activities"];
  if (!tabs.includes(state.talentTab)) state.talentTab = "Team Plan";
  el.content.innerHTML = `
    <section class="filters">
      ${selectFilter("Business Unit", "unit", [["All", "All Business Units"], ...scopedUnits().map((u) => [u.id, u.name])])}
      ${selectFilter("Team", "team", [["All", "All Teams"], ...scopedTeams().map((t) => [t.id, t.name])])}
    </section>
    <nav class="tabs">${tabs.map((tab) => `<button class="tab ${state.talentTab === tab ? "active" : ""}" data-talent-tab="${tab}">${tab}</button>`).join("")}</nav>
    <section>${renderTalentTab()}</section>
  `;
  bindFilters();
  document.querySelectorAll("[data-talent-tab]").forEach((button) => button.addEventListener("click", () => {
    state.talentTab = button.dataset.talentTab;
    render();
  }));
  bindActions(el.content);
}

function renderTalentTab() {
  if (state.talentTab === "Team Plan") return renderTeamPlan();
  if (state.talentTab === "Development Actions") return renderActions();
  return renderActivities();
}

function selectedTeamId() {
  return state.filters.team !== "All" ? state.filters.team : scopedTeams()[0]?.id;
}

function renderTeamPlan() {
  const teamId = selectedTeamId();
  const plan = state.teamPlans[teamId] || { situation: "", goal: "", gap: "", work: "", history: [] };
  const planHistory = sortRecordsDesc((plan.history || []).map((record, index) => ({ ...record, sourceIndex: index })));
  const isEditing = state.editingTeamPlanId === teamId;
  const editingRecord = state.editingTeamPlanRecordId ? (plan.history || []).find((record) => record.id === state.editingTeamPlanRecordId) : null;
  const editingValues = editingRecord ? planRecordData(editingRecord) : { situation: "", goal: "", gap: "", work: "", startDate: "", endDate: "" };
  const canEdit = currentRole().canCreateAction || currentRole().canEditOrg;
  return `
    <div class="team-plan-stack">
      <article class="panel">
        <div class="section-header"><h2>${teamById(teamId)?.name || "Selected Team"} Plan</h2>${canEdit ? `<div class="section-actions"><button class="${isEditing ? "secondary-button" : "primary-button"}" data-action="${isEditing ? "cancelTeamPlanEdit" : "editTeamPlan"}">${isEditing ? "Cancel" : "Add Plan"}</button></div>` : ""}</div>
        ${isEditing ? `<div class="form-grid team-plan-form">
          ${textarea("Current Situation", "situation", editingValues.situation, !canEdit)}
          ${textarea("Goal", "goal", editingValues.goal, !canEdit)}
          ${textarea("Gap", "gap", editingValues.gap, !canEdit)}
          ${textarea("Major Work / Action", "work", editingValues.work, !canEdit)}
          ${field("Start date", "startDate", editingValues.startDate || currentDate(), "date")}
          ${field("End date", "endDate", editingValues.endDate || "2026-12-31", "date")}
          <div class="form-actions"><button class="primary-button" data-action="saveTeamPlan">Save Plan</button></div>
        </div>` : ""}
      </article>
      <article class="panel">
        <div class="section-header"><h2>Plan Details</h2></div>
        ${planHistory.length ? planTimeline(teamId, planHistory) : empty("No plan history", "Save the team plan to create a dated record.")}
      </article>
      ${renderAiInsight("team", teamId)}
    </div>
  `;
}

function renderTalentReview() {
  const rows = scopedPeople().filter((person) => person.retentionRisk !== "Low" || person.promotionReadiness !== "Not ready" || person.tags.includes("Key Person")).slice(0, 30);
  return `<div class="table-wrap"><table><thead><tr><th>Employee</th><th>Reason</th><th>Status</th><th>Evidence Quality</th><th>Required Action</th></tr></thead><tbody>${rows.map((person) => `
    <tr data-open-employee="${person.id}"><td><strong>${person.name}</strong><br>${person.number}</td><td>${person.retentionRisk !== "Low" ? "Retention Risk" : person.tags.includes("Key Person") ? "Key Person" : "Promotion Readiness"}</td><td>${person.retentionRisk} / ${safeTalent(person.promotionReadiness)}</td><td>${person.records.length >= 2 ? "Moderate" : "Limited"}</td><td>${person.actions[0]?.description || "Request additional evidence"}</td></tr>`).join("")}</tbody></table></div>`;
}

function renderActions() {
  state.teamActions = state.teamActions || [];
  const scopedTeamIds = new Set(scopedTeams().map((team) => team.id));
  const selectedTeam = state.filters.team === "All" ? "" : state.filters.team;
  const teamActionRows = state.teamActions.filter((action) => scopedTeamIds.has(action.teamId) && (!selectedTeam || action.teamId === selectedTeam));
  const canCreate = currentRole().canCreateAction;
  return `
    <div class="development-action-stack">
      <article class="panel">
        <div class="section-header"><h2>Team Development Actions</h2>${canCreate ? `<button class="primary-button" data-action="createTeamAction">Add Team Action</button>` : ""}</div>
        <div class="table-wrap"><table><thead><tr><th>Team</th><th>Type</th><th>Status</th><th>Time Period</th><th>Owner</th><th>Description</th><th></th></tr></thead><tbody>${teamActionRows.map((action) => `
          <tr><td>${teamById(action.teamId)?.name || "Unknown"}</td><td>${action.type}</td><td><span class="status-pill ${action.status === "Completed" ? "done" : ""}">${action.status}</span></td><td>${action.startDate || "Not set"} - ${action.due}</td><td>${action.owner}</td><td>${action.description}</td><td>${action.status === "Completed" ? "" : `<button class="secondary-button action-table-button" data-action="completeTeamAction" data-action-id="${action.id}">Complete</button>`}</td></tr>`).join("") || `<tr><td colspan="7">No team development actions in this scope.</td></tr>`}</tbody></table></div>
      </article>
    </div>
  `;
}

function renderActivities() {
  return `
    <div class="section-header"><h2>Team Activities</h2><button class="primary-button" data-action="addActivity">Add Activity</button></div>
    <div class="table-wrap"><table><thead><tr><th>Activity type</th><th>Team</th><th>Date</th><th>Participants</th><th>Description</th></tr></thead><tbody>${state.activities.map((activity) => `
      <tr><td>${activity.type}</td><td>${teamById(activity.teamId)?.name || "Unknown"}</td><td>${activity.date}</td><td>${activity.participants}</td><td>${activity.description}</td></tr>`).join("")}</tbody></table></div>
  `;
}

function renderSettings() {
  setHeader("Settings");
  const sections = ["Organization", "People Operations", "Access & Roles", "Talent Configuration", "System"];
  el.content.innerHTML = `
    <section class="settings-layout">
      <nav class="settings-nav">${sections.map((section) => `<button class="${state.settingsSection === section ? "active" : ""}" data-settings="${section}">${section}</button>`).join("")}</nav>
      <div class="panel">${renderSettingsSection()}</div>
    </section>
  `;
  document.querySelectorAll("[data-settings]").forEach((button) => button.addEventListener("click", () => {
    state.settingsSection = button.dataset.settings;
    render();
  }));
  bindActions(el.content);
}

function renderSettingsSection() {
  if (state.settingsSection === "Organization") {
    return `
      <div class="section-header"><h2>Organization</h2><div class="section-actions"><button class="secondary-button settings-action-button" data-action="addUnit">Add Business Unit</button><button class="secondary-button settings-action-button" data-action="addTeam">Add Team</button><button class="secondary-button settings-action-button" data-action="transferEmployee">Employee Transfer</button></div></div>
      <div class="table-wrap"><table><thead><tr><th>Business Unit</th><th>Type</th><th>Leader</th><th>Teams</th><th>Employees</th><th></th></tr></thead><tbody>${state.units.map((unit) => `<tr><td>${unit.name}</td><td>${unit.type}</td><td>${unit.leader}</td><td>${unit.teams.length}</td><td>${state.people.filter((p) => p.unitId === unit.id).length}</td><td><button class="secondary-button" data-action="editUnit" data-unit="${unit.id}">Edit</button></td></tr>`).join("")}</tbody></table></div>
    `;
  }
  if (state.settingsSection === "People Operations") {
    return `<div class="button-grid"><button class="secondary-button settings-action-button" data-action="addEmployee">Add Employee</button><button class="secondary-button settings-action-button" data-action="importEmployees">Bulk Import</button><button class="secondary-button settings-action-button" data-action="bulkArchiveEmployees">Bulk Archive</button><button class="secondary-button settings-action-button" data-action="exportEmployees">Export Employees</button></div><h2>Former Employee Archive</h2><p>${state.archived.length} archived employees retained with historical records.</p>`;
  }
  if (state.settingsSection === "Access & Roles") {
    return `<h2>Role definitions</h2><div class="table-wrap"><table><thead><tr><th>Role</th><th>Access scope</th><th>Assigned people</th><th></th></tr></thead><tbody>${Object.entries(roles).map(([key, role]) => `<tr><td>${role.label}</td><td>${roleAccessScopeText(key)}</td><td>${roleAssigneeText(key)}</td><td><button class="secondary-button" data-action="editRole" data-role-key="${key}">Edit</button></td></tr>`).join("")}</tbody></table></div>`;
  }
  if (state.settingsSection === "Talent Configuration") {
    return `<div class="config-grid">${configTable("tags", "Talent Tags")}${configTable("awards", "Awards")}${configTable("actionTypes", "Talent Action Types")}${configTable("activityTypes", "Activity Types")}</div>`;
  }
  return `<div class="button-grid"><button class="secondary-button" data-action="language">Language: ${state.system?.language || "English"}</button><button class="secondary-button" data-action="appearance">Appearance: ${state.system?.appearance || "Light"}</button><button class="secondary-button" data-action="exportData">Export mock data</button><button class="secondary-button" data-action="importData">Import mock data</button><button class="danger-button" data-action="resetData">Data reset for prototype</button></div>`;
}

function configTable(key, title) {
  return `<article><div class="section-header"><h2>${title}</h2><button class="primary-button" data-action="addConfig" data-config="${key}">Add</button></div><table><tbody>${state.config[key].map((item, index) => `<tr><td>${item.name}</td><td>${item.active ? "Active" : "Inactive"}</td><td><span class="config-actions"><button class="text-button" data-action="toggleConfig" data-config="${key}" data-index="${index}">${item.active ? "Deactivate" : "Activate"}</button>${item.active ? "" : `<button class="text-danger-button" data-action="deleteConfig" data-config="${key}" data-index="${index}">Delete</button>`}</span></td></tr>`).join("")}</tbody></table></article>`;
}

function roleForm(roleKey) {
  const role = roles[roleKey];
  const assignments = state.roleAssignments?.[roleKey] || [];
  openDrawer("Edit Role Access", "Access & Roles", `
    <form id="roleForm" class="form-grid">
      ${field("Role label", "label", role.label)}
      ${field("Access scope description", "scope", role.scope)}
      <section class="profile-section full">
        <div class="section-header"><h2>Permissions</h2></div>
        <div class="permission-grid">
          ${permissionCheckbox("canAddManagerRecord", "Add manager records", role.canAddManagerRecord)}
          ${permissionCheckbox("canAddHrbpInsight", "Add HRBP insights", role.canAddHrbpInsight)}
          ${permissionCheckbox("canEditTalentJudgment", "Edit talent judgment", role.canEditTalentJudgment)}
          ${permissionCheckbox("canCreateAction", "Create team/employee actions", role.canCreateAction)}
          ${permissionCheckbox("canExport", "Export employees/data", role.canExport)}
          ${permissionCheckbox("canEditOrg", "Edit organization", role.canEditOrg)}
          ${permissionCheckbox("canAddEmployee", "Add employees", role.canAddEmployee)}
          ${permissionCheckbox("canArchiveEmployee", "Archive employees", role.canArchiveEmployee)}
        </div>
      </section>
      <section class="profile-section full">
        <div class="section-header"><h2>Assigned People</h2><button class="secondary-button compact-button" type="button" data-action="addRoleAssignment" data-role-key="${roleKey}">Add Person</button></div>
        ${assignments.length ? `<div class="assignment-list">${assignments.map((assignment, index) => roleAssignmentRow(roleKey, assignment, index)).join("")}</div>` : `<div class="empty-state"><h2>No assigned people</h2><p>Add people so this role has clear ownership and scope.</p></div>`}
      </section>
      <div class="form-actions"><button class="primary-button">Save Role</button></div>
    </form>
  `);
  bindActions(el.drawerBody);
  document.querySelector("#roleForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const fields = form.elements;
    role.label = fields.label.value;
    role.scope = fields.scope.value;
    ["canAddManagerRecord", "canAddHrbpInsight", "canEditTalentJudgment", "canCreateAction", "canExport", "canEditOrg", "canAddEmployee", "canArchiveEmployee"].forEach((key) => {
      role[key] = Boolean(fields[key]?.checked);
    });
    el.roleSelect.innerHTML = roleKeys.map((key) => `<option value="${key}">${roles[key].label}</option>`).join("");
    el.roleSelect.value = state.role;
    closeDrawer(true);
    toast("Role access updated.");
    render();
  });
}

function roleAssigneeText(roleKey) {
  const assignments = state.roleAssignments?.[roleKey] || [];
  return assignments.length ? assignments.map((assignment) => state.people.find((person) => person.id === assignment.personId)?.name).filter(Boolean).join(", ") : "No assigned people";
}

function roleAccessScopeText(roleKey) {
  const assignments = state.roleAssignments?.[roleKey] || [];
  if (!assignments.length) return roles[roleKey].scope;
  return assignments.map((assignment) => {
    const person = state.people.find((item) => item.id === assignment.personId);
    const unitText = assignment.units === "all" ? "All labs" : assignment.units.join(", ");
    const teamText = assignment.teams === "all" ? "All teams" : assignment.teams.join(", ");
    return `${person?.name || "Unassigned"}: ${unitText} / ${teamText}`;
  }).join("<br>");
}

function roleAssignmentRow(roleKey, assignment, index) {
  const person = state.people.find((item) => item.id === assignment.personId);
  const unitText = assignment.units === "all" ? "All labs" : assignment.units.join(", ");
  const teamText = assignment.teams === "all" ? "All teams" : assignment.teams.join(", ");
  return `<article class="assignment-row"><div><strong>${person?.name || "Unknown person"}</strong><small>${person?.number || ""}</small></div><div><span>Labs</span><p>${unitText}</p></div><div><span>Teams</span><p>${teamText}</p></div><span class="assignment-actions"><button class="text-button" type="button" data-action="editRoleAssignment" data-role-key="${roleKey}" data-index="${index}">Edit Scope</button><button class="text-danger-button" type="button" data-action="removeRoleAssignment" data-role-key="${roleKey}" data-index="${index}">Remove</button></span></article>`;
}

function roleAssignmentForm(roleKey, index = -1) {
  const assignment = index >= 0 ? state.roleAssignments?.[roleKey]?.[index] : null;
  const isEdit = Boolean(assignment);
  openDrawer(isEdit ? "Edit Role Scope" : "Assign Person to Role", "Access & Roles", `
    <form id="roleAssignmentForm" class="form-grid">
      ${selectField("Person", "personId", state.people.map((person) => [person.id, `${person.name} (${person.number})`]), assignment?.personId)}
      <section class="profile-section full">
        <div class="section-header"><h2>Lab Scope</h2><label class="inline-check"><input type="checkbox" name="allUnits" ${assignment?.units === "all" ? "checked" : ""} />All labs</label></div>
        <div class="permission-grid">${state.units.map((unit) => checkboxField("units", unit.name, unit.name, assignment?.units === "all" || assignment?.units?.includes(unit.name), { unit: unit.name })).join("")}</div>
      </section>
      <section class="profile-section full">
        <div class="section-header"><h2>Team Scope</h2><label class="inline-check"><input type="checkbox" name="allTeams" ${assignment?.teams === "all" ? "checked" : ""} />All teams in scoped labs</label></div>
        <div class="permission-grid">${state.units.flatMap((unit) => unit.teams.map((team) => checkboxField("teams", team.name, `${unit.name} / ${team.name}`, assignment?.teams === "all" || assignment?.teams?.includes(team.name), { unit: unit.name }))).join("")}</div>
      </section>
      <div class="form-actions"><button class="primary-button">${isEdit ? "Save Scope" : "Assign Person"}</button></div>
    </form>
  `);
  bindAssignmentScopeControls(document.querySelector("#roleAssignmentForm"));
  document.querySelector("#roleAssignmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const fields = form.elements;
    state.roleAssignments = state.roleAssignments || {};
    state.roleAssignments[roleKey] = state.roleAssignments[roleKey] || [];
    const nextAssignment = {
      personId: fields.personId.value,
      units: fields.allUnits.checked ? "all" : checkedValues(form, "units"),
      teams: fields.allTeams.checked ? "all" : checkedValues(form, "teams"),
    };
    if (isEdit) state.roleAssignments[roleKey][index] = nextAssignment;
    else state.roleAssignments[roleKey].push(nextAssignment);
    save();
    toast(isEdit ? "Role scope updated." : "Person assigned to role.");
    roleForm(roleKey);
  });
}

function removeRoleAssignment(roleKey, index) {
  const assignments = state.roleAssignments?.[roleKey];
  if (!assignments) return;
  assignments.splice(index, 1);
  save();
  toast("Role assignment removed.");
  roleForm(roleKey);
}

function permissionCheckbox(name, label, checked) {
  return `<label class="inline-check"><input type="checkbox" name="${name}" ${checked ? "checked" : ""} />${label}</label>`;
}

function checkboxField(name, value, label, checked, data = {}) {
  const dataAttrs = Object.entries(data).map(([key, val]) => `data-${key}="${escapeAttr(val)}"`).join(" ");
  return `<label class="inline-check"><input type="checkbox" name="${name}" value="${escapeAttr(value)}" ${dataAttrs} ${checked ? "checked" : ""} />${label}</label>`;
}

function checkedValues(form, name) {
  return [...form.querySelectorAll(`input[name='${name}']:checked`)].map((input) => input.value);
}

function bindAssignmentScopeControls(form) {
  const syncTeams = () => {
    const fields = form.elements;
    if (fields.allTeams.checked) {
      const selectedUnits = checkedValues(form, "units");
      form.querySelectorAll("input[name='teams']").forEach((input) => {
        input.checked = fields.allUnits.checked || selectedUnits.includes(input.dataset.unit);
      });
    }
  };
  form.elements.allUnits.addEventListener("change", () => {
    form.querySelectorAll("input[name='units']").forEach((input) => {
      input.checked = form.elements.allUnits.checked;
    });
    syncTeams();
  });
  form.elements.allTeams.addEventListener("change", syncTeams);
  form.querySelectorAll("input[name='units']").forEach((input) => input.addEventListener("change", syncTeams));
}

function openEmployee(id) {
  const person = state.people.find((item) => item.id === id);
  if (!person || !roleAllowsPerson(person)) return;
  state.returnToEmployeeId = "";
  state.selectedEmployeeId = id;
  const team = teamById(person.teamId);
  const unit = unitById(person.unitId);
  openDrawer(person.name, "", `
    <div class="profile-head">
      <p class="profile-subtitle">${person.number} · ${person.title}</p>
      <dl class="profile-fact-grid">
        <div><dt>Level</dt><dd>${person.level}</dd></div>
        <div><dt>Business Unit</dt><dd>${unit.name}</dd></div>
        <div><dt>Team</dt><dd>${team.name}</dd></div>
        <div><dt>Contract</dt><dd>${person.contract}</dd></div>
        <div><dt>Start Date</dt><dd>${person.startDate}</dd></div>
        <div><dt>Tenure</dt><dd>${tenure(person.startDate)}</dd></div>
        <div><dt>Manager</dt><dd>${person.manager}</dd></div>
      </dl>
      <div class="tags recognition-tags">${person.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}${person.awards.map((award) => `<span class="badge blue">${award}</span>`).join("")}</div>
      ${currentRole().canEditEmployee ? `<div class="profile-actions"><button class="secondary-button compact-button" data-action="editEmployee" data-person="${person.id}">Edit Basic Info</button><button class="secondary-button compact-button" data-action="assignRecognition" data-person="${person.id}">Assign Tag / Award</button><button class="danger-button compact-button" data-action="archiveEmployee" data-person="${person.id}">Archive Employee</button></div>` : ""}
    </div>
    <nav class="tabs drawer-tabs">${["Overview", "Manager Records", "HRBP Insights", "Development History"].map((tab) => `<button class="tab ${tab === "Overview" ? "active" : ""}" data-profile-tab="${tab}" data-person="${person.id}">${tab}</button>`).join("")}</nav>
    <div id="profileTab">${profileTab(person, "Overview")}</div>
  `);
  el.drawer.classList.add("profile-fullscreen");
  document.querySelectorAll("[data-profile-tab]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-profile-tab]").forEach((b) => b.classList.toggle("active", b === button));
    document.querySelector("#profileTab").innerHTML = profileTab(person, button.dataset.profileTab);
    bindActions(document.querySelector("#profileTab"));
  }));
  bindActions(el.drawerBody);
}

function profileTab(person, tab) {
  if (tab === "Overview") {
    return profileOverview(person);
  }
  if (tab === "Manager Records") return `<div class="section-header"><h2>Manager Records</h2>${currentRole().canAddManagerRecord ? `<button class="primary-button" data-action="addManagerRecord" data-person="${person.id}">Add Manager Record</button>` : ""}</div>${recordTimeline(person, "records")}`;
  if (tab === "HRBP Insights") {
    if (!currentRole().canAddHrbpInsight) return empty("Restricted HRBP Content", "This role cannot view or edit HRBP-only talent judgments.");
    return `<div class="section-header"><h2>HRBP Insights</h2><button class="primary-button" data-action="addHrbpReview" data-person="${person.id}">Edit Talent Review</button></div><div class="profile-overview">${hrbpTalentSummary(person)}<section class="profile-section"><div class="section-header"><h2>Talent Review Timeline</h2></div>${recordTimeline(person, "talentReviews")}</section><section class="profile-section"><div class="section-header"><h2>HRBP Notes</h2></div>${recordTimeline(person, "hrbpInsights")}</section></div>`;
  }
  if (tab === "Development History") return `<div class="profile-overview"><section class="profile-section"><div class="section-header"><h2>Development Actions</h2><button class="secondary-button" data-action="createTalentAction" data-person="${person.id}">Add Development Action</button></div>${actionTimeline(person)}</section><section class="profile-section"><div class="section-header"><h2>History</h2><button class="secondary-button" data-action="addHistoryRecord" data-person="${person.id}">Add History Record</button></div>${recordTimeline(person, "history")}</section></div>`;
  return "";
}

function hrbpTalentSummary(person) {
  return `
    <section class="talent-review-summary">
      <article><span>Promotion Readiness</span><strong>${safeTalent(person.promotionReadiness)}</strong></article>
      <article><span>Retention Risk</span><strong>${safeTalent(person.retentionRisk)}</strong></article>
      <article><span>Succession</span><strong>${safeTalent(successionStatus(person))}</strong></article>
      <article><span>Internal Mobility</span><strong>${safeTalent(internalMobility(person))}</strong></article>
    </section>
  `;
}

function successionStatus(person) {
  return person.successionStatus || (person.tags.includes("Key Person") ? "Backup required" : "No formal succession case");
}

function internalMobility(person) {
  return person.internalMobility || "No active mobility plan";
}

function renderAiInsight(scope, id) {
  const memory = aiMemory(scope, id);
  const hasInsight = Boolean(memory.lastInsight);
  const insight = memory.lastInsight;
  return `
    <section class="${scope === "team" ? "ai-panel" : "profile-section ai-insight"}">
      <div class="section-header">
        <h2>${scope === "team" ? "AI Team Insight" : "AI Talent Insight"}</h2>
      </div>
      <textarea class="ai-prompt" data-ai-prompt="${scope}:${id}" placeholder="Example: focus on retention risk, evidence quality, or next actions."></textarea>
      <div class="ai-prompt-actions"><button class="primary-button compact-button" data-action="regenerateAiInsight" data-ai-scope="${scope}" data-ai-id="${id}">${hasInsight ? "Generate New Insight" : "Generate Insight"}</button></div>
      ${hasInsight ? `<div class="ai-generated-copy">
        <p>${escapeHtml(insight.summary)}</p>
        <ul class="insight-list">${insight.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
        <div class="ai-feedback-row">
          <span>${escapeHtml(insight.evidence)}</span>
          <div>
            <button class="secondary-button compact-button" data-action="feedbackAiInsight" data-ai-scope="${scope}" data-ai-id="${id}" data-feedback="helpful">Helpful</button>
            <button class="secondary-button compact-button" data-action="feedbackAiInsight" data-ai-scope="${scope}" data-ai-id="${id}" data-feedback="revise">Needs revision</button>
          </div>
        </div>
      </div>` : `<div class="empty-state ai-empty-state"><h2>No AI insight generated</h2><p>Feed a prompt to generate an insight from the current records.</p></div>`}
      ${memory.feedback?.length ? `<p class="evidence-note">Learning from ${memory.feedback.length} feedback signals. Last feedback: ${escapeHtml(memory.feedback[0].type)}.</p>` : ""}
    </section>
  `;
}

function aiMemory(scope, id) {
  state.aiInsights = state.aiInsights || { team: {}, person: {} };
  state.aiInsights[scope] = state.aiInsights[scope] || {};
  state.aiInsights[scope][id] = state.aiInsights[scope][id] || { prompt: "", feedback: [], generatedAt: "", lastInsight: null };
  return state.aiInsights[scope][id];
}

function generatePersonInsight(personId, memory) {
  const person = state.people.find((item) => item.id === personId);
  const openActions = person.actions.filter((action) => action.status !== "Completed");
  const feedbackHint = memory.feedback?.some((item) => item.type === "revise") ? "Previous feedback asks for sharper, less generic wording." : "";
  const prompt = (memory.prompt || "").toLowerCase();
  const focus = prompt.includes("retention") ? `Retention risk is ${person.retentionRisk}; connect any recommendation to workload, manager support and backup coverage.`
    : prompt.includes("action") ? `Prioritize next actions: ${openActions[0]?.description || "no open action currently exists."}`
      : prompt.includes("evidence") ? `Evidence base: ${person.records.length} manager records and ${person.hrbpInsights.length} HRBP notes.`
        : `Current talent view: promotion ${person.promotionReadiness}, retention ${person.retentionRisk}.`;
  return {
    summary: `${person.name} is a ${person.title} in ${teamById(person.teamId)?.name || "the selected team"}. ${feedbackHint}`,
    points: [
      focus,
      person.records[0]?.text || "Manager evidence should be refreshed before stronger talent conclusions are made.",
      openActions.length ? `${openActions.length} open development action(s) should be tracked to closure.` : "No open development action is currently blocking the profile.",
    ],
    evidence: `Based on ${person.records.length} manager records, ${person.hrbpInsights.length} HRBP notes, ${person.talentReviews?.length || 0} talent reviews and ${openActions.length} open actions.`,
  };
}

function generateTeamInsight(teamId, memory) {
  const team = teamById(teamId);
  const people = state.people.filter((person) => person.teamId === teamId);
  const openActions = (state.teamActions || []).filter((action) => action.teamId === teamId && action.status !== "Completed");
  const highRisk = people.filter((person) => person.retentionRisk === "High").length;
  const plan = state.teamPlans[teamId] || {};
  const feedbackHint = memory.feedback?.some((item) => item.type === "revise") ? "Previous feedback asks for more actionable team-level guidance." : "";
  const prompt = (memory.prompt || "").toLowerCase();
  const focus = prompt.includes("retention") ? `${highRisk} employee(s) are currently high retention risk; review backup coverage and manager support.`
    : prompt.includes("action") ? `${openActions.length} open team action(s) need owner and time-period tracking.`
      : prompt.includes("plan") ? `Plan context: goal "${plan.goal || "not set"}"; gap "${plan.gap || "not set"}".`
        : `${team?.name || "The selected team"} has ${people.length} people in scope and ${openActions.length} open team action(s).`;
  return {
    summary: `${team?.name || "The selected team"} insight is generated from current team plan, people risk and team actions. ${feedbackHint}`,
    points: [
      focus,
      plan.work ? `Plan action direction: ${plan.work}` : "Add a plan-level action direction if the team needs a clearer management focus.",
      openActions[0] ? `Nearest tracked action: ${openActions[0].description} (${openActions[0].startDate || "not set"} - ${openActions[0].due}).` : "Create a tracked team action when the plan needs execution detail.",
    ],
    evidence: `Based on ${people.length} employees, ${openActions.length} open team actions, ${plan.history?.length || 0} plan timeline records and ${state.activities.filter((activity) => activity.teamId === teamId).length} activities.`,
  };
}

function talentReviewRecord(person, date = "2026-07-15") {
  return {
    id: `review-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: "Talent Review",
    date,
    text: `Promotion: ${person.promotionReadiness}. Retention: ${person.retentionRisk}. Succession: ${successionStatus(person)}. Mobility: ${internalMobility(person)}.`,
  };
}

function talentReviewTimeline(person) {
  return person.talentReviews?.length ? person.talentReviews : [talentReviewRecord(person, "2026-07-15")];
}

function profileOverview(person) {
  return `
    <div class="profile-overview">
      <section class="profile-section overview-summary">
        <div>
          <h2>Overview</h2>
          <p>${person.summary}</p>
        </div>
        <dl class="facts">
          <div><dt>Retention Risk</dt><dd>${safeTalent(person.retentionRisk)}</dd></div>
          <div><dt>Promotion</dt><dd>${safeTalent(person.promotionReadiness)}</dd></div>
          <div><dt>Open Actions</dt><dd>${person.actions.filter((action) => action.status !== "Completed").length}</dd></div>
          <div><dt>Evidence</dt><dd>${person.records.length} manager records</dd></div>
        </dl>
      </section>
      ${renderAiInsight("person", person.id)}
      <section class="profile-section">
        <div class="section-header"><h2>Open Talent Actions</h2></div>
        ${actionTimeline(person, false)}
      </section>
    </div>
  `;
}

function safeTalent(value) {
  return state.role === "teamLead" ? "Restricted" : value;
}

function miniActions(person) {
  return actionTimeline(person);
}

function actionTimeline(person, canDelete = true) {
  const records = person.actions.map((action, index) => ({ id: action.id || "", type: action.type, date: action.due, text: `${action.status}: ${action.description}`, sourceIndex: index }));
  return records.length ? timeline(sortRecordsDesc(records), canDelete ? { personId: person.id, collection: "actions" } : {}) : empty("No open action", "Create an action when evidence or risk requires follow-up.");
}

function recordTimeline(person, collection, fallbackRecords) {
  const records = (fallbackRecords || person[collection] || []).map((record, index) => ({ ...record, sourceIndex: index }));
  return records.length ? timeline(sortRecordsDesc(records), { personId: person.id, collection }) : empty("No records", "Nothing has been recorded yet.");
}

function timeline(records, options = {}) {
  return records?.length ? `<div class="timeline">${records.map((r, index) => `<div><div class="timeline-heading"><span class="timeline-title"><strong>${r.type}</strong><span>${r.date}</span></span>${options.collection ? `<button class="text-danger-button" data-action="deleteRecord" data-person="${options.personId}" data-collection="${options.collection}" data-record-id="${r.id || ""}" data-index="${r.sourceIndex ?? index}">Delete</button>` : ""}</div><p>${r.text}</p></div>`).join("")}</div>` : empty("No records", "Nothing has been recorded yet.");
}

function planTimeline(teamId, records) {
  return `<div class="plan-detail-list">${records.map((record, index) => {
    const data = planRecordData(record);
    return `<article class="plan-detail-card"><div class="timeline-heading"><span class="timeline-title"><strong>${record.type}</strong><span>${record.date}</span></span><span class="timeline-actions"><button class="text-button" data-action="editTeamPlanRecord" data-record-id="${record.id || ""}">Edit</button><button class="text-danger-button" data-action="deleteTeamPlanRecord" data-record-id="${record.id || ""}" data-index="${record.sourceIndex ?? index}">Delete</button></span></div><dl class="plan-detail-fields">${planDetailField("Current Situation", data.situation)}${planDetailField("Goal", data.goal)}${planDetailField("Gap", data.gap)}${planDetailField("Major Work / Action", data.work)}${planDetailField("Time Period", `${data.startDate || "Not set"} - ${data.endDate || "Not set"}`)}</dl></article>`;
  }).join("")}</div>`;
}

function planDetailField(label, value) {
  return `<div><dt>${label}</dt><dd>${value || ""}</dd></div>`;
}

function planRecordData(record = {}) {
  if (record.plan) return record.plan;
  const html = String(record.text || "");
  const text = html.replace(/<br\s*\/?>/gi, "\n");
  const pick = (label) => {
    const match = text.match(new RegExp(`${label}:\\s*([^\\n]*)`, "i"));
    return match ? match[1].trim() : "";
  };
  return {
    situation: pick("Situation"),
    goal: pick("Goal"),
    gap: pick("Gap"),
    work: pick("Action"),
    startDate: record.startDate || "",
    endDate: record.endDate || "",
  };
}

function planRecordText(plan) {
  return `Situation: ${plan.situation || ""}<br>Goal: ${plan.goal || ""}<br>Gap: ${plan.gap || ""}<br>Action: ${plan.work || ""}<br>Time Period: ${plan.startDate || "Not set"} - ${plan.endDate || "Not set"}`;
}

function sortRecordsDesc(records = []) {
  return [...records].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function bindActions(root = document) {
  root.querySelectorAll("[data-open-employee]").forEach((node) => node.addEventListener("click", () => openEmployee(node.dataset.openEmployee)));
  root.querySelectorAll("[data-action]").forEach((node) => node.addEventListener("click", () => handleAction(node)));
}

function handleAction(node) {
  const action = node.dataset.action;
  rememberProfileReturn(node);
  if (action === "settingsOrg") {
    state.page = "settings";
    state.settingsSection = "Organization";
    render();
  } else if (action === "addEmployee" && currentRole().canAddEmployee) employeeForm();
  else if (action === "editEmployee" && currentRole().canEditEmployee) employeeForm(state.people.find((p) => p.id === (node.dataset.person || state.selectedEmployeeId)));
  else if (action === "archiveEmployee" && currentRole().canArchiveEmployee) archiveForm(node.dataset.person);
  else if (action === "bulkArchiveEmployees" && currentRole().canArchiveEmployee) bulkArchiveForm();
  else if (action === "importEmployees" && currentRole().canImport) importForm();
  else if (action === "exportEmployees" && currentRole().canExport) exportEmployeesForm();
  else if (action === "exportData") exportData();
  else if (action === "addUnit" && currentRole().canEditOrg) unitForm();
  else if (action === "editUnit" && currentRole().canEditOrg) unitForm(unitById(node.dataset.unit));
  else if (action === "addTeam" && currentRole().canEditOrg) teamForm();
  else if (action === "transferEmployee" && currentRole().canEditOrg) transferForm();
  else if (action === "addConfig" && currentRole().canManageSettings) configForm(node.dataset.config);
  else if (action === "editRole" && currentRole().canManageSettings) roleForm(node.dataset.roleKey);
  else if (action === "addRoleAssignment" && currentRole().canManageSettings) roleAssignmentForm(node.dataset.roleKey);
  else if (action === "editRoleAssignment" && currentRole().canManageSettings) roleAssignmentForm(node.dataset.roleKey, Number(node.dataset.index));
  else if (action === "removeRoleAssignment" && currentRole().canManageSettings) removeRoleAssignment(node.dataset.roleKey, Number(node.dataset.index));
  else if (action === "toggleConfig" && currentRole().canManageSettings) toggleConfig(node.dataset.config, Number(node.dataset.index));
  else if (action === "deleteConfig" && currentRole().canManageSettings) deleteConfig(node.dataset.config, Number(node.dataset.index));
  else if (action === "addManagerRecord" && currentRole().canAddManagerRecord) recordForm(node.dataset.person, "records", "Add Manager Record");
  else if (action === "addHrbpInsight" && currentRole().canAddHrbpInsight) recordForm(node.dataset.person, "hrbpInsights", "Add HRBP Insight");
  else if (action === "addHistoryRecord" && currentRole().canEditEmployee) recordForm(node.dataset.person, "history", "Add History Record");
  else if (action === "addHrbpReview" && currentRole().canAddHrbpInsight) hrbpReviewForm(node.dataset.person);
  else if (action === "updateTalentRisk" && currentRole().canEditTalentJudgment) riskForm(node.dataset.person);
  else if (action === "assignRecognition" && currentRole().canEditEmployee) recognitionForm(node.dataset.person);
  else if (action === "createTalentAction" && currentRole().canCreateAction) actionForm(node.dataset.person);
  else if (action === "createTeamAction" && currentRole().canCreateAction) teamActionForm(node.dataset.team);
  else if (action === "addActivity" && currentRole().canCreateAction) activityForm();
  else if (action === "completeAction") completeAction(node.dataset.person, Number(node.dataset.index));
  else if (action === "completeTeamAction") completeTeamAction(node.dataset.actionId);
  else if (action === "archiveAction") archiveAction(node.dataset.person, Number(node.dataset.index));
  else if (action === "regenerateAiInsight") regenerateAiInsight(node.dataset.aiScope, node.dataset.aiId);
  else if (action === "feedbackAiInsight") feedbackAiInsight(node.dataset.aiScope, node.dataset.aiId, node.dataset.feedback);
  else if (action === "deleteRecord") deleteRecord(node.dataset.person, node.dataset.collection, node.dataset.recordId, Number(node.dataset.index));
  else if (action === "editTeamPlan") editTeamPlan();
  else if (action === "cancelTeamPlanEdit") cancelTeamPlanEdit();
  else if (action === "editTeamPlanRecord") editTeamPlanRecord(node.dataset.recordId);
  else if (action === "deleteTeamPlanRecord") deleteTeamPlanRecord(node.dataset.recordId, Number(node.dataset.index));
  else if (action === "saveTeamPlan") saveTeamPlan();
  else if (action === "language") toggleLanguage();
  else if (action === "appearance") toggleAppearance();
  else if (action === "importData") importDataForm();
  else if (action === "resetData") resetData();
  else toast("This role cannot perform that action.");
}

function rememberProfileReturn(node) {
  const profileActions = new Set(["editEmployee", "assignRecognition", "addManagerRecord", "addHrbpReview", "createTalentAction", "addHistoryRecord"]);
  if (el.drawer.classList.contains("profile-fullscreen") && profileActions.has(node.dataset.action)) {
    state.returnToEmployeeId = node.dataset.person || state.selectedEmployeeId;
  }
}

function employeeForm(person) {
  const isEdit = Boolean(person);
  openDrawer(isEdit ? "Edit Employee" : "Add Employee", "People Operations", `
    <form id="employeeForm" class="form-grid">
      ${field("Name", "name", person?.name || "")}${field("Employee number", "number", person?.number || nextNumber())}
      ${selectField("Business Unit", "unitId", state.units.map((u) => [u.id, u.name]), person?.unitId)}
      ${selectField("Team", "teamId", state.units.flatMap((u) => u.teams.map((t) => [t.id, t.name])), person?.teamId)}
      ${field("Job title", "title", person?.title || "Research Engineer")}${field("Level", "level", person?.level || "P3")}
      ${selectField("Contract type", "contract", contracts.map((c) => [c, c]), person?.contract)}
      ${field("Start date", "startDate", person?.startDate || "2026-07-14", "date")}
      ${field("Manager", "manager", person?.manager || "")}
      <div class="form-actions"><button class="secondary-button" type="button" data-close>Cancel</button><button class="primary-button">Save</button></div>
    </form>
  `);
  document.querySelector("#employeeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formData(event.target);
    const returnId = state.returnToEmployeeId;
    if (isEdit) Object.assign(person, data);
    else state.people.push({ ...data, id: `e${Date.now()}`, tags: [], awards: [], retentionRisk: "Low", promotionReadiness: "Not ready", successionStatus: "No formal succession case", internalMobility: "No active mobility plan", summary: `${data.name} is a ${data.title}.`, records: [], hrbpInsights: [], talentReviews: [], actions: [], history: [record("Created", "2026-07-14", "Employee added to the prototype.")] });
    closeDrawer(true);
    toast(isEdit ? "Employee updated." : "Employee added.");
    if (returnId && isEdit) openEmployee(person.id);
    else render();
  });
}

function unitForm(unit) {
  openDrawer(unit ? "Edit Business Unit" : "Add Business Unit", "Organization", `
    <form id="unitForm" class="form-grid">${field("Name", "name", unit?.name || "")}${field("Type", "type", unit?.type || "Research Lab")}${field("Leader", "leader", unit?.leader || "")}<div class="form-actions"><button class="primary-button">Save</button></div></form>
  `);
  document.querySelector("#unitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formData(event.target);
    if (unit) Object.assign(unit, data);
    else state.units.push({ id: `u${Date.now()}`, ...data, active: true, teams: [] });
    closeDrawer();
    toast("Organization updated.");
    render();
  });
}

function teamForm() {
  openDrawer("Add Team", "Organization", `<form id="teamForm" class="form-grid">${selectField("Business Unit", "unitId", state.units.map((u) => [u.id, u.name]))}${field("Team name", "name", "")}${field("Team Lead", "lead", "")}<div class="form-actions"><button class="primary-button">Save</button></div></form>`);
  document.querySelector("#teamForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formData(event.target);
    unitById(data.unitId).teams.push({ id: `t${Date.now()}`, name: data.name, lead: data.lead, active: true });
    closeDrawer();
    toast("Team added.");
    render();
  });
}

function transferForm() {
  openDrawer("Employee Transfer", "Organization", `<form id="transferForm" class="form-grid">${selectField("Employee", "personId", state.people.map((p) => [p.id, `${p.name} (${p.number})`]))}${selectField("Target Team", "teamId", state.units.flatMap((u) => u.teams.map((t) => [t.id, `${u.name} / ${t.name}`])))}<div class="form-actions"><button class="primary-button">Transfer</button></div></form>`);
  document.querySelector("#transferForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formData(event.target);
    const person = state.people.find((p) => p.id === data.personId);
    const unit = state.units.find((u) => u.teams.some((t) => t.id === data.teamId));
    person.teamId = data.teamId;
    person.unitId = unit.id;
    person.history.unshift(record("Team Transfer", "2026-07-14", `Transferred to ${teamById(data.teamId).name}.`));
    closeDrawer();
    toast("Employee transferred.");
    render();
  });
}

function recordForm(personId, key, title) {
  const defaultType = key === "records" ? "Outstanding contribution" : key === "history" ? "Role Change" : "Talent Insight";
  openDrawer(title, "Employee Profile", `<form id="recordForm" class="form-grid">${field("Record type", "type", defaultType)}${field("Date", "date", "2026-07-15", "date")}<label class="full">Content<textarea name="text" required></textarea></label><div class="form-actions"><button class="primary-button">Save</button></div></form>`);
  document.querySelector("#recordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.people.find((p) => p.id === personId)[key].unshift({ id: `record-${Date.now()}`, ...formData(event.target) });
    closeDrawer(true);
    save();
    toast("Record added.");
    openEmployee(personId);
  });
}

function riskForm(personId) {
  const person = state.people.find((p) => p.id === personId);
  openDrawer("Update Talent Judgment", "HRBP Insights", `<form id="riskForm" class="form-grid">${selectField("Retention Risk", "retentionRisk", ["Low", "Medium", "High"].map((v) => [v, v]), person.retentionRisk)}${selectField("Promotion Readiness", "promotionReadiness", ["Not ready", "Evidence needed", "Ready in 6-12 months"].map((v) => [v, v]), person.promotionReadiness)}<div class="form-actions"><button class="primary-button">Save</button></div></form>`);
  document.querySelector("#riskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    Object.assign(person, formData(event.target));
    closeDrawer(true);
    save();
    toast("Talent judgment updated.");
    openEmployee(personId);
  });
}

function hrbpReviewForm(personId) {
  const person = state.people.find((p) => p.id === personId);
  openDrawer("Edit Talent Review", "HRBP Insights", `
    <form id="hrbpReviewForm" class="form-grid">
      ${field("Record type", "type", "Talent Insight")}
      ${field("Date", "date", "2026-07-15", "date")}
      ${selectField("Retention Risk", "retentionRisk", ["Low", "Medium", "High"].map((v) => [v, v]), person.retentionRisk)}
      ${selectField("Promotion Readiness", "promotionReadiness", ["Not ready", "Evidence needed", "Ready in 6-12 months"].map((v) => [v, v]), person.promotionReadiness)}
      ${selectField("Succession", "successionStatus", ["No formal succession case", "Backup required", "Backup in development", "Successor identified"].map((v) => [v, v]), successionStatus(person))}
      ${selectField("Internal Mobility", "internalMobility", ["No active mobility plan", "Adjacent project exposure", "Ready for adjacent project exposure", "Potential internal transfer"].map((v) => [v, v]), internalMobility(person))}
      <label class="full">HRBP note<textarea name="text" placeholder="Optional note for this review"></textarea></label>
      <div class="form-actions"><button class="primary-button">Save Review</button></div>
    </form>
  `);
  document.querySelector("#hrbpReviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formData(event.target);
    person.retentionRisk = data.retentionRisk;
    person.promotionReadiness = data.promotionReadiness;
    person.successionStatus = data.successionStatus;
    person.internalMobility = data.internalMobility;
    person.talentReviews = person.talentReviews || [];
    person.talentReviews.unshift(talentReviewRecord(person, data.date));
    if (data.text.trim()) {
      person.hrbpInsights.unshift({ id: `hrbp-${Date.now()}`, type: data.type, date: data.date, text: data.text });
    }
    closeDrawer(true);
    save();
    toast("HRBP review saved.");
    openEmployee(personId);
  });
}

function recognitionForm(personId) {
  const person = state.people.find((p) => p.id === personId);
  openDrawer("Assign Tag / Award", "Employee Profile", `
    <form id="recognitionForm" class="form-grid">
      ${selectField("Talent Tag", "tag", [["", "No new tag"], ...active("tags").map((tag) => [tag.name, tag.name])])}
      ${selectField("Award", "award", [["", "No new award"], ...active("awards").map((award) => [award.name, award.name])])}
      <div class="form-actions"><button class="primary-button">Save</button></div>
    </form>
  `);
  document.querySelector("#recognitionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formData(event.target);
    if (data.tag && !person.tags.includes(data.tag)) person.tags.push(data.tag);
    if (data.award && !person.awards.includes(data.award)) person.awards.push(data.award);
    closeDrawer(true);
    toast("Tag and award assignment saved.");
    openEmployee(personId);
  });
}

function actionForm(personId) {
  const lockedPerson = personId ? state.people.find((person) => person.id === personId) : null;
  const employeeField = lockedPerson
    ? `<div class="readonly-field"><span>Employee</span><strong>${lockedPerson.name}</strong><small>${lockedPerson.number} · ${teamById(lockedPerson.teamId)?.name || ""}</small></div><input type="hidden" name="personId" value="${lockedPerson.id}" />`
    : selectField("Employee", "personId", scopedPeople().map((p) => [p.id, `${p.name} (${p.number})`]), personId);
  openDrawer("Add Development Action", "Employee Profile", `<form id="actionForm" class="form-grid">${employeeField}${selectField("Action type", "type", active("actionTypes").map((a) => [a.name, a.name]))}${field("Due date", "due", "2026-09-30", "date")}${field("Owner", "owner", currentRole().label)}<label class="full">Action description<textarea name="description" required>Build backup coverage and refresh evidence through a practical project.</textarea></label><div class="form-actions"><button class="primary-button">Save Action</button></div></form>`);
  document.querySelector("#actionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formData(event.target);
    const person = state.people.find((p) => p.id === data.personId);
    const returnId = state.returnToEmployeeId;
    person.actions.unshift({ id: `a${Date.now()}`, ...data, status: "Open" });
    closeDrawer(true);
    save();
    toast("Talent action created.");
    if (returnId) openEmployee(data.personId);
    else render();
  });
}

function teamActionForm(teamId) {
  const defaultTeamId = teamId || selectedTeamId();
  openDrawer("Add Team Development Action", "Team Management", `
    <form id="teamActionForm" class="form-grid">
      ${selectField("Team", "teamId", scopedTeams().map((team) => [team.id, team.name]), defaultTeamId)}
      ${selectField("Action type", "type", active("actionTypes").map((action) => [action.name, action.name]))}
      ${field("Start date", "startDate", currentDate(), "date")}
      ${field("Target date", "due", "2026-09-30", "date")}
      ${field("Owner", "owner", currentRole().label)}
      <label class="full">Action description<textarea name="description" required>Build shared capability and backup coverage for a team priority.</textarea></label>
      <div class="form-actions"><button class="primary-button">Save Team Action</button></div>
    </form>
  `);
  document.querySelector("#teamActionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.teamActions = state.teamActions || [];
    state.teamActions.unshift({ id: `team-action-${Date.now()}`, ...formData(event.target), status: "Open" });
    closeDrawer(true);
    save();
    toast("Team development action created.");
    render();
  });
}

function activityForm() {
  openDrawer("Add Activity", "Team Activities", `<form id="activityForm" class="form-grid">${selectField("Activity type", "type", active("activityTypes").map((a) => [a.name, a.name]))}${selectField("Team", "teamId", scopedTeams().map((t) => [t.id, t.name]))}${field("Date", "date", "2026-07-14", "date")}${field("Participants", "participants", "10", "number")}<label class="full">Short description<textarea name="description" required></textarea></label><div class="form-actions"><button class="primary-button">Save Activity</button></div></form>`);
  document.querySelector("#activityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.activities.unshift({ id: `act${Date.now()}`, ...formData(event.target) });
    closeDrawer();
    toast("Activity added.");
    render();
  });
}

function importForm() {
  openDrawer("Bulk Import Employees", "People Operations", `
    <div class="profile-overview">
      <section class="profile-section">
        <div class="section-header"><h2>Excel Template</h2><button class="secondary-button" data-action="downloadEmployeeTemplate">Download Template</button></div>
      </section>
      <form id="importForm" class="form-grid">
        <label class="full">Upload completed template<input type="file" name="file" accept=".csv,.tsv,.txt,.xls,.xlsx" /></label>
        <label class="full">Parsed rows<textarea name="rows" placeholder="name,employeeNumber,businessUnit,team,jobTitle,level,contract,startDate,manager"></textarea></label>
        <div id="importPreview" class="full"></div>
        <div class="form-actions"><button class="primary-button">Import Employees</button></div>
      </form>
    </div>
  `);
  document.querySelector("[data-action='downloadEmployeeTemplate']").addEventListener("click", downloadEmployeeTemplate);
  const form = document.querySelector("#importForm");
  form.file.addEventListener("change", () => {
    const file = form.file.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      form.rows.value = String(reader.result || "");
      renderImportPreview(form.rows.value);
    };
    reader.readAsText(file);
  });
  form.rows.addEventListener("input", () => renderImportPreview(form.rows.value));
  document.querySelector("#importForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const rows = parseEmployeeRows(formData(event.target).rows);
    rows.forEach((row) => {
      const unit = state.units.find((u) => u.name === row.businessUnit || u.teams.some((t) => t.name === row.team)) || state.units[0];
      const team = unit.teams.find((t) => t.name === row.team) || unit.teams[0];
      state.people.push({ id: `e${Date.now()}${Math.random()}`, number: row.employeeNumber || nextNumber(), name: row.name, unitId: unit.id, teamId: team.id, title: row.jobTitle || "Research Engineer", level: row.level || "P3", contract: contracts.includes(row.contract) ? row.contract : "Employee", startDate: row.startDate || currentDate(), manager: row.manager || team.lead, tags: [], awards: [], retentionRisk: "Low", promotionReadiness: "Not ready", successionStatus: "No formal succession case", internalMobility: "No active mobility plan", summary: `${row.name} imported into ${team.name}.`, records: [], hrbpInsights: [], talentReviews: [], actions: [], history: [record("Imported", currentDate(), "Imported from employee template.")] });
    });
    closeDrawer(true);
    toast(`${rows.length} employees imported.`);
    render();
  });
}

function downloadEmployeeTemplate() {
  const headers = ["name", "employeeNumber", "businessUnit", "team", "jobTitle", "level", "contract", "startDate", "manager"];
  const sample = ["Ava Stone", "00129999", "GPU Research Lab", "GPU Compiler Team", "Research Engineer", "P3", "Employee", currentDate(), "Lina Andersson"];
  const table = `<table><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr><tr>${sample.map((value) => `<td>${value}</td>`).join("")}</tr></table>`;
  downloadBlob("employee_import_template.xls", table, "application/vnd.ms-excel");
  toast("Employee template downloaded.");
}

function parseEmployeeRows(raw) {
  return String(raw || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean).filter((line) => !line.toLowerCase().startsWith("name,") && !line.toLowerCase().startsWith("name\t")).map((line) => {
    const cells = line.includes("\t") ? line.split("\t") : line.split(",");
    const [name, employeeNumber, businessUnit, team, jobTitle, level, contract, startDate, manager] = cells.map((cell) => cell.trim());
    return { name, employeeNumber, businessUnit, team, jobTitle, level, contract, startDate, manager };
  }).filter((row) => row.name);
}

function renderImportPreview(raw) {
  const rows = parseEmployeeRows(raw);
  const target = document.querySelector("#importPreview");
  if (!target) return;
  target.innerHTML = rows.length ? `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Team</th><th>Title</th><th>Contract</th></tr></thead><tbody>${rows.slice(0, 8).map((row) => `<tr><td>${row.name}</td><td>${row.team}</td><td>${row.jobTitle}</td><td>${row.contract || "Employee"}</td></tr>`).join("")}</tbody></table></div>` : "";
}

function archiveForm(personId) {
  const lockedPerson = personId ? state.people.find((person) => person.id === personId) : null;
  const employeeField = lockedPerson
    ? `<div class="readonly-field"><span>Employee</span><strong>${lockedPerson.name}</strong><small>${lockedPerson.number} · ${teamById(lockedPerson.teamId)?.name || ""}</small></div><input type="hidden" name="personId" value="${lockedPerson.id}" />`
    : selectField("Employee", "personId", scopedPeople().map((p) => [p.id, `${p.name} (${p.number})`]));
  openDrawer("Archive Employee", "People Operations", `<form id="archiveForm" class="form-grid">${employeeField}${field("Reason", "reason", "Prototype archive")}<div class="form-actions"><button class="danger-button">Archive</button></div></form>`);
  document.querySelector("#archiveForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const { personId, reason } = formData(event.target);
    const index = state.people.findIndex((p) => p.id === personId);
    if (index >= 0) state.archived.push({ ...state.people.splice(index, 1)[0], archivedReason: reason, archivedDate: "2026-07-14" });
    closeDrawer(true);
    toast("Employee archived.");
    render();
  });
}

function bulkArchiveForm() {
  openDrawer("Bulk Archive Employees", "People Operations", `<form id="bulkArchiveForm" class="form-grid">${employeeSelectionList()}${field("Reason", "reason", "Bulk archive")}<div class="form-actions"><button class="danger-button">Archive Selected</button></div></form>`);
  document.querySelector("#bulkArchiveForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = selectedEmployeeIds(event.target);
    const reason = formData(event.target).reason;
    state.people = state.people.filter((person) => {
      if (!selected.includes(person.id)) return true;
      state.archived.push({ ...person, archivedReason: reason, archivedDate: currentDate() });
      return false;
    });
    closeDrawer(true);
    toast(`${selected.length} employees archived.`);
    render();
  });
}

function exportEmployeesForm() {
  openDrawer("Export Employees", "People Operations", `<form id="exportEmployeesForm" class="form-grid">${employeeSelectionList()}<div class="form-actions"><button class="primary-button">Export Selected</button></div></form>`);
  document.querySelector("#exportEmployeesForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = selectedEmployeeIds(event.target);
    const people = state.people.filter((person) => selected.includes(person.id));
    downloadBlob("employees_export.csv", employeeCsv(people), "text/csv");
    closeDrawer(true);
    toast(`${people.length} employees exported.`);
  });
}

function employeeSelectionList() {
  return `<div class="full selection-list">${scopedPeople().map((person) => `<label class="selection-row"><input type="checkbox" name="employeeIds" value="${person.id}" /><span><strong>${person.name}</strong><small>${person.number} · ${teamById(person.teamId)?.name || ""}</small></span></label>`).join("")}</div>`;
}

function selectedEmployeeIds(form) {
  return [...form.querySelectorAll("input[name='employeeIds']:checked")].map((input) => input.value);
}

function employeeCsv(people) {
  const headers = ["name", "employeeNumber", "businessUnit", "team", "jobTitle", "level", "contract", "startDate", "manager"];
  const rows = people.map((person) => [person.name, person.number, unitById(person.unitId)?.name || "", teamById(person.teamId)?.name || "", person.title, person.level, person.contract, person.startDate, person.manager]);
  return [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
}

function csvCell(value) {
  return `"${String(value || "").replace(/"/g, '""')}"`;
}

function configForm(key) {
  openDrawer("Add Configuration Item", "Talent Configuration", `<form id="configForm" class="form-grid">${field("Name", "name", "")}<div class="form-actions"><button class="primary-button">Save</button></div></form>`);
  document.querySelector("#configForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.config[key].push(item(`${key}-${Date.now()}`, formData(event.target).name));
    closeDrawer();
    toast("Configuration item added.");
    render();
  });
}

function toggleConfig(key, index) {
  state.config[key][index].active = !state.config[key][index].active;
  toast("Configuration updated.");
  render();
}

function deleteConfig(key, index) {
  if (state.config[key][index]?.active) {
    toast("Deactivate before deleting.");
    return;
  }
  state.config[key].splice(index, 1);
  toast("Configuration item deleted.");
  render();
}

function completeAction(personId, index) {
  const person = state.people.find((p) => p.id === personId);
  person.actions[index].status = "Completed";
  toast("Action completed.");
  render();
}

function archiveAction(personId, index) {
  const person = state.people.find((p) => p.id === personId);
  if (!person?.actions?.[index]) return;
  const [action] = person.actions.splice(index, 1);
  state.archivedActions = state.archivedActions || [];
  state.archivedActions.unshift({
    ...action,
    id: action.id || `archived-action-${Date.now()}`,
    personId,
    archivedDate: currentDate(),
  });
  toast("Action archived.");
  render();
}

function regenerateAiInsight(scope, id) {
  const memory = aiMemory(scope, id);
  const promptField = document.querySelector(`[data-ai-prompt="${scope}:${id}"]`);
  const prompt = (promptField?.value || "").trim() || memory.prompt || "";
  memory.prompt = prompt;
  memory.lastInsight = scope === "team" ? generateTeamInsight(id, memory) : generatePersonInsight(id, memory);
  memory.generatedAt = currentDate();
  save();
  toast("AI insight generated.");
  if (scope === "person") openEmployee(id);
  else render();
}

function feedbackAiInsight(scope, id, feedback) {
  const memory = aiMemory(scope, id);
  memory.feedback = memory.feedback || [];
  memory.feedback.unshift({ type: feedback, date: currentDate(), prompt: memory.prompt });
  memory.lastInsight = scope === "team" ? generateTeamInsight(id, memory) : generatePersonInsight(id, memory);
  memory.generatedAt = currentDate();
  save();
  toast(feedback === "helpful" ? "AI feedback saved." : "AI will adjust from this feedback.");
  if (scope === "person") openEmployee(id);
  else render();
}

function completeTeamAction(actionId) {
  const action = (state.teamActions || []).find((item) => item.id === actionId);
  if (!action) return;
  action.status = "Completed";
  toast("Team action completed.");
  render();
}

function deleteRecord(personId, collection, recordId, index) {
  const person = state.people.find((p) => p.id === personId);
  const list = person?.[collection];
  if (!Array.isArray(list)) return;
  const actualIndex = recordId ? list.findIndex((item) => item.id === recordId) : index;
  if (actualIndex < 0) return;
  list.splice(actualIndex, 1);
  save();
  toast("Record deleted.");
  openEmployee(personId);
}

function editTeamPlan() {
  state.editingTeamPlanId = selectedTeamId();
  state.editingTeamPlanRecordId = "";
  render();
}

function cancelTeamPlanEdit() {
  state.editingTeamPlanId = "";
  state.editingTeamPlanRecordId = "";
  render();
}

function editTeamPlanRecord(recordId) {
  const teamId = selectedTeamId();
  state.editingTeamPlanId = teamId;
  state.editingTeamPlanRecordId = recordId;
  render();
}

function deleteTeamPlanRecord(recordId, index) {
  const teamId = selectedTeamId();
  const plan = state.teamPlans[teamId] || { history: [] };
  const actualIndex = recordId ? plan.history.findIndex((item) => item.id === recordId) : index;
  if (actualIndex < 0) return;
  plan.history.splice(actualIndex, 1);
  applyCurrentPlanFromHistory(teamId);
  state.editingTeamPlanId = "";
  state.editingTeamPlanRecordId = "";
  toast("Plan timeline record deleted.");
  render();
}

function saveTeamPlan() {
  const teamId = selectedTeamId();
  const existingPlan = state.teamPlans[teamId] || { history: [] };
  const nextPlan = {
    situation: document.querySelector("[name='situation']").value,
    goal: document.querySelector("[name='goal']").value,
    gap: document.querySelector("[name='gap']").value,
    work: document.querySelector("[name='work']").value,
    startDate: document.querySelector("[name='startDate']").value,
    endDate: document.querySelector("[name='endDate']").value,
  };
  const history = [...(existingPlan.history || [])];
  const record = {
    id: state.editingTeamPlanRecordId || `plan-${Date.now()}`,
    type: "Team Plan Saved",
    date: currentDate(),
    plan: nextPlan,
    text: planRecordText(nextPlan),
  };
  const recordIndex = state.editingTeamPlanRecordId ? history.findIndex((item) => item.id === state.editingTeamPlanRecordId) : -1;
  if (recordIndex >= 0) history[recordIndex] = record;
  else history.unshift(record);
  state.teamPlans[teamId] = { ...nextPlan, history };
  state.editingTeamPlanId = "";
  state.editingTeamPlanRecordId = "";
  toast("Team plan saved.");
  render();
}

function applyCurrentPlanFromHistory(teamId) {
  const plan = state.teamPlans[teamId] || { history: [] };
  const latest = sortRecordsDesc(plan.history || [])[0];
  const latestData = latest ? planRecordData(latest) : { situation: "", goal: "", gap: "", work: "", startDate: "", endDate: "" };
  state.teamPlans[teamId] = { ...latestData, history: plan.history || [] };
}

function resetData() {
  state = defaultState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  toast("Prototype data reset.");
  render();
}

function toggleLanguage() {
  state.system = state.system || {};
  state.system.language = state.system.language === "English" ? "Chinese" : "English";
  toast("Language preference saved.");
  render();
}

function toggleAppearance() {
  state.system = state.system || {};
  state.system.appearance = state.system.appearance === "Light" ? "High contrast" : "Light";
  document.body.classList.toggle("high-contrast", state.system.appearance === "High contrast");
  toast("Appearance preference saved.");
  render();
}

function importDataForm() {
  openDrawer("Import Mock Data", "System", `<form id="importDataForm" class="form-grid"><label class="full">Paste exported JSON<textarea name="json" required></textarea></label><div class="form-actions"><button class="primary-button">Import</button></div></form>`);
  document.querySelector("#importDataForm").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const imported = JSON.parse(formData(event.target).json);
      if (!imported.people?.length || !imported.units?.length) throw new Error("Invalid data");
      state = imported;
      closeDrawer();
      toast("Mock data imported.");
      render();
    } catch {
      toast("Import failed. Use exported prototype JSON.");
    }
  });
}

function exportData() {
  downloadBlob("research-talent-mock-data.json", JSON.stringify(state, null, 2), "application/json");
  toast("Mock data exported.");
}

function downloadBlob(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function bindFilters() {
  document.querySelectorAll("[data-filter]").forEach((field) => field.addEventListener("input", () => {
    state.filters[field.dataset.filter] = field.value;
    if (field.dataset.filter === "unit") state.filters.team = "All";
    render();
  }));
  document.querySelectorAll("[data-filter-set]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.filterSet;
    state.filters[key] = button.dataset.filterValue;
    if (key === "unit") state.filters.team = "All";
    render();
  }));
  document.querySelectorAll("[data-filter-reset]").forEach((button) => button.addEventListener("click", () => {
    state.filters.search = "";
    state.filters.unit = "All";
    state.filters.team = "All";
    state.filters.contract = "All";
    state.filters.tag = "All";
    render();
  }));
}

function inputFilter(label, key, value) {
  return `<label>${label}<input data-filter="${key}" value="${escapeAttr(value)}" /></label>`;
}

function selectFilter(label, key, options) {
  return `<label>${label}<select data-filter="${key}">${options.map(([value, text]) => `<option value="${value}" ${state.filters[key] === value ? "selected" : ""}>${text}</option>`).join("")}</select></label>`;
}

function field(label, name, value, type = "text") {
  return `<label>${label}<input type="${type}" name="${name}" value="${escapeAttr(value)}" required /></label>`;
}

function textarea(label, name, value, disabled) {
  return `<label>${label}<textarea name="${name}" ${disabled ? "disabled" : ""}>${escapeHtml(value)}</textarea></label>`;
}

function selectField(label, name, options, selected) {
  return `<label>${label}<select name="${name}">${options.map(([value, text]) => `<option value="${value}" ${selected === value ? "selected" : ""}>${text}</option>`).join("")}</select></label>`;
}

function formData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function currentDate() {
  return new Date().toISOString().slice(0, 10);
}

function active(key) {
  return state.config[key].filter((x) => x.active);
}

function tenure(dateString) {
  const start = new Date(dateString);
  const now = new Date("2026-07-14");
  const months = Math.max(1, (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth());
  return months < 12 ? `${months} mo` : `${Math.floor(months / 12)}y ${months % 12}m`;
}

function nextNumber() {
  return `00${120000 + state.people.length + state.archived.length + 1}`;
}

function openDrawer(title, eyebrow, body) {
  el.drawer.classList.remove("profile-fullscreen");
  el.drawerTitle.textContent = title;
  el.drawerEyebrow.textContent = eyebrow;
  el.drawerBody.innerHTML = body;
  el.drawerBackdrop.hidden = false;
  el.drawer.classList.add("open");
  el.drawer.setAttribute("aria-hidden", "false");
  el.drawerBody.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => closeDrawer()));
}

function closeDrawer(skipReturn = false) {
  const returnId = state.returnToEmployeeId;
  const wasProfile = el.drawer.classList.contains("profile-fullscreen");
  el.drawer.classList.remove("open");
  el.drawer.setAttribute("aria-hidden", "true");
  el.drawerBackdrop.hidden = true;
  state.returnToEmployeeId = "";
  if (!skipReturn && returnId) {
    openEmployee(returnId);
  } else if (!skipReturn && wasProfile && state.page === "people") {
    render();
  }
}

function toast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  window.setTimeout(() => el.toast.classList.remove("show"), 1800);
}

function empty(title, text) {
  return `<div class="empty-state"><h2>${title}</h2><p>${text}</p></div>`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}

init();
