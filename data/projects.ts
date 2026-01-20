export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  images?: string[]; 
}

export const projects: Project[] = [
  {
    id: "fun-learning",
    title: "FunLearning",
    description: "An interactive educational platform designed to make learning engaging and fun. Features gamified lessons, progress tracking, and adaptive learning paths for an enhanced educational experience.",
    tags: ["React Native", "Expo", "Supabase", "Education"],
    link: "https://github.com/ramymoze/fun-learning",
    images: ["/projects/fun-learning.png"],
  },
  {
    id: "pneumonie-detection",
    title: "Pneumonie Detection",
    description: "Medical imaging application for pneumonia detection using TypeScript. Features advanced image processing and diagnostic capabilities.",
    tags: ["TypeScript", "Medical Imaging", "AI", "Healthcare"],
    link: "https://github.com/ramymoze/pneumoniedetection",
    images: [
      "/projects/pneumonia-detection-landing-page-.png",
      "/projects/pneumonia-detection.png",
      "/projects/pneumonia-detectionpng.png"
    ],
  },
  {
    id: "oscawaves",
    title: "OSCAWaves",
    description: "A responsive landing page featuring 3D models and neon aesthetics. Built with modern web technologies and optimized for performance.",
    tags: ["React", "3D", "Web Design", "Dark UI"],
    link: "https://github.com/ramymoze/oscawaves",
    images: ["/projects/oscawaves.png"],
  },
  {
    id: "droply-app",
    title: "Droply App",
    description: "Modern delivery and logistics application with real-time tracking and user-friendly interface.",
    tags: ["React Native", "Mobile App", "Logistics", "Real-time"],
    link: "https://github.com/ramymoze/droply",
    images: [
      "/projects/droply-dashboard-landing-page-jpg.jpg",
      "/projects/droply-map.jpg",
      "/projects/droply.jpg",
      "/projects/droplypage-.jpg",
      "/projects/droplypagee.jpg"
    ],
  },
  {
    id: "bourefis-store",
    title: "Bourefis Store",
    description: "E-commerce platform with modern design and seamless shopping experience.",
    tags: ["E-commerce", "React", "Full Stack", "Web App"],
    link: "https://github.com/ramymoze/bourefis-store",
    images: ["/projects/bourefis-store.png"],
  },
  {
    id: "tiktok-downloader",
    title: "TikTok Downloader Bot",
    description: "Python-based bot for downloading TikTok videos. Features automated download capabilities and media processing.",
    tags: ["Python", "Bot", "Automation", "Media Processing"],
    link: "https://github.com/ramymoze/Tiktokdownloader_bot",
  },
];
