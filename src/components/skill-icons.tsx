import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiSwift,
  SiApple,
  SiNodedotjs,
  SiSpring,
  SiSymfony,
  SiPhp,
  SiFastapi,
  SiPython,
  SiC,
  SiOpenai,
  SiMysql,
  SiMongodb,
  SiElasticsearch,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiTerraform,
  SiFigma,
} from "react-icons/si";
import {
  FaJava,
  FaBrain,
  FaNetworkWired,
  FaUsers,
  FaPuzzlePiece,
  FaPersonRunning,
  FaRocket,
  FaCode,
  FaAws,
} from "react-icons/fa6";
import { IconType } from "react-icons";

type SkillIconDef = { icon: IconType; color: string };

export const SKILL_ICONS: Record<string, SkillIconDef> = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  Swift: { icon: SiSwift, color: "#F05138" },
  iOS: { icon: SiApple, color: "#000000" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Java: { icon: FaJava, color: "#E76F00" },
  "Spring Boot": { icon: SiSpring, color: "#6DB33F" },
  Symfony: { icon: SiSymfony, color: "#000000" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Python: { icon: SiPython, color: "#3776AB" },
  C: { icon: SiC, color: "#A8B9CC" },
  "Machine Learning": { icon: FaBrain, color: "#FF6F61" },
  LLMs: { icon: SiOpenai, color: "#412991" },
  RAG: { icon: FaCode, color: "#6E56CF" },
  AI: { icon: FaBrain, color: "#412991" },
  YOLOv5: { icon: FaBrain, color: "#7B42BC" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  ElasticSearch: { icon: SiElasticsearch, color: "#005571" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  AWS: { icon: FaAws, color: "#FF9900" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  Git: { icon: SiGit, color: "#F05032" },
  Terraform: { icon: SiTerraform, color: "#7B42BC" },
  "Distributed Systems": { icon: FaNetworkWired, color: "#0EA5E9" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "Team Spirit": { icon: FaUsers, color: "#F59E0B" },
  "Problem Solving": { icon: FaPuzzlePiece, color: "#10B981" },
  Autonomous: { icon: FaPersonRunning, color: "#EF4444" },
  "Self-Starter": { icon: FaRocket, color: "#8B5CF6" },
};

const FALLBACK: SkillIconDef = { icon: FaCode, color: "#6B7280" };

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const { icon: Icon, color } = SKILL_ICONS[name] ?? FALLBACK;
  return <Icon className={className} style={{ color }} />;
}
