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
  ["overview", "Dashboard", "What needs attention now"],
  ["people", "People", "Find employees and open profiles"],
  ["talent", "Employee Profile", "Talent card, evidence and actions"],
  ["capability", "Capability Intelligence", "Capability gaps, coverage and learning actions"],
  ["organization", "Organization", "Structure, teams and annual goals"],
  ["administration", "Administration", "Owner-only configuration and governance"],
];

const adminGroups = {
  Organization: ["Business Units & Teams", "Employee Transfers", "Organization History"],
  "People Operations": ["Bulk Import", "Bulk Archive", "Former Employees", "Data Export"],
  "Access & Governance": ["Leadership & Access", "HRBP Coverage", "Roles & Permissions", "Audit Log"],
  "Talent Configuration": ["Talent Tags", "Awards", "Talent Action Types", "Activity Types", "Capability Taxonomy", "Promotion Criteria"],
  System: ["Appearance", "Security", "Change Password", "System Preferences"],
};

const firstNames = ["Alice", "Brian", "Carla", "David", "Elena", "Farid", "Grace", "Hao", "Iris", "Jonas", "Keiko", "Lina", "Maya", "Nikhil", "Olivia", "Priya", "Rui", "Sofia", "Tomas", "Wei", "Yara", "Zoe", "Marco", "Anika", "Daniel", "Mei", "Victor", "Nora", "Ahmed", "Julia"];
const lastNames = ["Chen", "Singh", "Novak", "Meyer", "Hoffmann", "Kumar", "Garcia", "Wang", "Tanaka", "Smith", "Rossi", "Patel", "Kim", "Li", "Schneider", "Ivanov", "Zhang", "Andersson", "Brown", "Liu", "Martinez", "Dubois", "Khan", "Fischer", "Nguyen", "Silva", "Wilson", "Moreau", "Sato", "Bauer"];
const levels = ["Junior Engineer", "Engineer", "Senior Engineer", "Staff Engineer", "Principal Engineer", "Distinguished Engineer"];
const talentTags = ["AI", "Technical Leader", "High Potential", "Key Position", "Outstanding Talent", "Mentor", "Domain Expert", "Critical Backup"];
const awards = ["Annual Innovation Award", "Technical Breakthrough Award", "Research Impact Award", "Collaboration Award", "Patent Contribution Award"];
const evidenceTypes = ["Project contribution", "Technical innovation", "Cross-team collaboration", "Mentoring", "Technical leadership", "Management observation", "Recent achievement"];
const actionTypes = ["Learning", "Mentoring", "Succession", "Knowledge Transfer", "Key Role Backup", "Internal Mobility"];
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
  return { overview: "⌂", people: "◎", talent: "◇", capability: "▦", organization: "╬", administration: "⚙" }[key];
}

function renderFilters(reset) {
  const units = ["All permitted units", ...allowedBusinessUnits()];
  const selectedUnit = reset || !units.includes(el.businessFilter.value) ? units[0] : el.businessFilter.value;
  setOptions(el.businessFilter, units, selectedUnit);
  const teamSource = selectedUnit === "All permitted units" ? allowedBusinessUnits().flatMap((unit) => allowedTeamsFor(unit)) : allowedTeamsFor(selectedUnit);
  const teams = ["All permitted teams", ...teamSource];
  const selectedTeam = reset || !teams.includes(el.teamFilter.value) ? teams[0] : el.teamFilter.value;
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
}

function renderPage() {
  updateScopeSummary();
  const pageMap = {
    overview: renderOverview,
    people: renderPeople,
    talent: renderTalent,
    capability: renderCapability,
    organization: renderOrganization,
    administration: renderAdministration,
  };
  pageMap[state.page]();
}

function renderOverview() {
  const scoped = employeesInScope();
  const scopedCapabilities = capabilitiesInScope();
  const critical = scopedCapabilities.filter((capability) => capability.severity === "High");
  const risks = scoped.filter((employee) => employee.retentionRisk === "High" || employee.dependency !== "No critical dependency");
  const openActions = scoped.flatMap((employee) => employee.actions.filter((action) => action.status !== "Completed").map((action) => ({ employee, action })));
  setHeader(
    "Dashboard",
    "What requires leadership attention in this Research Center scope.",
    `<button class="secondary-button" data-toast="AI analysis refreshed for the selected scope.">Refresh AI Analysis</button>
     <button class="primary-button" data-toast="Review queue opened with ${critical.length + risks.length} items.">Review Attention Queue</button>`
  );
  el.content.innerHTML = `
    <article class="ai-panel">
      ${aiMeta("Scope briefing", "2026-07-14", "2026 annual plan and evidence", "High", "Current")}
      <h2>${critical.length} critical capability risks need review</h2>
      <p>The selected scope contains ${scoped.length} people. The most important work is to resolve backup gaps, single-point dependencies and open learning actions before adding new analysis layers.</p>
      <div class="button-row">
        <button class="secondary-button" data-drawer="briefing">View Evidence</button>
        <button class="primary-button" data-toast="Briefing accepted into review history.">Accept</button>
        <button class="ghost-button" data-toast="Briefing dismissed.">Dismiss</button>
      </div>
    </article>
    <section>
      <div class="section-header"><div><h2>Key Risks</h2><p>Most urgent items first.</p></div></div>
      <div class="grid three">
        ${attentionCard("Capability gaps", critical.length, critical.slice(0, 3).map((item) => `${item.team}: ${item.name} (${item.gap})`), "danger")}
        ${attentionCard("High-priority talent risks", risks.length, risks.slice(0, 3).map((employee) => `${employee.name}: ${employee.dependency}`), "warning")}
        ${attentionCard("Learning actions requiring attention", openActions.length, openActions.slice(0, 3).map(({ employee, action }) => `${employee.name}: ${action.type} for ${action.capability}`), "blue")}
      </div>
    </section>
    <section>
      <div class="section-header"><div><h2>Recommended Actions</h2><p>Approve, edit or dismiss; AI does not create final records silently.</p></div></div>
      <div class="table-wrap">${recommendationTable(scopedCapabilities.slice(0, 8))}</div>
    </section>
    <section>
      <div class="section-header"><div><h2>Scope Snapshot</h2><p>Compact context only, with detail available on the relevant pages.</p></div></div>
      <div class="metric-grid">
        ${metric("People", scoped.length, "Employees, leased labour and interns")}
        ${metric("Capability risks", scopedCapabilities.filter((item) => item.gap !== "Well Covered").length, "Gaps requiring review")}
        ${metric("Open actions", openActions.length, "Learning, backup and mobility actions")}
        ${metric("HRBP insights", scoped.filter((employee) => employee.insights.length).length, "Visible only to authorized roles")}
      </div>
    </section>
  `;
  bindDrawerButtons();
}

function attentionCard(title, count, lines, tone) {
  return `
    <article class="card">
      <div class="section-header"><div><h2>${title}</h2><p><span class="badge ${tone}">${count} items</span></p></div></div>
      <div class="timeline">
        ${lines.length ? lines.map((line) => `<div class="timeline-item"><p>${line}</p></div>`).join("") : '<div class="empty-state"><h2>No urgent item</h2><p>This scope has no immediate attention item in this category.</p></div>'}
      </div>
    </article>
  `;
}

function metric(label, value, note) {
  return `<div class="metric"><strong>${value}</strong><span>${label}</span><p class="muted">${note}</p></div>`;
}

function aiMeta(label, date, period, confidence, freshness) {
  return `<div class="ai-meta"><span class="badge ai">AI-generated</span><span class="badge">${label}</span><span class="badge">Generated ${date}</span><span class="badge">${period}</span><span class="badge">Confidence ${confidence}</span><span class="badge blue">${freshness}</span></div>`;
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

function renderPeople() {
  const role = currentRole();
  setHeader(
    "People",
    "Find an employee quickly, then open a focused profile.",
    `${role.canAddEmployees ? '<button class="primary-button" data-action="addEmployee">Add Employee</button>' : ""}
     ${role.canImportExport ? '<button class="secondary-button" data-action="importEmployees">Import Employees</button><button class="secondary-button" data-action="exportEmployees">Export Employees</button>' : ""}`
  );
  const scoped = employeesInScope();
  el.content.innerHTML = `
    <section class="people-tools">
      <div><label for="peopleSearch">Search employee number, name or capability</label><input id="peopleSearch" value="${state.search}" placeholder="Search people" /></div>
      <div><label>Contract type</label><select id="contractFilter"><option>All contracts</option><option>Employee</option><option>Leased Labour</option><option>Intern</option></select></div>
      <div><label>Talent tag</label><select id="tagFilter"><option>All tags</option>${talentTags.map((tag) => `<option>${tag}</option>`).join("")}</select></div>
      <div><label>Open action</label><select id="actionFilter"><option>Any</option><option>Has open action</option><option>No open actions</option></select></div>
      <div><label>9-Box</label><select id="boxFilter"><option>All placements</option><option>High Impact / High Potential</option><option>Medium Impact / High Potential</option></select></div>
    </section>
    <section>
      <div class="section-header"><div><h2>People in Scope</h2><p id="peopleCount"></p></div></div>
      <div class="table-wrap" id="peopleTable"></div>
    </section>
  `;
  const searchInput = document.querySelector("#peopleSearch");
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    renderPeopleTable(scoped);
  });
  renderPeopleTable(scoped);
}

function renderPeopleTable(scoped) {
  const query = state.search.trim().toLowerCase();
  const filtered = scoped.filter((employee) => {
    const capabilityText = employee.capabilities.map((item) => item.name).join(" ").toLowerCase();
    return !query || employee.name.toLowerCase().includes(query) || employee.number.toLowerCase().includes(query) || capabilityText.includes(query);
  });
  document.querySelector("#peopleCount").textContent = `Showing ${Math.min(filtered.length, 36)} of ${filtered.length} people. Use search or filters to narrow the list.`;
  document.querySelector("#peopleTable").innerHTML = filtered.length
    ? `<table><thead><tr><th>Name</th><th>Role</th><th>Organization</th><th>Talent signals</th><th>Actions</th></tr></thead><tbody>
        ${filtered.slice(0, 36).map((employee) => `
          <tr>
            <td><strong>${employee.name}</strong><br><span class="muted">${employee.number} · ${employee.contract}</span></td>
            <td>${employee.title}<br><span class="muted">${employee.level}</span></td>
            <td>${employee.unit}<br><span class="muted">${employee.team}</span></td>
            <td>${employee.tags.slice(0, 2).map((tag) => `<span class="badge">${tag}</span>`).join(" ")} ${employee.openActions ? `<span class="badge warning">${employee.openActions} open action</span>` : ""}</td>
            <td><button class="secondary-button" data-employee="${employee.id}">Open Profile</button></td>
          </tr>
        `).join("")}
      </tbody></table>`
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

function renderTalent() {
  const scoped = employeesInScope();
  const employee = scoped.find((item) => item.id === state.selectedEmployee) || scoped[0] || employees[0];
  state.selectedEmployee = employee.id;
  setHeader(
    "Employee Profile",
    "One place for talent summary, evidence, capabilities, development and history.",
    `${currentRole().canAddEmployees ? '<button class="secondary-button" data-action="editEmployee">Edit Employee</button>' : ""}
     ${currentRole().canAddManagerRecord ? '<button class="secondary-button" data-action="addManagerRecord">Add Manager Record</button>' : ""}
     ${currentRole().canAddTalentInsight ? '<button class="secondary-button" data-action="addTalentInsight">Add Talent Insight</button>' : ""}
     <button class="primary-button" data-action="createTalentAction">Create Talent Action</button>`
  );
  const tabs = ["Overview", "Performance Evidence", "Capabilities", "Talent & Development", "Career History"];
  el.content.innerHTML = `
    <section class="talent-header">
      <div class="talent-header-main">
        <div>
          <p class="eyebrow">Employee Profile</p>
          <h2>${employee.name}</h2>
          <p>${employee.number} · ${employee.title} · ${employee.level} · ${employee.contract} · Started ${employee.startDate}</p>
          <p class="muted">${employee.reportingLine}</p>
          <div class="tag-row">${employee.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}${employee.awards.map((award) => `<span class="badge blue">${award}</span>`).join("")}</div>
        </div>
        <div class="button-row"><button class="secondary-button" data-drawer="employee-${employee.id}">View Evidence</button></div>
      </div>
      <div class="indicator-grid">
        ${indicator("Impact", employee.currentImpact)}
        ${indicator("Potential", employee.growthPotential)}
        ${indicator("Retention Risk", visibleTalentValue("retentionRisk", employee))}
        ${indicator("Promotion", visibleTalentValue("promotionReadiness", employee))}
        ${indicator("Open Actions", employee.openActions)}
        ${indicator("Critical Dependency", employee.dependency)}
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
      <article class="ai-panel">
        ${aiMeta("AI Talent Summary", "2026-07-14", "Last 12 months", "Moderate", "Current")}
        <h2>${employee.name}</h2>
        <p>${employee.summary}</p>
        <div class="button-row"><button class="secondary-button" data-drawer="employee-${employee.id}">View Evidence</button><button class="primary-button" data-toast="Talent summary accepted.">Accept</button><button class="ghost-button" data-toast="Talent summary dismissed.">Dismiss</button></div>
      </article>
      <div class="grid two">
        <article class="card"><h2>Key Risks</h2>${employee.retentionRisk === "High" || employee.dependency !== "No critical dependency" ? recordsList([["Attention", "Current", employee.dependency, `Review ${employee.name}'s coverage, retention and backup readiness.`]]) : '<div class="empty-state"><h2>No urgent profile risk</h2><p>Use tabs for detailed evidence and development history.</p></div>'}</article>
        <article class="card"><h2>Recommended Actions</h2>${actionList(employee)}</article>
      </div>
    `;
  }
  if (state.talentTab === "Performance Evidence") return `<div class="card"><h2>Manager Records</h2>${recordsList(employee.records)}</div>`;
  if (state.talentTab === "Capabilities") {
    return `<div class="card"><h2>Capabilities</h2><div class="table-wrap"><table><thead><tr><th>Capability</th><th>Level</th><th>Evidence quality</th><th>Source</th></tr></thead><tbody>${employee.capabilities.map((capability) => `<tr><td>${capability.name}</td><td>${capability.level}</td><td>${capability.evidenceQuality}</td><td>${capability.source}</td></tr>`).join("")}</tbody></table></div></div>`;
  }
  if (state.talentTab === "Talent & Development") {
    return `<div class="grid two"><article class="card"><h2>Talent Insights</h2>${state.role === "teamLead" ? restrictedState() : employee.insights.length ? recordsList(employee.insights) : '<div class="empty-state"><h2>No HRBP insight</h2><p>Not every employee has formal HRBP records.</p></div>'}</article><article class="card"><h2>Talent Actions</h2>${actionList(employee)}</article></div>`;
  }
  return `<div class="card"><h2>Career History</h2>${recordsList(employee.growthPath)}</div>`;
}

function recordsList(records) {
  return `<div class="timeline">${records.map((record) => `<div class="timeline-item"><h3>${record[0]} <span class="badge">${record[1]}</span></h3><p><strong>${record[2]}</strong></p><p>${record[3]}</p></div>`).join("")}</div>`;
}

function restrictedState() {
  return `<div class="empty-state"><h2>Restricted HRBP judgments</h2><p>This role can add manager evidence but cannot view or edit HRBP-only talent judgments.</p></div>`;
}

function actionList(employee) {
  if (!employee.actions.length) return `<div class="empty-state"><h2>No open talent action</h2><p>Create an action when evidence, risk or capability coverage requires follow-up.</p></div>`;
  return `<div class="timeline">${employee.actions.map((action) => `<div class="timeline-item"><h3>${action.type} <span class="badge ${action.status === "Completed" ? "blue" : "warning"}">${action.status}</span></h3><p>Target: ${action.capability}. Owner: ${action.owner}. Due: ${action.due}.</p></div>`).join("")}</div>`;
}

function renderCapability() {
  const scopedCapabilities = capabilitiesInScope();
  const high = scopedCapabilities.filter((item) => item.severity === "High");
  setHeader(
    "Capability Intelligence",
    "Which capabilities are missing, under-covered or dependent on too few people?",
    `<button class="primary-button" data-action="generateAnalysis">Generate AI Analysis</button>
     <button class="secondary-button" data-toast="Capability analysis refreshed.">Refresh Analysis</button>
     <button class="secondary-button" data-action="createLearningAction">Create Learning Action</button>`
  );
  el.content.innerHTML = `
    <article class="ai-panel">
      ${aiMeta("Capability analysis", "2026-07-14", "Team goals and evidence", high.length ? "High" : "Moderate", "Current")}
      <h2>${high.length} high-severity capability scenarios</h2>
      <p>AI analyzed annual goals, current people coverage and evidence quality. The most useful next step is to approve learning or backup actions, not to generate more reports.</p>
      <div class="button-row"><button class="secondary-button" data-drawer="briefing">View Evidence</button><button class="primary-button" data-toast="Analysis accepted for human review.">Accept</button><button class="ghost-button" data-toast="Analysis dismissed.">Dismiss</button></div>
    </article>
    <section>
      <div class="section-header"><div><h2>Key Risks</h2><p>Missing capabilities, single-point dependency and backup gaps.</p></div></div>
      <div class="capability-list">${scopedCapabilities.filter((item) => item.severity === "High").map(capabilityItem).join("") || '<div class="empty-state"><h2>No high-severity risk</h2><p>Select another scope or refresh analysis.</p></div>'}</div>
    </section>
    <section>
      <div class="section-header"><div><h2>Recommended Learning Actions</h2><p>Internal development is prioritized before external hiring.</p></div></div>
      <div class="table-wrap">${recommendationTable(scopedCapabilities)}</div>
    </section>
    <section>
      <details class="card">
        <summary><strong>Detailed capability requirements and coverage</strong></summary>
        <div class="capability-list">${scopedCapabilities.map(capabilityItem).join("")}</div>
      </details>
    </section>
  `;
  bindDrawerButtons();
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

function renderOrganization() {
  setHeader("Organization", "Research Center structure and team annual goals.", `${currentRole().canEditOrg ? '<button class="primary-button" data-toast="Organization editor opened.">Edit Structure</button>' : ""}`);
  el.content.innerHTML = `
    <article class="ai-panel">
      ${aiMeta("Organization summary", "2026-07-14", "2026 structure", "High", "Current")}
      <h2>8 business units, ${organization.businessUnits.reduce((sum, unit) => sum + unit.teams.length, 0)} teams and ${employees.length} people</h2>
      <p>The mock organization now represents a multi-year research center with labs, platforms and operations teams.</p>
    </article>
    <div class="grid two">
      <article class="card"><h2>Structure</h2><div class="timeline">${organization.businessUnits.map((unit) => `<div class="timeline-item"><h3>${unit.name} <span class="badge">${unit.type}</span></h3><p>${unit.teams.join(", ")}</p><p class="muted">${employees.filter((employee) => employee.unit === unit.name).length} people</p></div>`).join("")}</div></article>
      <article class="card"><h2>Annual Goals</h2>${recordsList(annualGoals.slice(0, 10))}</article>
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
  setHeader("Administration", "Owner-only configuration and governance.", `<button class="secondary-button" data-toast="Audit log opened.">View Audit Log</button>`);
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
}

function adminGroupFor(section) {
  return Object.entries(adminGroups).find(([, items]) => items.includes(section))[0];
}

function adminContent(section) {
  if (section === "Business Units & Teams") {
    return `<p>Organization configuration shows hierarchy and affected employee counts before high-impact changes are confirmed.</p><div class="table-wrap"><table><thead><tr><th>Unit</th><th>Type</th><th>Teams</th><th>People</th></tr></thead><tbody>${organization.businessUnits.map((unit) => `<tr><td>${unit.name}</td><td>${unit.type}</td><td>${unit.teams.join(", ")}</td><td>${employees.filter((employee) => employee.unit === unit.name).length}</td></tr>`).join("")}</tbody></table></div>`;
  }
  if (section === "Capability Taxonomy") {
    const taxonomy = [...new Set(employees.flatMap((employee) => employee.capabilities.map((capability) => capability.name)))].sort();
    return `<p>${taxonomy.length} capability terms are available in the realistic mock dataset.</p><div class="table-wrap"><table><thead><tr><th>Capability</th><th>Status</th><th>Validation</th></tr></thead><tbody>${taxonomy.slice(0, 40).map((capability) => `<tr><td>${capability}</td><td>Active</td><td>Human review required for AI merge suggestions</td></tr>`).join("")}</tbody></table></div>`;
  }
  if (section === "Roles & Permissions") {
    return `<p>Permissions are enforced by role, scope and field sensitivity.</p><div class="table-wrap"><table><thead><tr><th>Role</th><th>Scope</th><th>Org edit</th><th>Talent judgment</th></tr></thead><tbody>${Object.values(roles).map((role) => `<tr><td>${role.label}</td><td>${role.scope}</td><td>${yesNo(role.canEditOrg)}</td><td>${yesNo(role.canEditTalentJudgment)}</td></tr>`).join("")}</tbody></table></div>`;
  }
  return `<p>This section uses searchable lists, auditability and high-impact confirmations.</p><div class="empty-state"><h2>${section} is ready for configuration data</h2><p>Owner-approved workflows preserve governance and history.</p><button class="primary-button" data-toast="${section} workflow opened.">Create record</button></div>`;
}

function yesNo(value) {
  return value ? '<span class="badge blue">Allowed</span>' : '<span class="badge">Read-only or hidden</span>';
}

function bindDrawerButtons() {
  document.querySelectorAll("[data-drawer]").forEach((button) => button.addEventListener("click", () => openDrawer(button.dataset.drawer)));
  bindToastButtons(document);
  bindActionButtons(document);
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
}

function openActionDrawer(action) {
  const employee = employees.find((item) => item.id === state.selectedEmployee) || employees[0];
  const titles = {
    addEmployee: "Add Employee",
    importEmployees: "Import Employees",
    exportEmployees: "Export Employees",
    editEmployee: "Edit Employee",
    addManagerRecord: "Add Manager Record",
    addTalentInsight: "Add Talent Insight",
    createTalentAction: "Create Talent Action",
    createLearningAction: "Create Learning Action",
    generateAnalysis: "Generate AI Analysis",
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
  }
}

function closeDrawer() {
  el.drawerBackdrop.hidden = true;
  el.drawer.classList.remove("open");
  el.drawer.setAttribute("aria-hidden", "true");
}

function drawerContent(kind) {
  if (kind === "briefing") {
    return `${aiMeta("Evidence review", "2026-07-14", "2026 goals and records", "High", "Current")}<h3>Source goals</h3>${recordsList(annualGoals.slice(0, 8))}<h3>Reasoning summary</h3><p>AI compares annual goals with current people coverage, evidence quality and open development actions.</p>`;
  }
  if (kind.startsWith("employee-")) {
    const employee = employees.find((item) => item.id === kind.replace("employee-", ""));
    return `<h3>${employee.name}</h3><p>${employee.summary}</p><h3>Professional evidence</h3>${recordsList(employee.records)}<h3>Growth path</h3>${recordsList(employee.growthPath)}`;
  }
  if (kind.startsWith("cap-")) {
    const capability = capabilities.find((item) => `cap-${item.name}` === kind);
    return `${aiMeta("Capability gap analysis", "2026-07-14", "Team goals and evidence", capability.severity === "High" ? "High" : "Moderate", "Requires Review")}<h3>${capability.name}</h3><p><strong>Gap:</strong> ${capability.gap}</p><p>${capability.goal}</p><div class="table-wrap"><table><thead><tr><th>Employee</th><th>Level</th><th>Role</th><th>Evidence</th><th>Validation</th></tr></thead><tbody>${capability.coverage.length ? capability.coverage.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("") : '<tr><td colspan="5">No validated professional evidence in the selected scope.</td></tr>'}</tbody></table></div><h3>Recommended response</h3><p>${capability.recommendation}</p><div class="button-row"><button class="primary-button" data-action="createLearningAction">Create Learning Action</button><button class="ghost-button" data-toast="Recommendation dismissed.">Dismiss</button></div>`;
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
        ${selectField("Insight Type", "insightType", ["Development Suggestion", "Talent Risk", "Strength", "Growth Opportunity", "Succession consideration", "Promotion readiness evidence"], "Development Suggestion")}
        ${field("Date", "date", "2026-07-14", "date")}
        ${field("Scope", "scope", employee.team, "text")}
        ${textareaField("Description", "description", `${employee.name} should receive a focused development action connected to ${employee.capabilities[0].name}.`)}
        ${textareaField("Recommended action", "recommendedAction", "Create a mentoring or learning action with review evidence.")}
        ${selectField("Visibility", "visibility", ["HRBP only", "Leadership visible", "Manager visible after approval"], "HRBP only")}
        ${formActions("Add talent insight")}
      </form>
    `;
  }
  if (action === "createTalentAction" || action === "createLearningAction") {
    const selectedCapability = capabilitiesInScope()[0]?.name || employee.capabilities[0].name;
    return `
      <form data-action-form class="form-grid">
        ${selectField("Action Type", "actionType", actionTypes, action === "createLearningAction" ? "Learning" : "Key Role Backup")}
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
  if (action === "generateAnalysis") {
    return `
      <h3>AI analysis stages</h3>
      <div class="timeline">
        ${["Reviewing annual goals", "Identifying required capabilities", "Matching people evidence", "Evaluating gaps", "Preparing recommendations"].map((stage) => `<div class="timeline-item"><h3>${stage} <span class="badge blue">Ready</span></h3><p>This stage uses the selected organization scope and current role permissions.</p></div>`).join("")}
      </div>
      <div class="button-row"><button class="primary-button" data-toast="AI analysis generated and placed under human review.">Generate analysis</button></div>
    `;
  }
  return "<p>No action available.</p>";
}

function field(label, name, value, type) {
  return `<div><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" value="${escapeAttr(value)}" required /></div>`;
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
  return `<div class="form-action-bar"><button type="button" class="secondary-button" data-action="closeDrawer">Cancel</button><button type="submit" class="primary-button">${saveLabel}</button></div>`;
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
      reportingLine: `${employee.manager} > ${data.team} > ${data.unit}`,
    });
    employee.records.unshift(["Profile update", "2026-07-14", "Basic information changed", data.notes]);
    finishAction("Employee profile updated.");
    return;
  }
  if (action === "addManagerRecord") {
    employee.records.unshift([data.recordType, data.date, data.scope, `${data.description} Related capability: ${data.capability}. Visibility: ${data.visibility}.`]);
    state.talentTab = "Performance Evidence";
    finishAction("Manager record added.");
    return;
  }
  if (action === "addTalentInsight") {
    employee.insights.unshift([data.insightType, data.date, "HRBP", `${data.description} Recommended action: ${data.recommendedAction}. Visibility: ${data.visibility}.`]);
    state.talentTab = "Talent & Development";
    finishAction("Talent insight added.");
    return;
  }
  if (action === "createTalentAction" || action === "createLearningAction") {
    const employeeId = data.employeeId.split("|")[0];
    const target = employees.find((item) => item.id === employeeId) || employee;
    target.actions.unshift({ type: data.actionType, status: data.status, capability: data.capability, owner: data.owner, due: data.due });
    target.openActions = target.actions.filter((item) => item.status !== "Completed").length;
    state.selectedEmployee = target.id;
    state.page = "talent";
    state.talentTab = "Talent & Development";
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
