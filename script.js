const projects = [
  {
    title: "Tata Consultancy Services ESG Job Simulation",
    meta: "March 2026",
    description:
      "Completed a multi-module sustainability consulting simulation focused on corporate ESG challenges and fitment analysis.",
    bullets: [
      "Analyzed sustainability challenges across four-plus modules.",
      "Built a fitment matrix with strategic ESG recommendations.",
      "Strengthened applied problem solving for sustainability roles.",
    ],
  },
  {
    title: "BCG Climate and Sustainability Job Simulation",
    meta: "March 2026",
    description:
      "Worked with emissions data to assess baseline carbon performance and compare Scope 1, 2, and 3 metrics.",
    bullets: [
      "Used Excel for emissions baseline analysis.",
      "Compared datasets against CDP benchmarks for data reliability.",
      "Interpreted emissions categories for reporting and strategy.",
    ],
  },
  {
    title: "Flood Vulnerability and Preparedness Research",
    meta: "Academic work, 2024-2025",
    description:
      "Assessed flood vulnerability and preparedness in Delhi using key risk indicators and planning gaps.",
    bullets: [
      "Evaluated 4 to 5 risk indicators across flood management systems.",
      "Identified community awareness and evacuation planning gaps.",
      "Connected disaster research to practical resilience planning.",
    ],
  },
  {
    title: "Sustainable Tourism Critique and Field Study Review",
    meta: "Academic work, 2024-2025",
    description:
      "Critiqued a field-based study on sustainable tourism in Goa with a focus on environmental and community effects.",
    bullets: [
      "Surveyed 100+ tourists for socio-economic and behavioral analysis.",
      "Examined tourism's environmental and community-level impacts.",
      "Practiced structured research interpretation and critique.",
    ],
  },
  {
    title: "World Sustainable Development Summit Support",
    meta: "March 2026",
    description:
      "Volunteered during a major climate summit and supported stakeholder engagement across sessions.",
    bullets: [
      "Supported three days of sessions and logistics.",
      "Engaged with policymakers, experts, and researchers.",
      "Built familiarity with conference and stakeholder environments.",
    ],
  },
  {
    title: "Climate Skills Workshop and Conference Coordination",
    meta: "2025",
    description:
      "Contributed to climate learning and academic event coordination while strengthening communication and collaboration.",
    bullets: [
      "Participated in interactive climate skills training at TERI.",
      "Assisted in coordinating a conference with 100+ researchers.",
      "Expanded exposure to geospatial innovations and sustainability discourse.",
    ],
  },
];

const blogPosts = [
  {
    category: "Climate science",
    date: "Draft idea",
    title: "How to explain a climate dataset without losing the story",
    excerpt:
      "A practical note on translating analysis into language that helps recruiters, policymakers, and non-specialists understand the point.",
  },
  {
    category: "Policy notes",
    date: "Draft idea",
    title: "The value of local evidence in adaptation planning",
    excerpt:
      "Why field observations, spatial context, and public engagement matter when climate policy moves from paper to implementation.",
  },
  {
    category: "Research update",
    date: "Draft idea",
    title: "What I learned from reviewing flood vulnerability indicators",
    excerpt:
      "A short reflection on how risk indicators, preparedness gaps, and communication shape disaster resilience work.",
  },
  {
    category: "Project log",
    date: "Draft idea",
    title: "Using GIS to make environmental patterns easier to read",
    excerpt:
      "A note on using maps and spatial layers to communicate climate and sustainability evidence clearly.",
  },
];

const education = [
  {
    date: "2025 - 2027",
    title: "M.Sc. Climate Science and Policy",
    description: "TERI School of Advanced Studies, University of Delhi. Focused on climate solutions, policy development, and sustainability planning.",
  },
  {
    date: "2022 - 2025",
    title: "B.A. Geography",
    description: "University of Delhi. Built an academic foundation in geography, spatial thinking, and environmental analysis.",
  },
  {
    date: "April 2024",
    title: "Satellite Image Processing Certification",
    description: "15-day certification covering QGIS, ArcGIS, thematic mapping, satellite interpretation, and spatial dataset visualization.",
  },
  {
    date: "February 2025",
    title: "Soil Testing Certification",
    description: "15-day certificate course in soil testing and water analysis with hands-on work on soil parameters, pH, and water quality.",
  },
];

const skills = [
  { label: "GIS and spatial data analysis", value: 92 },
  { label: "Research design", value: 88 },
  { label: "Disaster risk assessment", value: 85 },
  { label: "Environmental impact analysis", value: 84 },
  { label: "Communication and collaboration", value: 90 },
];

const iconSvgs = {
  leaf: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M47 13c-16 1-30 12-34 31 7-1 14-3 20-7 8-5 15-12 18-24-1 0-2 0-4 0Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M18 47c7-13 16-22 29-29" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,
  globe: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="3.5"/>
      <ellipse cx="32" cy="32" rx="11" ry="22" fill="none" stroke="currentColor" stroke-width="3.5"/>
      <path d="M12 32h40M16 22c5 4 10 6 16 6s11-2 16-6M16 42c5-4 10-6 16-6s11 2 16 6" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,
  chart: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 52V12" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M12 52h40" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="20" y="30" width="6" height="22" rx="2" fill="currentColor" opacity="0.8"/>
      <rect x="32" y="22" width="6" height="30" rx="2" fill="currentColor" opacity="0.8"/>
      <rect x="44" y="16" width="6" height="36" rx="2" fill="currentColor" opacity="0.8"/>
    </svg>`,
  spark: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 10l5.5 16.5L54 32l-16.5 5.5L32 54l-5.5-16.5L10 32l16.5-5.5L32 10Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="48" cy="16" r="4" fill="currentColor"/>
    </svg>`,
};

function iconForTitle(title) {
  if (title.toLowerCase().includes("simulation")) return iconSvgs.chart;
  if (title.toLowerCase().includes("research") || title.toLowerCase().includes("study")) return iconSvgs.globe;
  if (title.toLowerCase().includes("summit") || title.toLowerCase().includes("workshop")) return iconSvgs.spark;
  return iconSvgs.leaf;
}

function createProjectCard(project) {
  const template = document.getElementById("project-template");
  const node = template.content.firstElementChild.cloneNode(true);

  node.querySelector(".card-icon").innerHTML = iconForTitle(project.title);
  node.querySelector(".card-meta").textContent = project.meta;
  node.querySelector("h3").textContent = project.title;
  node.querySelector("p").textContent = project.description;

  const list = node.querySelector("ul");
  project.bullets.forEach((bullet) => {
    const item = document.createElement("li");
    item.textContent = bullet;
    list.appendChild(item);
  });

  return node;
}

function createBlogCard(post) {
  const template = document.getElementById("blog-template");
  const node = template.content.firstElementChild.cloneNode(true);

  node.querySelector(".mini-meta").innerHTML = `<span class="pill">${post.category}</span><span>${post.date}</span>`;
  node.querySelector("h3").textContent = post.title;
  node.querySelector("p").textContent = post.excerpt;

  return node;
}

function createTimelineItem(entry) {
  const template = document.getElementById("timeline-template");
  const node = template.content.firstElementChild.cloneNode(true);

  node.querySelector(".timeline-date").textContent = entry.date;
  node.querySelector("h3").textContent = entry.title;
  node.querySelector("p").textContent = entry.description;

  return node;
}

function createSkillRow(skill) {
  const row = document.createElement("article");
  row.className = "skill-row";
  row.innerHTML = `
    <header>
      <span>${skill.label}</span>
      <span>${skill.value}%</span>
    </header>
    <div class="meter" aria-hidden="true"><span style="--value: ${skill.value}%;"></span></div>
  `;
  return row;
}

const projectsGrid = document.getElementById("projects-grid");
const blogCards = document.getElementById("blog-cards");
const educationTimeline = document.getElementById("education-timeline");
const skillsBars = document.getElementById("skills-bars");

projects.forEach((project) => projectsGrid.appendChild(createProjectCard(project)));
blogPosts.forEach((post) => blogCards.appendChild(createBlogCard(post)));
education.forEach((entry) => educationTimeline.appendChild(createTimelineItem(entry)));
skills.forEach((skill) => skillsBars.appendChild(createSkillRow(skill)));
