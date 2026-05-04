export const personalInfo = {
  name: "Sajjad Iqbal",
  shortName: "Sajjad",
  title: "Senior Database Administrator & Cloud Solutions Architect",
  tagline:
    "5+ years engineering reliable database, cloud and identity infrastructure across Telecom, Banking, Healthcare and IT consulting.",
  bio: "Results-driven Database Administrator and IT Solutions Architect with 5+ years of hands-on experience managing complex on-premise, cloud and hybrid environments. AWS Certified Solutions Architect with proven expertise across Oracle, MySQL and SQL Server, and a track record of delivering Microsoft 365 administration, identity migrations, healthcare PACS infrastructure and end-to-end DevOps automation for global clients.",
  photo: "/sajjad.webp",
  avatar: "/sajjad-avatar.webp",
  portrait: "/sajjad-portrait.webp",
  email: "sajjadiqbal444@gmail.com",
  phone: "+92 304 4012152",
  location: "Islamabad, Pakistan",
  website: "https://sajjadiqbal.com",
  linkedin: "https://www.linkedin.com/in/sajjad-iqbal-795306136",
  github: "https://github.com/Sajjad444-alt",
  credly: "https://www.credly.com/users/sajjad-iqbal.1592aa96",
  fiverr: "https://www.fiverr.com/s/VYyVLj5",
  resumeUrl: "/Sajjad_Iqbal_Resume.pdf",
  whatsapp: "+923044012152",
  whatsappUrl: "https://wa.me/923044012152",
  availableFor: ["Full-time", "Remote", "Contract / Consulting"]
};

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Enterprise Clients" },
  { value: "3", label: "Major Certifications" },
  { value: "24/7", label: "On-Call Support" }
];

export const industries = [
  "Telecom",
  "Banking",
  "Healthcare",
  "IT Consulting",
  "SaaS"
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Pakistan Telecommunication Company Limited (PTCL)",
    role: "Executive DBA",
    period: "Jul 2024 — Present",
    location: "Islamabad, Pakistan",
    summary:
      "Managing mission-critical Oracle, MySQL and SQL Server estates for Pakistan's largest telecom operator.",
    highlights: [
      "Tuned Maximo DB scheduler — reduced a 3-hour job to seconds via query optimization",
      "Converted single-instance to 2-node RAC cluster (ccsdbnew) with shared ASM and srvctl registration",
      "DataGuard setup for 2-Node RAC + successful DR drill switching primary to Karachi DR (ILPTCL)",
      "OID + EUS configuration for centralized SSO across multiple databases",
      "Configured 3-node InnoDB cluster, MySQL replication, TDE, SSL and slow-query analysis",
      "Implemented Always On Availability Groups, Log Shipping and Mirroring on SQL Server 2019"
    ]
  },
  {
    company: "Teknik Business Consulting Group (Clients: DEWC, Knovel Health, Marlos IT)",
    role: "Microsoft 365 / IT Solutions Engineer",
    period: "2024 — Present (Concurrent)",
    location: "Remote — Global Clients",
    summary:
      "Designing and operating Microsoft 365, identity, security and PACS infrastructure for international clinical and IT-services clients.",
    highlights: [
      "Built and deployed knovelPACS — a full-stack medical imaging platform (Next.js + MySQL + Orthanc DICOM) exposed securely via Cloudflare Tunnel",
      "Migrated organizations from local Active Directory to Microsoft Entra ID with zero data loss",
      "Authored DLP policies aligned with HIPAA for protected health information across Exchange Online and SharePoint",
      "GoDaddy → Microsoft 365 defederation and DNS cutovers with zero mailflow downtime",
      "Microsoft Intune device management, Conditional Access and compliance baselines",
      "Cynet endpoint security deployment, monitoring and incident response",
      "Automated network drive mapping, password reset workflows and onboarding/offboarding SOPs"
    ]
  },
  {
    company: "Armed Forces Institute of Cardiology (AFIC/NIHD)",
    role: "Database Administrator",
    period: "May 2023 — Jun 2024",
    location: "Rawalpindi, Pakistan",
    summary:
      "Owned the entire database lifecycle for one of Pakistan's largest cardiac care institutions.",
    highlights: [
      "Manual upgrade of Oracle 11g → 19c, including Non-CDB to PDB transformation",
      "Standby database creation and DataGuard configuration for HA",
      "Deployed and managed Oracle Enterprise Manager (OEM) 13c with real-time monitoring",
      "Oracle GoldenGate 12c-based 11g → 19c upgrade with zero downtime",
      "ESXi 6.5 installation, VM provisioning and infrastructure management",
      "WebLogic 11g/12c installation and management on Windows Server 2022"
    ]
  },
  {
    company: "MCB Bank Limited",
    role: "Database Support Officer / DBA",
    period: "Apr 2022 — May 2023",
    location: "Lahore, Pakistan",
    summary:
      "Provided 24x7 production database support for one of Pakistan's leading commercial banks.",
    highlights: [
      "Performance monitoring with AWR, ADDM and SQL Tuning Advisor",
      "Configured and managed physical standby databases — switchover, failover, snapshot standby",
      "RMAN-based recovery: dropped tables, datafiles, control files and corrupted blocks",
      "Roll-forward of physical standby using RMAN incremental backup",
      "ASM administration — disk groups, partitions, RAC physical standby (2-node)",
      "Patch application across primary and DataGuard environments",
      "Shell scripting for automated database jobs and monitoring"
    ]
  },
  {
    company: "WorldLinks",
    role: "Assistant Database Administrator",
    period: "Jan 2020 — Mar 2022",
    location: "Rawalpindi, Pakistan",
    summary:
      "Designed and managed hospital database systems serving multiple healthcare facilities.",
    highlights: [
      "Designed Hospital Information Systems used across multiple small hospitals",
      "Installed and managed Oracle 11G / 12C / 19C environments",
      "Worked with Pluggable Databases (PDBs) and CDB architecture",
      "VMware setup and server configuration"
    ]
  }
];

export type SkillGroup = {
  category: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Databases",
    icon: "database",
    items: [
      "Oracle 11g / 12c / 19c",
      "MySQL 8.x",
      "SQL Server 2019",
      "MongoDB",
      "PostgreSQL"
    ]
  },
  {
    category: "Cloud (AWS)",
    icon: "cloud",
    items: [
      "EC2",
      "VPC",
      "RDS",
      "Lambda",
      "ELB",
      "S3",
      "CloudFormation / CDK",
      "CodeCommit",
      "SNS / SQS",
      "ECR"
    ]
  },
  {
    category: "Microsoft 365 & Identity",
    icon: "shield-check",
    items: [
      "Exchange Online",
      "Microsoft Entra ID",
      "Intune (MDM/MAM)",
      "Conditional Access",
      "DLP / HIPAA Policies",
      "SharePoint Online",
      "GoDaddy → M365 Defederation",
      "DNS / SPF / DKIM / DMARC"
    ]
  },
  {
    category: "DevOps & CI/CD",
    icon: "git-branch",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git / GitHub",
      "Ansible",
      "SonarQube",
      "Maven",
      "Cloudflare Tunnel"
    ]
  },
  {
    category: "Oracle Stack",
    icon: "server",
    items: [
      "RAC (Real Application Clusters)",
      "Data Guard",
      "GoldenGate 12c",
      "ASM",
      "OEM 13c",
      "WebLogic 11g/12c",
      "OID + EUS"
    ]
  },
  {
    category: "HA & DR",
    icon: "shield",
    items: [
      "Always On Availability Groups",
      "Log Shipping",
      "Database Mirroring",
      "InnoDB Cluster",
      "Physical Standby",
      "RMAN"
    ]
  },
  {
    category: "Healthcare / PACS",
    icon: "heart-pulse",
    items: [
      "DICOM (Orthanc)",
      "PACS server architecture",
      "HIPAA compliance",
      "Cloudflare Tunnel for clinical sites",
      "HL7 awareness"
    ]
  },
  {
    category: "Operating Systems",
    icon: "terminal",
    items: [
      "Linux (RHEL / Oracle Linux)",
      "Windows Server 2019 / 2022",
      "Shell / PowerShell",
      "VMware ESXi 6.5"
    ]
  }
];

export type Certification = {
  name: string;
  issuer: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/users/sajjad-iqbal.1592aa96"
  },
  {
    name: "Oracle Certified Professional — MySQL 8.0 Database Administrator",
    issuer: "Oracle University",
    url: "https://certview.oracle.com/"
  },
  {
    name: "Database Administration (Oracle Track)",
    issuer: "NAVTTC / UNEVOC / APPACC / ISO 9001",
    url: "https://navttc.gov.pk"
  }
];

export type Project = {
  name: string;
  description: string;
  longDescription?: string;
  url: string;
  tech: string[];
  featured?: boolean;
  image?: string;
  bullets?: string[];
};

export const projects: Project[] = [
  {
    name: "knovelPACS — Medical Imaging Platform",
    description:
      "Full-stack PACS (Picture Archiving and Communication System) for clinics — Next.js portal, Orthanc DICOM, MySQL 8 — exposed securely via Cloudflare Tunnel with zero open ports.",
    longDescription:
      "Production-grade medical imaging infrastructure deployed across multiple clinics. Combines a Next.js / React 19 portal, a Node bridge, Orthanc DICOM server (port 104) and MySQL 8 — all running on Windows Server with public HTTPS access via Cloudflare Tunnel. No inbound ports, edge TLS termination, repeatable per-site deployment runbook.",
    url: "https://github.com/Sajjad444-alt",
    tech: [
      "Next.js 16",
      "React 19",
      "MySQL 8",
      "Orthanc DICOM",
      "Cloudflare Tunnel",
      "Windows Server",
      "Node.js"
    ],
    featured: true,
    bullets: [
      "Authored repeatable production deployment runbook (cloudflared 2026.3.0, Windows Server 2019)",
      "DICOM modality support (port 104) for radiology equipment integration",
      "Edge-terminated HTTPS with zero exposed inbound ports — HIPAA-friendly",
      "Multi-site rollout: staging + per-clinic production tunnels",
      "Service-based stack: knovelPACS, knovelPACS-Bridge, knovelPACS-Portal, MySQL80"
    ]
  },
  {
    name: "Oracle 19c Installation",
    description:
      "End-to-end installation guide and automation for Oracle Database 19c on Linux, including silent install via response file.",
    url: "https://github.com/Sajjad444-alt/oracle-19c-installation",
    tech: ["Oracle 19c", "Linux", "Shell"]
  },
  {
    name: "GoldenGate Scripts",
    description:
      "Curated Oracle GoldenGate 12c scripts for replication, monitoring and 11g → 19c zero-downtime upgrades.",
    url: "https://github.com/Sajjad444-alt/golden-gate",
    tech: ["GoldenGate 12c", "Oracle", "Replication"]
  },
  {
    name: "Jenkins Java Pipeline",
    description:
      "CI/CD pipeline reference project demonstrating Jenkins build, test and deploy stages for a Java application.",
    url: "https://github.com/Sajjad444-alt/jenkins-java-project",
    tech: ["Jenkins", "Java", "Maven", "CI/CD"]
  },
  {
    name: "Jenkins Installation",
    description:
      "Shell-script based Jenkins installation and bootstrap for Linux servers — reproducible DevOps setup.",
    url: "https://github.com/Sajjad444-alt/jenkins-installation-repo",
    tech: ["Jenkins", "Shell", "Linux"]
  },
  {
    name: "Git Concepts",
    description:
      "Comprehensive reference covering Git workflows, branching strategies and team collaboration patterns.",
    url: "https://github.com/Sajjad444-alt/git-concepts",
    tech: ["Git", "GitHub", "Documentation"]
  }
];

export const featuredProject = projects.find((p) => p.featured)!;

export const achievements = [
  {
    metric: "3 hrs → seconds",
    description:
      "Reduced a critical Maximo scheduler job from 3 hours to seconds at PTCL via query tuning"
  },
  {
    metric: "Zero-downtime",
    description:
      "Migrated Oracle 11g → 19c using GoldenGate 12c with zero production downtime"
  },
  {
    metric: "Single → 2-Node RAC",
    description:
      "Converted single-instance database to 2-node RAC cluster with shared ASM at PTCL"
  },
  {
    metric: "DR Drill Success",
    description:
      "Successfully switched primary database to Karachi DR for ILPTCL during full DR drill"
  },
  {
    metric: "knovelPACS Live",
    description:
      "Built and shipped a HIPAA-friendly PACS platform exposed publicly via Cloudflare Tunnel"
  },
  {
    metric: "AD → Entra ID",
    description:
      "Migrated organizations from on-prem Active Directory to Microsoft Entra ID with zero data loss"
  }
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#featured", label: "Featured" },
  { href: "#datastack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];
