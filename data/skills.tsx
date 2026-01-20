import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiPostgresql, 
  SiMongodb, 
  SiHtml5, 
  SiCss3, 
  SiNextdotjs, 
  SiReact, 
  SiExpress, 
  SiTailwindcss, 
  SiThreedotjs, 
  SiGit, 
  SiNodedotjs, 
  SiSupabase, 
  SiFirebase, 
  SiC,
  SiGithub,
  SiGithubactions,
  SiExpo,
  SiElectron
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaRobot, FaServer } from "react-icons/fa";
import { Database, Globe, Code } from "lucide-react"; // Fallbacks or generics

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: Database, color: "#336791" },
      { name: "NoSQL", icon: Database, color: "#4DB33D" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#ffffff" }, // Changed to white for visibility
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
      { name: "WebXR", icon: Globe, color: "#E44D26" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "CI/CD Pipelines", icon: SiGithubactions, color: "#2088FF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Electron", icon: SiElectron, color: "#47848F" },
    ],
  },
  {
    category: "Database & Backend",
    items: [
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "RESTful API", icon: FaServer, color: "#607D8B" },
      { name: "Bots Creation", icon: FaRobot, color: "#FF5722" },
    ],
  },
];
