const organization = {
  centers: ["Advanced Research Center"],
  businessUnits: [
    { name: "GPU Research Lab", type: "Research Lab", teams: ["GPU Architecture", "GPU Compiler", "GPU Runtime", "Performance Optimization"] },
    { name: "Storage System Research Lab", type: "Research Lab", teams: ["Distributed Storage", "Filesystem", "Storage Performance", "Data Reliability"] },
    { name: "Camera Technology Research Lab", type: "Research Lab", teams: ["Computational Photography", "Image Processing", "ISP", "Computer Vision"] },
    { name: "Wireless Technologies Research Lab", type: "Research Lab", teams: ["5G Research", "6G Research", "Radio Algorithms", "Signal Processing"] },
    { name: "Networking Research Lab", type: "Research Lab", teams: ["Network Architecture", "Routing", "Switching", "Network Security"] },
    { name: "AI Platform", type: "Platform", teams: ["LLM Platform", "AI Infrastructure", "MLOps"] },
    { name: "Research Infrastructure Platform", type: "Platform", teams: ["IT Infrastructure", "DevOps", "Internal Tools"] },
    { name: "HR & Operations", type: "Operations", teams: ["HR", "Recruiting", "Administration", "Finance", "Procurement"] },
  ],
};

const teamProfiles = {
  "GPU Architecture": {
    titles: ["Research Scientist", "Research Engineer", "GPU Architecture Engineer", "Principal Engineer"],
    capabilities: ["GPU Architecture", "Parallel Computing", "CUDA", "Performance Modeling", "Memory Hierarchy", "System Architecture", "Technical Leadership"],
    goal: "Define next-generation GPU architecture targets for AI and graphics workloads.",
    riskCapability: "Memory Hierarchy",
  },
  "GPU Compiler": {
    titles: ["GPU Compiler Engineer", "Compiler Engineer", "Research Engineer", "Staff Engineer"],
    capabilities: ["Compiler", "LLVM", "CUDA", "Parallel Computing", "Performance Optimization", "Runtime Codegen", "Technical Leadership"],
    goal: "Improve GPU compiler performance and reduce kernel launch overhead.",
    riskCapability: "Runtime Codegen",
  },
  "GPU Runtime": {
    titles: ["GPU Runtime Engineer", "Systems Engineer", "Research Engineer", "Platform Engineer"],
    capabilities: ["GPU Runtime", "CUDA", "Scheduling", "Driver Integration", "Performance Optimization", "Observability"],
    goal: "Improve runtime stability for multi-tenant research workloads.",
    riskCapability: "Driver Integration",
  },
  "Performance Optimization": {
    titles: ["Performance Engineer", "Research Engineer", "Benchmark Engineer", "Staff Engineer"],
    capabilities: ["Performance Optimization", "Benchmarking", "CUDA", "Profiling", "Parallel Computing", "Technical Mentoring"],
    goal: "Increase benchmark performance for critical internal GPU kernels.",
    riskCapability: "Profiling",
  },
  "Distributed Storage": {
    titles: ["Distributed Systems Engineer", "Storage Researcher", "Research Engineer", "Staff Engineer"],
    capabilities: ["Distributed Systems", "Storage", "Replication", "Consistency", "Data Reliability", "Performance Optimization"],
    goal: "Increase distributed storage reliability for research datasets.",
    riskCapability: "Consistency",
  },
  Filesystem: {
    titles: ["Filesystem Engineer", "Storage Researcher", "Systems Engineer", "Senior Engineer"],
    capabilities: ["Filesystem", "Linux Kernel", "Storage Performance", "Data Reliability", "Debugging", "Technical Design"],
    goal: "Modernize filesystem behavior for large model training artifacts.",
    riskCapability: "Linux Kernel",
  },
  "Storage Performance": {
    titles: ["Storage Performance Engineer", "Benchmark Engineer", "Systems Engineer", "Research Engineer"],
    capabilities: ["Storage Performance", "Benchmarking", "Profiling", "Distributed Systems", "Observability", "Performance Optimization"],
    goal: "Reduce storage tail latency for shared experiment clusters.",
    riskCapability: "Tail Latency Analysis",
  },
  "Data Reliability": {
    titles: ["Reliability Engineer", "Storage Researcher", "Data Reliability Engineer", "Senior Engineer"],
    capabilities: ["Data Reliability", "Fault Injection", "Replication", "Observability", "Incident Review", "Technical Leadership"],
    goal: "Improve recovery confidence for high-value research datasets.",
    riskCapability: "Fault Injection",
  },
  "Computational Photography": {
    titles: ["Camera Algorithm Engineer", "Research Scientist", "Computer Vision Engineer", "Principal Engineer"],
    capabilities: ["Computational Photography", "Image Processing", "Computer Vision", "HDR", "OpenCV", "Model Evaluation"],
    goal: "Develop next-generation image enhancement algorithms.",
    riskCapability: "HDR",
  },
  "Image Processing": {
    titles: ["Image Processing Engineer", "Camera Algorithm Engineer", "Research Engineer", "Senior Engineer"],
    capabilities: ["Image Processing", "ISP", "OpenCV", "Computer Vision", "Color Science", "Performance Optimization"],
    goal: "Improve image pipeline quality for low-light and motion scenarios.",
    riskCapability: "Color Science",
  },
  ISP: {
    titles: ["ISP Engineer", "Camera Systems Engineer", "Research Engineer", "Staff Engineer"],
    capabilities: ["ISP", "Image Processing", "Sensor Calibration", "Color Science", "Pipeline Optimization", "Technical Leadership"],
    goal: "Stabilize ISP tuning workflow across new sensor platforms.",
    riskCapability: "Sensor Calibration",
  },
  "Computer Vision": {
    titles: ["Computer Vision Engineer", "Research Scientist", "ML Research Engineer", "Staff Engineer"],
    capabilities: ["Computer Vision", "OpenCV", "Model Evaluation", "Python", "Dataset Curation", "Technical Mentoring"],
    goal: "Improve scene understanding models for camera research prototypes.",
    riskCapability: "Dataset Curation",
  },
  "5G Research": {
    titles: ["Wireless Research Scientist", "Radio Algorithm Engineer", "Signal Processing Engineer", "Senior Engineer"],
    capabilities: ["5G", "Radio Algorithms", "Signal Processing", "Beamforming", "Simulation", "Technical Design"],
    goal: "Improve 5G radio performance in dense urban scenarios.",
    riskCapability: "Beamforming",
  },
  "6G Research": {
    titles: ["Wireless Research Scientist", "6G Research Engineer", "Signal Processing Engineer", "Principal Engineer"],
    capabilities: ["6G", "Signal Processing", "Radio Algorithms", "Simulation", "Standards Research", "Technical Leadership"],
    goal: "Research 6G candidate technologies for long-range planning.",
    riskCapability: "Standards Research",
  },
  "Radio Algorithms": {
    titles: ["Radio Algorithm Engineer", "Wireless Research Scientist", "Research Engineer", "Staff Engineer"],
    capabilities: ["Radio Algorithms", "Beamforming", "Signal Processing", "Simulation", "Performance Optimization", "Mentoring"],
    goal: "Improve radio algorithms for new antenna configurations.",
    riskCapability: "Antenna Modeling",
  },
  "Signal Processing": {
    titles: ["Signal Processing Engineer", "Wireless Research Scientist", "Research Engineer", "Senior Engineer"],
    capabilities: ["Signal Processing", "Beamforming", "Python", "Simulation", "Algorithm Evaluation", "Technical Design"],
    goal: "Improve signal quality analysis tooling for wireless experiments.",
    riskCapability: "Algorithm Evaluation",
  },
  "Network Architecture": {
    titles: ["Network Architect", "Network Software Engineer", "Research Engineer", "Principal Engineer"],
    capabilities: ["Network Architecture", "SDN", "Routing", "Switching", "Network Security", "Technical Leadership"],
    goal: "Improve software-defined networking platform architecture.",
    riskCapability: "SDN",
  },
  Routing: {
    titles: ["Routing Engineer", "Network Software Engineer", "Systems Engineer", "Senior Engineer"],
    capabilities: ["Routing", "Network Architecture", "Linux Networking", "Performance Optimization", "Incident Review", "Technical Design"],
    goal: "Improve routing resilience for research cluster traffic.",
    riskCapability: "Linux Networking",
  },
  Switching: {
    titles: ["Switching Engineer", "Network Software Engineer", "Platform Engineer", "Research Engineer"],
    capabilities: ["Switching", "Network Architecture", "SDN", "Observability", "Performance Optimization", "Debugging"],
    goal: "Improve switching reliability for high-throughput research workloads.",
    riskCapability: "Switch Fabric Debugging",
  },
  "Network Security": {
    titles: ["Network Security Engineer", "Security Research Engineer", "Network Software Engineer", "Staff Engineer"],
    capabilities: ["Network Security", "Threat Modeling", "SDN", "Incident Review", "Access Control", "Technical Leadership"],
    goal: "Reduce security exposure in research network segmentation.",
    riskCapability: "Threat Modeling",
  },
  "LLM Platform": {
    titles: ["LLM Platform Engineer", "MLOps Engineer", "Research Engineer", "Staff Engineer"],
    capabilities: ["LLM Engineering", "Python", "MLOps", "Evaluation Framework", "Agent Architecture", "Prompt Evaluation", "Kubernetes"],
    goal: "Develop internal AI Agent platform for research teams.",
    riskCapability: "Agent Architecture",
  },
  "AI Infrastructure": {
    titles: ["AI Infrastructure Engineer", "Cloud Engineer", "Platform Engineer", "Senior Engineer"],
    capabilities: ["Cloud Infrastructure", "Kubernetes", "GPU Scheduling", "Observability", "MLOps", "Incident Review"],
    goal: "Improve internal AI training and inference infrastructure reliability.",
    riskCapability: "GPU Scheduling",
  },
  MLOps: {
    titles: ["MLOps Engineer", "Platform Engineer", "Research Engineer", "Senior Engineer"],
    capabilities: ["MLOps", "Kubernetes", "Model Evaluation", "Python", "CI/CD", "Observability"],
    goal: "Standardize model delivery and evaluation workflows.",
    riskCapability: "Model Evaluation",
  },
  "IT Infrastructure": {
    titles: ["System Administrator", "Cloud Engineer", "Infrastructure Engineer", "Senior Engineer"],
    capabilities: ["IT Infrastructure", "Cloud Infrastructure", "Access Control", "Incident Review", "Automation", "Service Operations"],
    goal: "Improve reliability of research center infrastructure services.",
    riskCapability: "Access Control",
  },
  DevOps: {
    titles: ["DevOps Engineer", "Platform Engineer", "Cloud Engineer", "Senior Engineer"],
    capabilities: ["DevOps", "CI/CD", "Kubernetes", "Automation", "Observability", "Service Operations"],
    goal: "Reduce deployment friction for research tools.",
    riskCapability: "CI/CD",
  },
  "Internal Tools": {
    titles: ["Internal Tools Engineer", "Platform Engineer", "Software Engineer", "Staff Engineer"],
    capabilities: ["Internal Tools", "Python", "Workflow Automation", "Product Thinking", "Service Operations", "User Research"],
    goal: "Improve internal tools for experiment tracking and research operations.",
    riskCapability: "Workflow Automation",
  },
  HR: {
    titles: ["HRBP", "Organization Development Specialist", "Talent Management Partner", "HR Specialist"],
    capabilities: ["Talent Management", "Organization Development", "Employee Relations", "Leadership Coaching", "Talent Calibration", "Workforce Planning"],
    goal: "Improve talent calibration and manager support across research labs.",
    riskCapability: "Talent Calibration",
  },
  Recruiting: {
    titles: ["Recruiter", "Technical Recruiter", "Recruiting Specialist", "Talent Sourcer"],
    capabilities: ["Recruitment", "Talent Mapping", "Interview Coordination", "Candidate Assessment", "Market Research", "Stakeholder Management"],
    goal: "Support hiring for critical research capabilities.",
    riskCapability: "Talent Mapping",
  },
  Administration: {
    titles: ["Administrative Specialist", "Operations Specialist", "Office Administrator", "Program Coordinator"],
    capabilities: ["Administration", "Procurement Coordination", "Event Operations", "Vendor Coordination", "Service Operations", "Workflow Automation"],
    goal: "Improve research center administrative service quality.",
    riskCapability: "Vendor Coordination",
  },
  Finance: {
    titles: ["Finance Specialist", "Financial Analyst", "Operations Analyst", "Budget Specialist"],
    capabilities: ["Finance", "Budget Planning", "Procurement", "Cost Analysis", "Reporting", "Stakeholder Management"],
    goal: "Improve project-level cost visibility for research investments.",
    riskCapability: "Cost Analysis",
  },
  Procurement: {
    titles: ["Procurement Specialist", "Vendor Manager", "Operations Specialist", "Sourcing Specialist"],
    capabilities: ["Procurement", "Vendor Management", "Contract Coordination", "Cost Analysis", "Service Operations", "Stakeholder Management"],
    goal: "Improve procurement cycle time for research hardware and services.",
    riskCapability: "Vendor Management",
  },
};

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
    canImportExport: true,
    canAddManagerRecord: true,
    canAddTalentInsight: true,
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
    canImportExport: false,
    canAddManagerRecord: false,
    canAddTalentInsight: false,
  },
  labDirector: {
    label: "Lab Director / PLR",
    scope: "GPU Research Lab",
    businessUnits: ["GPU Research Lab"],
    teams: "all",
    admin: false,
    canEditOrg: false,
    canEditTalentJudgment: false,
    canAddEmployees: false,
    canArchiveEmployees: false,
    canImportExport: false,
    canAddManagerRecord: true,
    canAddTalentInsight: false,
  },
  teamLead: {
    label: "Team Lead",
    scope: "GPU Compiler",
    businessUnits: ["GPU Research Lab"],
    teams: ["GPU Compiler"],
    admin: false,
    canEditOrg: false,
    canEditTalentJudgment: false,
    canAddEmployees: false,
    canArchiveEmployees: false,
    canImportExport: false,
    canAddManagerRecord: true,
    canAddTalentInsight: false,
  },
  hrbp: {
    label: "HRBP",
    scope: "GPU Compiler, Storage Performance, LLM Platform and MLOps",
    businessUnits: ["GPU Research Lab", "Storage System Research Lab", "AI Platform"],
    teams: ["GPU Compiler", "Storage Performance", "LLM Platform", "MLOps"],
    admin: false,
    canEditOrg: false,
    canEditTalentJudgment: true,
    canAddEmployees: false,
    canArchiveEmployees: false,
    canImportExport: false,
    canAddManagerRecord: false,
    canAddTalentInsight: true,
  },
};

const navItems = [
  ["home", "Home", "Role-specific work queue"],
  ["organization", "Organization", "Research Center structure at a glance"],
  ["people", "People", "Find employees and open profiles"],
  ["talentTeam", "Talent & Team", "Team situation and talent actions"],
  ["administration", "Administration", "Owner-only configuration and governance"],
];

const adminGroups = {
  Organization: ["Business Units & Teams", "Employee Transfers"],
  "People Operations": ["Add Employee", "Import Employees", "Archive Employee", "Former Employees", "Export Employees"],
  Access: ["User Accounts", "Role Assignment", "Scope Assignment", "HRBP Coverage"],
  "Talent Configuration": ["Talent Tags", "Awards", "Talent Action Types", "Activity Types"],
};

const firstNames = ["Alice", "Brian", "Carla", "David", "Elena", "Farid", "Grace", "Hao", "Iris", "Jonas", "Keiko", "Lina", "Maya", "Nikhil", "Olivia", "Priya", "Rui", "Sofia", "Tomas", "Wei", "Yara", "Zoe", "Marco", "Anika", "Daniel", "Mei", "Victor", "Nora", "Ahmed", "Julia"];
const lastNames = ["Chen", "Singh", "Novak", "Meyer", "Hoffmann", "Kumar", "Garcia", "Wang", "Tanaka", "Smith", "Rossi", "Patel", "Kim", "Li", "Schneider", "Ivanov", "Zhang", "Andersson", "Brown", "Liu", "Martinez", "Dubois", "Khan", "Fischer", "Nguyen", "Silva", "Wilson", "Moreau", "Sato", "Bauer"];
const levels = ["Junior Engineer", "Engineer", "Senior Engineer", "Staff Engineer", "Principal Engineer", "Distinguished Engineer"];
const talentTags = ["AI", "Technical Leader", "High Potential", "Key Position", "Outstanding Talent", "Mentor", "Domain Expert", "Critical Backup"];
const awards = ["Annual Innovation Award", "Technical Breakthrough Award", "Research Impact Award", "Collaboration Award", "Patent Contribution Award"];
const evidenceTypes = ["Project contribution", "Technical innovation", "Cross-team collaboration", "Mentoring", "Technical leadership", "Management observation", "Recent achievement"];
const actionTypes = ["Learning", "Mentoring", "Succession", "Knowledge Transfer", "Key Role Backup", "Internal Mobility"];
const configData = {
  talentTags: talentTags.map((name, index) => ({ id: `tag-${index + 1}`, name, active: true })),
  awards: awards.map((name, index) => ({ id: `award-${index + 1}`, name, active: true })),
  talentActionTypes: actionTypes.map((name, index) => ({ id: `action-${index + 1}`, name, active: true })),
  activityTypes: ["Team Event", "Technical Sharing", "Summit", "Cross-team collaboration"].map((name, index) => ({ id: `activity-${index + 1}`, name, active: true })),
  users: [
    { id: "u1", name: "Rui Zhang", role: "Owner", scope: "All Research Center", active: true },
    { id: "u2", name: "GPU Compiler Lead", role: "Team Lead", scope: "GPU Compiler", active: true },
    { id: "u3", name: "Research HRBP", role: "HRBP", scope: "GPU Compiler, Storage Performance, LLM Platform, MLOps", active: true },
  ],
};
const capabilityLevels = ["Basic", "Working", "Advanced", "Expert"];
const impactLevels = ["Emerging", "Medium", "High"];
const potentialLevels = ["Medium", "High", "Exceptional"];

function buildDataset() {
  const teamCounts = distributeEmployees();
  const people = [];
  let sequence = 0;
  organization.businessUnits.forEach((unit) => {
    unit.teams.forEach((team) => {
      const count = teamCounts[team] || 4;
      const profile = teamProfiles[team];
      for (let index = 0; index < count; index += 1) {
        sequence += 1;
        people.push(createEmployee(sequence, unit, team, profile, index));
      }
    });
  });
  people.forEach((employee) => {
    employee.manager = findManager(employee, people);
    employee.reportingLine = `${employee.manager} > ${employee.team} > ${employee.unit}`;
    employee.records = createManagerRecords(employee);
    employee.insights = employee.idNumber % 10 < 3 ? createTalentInsights(employee) : [];
    employee.growthPath = createGrowthPath(employee);
    employee.actions = createTalentActions(employee);
    employee.openActions = employee.actions.filter((action) => action.status !== "Completed").length;
    employee.summary = createSummary(employee);
  });
  return people;
}

function distributeEmployees() {
  const teams = organization.businessUnits.flatMap((unit) => unit.teams);
  const counts = {};
  teams.forEach((team) => {
    const isOperations = ["HR", "Recruiting", "Administration", "Finance", "Procurement"].includes(team);
    const isPlatform = ["LLM Platform", "AI Infrastructure", "MLOps", "IT Infrastructure", "DevOps", "Internal Tools"].includes(team);
    counts[team] = isOperations ? 4 : isPlatform ? 7 : 6;
  });
  ["GPU Compiler", "GPU Architecture", "Distributed Storage", "Computer Vision", "6G Research", "Network Security", "LLM Platform", "AI Infrastructure"].forEach((team) => {
    counts[team] += 2;
  });
  let total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  let cursor = 0;
  while (total < 200) {
    counts[teams[cursor % teams.length]] += 1;
    total += 1;
    cursor += 1;
  }
  while (total > 200) {
    const team = teams[cursor % teams.length];
    if (counts[team] > 4) {
      counts[team] -= 1;
      total -= 1;
    }
    cursor += 1;
  }
  return counts;
}

function createEmployee(sequence, unit, team, profile, teamIndex) {
  const contract = sequence <= 160 ? "Employee" : sequence <= 190 ? "Leased Labour" : "Intern";
  const level = teamIndex === 0 && !unit.name.includes("Operations") ? "Team Lead" : contract === "Intern" ? "Junior Engineer" : levels[(sequence + teamIndex) % levels.length];
  const title = teamIndex === 0 && level === "Team Lead" ? "Team Lead" : profile.titles[(sequence + teamIndex) % profile.titles.length];
  const first = firstNames[sequence % firstNames.length];
  const last = lastNames[(sequence * 7) % lastNames.length];
  const startYear = 2018 + (sequence % 8);
  const startMonth = `${1 + (sequence % 12)}`.padStart(2, "0");
  const startDay = `${1 + ((sequence * 3) % 27)}`.padStart(2, "0");
  const capabilityCount = 3 + (sequence % 6);
  const capabilities = profile.capabilities.slice(0, capabilityCount).map((name, index) => ({
    name,
    level: capabilityLevels[Math.min(3, Math.floor((sequence + index) % 5))],
    source: index < 2 ? "Manager-confirmed" : sequence % 3 === 0 ? "AI-inferred" : "Project evidence",
    evidenceQuality: index < 2 ? "Strong" : sequence % 4 === 0 ? "Weak" : "Moderate",
  }));
  const tags = [];
  if (sequence % 5 === 0) tags.push("High Potential");
  if (sequence % 7 === 0) tags.push("Technical Leader");
  if (sequence % 11 === 0) tags.push("Key Position");
  if (sequence % 13 === 0) tags.push("Outstanding Talent");
  if (!tags.length && sequence % 3 === 0) tags.push(talentTags[sequence % talentTags.length]);
  return {
    id: `e${sequence}`,
    idNumber: sequence,
    number: employeeNumber(sequence, contract),
    name: `${first} ${last}`,
    title,
    level,
    unit: unit.name,
    team,
    contract,
    startDate: `${startYear}-${startMonth}-${startDay}`,
    manager: "",
    reportingLine: "",
    tags,
    awards: sequence % 16 === 0 ? [awards[sequence % awards.length]] : [],
    currentImpact: impactLevels[sequence % impactLevels.length],
    growthPotential: potentialLevels[(sequence + 1) % potentialLevels.length],
    retentionRisk: sequence % 17 === 0 ? "High" : sequence % 6 === 0 ? "Medium" : "Low",
    promotionReadiness: sequence % 9 === 0 ? "Potentially Ready in 6-12 Months" : sequence % 4 === 0 ? "Evidence Needed" : "Not Ready",
    dependency: sequence % 11 === 0 ? `Primary owner for ${profile.riskCapability}` : sequence % 7 === 0 ? `Backup candidate for ${profile.riskCapability}` : "No critical dependency",
    nineBox: `${impactLevels[sequence % impactLevels.length]} Impact / ${potentialLevels[(sequence + 1) % potentialLevels.length]} Potential`,
    capabilities,
  };
}

function employeeNumber(sequence, contract) {
  if (contract === "Employee") return `00${String(120000 + sequence).slice(-6)}`;
  if (contract === "Leased Labour") return sequence % 2 === 0 ? `84${String(230000 + sequence).slice(-6)}` : `wx${String(4000 + sequence)}`;
  return `500${String(10000 + sequence).slice(-5)}`;
}

function findManager(employee, people) {
  if (employee.level === "Team Lead") return `${employee.unit} Director`;
  const lead = people.find((person) => person.team === employee.team && person.level === "Team Lead");
  return lead ? lead.name : `${employee.team} Lead`;
}

function createManagerRecords(employee) {
  const count = 3 + (employee.idNumber % 6);
  return Array.from({ length: count }, (_, index) => {
    const capability = employee.capabilities[index % employee.capabilities.length].name;
    const month = `${1 + ((employee.idNumber + index) % 6)}`.padStart(2, "0");
    const day = `${6 + ((employee.idNumber * index + 3) % 21)}`.padStart(2, "0");
    return [
      evidenceTypes[(employee.idNumber + index) % evidenceTypes.length],
      `2026-${month}-${day}`,
      `${capability} evidence`,
      `${employee.name} contributed to ${employee.team} work involving ${capability}, with visible impact on the team's annual goal.`,
    ];
  });
}

function createTalentInsights(employee) {
  const capability = employee.capabilities[0].name;
  return [
    ["Strength", "2026-05-12", "HRBP", `${employee.name} shows consistent professional evidence in ${capability}.`],
    ["Growth Opportunity", "2026-06-08", "HRBP", `Broader cross-team exposure would strengthen readiness for larger responsibility.`],
    employee.retentionRisk === "High"
      ? ["Talent Risk", "2026-06-21", "HRBP", `Dependency risk is elevated because ${employee.name} is attached to critical ${capability} coverage.`]
      : ["Development Suggestion", "2026-06-21", "HRBP", `Create a focused learning or mentoring action connected to ${capability}.`],
  ];
}

function createGrowthPath(employee) {
  return [
    ["Major project", "2026-03-01", `${employee.team} annual priority contribution`, `Delivered evidence connected to ${employee.capabilities[0].name}.`],
    ["Development milestone", "2025-09-15", `${employee.capabilities[1]?.name || employee.capabilities[0].name} capability development`, "Manager validated progress through project work."],
    ["Role change", employee.startDate, employee.title, `Joined ${employee.unit} / ${employee.team}.`],
  ];
}

function createTalentActions(employee) {
  const actions = [];
  if (employee.idNumber % 4 === 0) {
    actions.push({ type: "Learning", status: "Open", capability: employee.capabilities[0].name, owner: employee.manager, due: "2026-09-30" });
  }
  if (employee.idNumber % 9 === 0) {
    actions.push({ type: "Key Role Backup", status: "In Progress", capability: employee.capabilities[1]?.name || employee.capabilities[0].name, owner: employee.manager, due: "2026-10-31" });
  }
  if (employee.idNumber % 14 === 0) {
    actions.push({ type: actionTypes[employee.idNumber % actionTypes.length], status: "Completed", capability: employee.capabilities[0].name, owner: employee.manager, due: "2026-04-30" });
  }
  return actions;
}

function createSummary(employee) {
  const capability = employee.capabilities[0].name;
  const risk = employee.retentionRisk === "High" ? " Retention-related dependency should be reviewed by HRBP." : "";
  return `${employee.name} is a ${employee.title} in ${employee.team} with strongest evidence in ${capability}. Current records show ${employee.currentImpact.toLowerCase()} impact and ${employee.growthPotential.toLowerCase()} growth potential.${risk}`;
}

const employees = buildDataset();

const capabilities = [
  {
    name: "Runtime Codegen",
    category: "GPU",
    team: "GPU Compiler",
    goal: teamProfiles["GPU Compiler"].goal,
    target: "Advanced",
    requiredPeople: "1 Primary, 2 Backup",
    gap: "Backup Gap",
    severity: "High",
    recommendation: "Create backup coverage by pairing two Senior Engineers with the current compiler owner on the Q3 codegen project.",
  },
  {
    name: "Fault Injection",
    category: "Storage",
    team: "Data Reliability",
    goal: teamProfiles["Data Reliability"].goal,
    target: "Working",
    requiredPeople: "1 Primary, 1 Backup",
    gap: "No Coverage",
    severity: "High",
    recommendation: "Start an internal learning action before considering external hiring; Distributed Storage has adjacent reliability expertise.",
  },
  {
    name: "HDR",
    category: "Camera",
    team: "Computational Photography",
    goal: teamProfiles["Computational Photography"].goal,
    target: "Expert",
    requiredPeople: "1 Primary, 1 Secondary",
    gap: "Single-Point Risk",
    severity: "High",
    recommendation: "Create knowledge transfer from the primary HDR owner and assign one Computer Vision engineer as secondary coverage.",
  },
  {
    name: "Standards Research",
    category: "Wireless",
    team: "6G Research",
    goal: teamProfiles["6G Research"].goal,
    target: "Advanced",
    requiredPeople: "2 Primary",
    gap: "Depth Gap",
    severity: "Medium",
    recommendation: "Assign one senior radio researcher to standards work and add monthly evidence reviews.",
  },
  {
    name: "Threat Modeling",
    category: "Networking",
    team: "Network Security",
    goal: teamProfiles["Network Security"].goal,
    target: "Working",
    requiredPeople: "1 Primary, 1 Backup",
    gap: "Evidence Gap",
    severity: "Medium",
    recommendation: "Ask Network Security managers to validate recent project evidence before confirming coverage.",
  },
  {
    name: "Agent Architecture",
    category: "AI Platform",
    team: "LLM Platform",
    goal: teamProfiles["LLM Platform"].goal,
    target: "Advanced",
    requiredPeople: "1 Primary, 2 Backup",
    gap: "Backup Gap",
    severity: "High",
    recommendation: "Create a 90-day mentoring and prototype action for two LLM Platform engineers.",
  },
  {
    name: "GPU Scheduling",
    category: "AI Infrastructure",
    team: "AI Infrastructure",
    goal: teamProfiles["AI Infrastructure"].goal,
    target: "Working",
    requiredPeople: "1 Primary, 1 Backup",
    gap: "Capacity Gap",
    severity: "Medium",
    recommendation: "Use cross-team support from GPU Runtime and create a learning action owned by AI Infrastructure.",
  },
  {
    name: "Talent Calibration",
    category: "HR",
    team: "HR",
    goal: teamProfiles.HR.goal,
    target: "Working",
    requiredPeople: "2 Primary",
    gap: "Future Gap",
    severity: "Medium",
    recommendation: "Develop calibration facilitation capability before Q4 promotion review.",
  },
].map((capability) => ({
  ...capability,
  coverage: buildCoverage(capability),
}));

const annualGoals = organization.businessUnits.flatMap((unit) =>
  unit.teams.map((team) => {
    const profile = teamProfiles[team];
    return [profile.goal, team, "2026 Annual Goal", `Requires ${profile.capabilities.slice(0, 4).join(", ")} coverage.`];
  })
);

const state = {
  page: "home",
  role: "owner",
  selectedEmployee: "e1",
  talentTab: "Overview",
  talentTeamView: "Team Plan",
  developmentView: "Requires Attention",
  adminSection: "Business Units & Teams",
  search: "",
  orgSearch: "",
  adminSearch: "",
  actionContext: {},
  aiOutputs: [],
};

const el = {
  nav: document.querySelector("#primaryNav"),
  roleSelect: document.querySelector("#roleSelect"),
  roleScope: document.querySelector("#roleScope"),
  scopeFilter: document.querySelector(".scope-filter"),
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

function buildCoverage(capability) {
  const teamPeople = employees.filter((employee) => employee.team === capability.team);
  const evidence = teamPeople
    .filter((employee) => employee.capabilities.some((item) => item.name === capability.name || item.name.includes(capability.name.split(" ")[0])))
    .slice(0, capability.gap === "No Coverage" ? 0 : capability.gap === "Single-Point Risk" ? 1 : 3);
  return evidence.map((employee, index) => [
    employee.name,
    index === 0 ? capability.target : "Working",
    index === 0 ? "Primary" : index === 1 ? "Secondary" : "Backup",
    index === 0 ? "Strong" : capability.gap === "Evidence Gap" ? "Weak" : "Moderate",
    index === 0 ? "Manager-confirmed" : "AI-inferred",
  ]);
}

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
    if (employee.archived) return false;
    const unitOk = role.businessUnits === "all" || role.businessUnits.includes(employee.unit);
    const teamOk = role.teams === "all" || role.teams.includes(employee.team);
    const selectedUnit = el.businessFilter.value;
    const selectedTeam = el.teamFilter.value;
    const filterUnitOk = selectedUnit === "All permitted units" || employee.unit === selectedUnit;
    const filterTeamOk = selectedTeam === "All permitted teams" || employee.team === selectedTeam;
    return unitOk && teamOk && filterUnitOk && filterTeamOk;
  });
}

function capabilitiesInScope() {
  const teams = new Set(employeesInScope().map((employee) => employee.team));
  return capabilities.filter((capability) => teams.has(capability.team) || currentRole().teams === "all");
}

function setOptions(select, values, selectedValue) {
  select.innerHTML = values.map((value) => `<option>${value}</option>`).join("");
  if (values.includes(selectedValue)) select.value = selectedValue;
}

function activeConfig(key) {
  return configData[key].filter((item) => item.active);
}

function init() {
  el.roleSelect.innerHTML = Object.entries(roles).map(([key, role]) => `<option value="${key}">${role.label}</option>`).join("");
  el.roleSelect.value = state.role;
  setOptions(el.centerFilter, organization.centers, organization.centers[0]);
  bindEvents();
  render();
}

function bindEvents() {
  el.roleSelect.addEventListener("change", () => {
    state.role = el.roleSelect.value;
    state.page = "home";
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
    .map(([key, label, description]) => `<button class="nav-button ${state.page === key ? "active" : ""}" data-page="${key}" title="${description}"><span>${navIcon(key)}</span>${label}</button>`)
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
  return { home: "⌂", organization: "╬", people: "◎", talentTeam: "▦", administration: "⚙" }[key];
}

function renderFilters(reset) {
  const units = ["All permitted units", ...allowedBusinessUnits()];
  const defaultUnit = Array.isArray(currentRole().businessUnits) && currentRole().businessUnits.length === 1 ? currentRole().businessUnits[0] : units[0];
  const selectedUnit = reset || !units.includes(el.businessFilter.value) ? defaultUnit : el.businessFilter.value;
  setOptions(el.businessFilter, units, selectedUnit);
  const teamSource = selectedUnit === "All permitted units" ? allowedBusinessUnits().flatMap((unit) => allowedTeamsFor(unit)) : allowedTeamsFor(selectedUnit);
  const teams = ["All permitted teams", ...teamSource];
  const defaultTeam = Array.isArray(currentRole().teams) && currentRole().teams.length === 1 ? currentRole().teams[0] : teams[0];
  const selectedTeam = reset || !teams.includes(el.teamFilter.value) ? defaultTeam : el.teamFilter.value;
  setOptions(el.teamFilter, teams, selectedTeam);
  updateScopeSummary();
}

function updateScopeSummary() {
  el.scopeSummary.textContent = `Viewing: ${[el.centerFilter.value, el.businessFilter.value, el.teamFilter.value, el.periodFilter.value].filter(Boolean).join(" / ")}`;
}

function setHeader(title, subtitle, actions = "") {
  el.pageTitle.textContent = title;
  el.pageSubtitle.textContent = subtitle;
  el.topbarActions.innerHTML = actions;
  bindToastButtons(el.topbarActions);
  bindActionButtons(el.topbarActions);
  bindNavigationButtons(el.topbarActions);
}

function renderPage() {
  el.scopeFilter.hidden = true;
  updateScopeSummary();
  const pageMap = {
    home: renderOverview,
    people: renderPeople,
    talent: renderTalent,
    talentTeam: renderTalentTeam,
    organization: renderOrganization,
    administration: renderAdministration,
  };
  (pageMap[state.page] || renderOverview)();
}

function renderOverview() {
  const scoped = employeesInScope();
  const scopedCapabilities = capabilitiesInScope();
  const critical = scopedCapabilities.filter((capability) => capability.severity === "High");
  const risks = scoped.filter((employee) => employee.retentionRisk === "High" || employee.dependency !== "No critical dependency");
  const openActions = scoped.flatMap((employee) => employee.actions.filter((action) => action.status !== "Completed").map((action) => ({ employee, action })));
  const landing = roleLanding(scoped, critical, risks, openActions);
  setHeader(
    "Home",
    landing.question,
    ""
  );
  el.content.innerHTML = `
    <section>
      <div class="section-header"><div><h2>${landing.label}</h2><p>${landing.summary}</p></div></div>
      ${decisionList(landing.items)}
    </section>
  `;
  bindNavigationButtons(el.content);
}

function roleLanding(scoped, critical, risks, openActions) {
  if (state.role === "hrbp") {
    const staleInsights = scoped.filter((employee) => employee.insights.length && employee.idNumber % 2 === 0);
    return {
      label: "HRBP talent briefing",
      question: "Which talent reviews need attention?",
      conclusion: `${risks.slice(0, 5).length} talent reviews need HRBP attention`,
      summary: "Focus on retention risk, promotion readiness and open talent actions in your assigned coverage.",
      primaryAction: "Open Talent Review Queue",
      items: [
        ...risks.slice(0, 3).map((employee) => ({ label: "Retention", title: employee.name, detail: `${employee.retentionRisk} retention risk; ${employee.promotionReadiness}.`, tone: employee.retentionRisk === "High" ? "danger" : "warning", target: `employee:${employee.id}` })),
        ...staleInsights.slice(0, 2).map((employee) => ({ label: "Insight", title: employee.name, detail: "Talent Insight should be refreshed before the next calibration review.", tone: "warning", target: `employee:${employee.id}:HRBP Records` })),
      ],
    };
  }
  if (state.role === "teamLead") {
    return {
      label: "Team lead briefing",
      question: "What does my team need today?",
      conclusion: `${openActions.length} actions or capability risks need follow-up`,
      summary: "Focus on assigned team actions, recent employee evidence and missing backup coverage.",
      primaryAction: "Open Team Tasks",
      items: [
        { label: "Team", title: currentRole().teams[0], detail: "Open the assigned team summary and team plan.", tone: "blue", target: `team:${currentRole().teams[0]}` },
        ...openActions.slice(0, 2).map(({ employee, action }) => ({ label: "Action", title: employee.name, detail: `${action.type} for ${action.capability}; due ${action.due}.`, tone: "warning", target: `employee:${employee.id}:Development` })),
        ...critical.slice(0, 2).map((capability) => ({ label: capability.gap, title: capability.name, detail: capability.recommendation, tone: "danger", target: `team:${capability.team}:Team Plan` })),
      ],
    };
  }
  if (state.role === "labDirector") {
    return {
      label: "Lab readiness briefing",
      question: "Which team in my lab needs attention?",
      conclusion: `${critical.length} lab readiness risks need review`,
      summary: "Focus on team-level readiness, missing backups and open development actions inside your assigned lab.",
      primaryAction: "Review Lab Readiness",
      items: [
        { label: "Lab", title: currentRole().businessUnits[0], detail: "Open assigned lab structure and teams.", tone: "blue", target: `unit:${currentRole().businessUnits[0]}` },
        ...critical.slice(0, 3).map((capability) => ({ label: capability.gap, title: capability.team, detail: `${capability.name}: ${capability.recommendation}`, tone: "danger", target: `team:${capability.team}:Team Plan` })),
        ...openActions.slice(0, 1).map(({ employee, action }) => ({ label: "Action", title: employee.name, detail: `${action.type} due ${action.due}.`, tone: "warning", target: `employee:${employee.id}:Development` })),
      ],
    };
  }
  if (state.role === "director") {
    return {
      label: "Research Center briefing",
      question: "What requires leadership attention?",
      conclusion: `${critical.length} organization-level risks require review`,
      summary: "Focus on major capability risks, teams requiring attention and promotion calibration candidates.",
      primaryAction: "Review Leadership Queue",
      items: [
        ...critical.slice(0, 3).map((capability) => ({ label: capability.gap, title: `${capability.team}: ${capability.name}`, detail: capability.recommendation, tone: "danger", target: `team:${capability.team}:Team Plan` })),
        ...risks.slice(0, 2).map((employee) => ({ label: "Dependency", title: employee.name, detail: employee.dependency, tone: "warning", target: `employee:${employee.id}` })),
      ],
    };
  }
  return {
    label: "Owner briefing",
    question: "What requires attention now?",
    conclusion: `${critical.length} capability risks and ${openActions.length} open actions need governance`,
    summary: "Focus on critical decisions, pending approvals, organizational changes and system configuration issues.",
    primaryAction: "Review Owner Queue",
    items: [
      { label: "Approval", title: "Pending employee and organization changes", detail: "Review People Operations and Business Unit changes.", tone: "blue", target: "admin:Business Units & Teams" },
      ...critical.slice(0, 2).map((capability) => ({ label: capability.gap, title: `${capability.team}: ${capability.name}`, detail: capability.recommendation, tone: "danger", target: `team:${capability.team}:Team Plan` })),
      { label: "Governance", title: "Access and HRBP coverage", detail: "Review role assignments and HRBP coverage after recent structure changes.", tone: "warning", target: "admin:HRBP Coverage" },
      ...openActions.slice(0, 1).map(({ employee, action }) => ({ label: "Approval", title: employee.name, detail: `${action.type} for ${action.capability} needs owner visibility.`, tone: "blue", target: `employee:${employee.id}:Development` })),
    ],
  };
}

function decisionList(items) {
  if (!items.length) return `<div class="empty-state"><h2>No urgent decisions</h2><p>This scope has no immediate review item.</p></div>`;
  return `
    <div class="decision-list">
      ${items.map((item) => `
        <button class="decision-row" ${item.target ? `data-target="${item.target}"` : "disabled"}>
          <span class="badge ${item.tone}">${item.label}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
        </button>
      `).join("")}
    </div>
  `;
}

function metric(label, value, note) {
  return `<div class="metric"><strong>${value}</strong><span>${label}</span><p class="muted">${note}</p></div>`;
}

function aiMeta(label, date, period, confidence, freshness) {
  return `<div class="ai-meta"><span class="badge ai">AI-generated</span><span class="badge">${label}</span><span class="badge blue">${freshness}</span></div>`;
}

function renderPromptOutputs(page) {
  const outputs = state.aiOutputs.filter((output) => output.page === page);
  if (!outputs.length) return "";
  return `
    <section class="grid">
      ${outputs.map((output) => `
        <article class="ai-panel">
          ${aiMeta("Prompt-generated intelligence", output.date, output.scope, "Moderate", "Requires Review")}
          <h2>${output.title}</h2>
          <p><strong>Prompt:</strong> ${escapeHtml(output.prompt)}</p>
          <p>${escapeHtml(output.response)}</p>
          <div class="button-row"><button class="secondary-button" data-drawer="briefing">View Evidence</button></div>
        </article>
      `).join("")}
    </section>
  `;
}

function recommendationTable(items = capabilitiesInScope()) {
  return `
    <table>
      <thead><tr><th>Recommendation</th><th>Team</th><th>Gap</th><th>Owner</th><th></th></tr></thead>
      <tbody>
        ${items.map((capability) => `
          <tr>
            <td>${capability.recommendation}</td>
            <td>${capability.team}</td>
            <td><span class="badge ${capability.severity === "High" ? "danger" : "warning"}">${capability.gap}</span></td>
            <td>${capability.gap === "Evidence Gap" ? "Manager + HRBP" : "Team Lead"}</td>
            <td><button class="secondary-button" data-drawer="cap-${capability.name}">View Evidence</button></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function tenure(employee) {
  const start = new Date(employee.startDate);
  const now = new Date("2026-07-14");
  let months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  if (now.getDate() < start.getDate()) months -= 1;
  if (months < 12) return `${Math.max(1, months)} mo`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return remainingMonths ? `${years}y ${remainingMonths}m` : `${years}y`;
}

function attentionIndicator(employee) {
  if (employee.retentionRisk === "High") return '<span class="badge danger">Attention</span>';
  if (employee.openActions) return '<span class="badge warning">Open action</span>';
  if (employee.dependency !== "No critical dependency") return '<span class="badge warning">Key person</span>';
  return "";
}

function bindEmployeeLinks(root = document) {
  root.querySelectorAll("[data-employee]").forEach((button) => {
    if (button.dataset.employeeBound) return;
    button.dataset.employeeBound = "true";
    button.addEventListener("click", () => {
      state.selectedEmployee = button.dataset.employee;
      state.page = "talent";
      state.talentTab = "Overview";
      renderNav();
      renderPage();
    });
  });
}

function renderPeople() {
  const role = currentRole();
  setHeader(
    "People",
    "Find and understand employees quickly.",
    `${role.canAddEmployees ? '<button class="primary-button" data-action="addEmployee">Add Employee</button>' : ""}
     ${role.canImportExport ? '<button class="secondary-button" data-action="importEmployees">Import Employees</button><button class="secondary-button" data-action="exportEmployees">Export Employees</button>' : ""}`
  );
  const scoped = employeesInScope();
  const unitOptions = ["All permitted units", ...allowedBusinessUnits()];
  const teamOptions = ["All permitted teams", ...(el.businessFilter.value === "All permitted units" ? allowedBusinessUnits().flatMap((unit) => allowedTeamsFor(unit)) : allowedTeamsFor(el.businessFilter.value))];
  el.content.innerHTML = `
    <section class="people-tools">
      <div><label for="peopleSearch">Search by name or employee number</label><input id="peopleSearch" value="${state.search}" placeholder="Search people" /></div>
      <div><label for="peopleUnitFilter">Business Unit</label><select id="peopleUnitFilter">${unitOptions.map((unit) => `<option ${unit === el.businessFilter.value ? "selected" : ""}>${unit}</option>`).join("")}</select></div>
      <div><label for="peopleTeamFilter">Team</label><select id="peopleTeamFilter">${teamOptions.map((team) => `<option ${team === el.teamFilter.value ? "selected" : ""}>${team}</option>`).join("")}</select></div>
      <div><label for="contractFilter">Contract type</label><select id="contractFilter"><option>All contracts</option><option>Employee</option><option>Leased Labour</option><option>Intern</option></select></div>
      <div><label for="tagFilter">Talent tag</label><select id="tagFilter"><option>All tags</option>${activeConfig("talentTags").map((item) => `<option>${item.name}</option>`).join("")}</select></div>
    </section>
    <section>
      <div class="section-header"><div><h2>People in Scope</h2><p id="peopleCount"></p></div></div>
      <div class="people-card-grid" id="peopleCards"></div>
    </section>
  `;
  const searchInput = document.querySelector("#peopleSearch");
  const unitFilter = document.querySelector("#peopleUnitFilter");
  const teamFilter = document.querySelector("#peopleTeamFilter");
  const contractFilter = document.querySelector("#contractFilter");
  const tagFilter = document.querySelector("#tagFilter");
  const refreshCards = () => renderPeopleCards(employeesInScope());
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    refreshCards();
  });
  unitFilter.addEventListener("change", () => {
    el.businessFilter.value = unitFilter.value;
    renderFilters(false);
    renderPage();
  });
  teamFilter.addEventListener("change", () => {
    el.teamFilter.value = teamFilter.value;
    renderPage();
  });
  contractFilter.addEventListener("change", refreshCards);
  tagFilter.addEventListener("change", refreshCards);
  renderPeopleCards(scoped);
}

function renderPeopleCards(scoped) {
  const query = state.search.trim().toLowerCase();
  const contract = document.querySelector("#contractFilter")?.value || "All contracts";
  const tag = document.querySelector("#tagFilter")?.value || "All tags";
  const filtered = scoped.filter((employee) => {
    const queryOk = !query || employee.name.toLowerCase().includes(query) || employee.number.toLowerCase().includes(query);
    const contractOk = contract === "All contracts" || employee.contract === contract;
    const tagOk = tag === "All tags" || employee.tags.includes(tag);
    return queryOk && contractOk && tagOk;
  });
  document.querySelector("#peopleCount").textContent = `Showing ${Math.min(filtered.length, 36)} of ${filtered.length} people. Use search or filters to narrow the list.`;
  document.querySelector("#peopleCards").innerHTML = filtered.length
    ? filtered.slice(0, 36).map((employee) => `
          <article class="employee-card compact">
            <header>
              <div>
                <h3>${employee.name}</h3>
                <p class="muted">${employee.number}</p>
              </div>
              ${attentionIndicator(employee)}
            </header>
            <dl class="profile-facts">
              <div><dt>Job title</dt><dd>${employee.title}</dd></div>
              <div><dt>Team</dt><dd>${employee.team}</dd></div>
              <div><dt>Tenure</dt><dd>${tenure(employee)}</dd></div>
              <div><dt>Contract</dt><dd>${employee.contract}</dd></div>
            </dl>
            <div class="tag-row">${employee.tags.slice(0, 2).map((item) => `<span class="badge">${item}</span>`).join("") || '<span class="muted">No talent tag</span>'}</div>
            <button class="secondary-button" data-employee="${employee.id}">Open Profile</button>
          </article>
        `).join("")
    : `<div class="empty-state"><h2>No people match this scope</h2><p>Adjust filters or select another permitted organization scope.</p></div>`;
  bindEmployeeLinks();
}

function renderTalent() {
  const scoped = employeesInScope();
  const employee = scoped.find((item) => item.id === state.selectedEmployee) || scoped[0] || employees[0];
  state.selectedEmployee = employee.id;
  setHeader(
    "Employee Profile",
    "One employee profile with role-based sections and actions.",
    `${currentRole().canAddEmployees ? '<button class="secondary-button" data-action="editEmployee">Edit Employee</button>' : ""}
     ${currentRole().canArchiveEmployees ? '<button class="danger-button" data-action="archiveEmployee">Archive Employee</button>' : ""}
     ${!currentRole().canArchiveEmployees ? '<button class="primary-button" data-action="createTalentAction">Create Talent Action</button>' : ""}`
  );
  const tabs = ["Overview", "Manager Records", "HRBP Records", "Development", "History"];
  el.content.innerHTML = `
    <section class="talent-header">
      <div class="talent-header-main">
        <div>
          <p class="eyebrow">Employee Profile</p>
          <h2>${employee.name}</h2>
          <p>${employee.number} · ${employee.title}</p>
          <dl class="profile-facts header-facts">
            <div><dt>Level</dt><dd>${employee.level}</dd></div>
            <div><dt>Business Unit</dt><dd>${employee.unit}</dd></div>
            <div><dt>Team</dt><dd>${employee.team}</dd></div>
            <div><dt>Contract</dt><dd>${employee.contract}</dd></div>
            <div><dt>Tenure</dt><dd>${tenure(employee)}</dd></div>
          </dl>
          <div class="tag-row">
            ${employee.tags.map((tag) => `<span class="badge">${tag}</span>`).join("") || '<span class="muted">No talent tag</span>'}
            ${employee.awards.map((award) => `<span class="badge blue">${award}</span>`).join("") || ""}
          </div>
        </div>
      </div>
      <div class="indicator-grid">
        ${indicator("Impact", employee.currentImpact)}
        ${indicator("Potential", employee.growthPotential)}
        ${indicator("Retention Risk", visibleTalentValue("retentionRisk", employee))}
        ${indicator("Open Actions", employee.openActions || "None")}
      </div>
    </section>
    <nav class="tabs" aria-label="Employee profile tabs">${tabs.map((tab) => `<button class="tab ${tab === state.talentTab ? "active" : ""}" data-tab="${tab}">${tab}</button>`).join("")}</nav>
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
  if ((field === "retentionRisk" || field === "promotionReadiness") && state.role === "teamLead") return "Restricted";
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
          ${aiMeta("AI Talent Summary", "2026-07-14", "Last 12 months", "Moderate", "Current")}
          <h2>${employee.currentImpact} impact with ${employee.growthPotential.toLowerCase()} potential</h2>
          <ul>
            <li>Strongest evidence: ${employee.capabilities[0].name}.</li>
            <li>${employee.dependency}</li>
            <li>${employee.openActions ? `${employee.openActions} open development action.` : "No open development action."}</li>
          </ul>
          <p><strong>Suggestions:</strong> Review current action ownership; keep manager evidence current before calibration.</p>
          <div class="button-row"><button class="secondary-button" data-drawer="employee-${employee.id}">View Evidence</button></div>
        </article>
        <article class="card"><h2>Important Open Actions</h2>${actionList(employee, true)}</article>
      </div>
      <article class="card"><h2>Recent Change</h2>${recordsList(employee.growthPath.slice(0, 1))}</article>
    `;
  }
  if (state.talentTab === "Manager Records") {
    return `<div class="card"><div class="section-header"><div><h2>Manager Records</h2><p>Professional and business evidence from managers.</p></div>${currentRole().canAddManagerRecord ? '<button class="primary-button" data-action="addManagerRecord">Add Manager Record</button>' : ""}</div>${recordsList(employee.records)}</div>`;
  }
  if (state.talentTab === "HRBP Records") {
    if (!currentRole().canAddTalentInsight) return restrictedState();
    return `<div class="card"><div class="section-header"><div><h2>HRBP Records</h2><p>Talent insight, risk, development suggestion and retention consideration.</p></div><button class="primary-button" data-action="addTalentInsight">Add HRBP Record</button></div>${employee.insights.length ? recordsList(employee.insights) : '<div class="empty-state"><h2>No HRBP record</h2><p>Not every employee has a formal HRBP record.</p></div>'}</div>`;
  }
  if (state.talentTab === "Development") {
    return `<div class="grid two">
      <article class="card"><h2>Development Actions</h2>${actionList(employee)}</article>
      <article class="card"><h2>Readiness and Backup</h2>
        <dl class="profile-facts">
          <div><dt>Promotion readiness</dt><dd>${visibleTalentValue("promotionReadiness", employee)}</dd></div>
          <div><dt>Succession / backup</dt><dd>${employee.dependency}</dd></div>
          <div><dt>Mentoring focus</dt><dd>${employee.capabilities[0].name}</dd></div>
          <div><dt>Internal mobility</dt><dd>${employee.team} adjacent project exposure</dd></div>
        </dl>
        <div class="button-row"><button class="primary-button" data-action="createTalentAction">Create Talent Action</button></div>
      </article>
    </div>`;
  }
  return `<div class="card"><h2>History</h2>${recordsList([...employee.growthPath, ...employee.awards.map((award) => ["Award", "2026-01-15", award, "Historical award record retained on the profile."])])}</div>`;
}

function recordsList(records) {
  return `<div class="timeline">${records.map((record) => `<div class="timeline-item"><h3>${record[0]} <span class="badge">${record[1]}</span></h3><p><strong>${record[2]}</strong></p><p>${record[3]}</p></div>`).join("")}</div>`;
}

function restrictedState() {
  return `<div class="empty-state"><h2>Restricted HRBP judgments</h2><p>This role can add manager evidence but cannot view or edit HRBP-only talent judgments.</p></div>`;
}

function actionList(employee, importantOnly = false) {
  if (!employee.actions.length) return `<div class="empty-state"><h2>No open talent action</h2><p>Create an action when evidence, risk or capability coverage requires follow-up.</p></div>`;
  const actions = importantOnly ? employee.actions.filter((action) => action.status !== "Completed").slice(0, 3) : employee.actions;
  return `<div class="timeline">${actions.map((action) => `<div class="timeline-item"><h3>${action.type} <span class="badge ${action.status === "Completed" ? "blue" : "warning"}">${action.status}</span></h3><p>Target: ${action.capability}. Owner: ${action.owner}. Due: ${action.due}.</p></div>`).join("")}</div>`;
}

function renderTalentTeam() {
  const tabs = ["Team Plan", "Talent Review", "Development Actions", "Team Activities"];
  const scoped = employeesInScope();
  const unitOptions = ["All permitted units", ...allowedBusinessUnits()];
  const teamOptions = ["All permitted teams", ...(el.businessFilter.value === "All permitted units" ? allowedBusinessUnits().flatMap((unit) => allowedTeamsFor(unit)) : allowedTeamsFor(el.businessFilter.value))];
  setHeader(
    "Talent & Team",
    "Understand the current team situation and decide which talent actions are needed.",
    `<button class="primary-button" data-action="createTalentAction">Create Talent Action</button>`
  );
  el.content.innerHTML = `
    <section class="people-tools">
      <div><label for="teamUnitFilter">Business Unit</label><select id="teamUnitFilter">${unitOptions.map((unit) => `<option ${unit === el.businessFilter.value ? "selected" : ""}>${unit}</option>`).join("")}</select></div>
      <div><label for="teamScopeFilter">Team</label><select id="teamScopeFilter">${teamOptions.map((team) => `<option ${team === el.teamFilter.value ? "selected" : ""}>${team}</option>`).join("")}</select></div>
      <div><label for="teamYearFilter">Year</label><select id="teamYearFilter"><option ${el.periodFilter.value === "2026" ? "selected" : ""}>2026</option><option ${el.periodFilter.value === "2025" ? "selected" : ""}>2025</option></select></div>
    </section>
    <nav class="tabs" aria-label="Talent and team management tabs">${tabs.map((tab) => `<button class="tab ${tab === state.talentTeamView ? "active" : ""}" data-talent-team-view="${tab}">${tab}</button>`).join("")}</nav>
    <section>${renderTalentTeamTab(scoped)}</section>
  `;
  document.querySelector("#teamUnitFilter").addEventListener("change", (event) => {
    el.businessFilter.value = event.target.value;
    renderFilters(false);
    renderPage();
  });
  document.querySelector("#teamScopeFilter").addEventListener("change", (event) => {
    el.teamFilter.value = event.target.value;
    renderPage();
  });
  document.querySelector("#teamYearFilter").addEventListener("change", (event) => {
    el.periodFilter.value = event.target.value;
    renderPage();
  });
  document.querySelectorAll("[data-talent-team-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.talentTeamView = button.dataset.talentTeamView;
      renderPage();
    });
  });
  bindEmployeeLinks();
  bindDrawerButtons();
}

function selectedTeamLabel() {
  return el.teamFilter.value === "All permitted teams" ? "selected teams" : el.teamFilter.value;
}

function selectedCapabilities() {
  return capabilitiesInScope().filter((item) => el.teamFilter.value === "All permitted teams" || item.team === el.teamFilter.value);
}

function renderTalentTeamTab(scoped) {
  if (state.talentTeamView === "Team Plan") {
    const scopedCapabilities = selectedCapabilities();
    const primaryGap = scopedCapabilities.find((item) => item.severity === "High") || scopedCapabilities[0];
    return `
      <div class="grid two">
        <article class="card">
          <h2>Current Situation</h2>
          <dl class="profile-facts">
            <div><dt>Business unit</dt><dd>${el.businessFilter.value}</dd></div>
            <div><dt>Team</dt><dd>${selectedTeamLabel()}</dd></div>
            <div><dt>Year</dt><dd>${el.periodFilter.value}</dd></div>
            <div><dt>Employees</dt><dd>${scoped.length}</dd></div>
          </dl>
        </article>
        <article class="ai-panel">
          ${aiMeta("AI Team Summary", "2026-07-14", "Team goals and evidence", primaryGap?.severity || "Moderate", "Current")}
          <h2>${selectedTeamLabel()}</h2>
          <p>${primaryGap ? `Strength exists around active project evidence, while the main gap is ${primaryGap.gap} for ${primaryGap.name}. The key dependency is ${primaryGap.recommendation}` : "No major team gap is visible in the selected scope."}</p>
          <div class="button-row"><button class="secondary-button" data-drawer="briefing">View Evidence</button></div>
        </article>
      </div>
      <section>
        <div class="section-header"><div><h2>Goal, Gap and Major Action</h2><p>Team planning summary for authorized review.</p></div></div>
        <div class="capability-flow">${scopedCapabilities.slice(0, 4).map(capabilityFlowItem).join("") || '<div class="empty-state"><h2>No team plan data</h2><p>Select a team or permitted business unit.</p></div>'}</div>
      </section>
    `;
  }
  if (state.talentTeamView === "Talent Review") {
    const attention = talentReviewItems(scoped, "Requires Attention");
    return `
      <div class="section-header"><div><h2>Employees Requiring Attention</h2><p>Retention, promotion readiness, key-person dependency, backup need and 9-box summary.</p></div><button class="secondary-button" data-target="team:${el.teamFilter.value === "All permitted teams" ? scoped[0]?.team || "" : el.teamFilter.value}:Talent Review">Refresh Review</button></div>
      ${decisionList(attention.slice(0, 8))}
      <details class="quiet-details">
        <summary>Review table (${attention.length})</summary>
        <div class="table-wrap">${talentReviewTable(attention)}</div>
      </details>
    `;
  }
  if (state.talentTeamView === "Development Actions") {
    const rows = scoped.flatMap((employee) => employee.actions.map((action) => ({ employee, action })));
    return `
      <div class="section-header"><div><h2>Development Actions</h2><p>Learning, mentoring, knowledge transfer, backup development, succession and mobility.</p></div><button class="primary-button" data-action="createTalentAction">Create Action</button></div>
      <div class="table-wrap"><table><thead><tr><th>Employee</th><th>Action</th><th>Capability</th><th>Owner</th><th>Status</th><th></th></tr></thead><tbody>
        ${rows.length ? rows.map(({ employee, action }) => `<tr><td><strong>${employee.name}</strong><br><span class="muted">${employee.team}</span></td><td>${action.type}</td><td>${action.capability}</td><td>${action.owner}</td><td><span class="badge ${action.status === "Completed" ? "blue" : "warning"}">${action.status}</span></td><td><button class="secondary-button" data-employee="${employee.id}">Open Profile</button></td></tr>`).join("") : '<tr><td colspan="6">No development actions in the selected scope.</td></tr>'}
      </tbody></table></div>
    `;
  }
  const activities = ["Team Event", "Technical Sharing", "Summit", "Cross-team collaboration", "Team-building activities"];
  return `
    <div class="section-header"><div><h2>Team Activities</h2><p>Activity types are managed in Administration.</p></div><button class="secondary-button" data-target="admin:Activity Types">Manage Activity Types</button></div>
    <div class="grid three">${activities.map((activity, index) => `<article class="card"><h2>${activity}</h2><p>${selectedTeamLabel()} · 2026 Q${(index % 4) + 1}</p><p class="muted">Use activities to record team learning, collaboration and engagement context.</p></article>`).join("")}</div>
  `;
}

function renderTeamReadiness() {
  const scopedCapabilities = capabilitiesInScope();
  const high = scopedCapabilities.filter((item) => item.severity === "High");
  setHeader(
    "Team Readiness",
    "Can this team achieve its goals?",
    `<button class="primary-button" data-action="generateAnalysis">Generate AI Analysis</button>
     <button class="secondary-button" data-toast="Team readiness refreshed.">Refresh Analysis</button>
     <button class="secondary-button" data-action="createLearningAction">Create Learning Action</button>`
  );
  el.content.innerHTML = `
    <article class="ai-panel">
      ${aiMeta("Team readiness assessment", "2026-07-14", "Team goals and evidence", high.length ? "High" : "Moderate", "Current")}
      <h2>Can this team achieve its goals?</h2>
      <p>${high.length ? `${high.length} high-severity gaps block goal readiness.` : "No high-severity gap is visible in this scope."}</p>
      <div class="button-row"><button class="secondary-button" data-drawer="briefing">View Evidence</button></div>
    </article>
    ${renderPromptOutputs("teamReadiness")}
    <section>
      <div class="section-header"><div><h2>Goal Readiness Flow</h2><p>Goal → capability → coverage → gap → action.</p></div></div>
      <div class="capability-flow">${scopedCapabilities.filter((item) => item.severity === "High").slice(0, 4).map(capabilityFlowItem).join("") || '<div class="empty-state"><h2>No high-severity risk</h2><p>Select another scope or refresh analysis.</p></div>'}</div>
    </section>
    <details class="quiet-details">
      <summary>Recommended learning actions</summary>
      <div class="table-wrap">${recommendationTable(scopedCapabilities)}</div>
    </details>
    <details class="quiet-details">
      <summary>Detailed capability requirements and coverage</summary>
      <div class="capability-list">${scopedCapabilities.map(capabilityItem).join("")}</div>
    </details>
  `;
  bindDrawerButtons();
}

function renderTalentDevelopment() {
  const scoped = employeesInScope();
  const views = ["Requires Attention", "Promotion Review", "Retention Review", "Development Actions"];
  const attention = talentReviewItems(scoped, state.developmentView);
  setHeader(
    "Talent & Development",
    "Who requires development, review or talent action?",
    `${currentRole().canAddTalentInsight ? '<button class="secondary-button" data-action="addTalentInsight">Add HRBP Record</button>' : ""}
     <button class="primary-button" data-action="createTalentAction">Create Talent Action</button>`
  );
  el.content.innerHTML = `
    <nav class="tabs" aria-label="Talent development views">${views.map((view) => `<button class="tab ${view === state.developmentView ? "active" : ""}" data-development-view="${view}">${view}</button>`).join("")}</nav>
    <article class="ai-panel">
      ${aiMeta("Talent review briefing", "2026-07-14", "Assigned coverage", "Moderate", "Current")}
      <h2>${attention.length} people require review</h2>
      <p>Prioritize employees with retention risk, promotion readiness evidence gaps or overdue development actions.</p>
      <div class="button-row"><button class="secondary-button" data-drawer="briefing">View Evidence</button></div>
    </article>
    ${renderPromptOutputs("development")}
    ${decisionList(attention.slice(0, 5))}
    <details class="quiet-details">
      <summary>View all review items (${attention.length})</summary>
      <div class="table-wrap">${talentReviewTable(attention)}</div>
    </details>
  `;
  document.querySelectorAll("[data-development-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.developmentView = button.dataset.developmentView;
      renderPage();
    });
  });
  document.querySelectorAll("[data-employee]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedEmployee = button.dataset.employee;
      state.page = "talent";
      state.talentTab = "Overview";
      renderNav();
      renderPage();
    });
  });
  bindDrawerButtons();
}

function talentReviewItems(scoped, view) {
  return scoped
    .filter((employee) => {
      if (view === "Promotion Review") return employee.promotionReadiness !== "Not Ready";
      if (view === "Retention Review") return employee.retentionRisk !== "Low";
      if (view === "Development Actions") return employee.openActions > 0;
      return employee.retentionRisk === "High" || employee.openActions > 0 || employee.promotionReadiness === "Potentially Ready in 6-12 Months";
    })
    .map((employee) => ({
      employee,
      label: employee.retentionRisk === "High" ? "Retention" : employee.openActions ? "Action" : "Promotion",
      title: employee.name,
      detail: `${employee.title}; ${employee.retentionRisk} retention risk; ${employee.openActions} open actions.`,
      tone: employee.retentionRisk === "High" ? "danger" : employee.openActions ? "warning" : "blue",
      status: employee.promotionReadiness,
      evidence: employee.capabilities[0].evidenceQuality,
      nextAction: employee.openActions ? "Review action evidence" : "Open employee profile",
    }));
}

function talentReviewTable(items) {
  return `
    <table>
      <thead><tr><th>Employee</th><th>Reason</th><th>Status</th><th>Evidence</th><th>Next action</th><th></th></tr></thead>
      <tbody>
        ${items.map((item) => `
          <tr>
            <td><strong>${item.employee.name}</strong><br><span class="muted">${item.employee.team}</span></td>
            <td>${item.detail}</td>
            <td>${item.status}</td>
            <td>${item.evidence}</td>
            <td>${item.nextAction}</td>
            <td><button class="secondary-button" data-employee="${item.employee.id}">Open Profile</button></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function capabilityFlowItem(capability) {
  const coverage = capability.coverage.length ? capability.coverage.map((item) => `${item[0]} (${item[2]})`).join(", ") : "No validated coverage";
  return `
    <article class="flow-row">
      <div><span>Goal</span><strong>${capability.goal}</strong></div>
      <div><span>Capability</span><strong>${capability.name}</strong></div>
      <div><span>Coverage</span><strong>${coverage}</strong></div>
      <div><span>Gap</span><strong>${capability.gap}</strong></div>
      <div><span>Action</span><strong>${capability.recommendation}</strong></div>
    </article>
  `;
}

function capabilityItem(capability) {
  return `
    <article class="capability-item">
      <div><h3>${capability.name}</h3><p>${capability.category} · ${capability.team}</p><p class="muted">${capability.goal}</p></div>
      <div><p><strong>Required:</strong> ${capability.requiredPeople} at ${capability.target}</p><p><strong>Current coverage:</strong> ${capability.coverage.length ? capability.coverage.map((item) => `${item[0]} (${item[2]})`).join(", ") : "No validated coverage"}</p><p><strong>Recommendation:</strong> ${capability.recommendation}</p></div>
      <div><p><span class="badge ${capability.severity === "High" ? "danger" : "warning"}">${capability.gap}</span></p><p><span class="badge ai">AI Suggested</span></p><button class="secondary-button" data-drawer="cap-${capability.name}">View Evidence</button></div>
    </article>
  `;
}

function employeesForTeam(team) {
  return employees.filter((employee) => !employee.archived && employee.team === team);
}

function employeesForUnit(unitName) {
  return employees.filter((employee) => !employee.archived && employee.unit === unitName);
}

function teamLeadName(team) {
  const lead = employeesForTeam(team).find((employee) => employee.level === "Team Lead");
  return lead ? lead.name : `${team} Lead`;
}

function unitLeaderName(unit) {
  const lead = employeesForUnit(unit.name).find((employee) => employee.level === "Team Lead");
  return lead ? `${lead.name} / ${unit.type} Lead` : `${unit.name} Director`;
}

function renderOrganizationTree() {
  const query = state.orgSearch.trim().toLowerCase();
  const units = organization.businessUnits
    .map((unit) => {
      const teams = unit.teams
        .map((team) => {
          const members = employeesForTeam(team);
          const matchingMembers = query ? members.filter((employee) => [employee.name, employee.number, employee.title].some((value) => value.toLowerCase().includes(query))) : members;
          const teamMatches = !query || team.toLowerCase().includes(query) || matchingMembers.length;
          return teamMatches ? { team, members: matchingMembers.length ? matchingMembers : members.slice(0, 4), total: members.length } : null;
        })
        .filter(Boolean);
      const unitMatches = !query || unit.name.toLowerCase().includes(query) || unit.type.toLowerCase().includes(query) || teams.length;
      return unitMatches ? { unit, teams } : null;
    })
    .filter(Boolean);

  if (!units.length) return `<div class="empty-state"><h2>No organization match</h2><p>Search by employee, team or business unit.</p></div>`;

  return `
    <details class="org-root" open>
      <summary>
        <span>
          <strong>${organization.centers[0]}</strong>
          <small>${organization.businessUnits.length} business units · ${organization.businessUnits.reduce((sum, unit) => sum + unit.teams.length, 0)} teams · ${employees.filter((employee) => !employee.archived).length} employees</small>
        </span>
      </summary>
      <div class="org-tree">
        ${units.map(({ unit, teams }) => {
          const unitCount = employeesForUnit(unit.name).length;
          return `
            <details class="org-node unit">
              <summary>
                <span>
                  <strong>${unit.name}</strong>
                  <small>${unit.type} · Leader: ${unitLeaderName(unit)} · ${unit.teams.length} teams · ${unitCount} employees</small>
                </span>
                <button class="ghost-button" data-drawer="unit-${unit.name}">Open Unit</button>
              </summary>
              <div class="org-children">
                ${teams.map(({ team, members, total }) => `
                  <details class="org-node team" ${query ? "open" : ""}>
                    <summary>
                      <span>
                        <strong>${team}</strong>
                        <small>Team Lead: ${teamLeadName(team)} · ${total} employees</small>
                      </span>
                      <button class="ghost-button" data-drawer="team-${team}">Open Team</button>
                    </summary>
                    <div class="org-people">
                      ${members.map((employee) => `
                        <button class="org-person" data-employee="${employee.id}">
                          <strong>${employee.name}</strong>
                          <span>${employee.number} · ${employee.title}</span>
                        </button>
                      `).join("")}
                    </div>
                  </details>
                `).join("")}
              </div>
            </details>
          `;
        }).join("")}
      </div>
    </details>
  `;
}

function renderOrganization() {
  setHeader("Organization", "Understand the complete Research Center structure at a glance.", `${currentRole().canEditOrg ? '<button class="primary-button" data-target="admin:Business Units & Teams">Edit Structure</button>' : ""}`);
  el.content.innerHTML = `
    <section class="people-tools org-tools">
      <div><label for="orgSearch">Search employee, team or business unit</label><input id="orgSearch" value="${state.orgSearch}" placeholder="Search organization" /></div>
    </section>
    <section class="org-panel">
      ${renderOrganizationTree()}
    </section>
  `;
  const searchInput = document.querySelector("#orgSearch");
  searchInput.addEventListener("input", () => {
    state.orgSearch = searchInput.value;
    renderPage();
  });
  bindEmployeeLinks();
  bindDrawerButtons();
}

function renderAdministration() {
  if (!currentRole().admin) {
    state.page = "organization";
    renderNav();
    renderPage();
    return;
  }
  setHeader("Administration", "Owner-only configuration and governance.", "");
  el.content.innerHTML = `
    <div class="admin-layout">
      <nav class="admin-nav" aria-label="Administration navigation">${Object.entries(adminGroups).map(([group, items]) => `<h3>${group}</h3>${items.map((item) => `<button class="${item === state.adminSection ? "active" : ""}" data-admin="${item}">${item}</button>`).join("")}`).join("")}</nav>
      <section class="admin-panel"><p class="eyebrow">Administration / ${adminGroupFor(state.adminSection)}</p><h2>${state.adminSection}</h2>${adminContent(state.adminSection)}</section>
    </div>
  `;
  document.querySelectorAll("[data-admin]").forEach((button) => {
    button.addEventListener("click", () => {
      state.adminSection = button.dataset.admin;
      renderPage();
    });
  });
  const adminSearchInput = document.querySelector("#adminSearch");
  if (adminSearchInput) {
    adminSearchInput.addEventListener("input", () => {
      state.adminSearch = adminSearchInput.value;
      renderPage();
    });
  }
  bindActionButtons(el.content);
}

function adminGroupFor(section) {
  return Object.entries(adminGroups).find(([, items]) => items.includes(section))[0];
}

function adminContent(section) {
  if (section === "Business Units & Teams") {
    return `<div class="button-row"><button class="primary-button" data-action="addBusinessUnit">Add Business Unit</button><button class="secondary-button" data-action="addTeam">Add Team</button></div><div class="table-wrap"><table><thead><tr><th>Unit</th><th>Type</th><th>Teams</th><th>People</th><th></th></tr></thead><tbody>${organization.businessUnits.map((unit) => `<tr><td>${unit.name}</td><td>${unit.type}</td><td>${unit.teams.length}</td><td>${employeesForUnit(unit.name).length}</td><td><button class="secondary-button" data-action="editBusinessUnit" data-unit="${unit.name}">Edit</button></td></tr>`).join("")}</tbody></table></div>`;
  }
  if (section === "Employee Transfers") {
    return `<p>Move an employee between permitted teams while preserving profile history.</p><div class="button-row"><button class="primary-button" data-action="transferEmployee">Transfer Employee</button></div>${transferPreview()}`;
  }
  if (section === "Add Employee") {
    return `<p>Create one employee record and preserve audit history.</p><div class="button-row"><button class="primary-button" data-action="addEmployee">Add Employee</button></div>`;
  }
  if (section === "Import Employees") {
    return `<p>Import employees in bulk with validation before records become active.</p><div class="button-row"><button class="primary-button" data-action="importEmployees">Import Employees</button></div>`;
  }
  if (section === "Archive Employee") {
    return `<p>Archive an active employee while preserving records.</p><div class="button-row"><button class="danger-button" data-action="archiveEmployee">Archive Selected Employee</button></div>`;
  }
  if (section === "Former Employees") {
    const archived = employees.filter((employee) => employee.archived);
    return `<p>${archived.length} archived employee records.</p><div class="table-wrap"><table><thead><tr><th>Name</th><th>Number</th><th>Team</th><th>Reason</th></tr></thead><tbody>${archived.map((employee) => `<tr><td>${employee.name}</td><td>${employee.number}</td><td>${employee.team}</td><td>${employee.archive?.reason || "Archived"}</td></tr>`).join("") || '<tr><td colspan="4">No former employees yet.</td></tr>'}</tbody></table></div>`;
  }
  if (section === "Export Employees") {
    return `<p>Export employee data for authorized operational review.</p><div class="button-row"><button class="primary-button" data-action="exportEmployees">Export Employees</button></div>`;
  }
  if (["User Accounts", "Role Assignment", "Scope Assignment", "HRBP Coverage"].includes(section)) {
    return accessContent(section);
  }
  if (section === "Talent Tags") {
    return configTable("talentTags", "Talent Tag");
  }
  if (section === "Awards") {
    return configTable("awards", "Award");
  }
  if (section === "Talent Action Types") {
    return configTable("talentActionTypes", "Talent Action Type");
  }
  if (section === "Activity Types") {
    return configTable("activityTypes", "Activity Type");
  }
  return `<div class="empty-state"><h2>${section} is unavailable in this test build</h2><p>This item is hidden from normal workflows until implementation is complete.</p></div>`;
}

function accessContent(section) {
  return `<p>${section} is editable for Owner role testing.</p><div class="table-wrap"><table><thead><tr><th>User</th><th>Role</th><th>Scope</th><th>Status</th></tr></thead><tbody>${configData.users.map((user) => `<tr><td>${user.name}</td><td>${user.role}</td><td>${user.scope}</td><td>${user.active ? "Active" : "Inactive"}</td></tr>`).join("")}</tbody></table></div><div class="button-row"><button class="primary-button" data-action="addUserAccount">Add User</button></div>`;
}

function configTable(key, label) {
  const query = state.adminSearch.trim().toLowerCase();
  const rows = configData[key].filter((item) => !query || item.name.toLowerCase().includes(query));
  return `
    <section class="people-tools org-tools"><div><label for="adminSearch">Search ${label}</label><input id="adminSearch" value="${state.adminSearch}" placeholder="Search ${label.toLowerCase()}" /></div></section>
    <div class="button-row"><button class="primary-button" data-action="addConfigItem" data-config-key="${key}" data-config-label="${label}">Add ${label}</button></div>
    <div class="table-wrap"><table><thead><tr><th>Name</th><th>Status</th><th>Affected records</th><th></th></tr></thead><tbody>${rows.map((item) => `<tr><td>${item.name}</td><td>${item.active ? "Active" : "Inactive"}</td><td>${affectedCount(key, item.name)}</td><td><button class="secondary-button" data-action="editConfigItem" data-config-key="${key}" data-config-id="${item.id}" data-config-label="${label}">Edit</button><button class="secondary-button" data-action="deactivateConfigItem" data-config-key="${key}" data-config-id="${item.id}">${item.active ? "Deactivate" : "Activate"}</button><button class="danger-button" data-action="deleteConfigItem" data-config-key="${key}" data-config-id="${item.id}">Delete</button></td></tr>`).join("")}</tbody></table></div>
  `;
}

function affectedCount(key, name) {
  if (key === "talentTags") return employees.filter((employee) => employee.tags.includes(name)).length;
  if (key === "awards") return employees.filter((employee) => employee.awards.includes(name)).length;
  if (key === "talentActionTypes") return employees.flatMap((employee) => employee.actions).filter((action) => action.type === name).length;
  return 0;
}

function transferPreview() {
  return `<div class="table-wrap"><table><thead><tr><th>Recent employee</th><th>Current team</th><th>Business unit</th></tr></thead><tbody>${employeesInScope().slice(0, 5).map((employee) => `<tr><td>${employee.name}</td><td>${employee.team}</td><td>${employee.unit}</td></tr>`).join("")}</tbody></table></div>`;
}

function yesNo(value) {
  return value ? '<span class="badge blue">Allowed</span>' : '<span class="badge">Read-only or hidden</span>';
}

function bindDrawerButtons() {
  document.querySelectorAll("[data-drawer]").forEach((button) => button.addEventListener("click", () => openDrawer(button.dataset.drawer)));
  bindToastButtons(document);
  bindActionButtons(document);
  bindNavigationButtons(document);
}

function bindNavigationButtons(root) {
  root.querySelectorAll("[data-target]").forEach((button) => {
    if (button.dataset.targetBound) return;
    button.dataset.targetBound = "true";
    button.addEventListener("click", () => openTarget(button.dataset.target));
  });
}

function openTarget(target) {
  const [type, id, tab] = target.split(":");
  if (type === "employee") {
    state.selectedEmployee = id;
    state.page = "talent";
    state.talentTab = tab || "Overview";
  }
  if (type === "team") {
    const employee = employees.find((item) => item.team === id && !item.archived);
    const unit = employee?.unit || allowedBusinessUnits()[0];
    el.businessFilter.value = unit;
    renderFilters(false);
    el.teamFilter.value = id;
    state.page = "talentTeam";
    state.talentTeamView = tab || "Team Plan";
  }
  if (type === "unit") {
    el.businessFilter.value = id;
    renderFilters(false);
    state.page = "organization";
    state.orgSearch = id;
  }
  if (type === "admin" && currentRole().admin) {
    state.page = "administration";
    state.adminSection = id;
  }
  renderNav();
  renderPage();
}

function bindToastButtons(root) {
  root.querySelectorAll("[data-toast]").forEach((button) => {
    if (button.dataset.toastBound) return;
    button.dataset.toastBound = "true";
    button.addEventListener("click", () => showToast(button.dataset.toast));
  });
}

function bindActionButtons(root) {
  root.querySelectorAll("[data-action]").forEach((button) => {
    if (button.dataset.actionBound) return;
    button.dataset.actionBound = "true";
    button.addEventListener("click", () => {
    if (button.dataset.action === "closeDrawer") {
      closeDrawer();
      return;
    }
    state.actionContext = { ...button.dataset };
    openActionDrawer(button.dataset.action);
    });
  });
}

function openDrawer(kind) {
  el.drawerEyebrow.textContent = "Evidence and explainability";
  el.drawerTitle.textContent = "Evidence details";
  el.drawerBody.innerHTML = drawerContent(kind);
  el.drawerBackdrop.hidden = false;
  el.drawer.classList.add("open");
  el.drawer.setAttribute("aria-hidden", "false");
  bindToastButtons(el.drawerBody);
  bindActionButtons(el.drawerBody);
  bindNavigationButtons(el.drawerBody);
}

function openActionDrawer(action) {
  const employee = employees.find((item) => item.id === state.selectedEmployee) || employees[0];
  const titles = {
    addEmployee: "Add Employee",
    importEmployees: "Import Employees",
    exportEmployees: "Export Employees",
    editEmployee: "Edit Employee",
    addManagerRecord: "Add Manager Record",
    addTalentInsight: "Add HRBP Record",
    createTalentAction: "Create Talent Action",
    createLearningAction: "Create Learning Action",
    archiveEmployee: "Archive Employee",
    generateAnalysis: "Generate AI Analysis",
    promptAI: "Generate AI Intelligence",
    addBusinessUnit: "Add Business Unit",
    editBusinessUnit: "Edit Business Unit",
    addTeam: "Add Team",
    transferEmployee: "Transfer Employee",
    addConfigItem: `Add ${state.actionContext.configLabel || "Configuration Item"}`,
    editConfigItem: `Edit ${state.actionContext.configLabel || "Configuration Item"}`,
    deactivateConfigItem: "Change Configuration Status",
    deleteConfigItem: "Delete Configuration Item",
    addUserAccount: "Add User Account",
  };
  el.drawerEyebrow.textContent = "Workflow";
  el.drawerTitle.textContent = titles[action] || "Action";
  el.drawerBody.innerHTML = actionDrawerContent(action, employee);
  el.drawerBackdrop.hidden = false;
  el.drawer.classList.add("open");
  el.drawer.setAttribute("aria-hidden", "false");
  bindToastButtons(el.drawerBody);
  bindActionButtons(el.drawerBody);
  const form = el.drawerBody.querySelector("form[data-action-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleActionSubmit(action, form);
    });
    const submitButton = form.querySelector("[data-action-submit]");
    if (submitButton) {
      submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (form.reportValidity && !form.reportValidity()) return;
        handleActionSubmit(action, form);
      });
    }
  }
}

function closeDrawer() {
  el.drawerBackdrop.hidden = true;
  el.drawer.classList.remove("open");
  el.drawer.setAttribute("aria-hidden", "true");
}

function drawerContent(kind) {
  if (kind.startsWith("team-")) {
    const team = kind.replace("team-", "");
    const members = employeesForTeam(team);
    const profile = teamProfiles[team];
    const gap = capabilities.find((item) => item.team === team);
    const openActionCount = members.reduce((sum, employee) => sum + employee.openActions, 0);
    return `
      <h3>${team}</h3>
      <dl class="profile-facts">
        <div><dt>Team Lead</dt><dd>${teamLeadName(team)}</dd></div>
        <div><dt>Employee count</dt><dd>${members.length}</dd></div>
        <div><dt>Current goal</dt><dd>${profile?.goal || "Maintain team delivery."}</dd></div>
        <div><dt>Open actions</dt><dd>${openActionCount}</dd></div>
      </dl>
      <article class="ai-panel compact-ai">
        ${aiMeta("AI Team Summary", "2026-07-14", "Team evidence", gap?.severity || "Moderate", "Current")}
        <h2>${gap ? `${gap.gap} requires attention` : "Team is stable"}</h2>
        <p>${gap ? gap.recommendation : "Current records do not show a critical team gap."}</p>
      </article>
      <div class="button-row">
        <button class="secondary-button" data-target="team:${team}:Talent Review">View People</button>
        <button class="secondary-button" data-target="team:${team}:Team Plan">Open Team Plan</button>
        <button class="primary-button" data-target="team:${team}:Talent Review">Open Talent Review</button>
      </div>
    `;
  }
  if (kind.startsWith("unit-")) {
    const unitName = kind.replace("unit-", "");
    const unit = organization.businessUnits.find((item) => item.name === unitName);
    const people = employeesForUnit(unitName);
    const firstGoal = unit?.teams.map((team) => teamProfiles[team]?.goal).find(Boolean) || "Maintain research delivery.";
    return `
      <h3>${unitName}</h3>
      <dl class="profile-facts">
        <div><dt>Type</dt><dd>${unit?.type || "Business Unit"}</dd></div>
        <div><dt>Leader</dt><dd>${unit ? unitLeaderName(unit) : "Unassigned"}</dd></div>
        <div><dt>Teams</dt><dd>${unit?.teams.length || 0}</dd></div>
        <div><dt>Employee count</dt><dd>${people.length}</dd></div>
        <div><dt>Current annual priority</dt><dd>${firstGoal}</dd></div>
      </dl>
      <div class="button-row">
        <button class="secondary-button" data-target="unit:${unitName}">View Teams</button>
        <button class="primary-button" data-target="team:${unit?.teams[0] || ""}:Team Plan">Open Unit Plan</button>
      </div>
    `;
  }
  if (kind === "briefing") {
    return `${aiMeta("Evidence review", "2026-07-14", "2026 goals and records", "High", "Current")}<h3>Source goals</h3>${recordsList(annualGoals.slice(0, 8))}<h3>Reasoning summary</h3><p>AI compares annual goals with current people coverage, evidence quality and open development actions.</p>`;
  }
  if (kind.startsWith("employee-")) {
    const employee = employees.find((item) => item.id === kind.replace("employee-", ""));
    return `<h3>${employee.name}</h3><p>${employee.summary}</p><h3>Professional evidence</h3>${recordsList(employee.records)}<h3>Growth path</h3>${recordsList(employee.growthPath)}`;
  }
  if (kind.startsWith("cap-")) {
    const capability = capabilities.find((item) => `cap-${item.name}` === kind);
    return `${aiMeta("Capability gap analysis", "2026-07-14", "Team goals and evidence", capability.severity === "High" ? "High" : "Moderate", "Requires Review")}<h3>${capability.name}</h3><p><strong>Gap:</strong> ${capability.gap}</p><p>${capability.goal}</p><div class="table-wrap"><table><thead><tr><th>Employee</th><th>Level</th><th>Role</th><th>Evidence</th><th>Validation</th></tr></thead><tbody>${capability.coverage.length ? capability.coverage.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("") : '<tr><td colspan="5">No validated professional evidence in the selected scope.</td></tr>'}</tbody></table></div><h3>Recommended response</h3><p>${capability.recommendation}</p><div class="button-row"><button class="primary-button" data-action="createLearningAction">Create Learning Action</button></div>`;
  }
  return "<p>No evidence selected.</p>";
}

function actionDrawerContent(action, employee) {
  if (action === "addEmployee") {
    return `
      <form data-action-form class="form-grid">
        ${field("Employee number", "number", nextEmployeeNumber(), "text")}
        ${field("Name", "name", "", "text")}
        ${selectField("Business Unit", "unit", organization.businessUnits.map((unit) => unit.name), employee.unit)}
        ${selectField("Team", "team", organization.businessUnits.flatMap((unit) => unit.teams), employee.team)}
        ${field("Job Title", "title", "Research Engineer", "text")}
        ${selectField("Level", "level", [...levels, "Team Lead", "Lab Director"], "Engineer")}
        ${selectField("Contract Type", "contract", ["Employee", "Leased Labour", "Intern"], "Employee")}
        ${field("Start Date", "startDate", "2026-07-14", "date")}
        ${textareaField("Initial capability evidence", "notes", "Manager will add capability evidence after onboarding.")}
        ${formActions("Create employee")}
      </form>
    `;
  }
  if (action === "editEmployee") {
    return `
      <form data-action-form class="form-grid">
        ${field("Employee number", "number", employee.number, "text")}
        ${field("Name", "name", employee.name, "text")}
        ${selectField("Business Unit", "unit", organization.businessUnits.map((unit) => unit.name), employee.unit)}
        ${selectField("Team", "team", organization.businessUnits.flatMap((unit) => unit.teams), employee.team)}
        ${field("Job Title", "title", employee.title, "text")}
        ${selectField("Level", "level", [...levels, "Team Lead", "Lab Director"], employee.level)}
        ${selectField("Contract Type", "contract", ["Employee", "Leased Labour", "Intern"], employee.contract)}
        ${field("Start Date", "startDate", employee.startDate, "date")}
        ${optionalField("Talent Tags", "tags", employee.tags.join(", "), "text")}
        ${optionalField("Awards", "awards", employee.awards.join(", "), "text")}
        ${textareaField("Change reason", "notes", "Correct profile information after manager review.")}
        ${formActions("Save changes")}
      </form>
    `;
  }
  if (action === "addManagerRecord") {
    return `
      <form data-action-form class="form-grid">
        ${selectField("Record Type", "recordType", evidenceTypes, "Project contribution")}
        ${field("Date", "date", "2026-07-14", "date")}
        ${field("Scope or project", "scope", `${employee.team} project`, "text")}
        ${selectField("Related capability", "capability", employee.capabilities.map((item) => item.name), employee.capabilities[0].name)}
        ${textareaField("Description", "description", `${employee.name} provided concrete evidence connected to team goals.`)}
        ${selectField("Visibility", "visibility", ["Manager visible", "Leadership visible", "HRBP visible"], "Manager visible")}
        ${formActions("Add manager record")}
      </form>
    `;
  }
  if (action === "addTalentInsight") {
    return `
      <form data-action-form class="form-grid">
        ${selectField("Record Type", "insightType", ["Talent Insight", "Talent Risk", "Development Suggestion", "HRBP observation", "Retention consideration"], "Development Suggestion")}
        ${field("Date", "date", "2026-07-14", "date")}
        ${field("Scope", "scope", employee.team, "text")}
        ${textareaField("Description", "description", `${employee.name} should receive a focused development action connected to ${employee.capabilities[0].name}.`)}
        ${textareaField("Recommended action", "recommendedAction", "Create a mentoring or learning action with review evidence.")}
        ${selectField("Visibility", "visibility", ["HRBP only", "Leadership visible", "Manager visible after approval"], "HRBP only")}
        ${formActions("Add HRBP record")}
      </form>
    `;
  }
  if (action === "archiveEmployee") {
    return `
      <form data-action-form class="form-grid">
        <div class="form-wide">
          <p><strong>${employee.name}</strong> will be archived from active employee views. Historical records, manager evidence, Talent Insights and actions remain preserved.</p>
        </div>
        ${field("Archive Date", "archiveDate", "2026-07-14", "date")}
        ${selectField("Reason", "reason", ["Resigned", "Transferred out", "Contract ended", "Duplicate record", "Other"], "Contract ended")}
        ${textareaField("Archive note", "note", "Archive employee while preserving historical talent and organization records.")}
        ${formActions("Archive employee")}
      </form>
    `;
  }
  if (action === "createTalentAction" || action === "createLearningAction") {
    const selectedCapability = capabilitiesInScope()[0]?.name || employee.capabilities[0].name;
    return `
      <form data-action-form class="form-grid">
        ${selectField("Action Type", "actionType", activeConfig("talentActionTypes").map((item) => item.name), action === "createLearningAction" ? "Learning" : "Key Role Backup")}
        ${selectField("Employee", "employeeId", employeesInScope().slice(0, 60).map((item) => `${item.id}|${item.name}`), `${employee.id}|${employee.name}`)}
        ${field("Related capability", "capability", selectedCapability, "text")}
        ${field("Owner", "owner", employee.manager || "Team Lead", "text")}
        ${field("Due Date", "due", "2026-10-31", "date")}
        ${selectField("Status", "status", ["Open", "In Progress", "Completed"], "Open")}
        ${textareaField("Required evidence", "evidence", "Project contribution, manager validation and technical review.")}
        ${formActions("Create action")}
      </form>
    `;
  }
  if (action === "importEmployees") {
    return `
      <form data-action-form class="form-grid">
        ${textareaField("Paste employee rows", "rows", "Name,Employee Number,Business Unit,Team,Job Title,Level\\nNew Researcher,00199901,GPU Research Lab,GPU Compiler,Compiler Engineer,Engineer")}
        <p class="muted">This prototype validates the flow and adds three sample employees after import.</p>
        ${formActions("Import employees")}
      </form>
    `;
  }
  if (action === "exportEmployees") {
    const rows = employeesInScope().slice(0, 12).map((item) => `${item.number},${item.name},${item.unit},${item.team},${item.title}`).join("\n");
    return `
      <h3>Export preview</h3>
      <p class="muted">Static prototype export preview for the selected scope.</p>
      <textarea readonly rows="12">Employee Number,Name,Business Unit,Team,Job Title\n${rows}</textarea>
      <div class="button-row"><button class="primary-button" data-toast="CSV export prepared for the selected scope.">Prepare CSV</button><button class="secondary-button" data-action="exportEmployees">Refresh preview</button></div>
    `;
  }
  if (action === "promptAI") {
    return `
      <form data-action-form class="form-grid">
        ${selectField("AI intelligence type", "intelligenceType", ["Executive summary", "Risk analysis", "Recommended actions", "Evidence gaps", "Development opportunities"], "Risk analysis")}
        ${selectField("Evidence scope", "evidenceScope", aiScopeOptions(), aiScopeOptions()[0])}
        ${textareaField("Prompt", "prompt", defaultPromptForPage())}
        <div class="form-wide ai-panel">
          ${aiMeta("Controlled generation", "2026-07-14", "Selected scope", "Pending", "User requested")}
          <p>The new intelligence will be generated as a reviewable draft. It will not overwrite existing talent judgments, capability validation or confirmed actions.</p>
        </div>
        ${formActions("Generate intelligence")}
      </form>
    `;
  }
  if (action === "generateAnalysis") {
    return `
      <h3>AI analysis stages</h3>
      <div class="timeline">
        ${["Reviewing annual goals", "Identifying required capabilities", "Matching people evidence", "Evaluating gaps", "Preparing recommendations"].map((stage) => `<div class="timeline-item"><h3>${stage} <span class="badge blue">Ready</span></h3><p>This stage uses the selected organization scope and current role permissions.</p></div>`).join("")}
      </div>
      <div class="button-row"><button class="primary-button" data-toast="AI analysis generated and placed under human review.">Generate analysis</button></div>
    `;
  }
  if (action === "addBusinessUnit" || action === "editBusinessUnit") {
    const unit = organization.businessUnits.find((item) => item.name === state.actionContext.unit) || organization.businessUnits[0];
    return `<form data-action-form class="form-grid">
      ${field("Business Unit Name", "unitName", action === "editBusinessUnit" ? unit.name : "New Research Unit", "text")}
      ${selectField("Type", "unitType", ["Research Lab", "Platform", "Operations", "Independent Research Team"], action === "editBusinessUnit" ? unit.type : "Research Lab")}
      ${textareaField("Change reason", "notes", "Organization structure update for user testing.")}
      ${formActions(action === "editBusinessUnit" ? "Save business unit" : "Add business unit")}
    </form>`;
  }
  if (action === "addTeam") {
    return `<form data-action-form class="form-grid">
      ${selectField("Business Unit", "unitName", organization.businessUnits.map((unit) => unit.name), el.businessFilter.value === "All permitted units" ? organization.businessUnits[0].name : el.businessFilter.value)}
      ${field("Team Name", "teamName", "New Research Team", "text")}
      ${textareaField("Current goal", "goal", "Define the team's research delivery goal.")}
      ${formActions("Add team")}
    </form>`;
  }
  if (action === "transferEmployee") {
    const activeEmployees = employees.filter((item) => !item.archived).slice(0, 120);
    return `<form data-action-form class="form-grid">
      ${selectField("Employee", "employeeId", activeEmployees.map((item) => `${item.id}|${item.name} (${item.team})`), `${employee.id}|${employee.name} (${employee.team})`)}
      ${selectField("New Business Unit", "unitName", organization.businessUnits.map((unit) => unit.name), employee.unit)}
      ${selectField("New Team", "teamName", organization.businessUnits.flatMap((unit) => unit.teams), employee.team)}
      ${textareaField("Transfer reason", "notes", "Move employee to new team while preserving history.")}
      ${formActions("Transfer employee")}
    </form>`;
  }
  if (action === "addConfigItem" || action === "editConfigItem") {
    const item = configData[state.actionContext.configKey]?.find((entry) => entry.id === state.actionContext.configId);
    return `<form data-action-form class="form-grid">
      ${field(`${state.actionContext.configLabel || "Item"} Name`, "name", item?.name || "", "text")}
      ${selectField("Status", "active", ["Active", "Inactive"], item?.active === false ? "Inactive" : "Active")}
      ${textareaField("Change reason", "notes", "Configuration change for user testing.")}
      ${formActions(action === "editConfigItem" ? "Save item" : "Add item")}
    </form>`;
  }
  if (action === "deactivateConfigItem" || action === "deleteConfigItem") {
    const item = configData[state.actionContext.configKey]?.find((entry) => entry.id === state.actionContext.configId);
    const count = item ? affectedCount(state.actionContext.configKey, item.name) : 0;
    return `<form data-action-form class="form-grid">
      <div class="form-wide"><p><strong>${item?.name || "Item"}</strong> affects ${count} records. ${action === "deleteConfigItem" && count ? "Deletion is blocked until affected records are cleared." : "Confirm the status change."}</p></div>
      ${textareaField("Reason", "notes", "Review affected-record count before changing this item.")}
      ${formActions(action === "deleteConfigItem" ? "Delete item" : "Change status")}
    </form>`;
  }
  if (action === "addUserAccount") {
    return `<form data-action-form class="form-grid">
      ${field("Name", "name", "", "text")}
      ${selectField("Role", "role", Object.values(roles).map((role) => role.label), "Team Lead")}
      ${field("Scope", "scope", "GPU Compiler", "text")}
      ${formActions("Add user")}
    </form>`;
  }
  return "<p>No action available.</p>";
}

function field(label, name, value, type) {
  return `<div><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" value="${escapeAttr(value)}" required /></div>`;
}

function optionalField(label, name, value, type) {
  return `<div><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" value="${escapeAttr(value)}" /></div>`;
}

function selectField(label, name, values, selected) {
  return `<div><label for="${name}">${label}</label><select id="${name}" name="${name}">${values.map((value) => {
    const optionValue = String(value);
    const labelText = optionValue.includes("|") ? optionValue.split("|")[1] : optionValue;
    return `<option value="${escapeAttr(optionValue)}" ${optionValue === selected ? "selected" : ""}>${labelText}</option>`;
  }).join("")}</select></div>`;
}

function textareaField(label, name, value) {
  return `<div class="form-wide"><label for="${name}">${label}</label><textarea id="${name}" name="${name}" rows="5" required>${escapeHtml(value)}</textarea></div>`;
}

function formActions(saveLabel) {
  return `<div class="form-action-bar"><button type="button" class="secondary-button" data-action="closeDrawer">Cancel</button><button type="submit" class="primary-button" data-action-submit="true">${saveLabel}</button></div>`;
}

function handleActionSubmit(action, form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const employee = employees.find((item) => item.id === state.selectedEmployee) || employees[0];
  if (action === "addEmployee") {
    const unit = organization.businessUnits.find((item) => item.name === data.unit);
    const profile = teamProfiles[data.team] || teamProfiles[unit?.teams[0]] || teamProfiles.HR;
    const created = createEmployee(employees.length + 1, unit || organization.businessUnits[0], data.team, profile, 1);
    Object.assign(created, {
      number: data.number,
      name: data.name,
      title: data.title,
      level: data.level,
      contract: data.contract,
      startDate: data.startDate,
      manager: "Unassigned",
      reportingLine: `Unassigned > ${data.team} > ${data.unit}`,
      records: [["Onboarding", "2026-07-14", "Initial record", data.notes]],
      insights: [],
      actions: [],
      openActions: 0,
      summary: `${data.name} was added to ${data.team}. Capability evidence should be validated by the manager.`,
    });
    employees.push(created);
    state.selectedEmployee = created.id;
    state.page = "talent";
    state.talentTab = "Overview";
    finishAction("Employee created.");
    return;
  }
  if (action === "editEmployee") {
    Object.assign(employee, {
      number: data.number,
      name: data.name,
      unit: data.unit,
      team: data.team,
      title: data.title,
      level: data.level,
      contract: data.contract,
      startDate: data.startDate,
      tags: splitList(data.tags),
      awards: splitList(data.awards),
      reportingLine: `${employee.manager} > ${data.team} > ${data.unit}`,
    });
    employee.records.unshift(["Profile update", "2026-07-14", "Basic information changed", data.notes]);
    finishAction("Employee profile updated.");
    return;
  }
  if (action === "addManagerRecord") {
    employee.records.unshift([data.recordType, data.date, data.scope, `${data.description} Related capability: ${data.capability}. Visibility: ${data.visibility}.`]);
    state.talentTab = "Manager Records";
    finishAction("Manager record added.");
    return;
  }
  if (action === "addTalentInsight") {
    employee.insights.unshift([data.insightType, data.date, "HRBP", `${data.description} Recommended action: ${data.recommendedAction}. Visibility: ${data.visibility}.`]);
    state.talentTab = "HRBP Records";
    finishAction("HRBP record added.");
    return;
  }
  if (action === "archiveEmployee") {
    employee.archived = true;
    employee.archive = { date: data.archiveDate, reason: data.reason, note: data.note };
    state.page = "people";
    finishAction("Employee archived. Historical records preserved.");
    return;
  }
  if (action === "createTalentAction" || action === "createLearningAction") {
    const employeeId = data.employeeId.split("|")[0];
    const target = employees.find((item) => item.id === employeeId) || employee;
    target.actions.unshift({ type: data.actionType, status: data.status, capability: data.capability, owner: data.owner, due: data.due });
    target.openActions = target.actions.filter((item) => item.status !== "Completed").length;
    state.selectedEmployee = target.id;
    state.page = "talent";
    state.talentTab = "Development";
    finishAction("Talent action created.");
    return;
  }
  if (action === "importEmployees") {
    for (let index = 0; index < 3; index += 1) {
      const unit = organization.businessUnits[0];
      const profile = teamProfiles["GPU Compiler"];
      const created = createEmployee(employees.length + 1, unit, "GPU Compiler", profile, index + 2);
      created.name = `Imported Researcher ${index + 1}`;
      created.records = [["Bulk import", "2026-07-14", "Imported employee", "Created from People Operations import flow."]];
      created.insights = [];
      created.actions = [];
      created.openActions = 0;
      created.summary = `${created.name} was imported into GPU Compiler.`;
      employees.push(created);
    }
    finishAction("3 employees imported.");
    return;
  }
  if (action === "promptAI") {
    const page = state.page;
    state.aiOutputs.unshift({
      page,
      date: "2026-07-14",
      scope: data.evidenceScope,
      prompt: data.prompt,
      title: `${data.intelligenceType} generated from prompt`,
      response: generatePromptResponse(data.prompt, data.intelligenceType, page),
    });
    finishAction("AI intelligence generated from prompt.");
  }
  if (action === "addBusinessUnit") {
    organization.businessUnits.push({ name: data.unitName, type: data.unitType, teams: [] });
    finishAction("Business unit added.");
    return;
  }
  if (action === "editBusinessUnit") {
    const unit = organization.businessUnits.find((item) => item.name === state.actionContext.unit);
    if (unit) {
      const oldName = unit.name;
      unit.name = data.unitName;
      unit.type = data.unitType;
      employees.filter((item) => item.unit === oldName).forEach((item) => {
        item.unit = data.unitName;
      });
    }
    finishAction("Business unit updated.");
    return;
  }
  if (action === "addTeam") {
    const unit = organization.businessUnits.find((item) => item.name === data.unitName);
    if (unit && !unit.teams.includes(data.teamName)) {
      unit.teams.push(data.teamName);
      teamProfiles[data.teamName] = {
        titles: ["Research Engineer", "Senior Engineer", "Team Lead"],
        capabilities: ["Technical Design", "Research Delivery", "Collaboration"],
        goal: data.goal,
        riskCapability: "Research Delivery",
      };
    }
    finishAction("Team added.");
    return;
  }
  if (action === "transferEmployee") {
    const employeeId = data.employeeId.split("|")[0];
    const target = employees.find((item) => item.id === employeeId);
    if (target) {
      const previous = `${target.unit} / ${target.team}`;
      target.unit = data.unitName;
      target.team = data.teamName;
      target.reportingLine = `${target.manager} > ${data.teamName} > ${data.unitName}`;
      target.growthPath.unshift(["Team transfer", "2026-07-14", `${previous} to ${data.unitName} / ${data.teamName}`, data.notes]);
      state.selectedEmployee = target.id;
    }
    finishAction("Employee transferred.");
    return;
  }
  if (action === "addConfigItem") {
    const key = state.actionContext.configKey;
    configData[key].push({ id: `${key}-${Date.now()}`, name: data.name, active: data.active === "Active" });
    finishAction(`${state.actionContext.configLabel} added.`);
    return;
  }
  if (action === "editConfigItem") {
    const item = configData[state.actionContext.configKey].find((entry) => entry.id === state.actionContext.configId);
    if (item) {
      item.name = data.name;
      item.active = data.active === "Active";
    }
    finishAction(`${state.actionContext.configLabel} updated.`);
    return;
  }
  if (action === "deactivateConfigItem") {
    const item = configData[state.actionContext.configKey].find((entry) => entry.id === state.actionContext.configId);
    if (item) item.active = !item.active;
    finishAction("Configuration status changed.");
    return;
  }
  if (action === "deleteConfigItem") {
    const key = state.actionContext.configKey;
    const item = configData[key].find((entry) => entry.id === state.actionContext.configId);
    if (item && affectedCount(key, item.name) === 0) {
      configData[key] = configData[key].filter((entry) => entry.id !== item.id);
      finishAction("Configuration item deleted.");
    } else {
      closeDrawer();
      showToast("Delete blocked because records still use this item.");
    }
    return;
  }
  if (action === "addUserAccount") {
    configData.users.push({ id: `u${Date.now()}`, name: data.name, role: data.role, scope: data.scope, active: true });
    finishAction("User account added.");
  }
}

function finishAction(message) {
  closeDrawer();
  renderFilters(false);
  renderNav();
  renderPage();
  showToast(message);
}

function nextEmployeeNumber() {
  return `00${String(120000 + employees.length + 1).slice(-6)}`;
}

function splitList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function aiScopeOptions() {
  const options = [el.scopeSummary.textContent.replace("Viewing: ", "") || "Current page context"];
  if (state.page === "talent") {
    const employee = employees.find((item) => item.id === state.selectedEmployee) || employees[0];
    options.unshift(`${employee.name} profile evidence`);
  }
  if (state.page === "talentTeam") options.unshift("Talent and team management evidence");
  if (state.page === "organization") options.unshift("Research Center structure and annual goals");
  return options;
}

function defaultPromptForPage() {
  if (state.page === "talent") return "Summarize the most important evidence gaps and next best talent action for this employee.";
  if (state.page === "talentTeam") return "Identify the highest-impact team or talent action for the selected scope.";
  if (state.page === "organization") return "Summarize which labs have the most urgent operating model or capability coverage concerns.";
  return "What are the three most important leadership decisions for this scope this month?";
}

function generatePromptResponse(prompt, type, page) {
  const scoped = employeesInScope();
  const scopedCapabilities = capabilitiesInScope();
  const highRisks = scopedCapabilities.filter((item) => item.severity === "High");
  if (page === "talent") {
    const employee = employees.find((item) => item.id === state.selectedEmployee) || employees[0];
    return `${type}: ${employee.name} has strongest evidence in ${employee.capabilities[0].name}. Based on the prompt, the next review should focus on ${employee.dependency === "No critical dependency" ? "evidence quality and development history" : employee.dependency}. Recommended follow-up: create or update one talent action with manager-visible evidence.`;
  }
  if (page === "talentTeam") {
    const gap = highRisks[0] || scopedCapabilities[0];
    return `${type}: The strongest signal is ${gap?.team || "the selected scope"} / ${gap?.name || "capability coverage"}. The recommended response is to prioritize internal development first, assign an owner, and require project contribution plus manager validation as completion evidence.`;
  }
  if (page === "organization") {
    return `${type}: The Research Center has ${organization.businessUnits.length} business units and ${employees.length} people. The prompt points to cross-lab operating risk, so the next useful review is comparing annual goals with confirmed capability depth in GPU, Storage, Wireless and AI Platform teams.`;
  }
  return `${type}: In this scope, ${highRisks.length} high-severity capability risks and ${scoped.filter((employee) => employee.retentionRisk === "High").length} high retention-risk profiles need attention. The best next action is to review evidence, approve one backup or learning action, and dismiss low-evidence recommendations until better records are available.`;
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => el.toast.classList.remove("show"), 2400);
}

init();
