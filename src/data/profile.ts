export const PROFILE = {
  name: "이현우",
  greeting: 'echo "Hello World"',
  description: "보안 시스템 개발자 이현우입니다.",
  sub: "Network & Infrastructure 중심으로 일합니다.",
} as const;

export interface ExperienceItem {
  text: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  { text: "세명컴퓨터고등학교 스마트보안솔루션과 8기 졸업, 과대표 역임." },
  { text: "세명컴퓨터고등학교 클라우드 컴퓨팅 전공심화 동아리 Null4U 부장." },
  { text: "KITRI Best of The Best 12기 수료." },
  { text: "주식회사 TEIREN 팀장으로 SIEM 플랫폼 설계 및 개발." },
  { text: "디지털새싹 SW 강사." },
];

export interface SkillCategory {
  title: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Language",
    items: [
      "C, C++",
      "Python",
      "Shell Script (Bash, Linux Automation)",
      "SQL",
      "Cypher (Neo4j Graph Query)",
      "Go",
    ],
  },
  {
    title: "Backend & Data Engineering",
    items: [
      "FastAPI 기반 Collector 비동기 / 멀티스레딩 처리 엔진 개발",
      "Elasticsearch (Index 설계, Scroll API, 대용량 처리)",
      "Neo4j (Graph 모델링, APOC, Batch 처리, 탐지 로직 설계)",
    ],
  },
  {
    title: "Log & Security Engineering",
    items: [
      "Fluent Bit / Fluentd",
      "Wireshark, Nmap",
      "Sysmon 구성 및 XML 커스터마이징",
      "Windows Security / RDP / PowerShell Event",
      "Linux auditd / syslog 수집 및 정규식 파싱",
      "SNMP OID 매핑 및 Network/Firewall 장비 로그 파싱",
      "Sigma Rule 기반 탐지 로직 분석 및 커스터마이징",
    ],
  },
  {
    title: "DevOps & Infra",
    items: [
      "AWS",
      "Docker / Docker Compose",
      "Kubernetes / Minikube",
      "Network Architecture & Theory",
      "오프라인 및 폐쇄망 배포",
    ],
  },
  {
    title: "ETC",
    items: [
      "Operating System (Windows, Linux)",
      "Git / Git Submodule",
      "Data Structure & Algorithm",
      "Blockchain Theory",
      "대용량 로그 처리 아키텍처 설계 경험",
    ],
  },
];

export interface LinkItem {
  label: string;
  href: string;
  icon: "blog" | "github" | "instagram";
}

export const LINKS: LinkItem[] = [
  {
    label: "Blog",
    href: "https://hw1186.tistory.com",
    icon: "blog",
  },
  {
    label: "GitHub",
    href: "https://github.com/hw1186",
    icon: "github",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/hw_ndf",
    icon: "instagram",
  },
];
