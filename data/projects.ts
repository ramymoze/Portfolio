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
    id: "oscawaves",
    title: "OSCAWaves",
    description:
      "A responsive landing page featuring 3D models and neon aesthetics. Built with modern web technologies and optimized for performance.",
    tags: ["React", "3D", "Web Design", "Dark UI"],
    link: "https://github.com/ramymoze/oscawaves",
    images: ["/projects/oscawaves.png"],
  },
  {
    id: "droply-app",
    title: "Droply App",
    description:
      "Modern delivery and logistics application with real-time tracking and user-friendly interface.",
    tags: ["React Native", "Mobile App", "Logistics", "Real-time"],
    link: "https://github.com/ramymoze/droply",
    images: [
      "/projects/droply-dashboard-landing-page-jpg.jpg",
      "/projects/droply-map.jpg",
      "/projects/droply.jpg",
      "/projects/droplypagee-.jpg",
      "/projects/droplypagee.jpg",
    ],
  },
  {
    id: "blockchain-token-vault",
    title: "Blockchain Token Vault",
    description:
      "A secure blockchain-based token storage and management system built with Python. It solves the challenge of safely storing and controlling access to digital tokens by combining encryption, vault-style access controls, and transaction tracking. Recruiters will notice the practical focus on asset security, blockchain interoperability, and deployable token custody logic.",
    tags: ["Python", "Blockchain", "Security", "Vault"],
    link: "https://github.com/ramymoze/Blockchain-Token-Vault",
  },
  {
    id: "traffic-inspector",
    title: "Traffic Inspector",
    description:
      "A Python-powered network traffic analysis and packet inspection tool for uncovering anomalies and understanding protocol behavior. It solves the need for transparent traffic diagnostics by parsing packets, surfacing suspicious flows, and enabling deep protocol-level inspection. This project highlights networking expertise, system-level Python tooling, and hands-on debugging of live or captured network data.",
    tags: ["Python", "Networking", "Security", "Protocol Analysis"],
    link: "https://github.com/ramymoze/traffic-inspector",
  },
  {
    id: "vaultpay",
    title: "VaultPay",
    description:
      "A React Native mobile payment app that secures peer-to-peer transactions with blockchain-style vault mechanics. It solves trust and transaction security challenges by pairing intuitive payment workflows with escrow-style vault logic and tamper-resistant storage. The result is a polished fintech demo that showcases mobile UX, secure transaction design, and blockchain concepts in a consumer-ready format.",
    tags: ["React Native", "Fintech", "Blockchain", "Mobile"],
    link: "https://github.com/ramymoze/VaultPay",
  },
  {
    id: "fun-learning",
    title: "FunLearning",
    description:
      "An interactive educational platform designed to make learning engaging and fun. Features gamified lessons, progress tracking, and adaptive learning paths for an enhanced educational experience.",
    tags: ["React Native", "Expo", "Supabase", "Education"],
    link: "https://github.com/ramymoze/fun-learning",
    images: ["/projects/fun-learning.png"],
  },
  {
    id: "pneumonie-detection",
    title: "Pneumonie Detection",
    description:
      "Medical imaging application for pneumonia detection using TypeScript. Features advanced image processing and diagnostic capabilities.",
    tags: ["TypeScript", "Medical Imaging", "AI", "Healthcare"],
    link: "https://github.com/ramymoze/pneumoniedetection",
    images: [
      "/projects/pneumonia-detection-landing-page-.png",
      "/projects/pneumonia-detection.png",
      "/projects/pneumonia-detectionpng.png",
    ],
  },
  {
    id: "bourefis-store",
    title: "Bourefis Store",
    description:
      "E-commerce platform with modern design and seamless shopping experience.",
    tags: ["E-commerce", "React", "Full Stack", "Web App"],
    link: "https://github.com/ramymoze/bourefis-store",
    images: ["/projects/bourefis-store.png"],
  },
  {
    id: "tiktok-downloader",
    title: "TikTok Downloader Bot",
    description:
      "Python-based bot for downloading TikTok videos. Features automated download capabilities and media processing.",
    tags: ["Python", "Bot", "Automation", "Media Processing"],
    link: "https://github.com/ramymoze/Tiktokdownloader_bot",
  },
];
