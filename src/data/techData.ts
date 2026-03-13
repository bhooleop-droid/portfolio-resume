export interface TechnicalDetail {
  name: string;
  slug: string;
  category: string;
  proficiency: number; // 1-100
  year: string;
  description: string;
  tags: string[];
}

export const techDetails: Record<string, TechnicalDetail> = {
  react: {
    name: "React",
    slug: "react",
    category: "Frontend Framework",
    proficiency: 95,
    year: "3+ Years",
    description: "Expert in building complex SPAs using Hooks, Context API, and modern state management. Specialized in performance optimization and component-driven architecture.",
    tags: ["Hooks", "Next.js", "Recoil", "Query"],
  },
  javascript: {
    name: "JavaScript",
    slug: "javascript",
    category: "Core Language",
    proficiency: 98,
    year: "5+ Years",
    description: "Deep understanding of ES6+, asynchronous patterns, closures, and the event loop. Passionate about writing clean, modular, and performant code.",
    tags: ["ES6+", "Async/Await", "Functional", "DOM"],
  },
  typescript: {
    name: "TypeScript",
    slug: "typescript",
    category: "Static Typing",
    proficiency: 92,
    year: "2+ Years",
    description: "Experienced in building type-safe applications, utilizing generics, union types, and interface definitions to minimize runtime errors and improve developer velocity.",
    tags: ["Generics", "Interfaces", "Structural Typing"],
  },
  nodedotjs: {
    name: "Node.js",
    slug: "nodedotjs",
    category: "Runtime Environment",
    proficiency: 88,
    year: "3+ Years",
    description: "Skilled in developing scalable backend services, RESTful APIs, and implementing real-time communication using Socket.io and Express.",
    tags: ["Express", "Socket.io", "npm", "Events"],
  },
  amazonaws: {
    name: "AWS",
    slug: "amazonaws",
    category: "Cloud Infrastructure",
    proficiency: 75,
    year: "1+ Year",
    description: "Proficient in deploying and managing applications using EC2, S3, and Lambda. Familiar with serverless architectures and cloud security best practices.",
    tags: ["EC2", "S3", "Lambda", "IAM"],
  },
  postgresql: {
    name: "PostgreSQL",
    slug: "postgresql",
    category: "Database",
    proficiency: 85,
    year: "2+ Years",
    description: "Relational database design, query optimization, and schema management. Experienced with Prisma and TypeORM integration.",
    tags: ["SQL", "Relational", "ACID", "ORM"],
  },
  firebase: {
    name: "Firebase",
    slug: "firebase",
    category: "BaaS",
    proficiency: 90,
    year: "3+ Years",
    description: "Building serverless applications with Firestore, Authentication, and Cloud Functions. Expert in real-time data synchronization.",
    tags: ["Firestore", "Auth", "Functions", "Cloud Storage"],
  },
  vite: {
    name: "Vite",
    slug: "vite",
    category: "Build Tool",
    proficiency: 94,
    year: "2+ Years",
    description: "Optimizing development workflows and production builds. Specialized in HMR and lightning-fast project initializations.",
    tags: ["HMR", "Rollup", "ESBuild", "Config"],
  },
};
