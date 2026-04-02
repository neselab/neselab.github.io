// SITE CONFIGURATION
// Edit this file to update your lab's basic information
// No coding knowledge required - just update the text between quotes

export const siteConfig = {
  // Lab name and tagline
  labName: "NeSE",
  labTagline: "Neurosymbolic Software Engineering Lab",

  // Principal Investigator
  pi: {
    name: "William Eiers",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    university: "Stevens Institute of Technology",
    email: "weiers@stevens.edu",
    website: "https://william-eiers.github.io",
    photo: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2F7lmpEyYIYoSuTcmPV0dqmC%2F7986532d4820027916a4d4a581e0ae2f%2Fweiers.jpg%3Fw%3D400%26h%3D400%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=1024&q=80",
  },

  // Contact information
  contact: {
    email: "weiers@stevens.edu",
    address: "Gateway North, GN-404\nStevens Institute of Technology\nHoboken, NJ 07030",
  },

  // Social links (leave empty "" if not applicable)
  social: {
    twitter: "",
    github: "",
    scholar: "https://scholar.google.com/citations?user=william-eiers",
    linkedin: "",
  },

  // Homepage hero section
  hero: {
    title: "NeSE",
    subtitle: "Neurosymbolic Software Engineering Lab",
  },

  // Research highlights (3-4 main areas)
  highlights: [
    {
      title: "Software Verification",
      description: "Developing tools and approaches for automatically verifying software, particularly in compute clouds like AWS, GCP, and Azure.",
    },
    {
      title: "Access Control Policy Analysis",
      description: "Using quantitative techniques for verifying and repairing access control policies, including permissiveness analysis and policy repair.",
    },
    {
      title: "Neural Network Verification",
      description: "Quantitative robustness verification for neural networks, including symbolic analysis and model counting approaches.",
    },
    {
      title: "Generative AI for Verification",
      description: "Investigating how large language models can be used in software verification and software engineering tasks.",
    },
  ],

  // News configuration
  news: {
    rssUrl: "https://techcrunch.com/category/artificial-intelligence/feed/",
  },
};
