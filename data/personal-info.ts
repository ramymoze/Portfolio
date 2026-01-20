import { Heart, Users, Sparkles, Lightbulb, ShieldCheck, Eye } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface SoftSkill {
  icon: LucideIcon;
  label: string;
  color: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  bio: string[];
  email: string;
  github: string;
  logo: string;
  availableForHire: boolean;
  resumePath: string;
  profileImage: string;
  softSkills: SoftSkill[];
}

export const personalInfo: PersonalInfo = {
  name: "Zehar Mohamed Ramy",
  title: "Full Stack Developer",
  tagline: "Architecting Digital Future.",
  description: "I build scalable, high-performance web applications with clean code and modern design principles.",
  bio: [
    "I am a passionate Full Stack Developer dedicated to crafting robust and scalable web applications. With deep expertise in modern web technologies, I transform complex requirements into elegant, user-centric solutions.",
    "My journey involves continuous learning and applying best practices to build digital experiences that not only look great but perform flawlessly."
  ],
  email: "ze.mohramy@gmail.com",
  github: "https://github.com/ramymoze",
  logo: "<el_ey />",
  availableForHire: true,
  resumePath: "/resume.pdf",
  profileImage: "/me.png",
  softSkills: [
    { icon: Heart, label: "Passionate", color: "text-red-500" },
    { icon: Users, label: "Cooperative", color: "text-blue-500" },
    { icon: Sparkles, label: "Problem Solver", color: "text-yellow-500" },
    { icon: Lightbulb, label: "Creative", color: "text-orange-500" },
    { icon: ShieldCheck, label: "Reliable", color: "text-green-500" },
    { icon: Eye, label: "Detail Oriented", color: "text-teal-500" },
  ],
};
