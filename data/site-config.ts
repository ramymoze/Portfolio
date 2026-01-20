export interface NavLink {
  name: string;
  href: string;
}

export interface SiteConfig {
  navLinks: NavLink[];
  footer: {
    text: string;
  };
  sections: {
    contact: {
      title: string;
      subtitle: string;
    };
  };
  cta: {
    viewProjects: string;
    contactMe: string;
    getInTouch: string;
    downloadResume: string;
  };
}

export const siteConfig: SiteConfig = {
  navLinks: [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#contact" },
  ],
  footer: {
    text: "Portfolio",
  },
  sections: {
    contact: {
      title: "Let's Build Something Amazing",
      subtitle: "Have a project in mind? Looking for a partner? or just want to say hi? I'd love to hear from you.",
    },
  },
  cta: {
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    getInTouch: "Get in Touch",
    downloadResume: "Download Resume",
  },
};
