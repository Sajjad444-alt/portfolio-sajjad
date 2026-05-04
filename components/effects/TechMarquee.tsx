"use client";

const techStack = [
  "Oracle 19c",
  "MySQL 8",
  "SQL Server",
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Microsoft 365",
  "Entra ID",
  "Intune",
  "Cloudflare",
  "Linux",
  "PowerShell",
  "RAC",
  "DataGuard",
  "Orthanc",
  "DICOM",
  "GoldenGate",
  "Ansible",
  "Terraform",
  "Next.js"
];

export default function TechMarquee() {
  // Duplicate so the loop is seamless
  const items = [...techStack, ...techStack];

  return (
    <div
      className="relative w-full overflow-hidden py-6 border-y border-white/5 bg-bg/60 backdrop-blur-sm"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      }}
    >
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-sm md:text-base font-mono tracking-wider text-white/40 hover:text-accent-cyan transition-colors flex items-center gap-3"
          >
            <span className="w-1 h-1 rounded-full bg-accent-cyan/60" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
