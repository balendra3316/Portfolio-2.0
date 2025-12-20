import aboutpic from "./components/Access/mePhoto.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'PortFolio',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Balendra Singh Parihar',
  role: 'Full stack developer',
  description:
    'B.Tech IT student living in Chhatarpur, MadhyaPradesh. highly interested in cutting edge technology, web development and Java back end development.',
  resume: 'https://drive.google.com/file/d/1fX0RjdKmE7_rW3n-5eoeh32SK-ywvcf2/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/balendra-singh-parihar-b9588a234/',
    github: 'https://github.com/balendra3316',
  },
}
const projects = [
  // Major Projects
  {
    name: 'Community E-Learning Platform',
    description:
      'Full-stack platform with course enrollment, a subscription model, and user engagement features. Key features include optimistic liking, a gamified leaderboard, and a Gemini AI-powered RAG chatbot for contextual support.',
    stack: ['Next.js', 'Express', 'MongoDB', 'Razorpay/Stripe', 'GenAI (Gemini)', 'Vector DB', 'Socket.io', 'Redux Toolkit'],
    sourceCode: 'https://github.com/balendra3316/community-frontend',
    livePreview: 'https://community-frontend-o38g.vercel.app',
  },
  {
    name: 'HRMS (Payroll, Attendance, Task Management)',
    description:
      'Modular HR Management System with dual Admin/Employee portals. Implemented secure monthly payroll processing, PDF payslip generation (via Puppeteer), leave request workflow, and Zod schema validation for data integrity.',
    stack: ['Node.js', 'Express', 'Next.js', 'MongoDB', 'Puppeteer', 'Zod', 'Mongoose'],
    sourceCode: 'https://github.com/balendra3316/hrms-frontend',
    livePreview: 'https://hrms-frontend-ruddy.vercel.app',
  },
  {
    name: 'AI Productivity Planner (Overcome-Breaker)',
    description:
      'An AI-driven project breakdown tool using Groq and LangChain to convert large projects into personalized 5-15 minute work chunks, optimizing productivity based on user energy profiles and historical success patterns.',
    stack: ['Next.js', 'PostgreSQL (Drizzle ORM)', 'Groq AI', 'LangChain', 'NextAuth', 'TypeScript'],
    sourceCode: 'https://github.com/balendra3316/overcome-breaker',
    livePreview: 'https://overcome-breaker.vercel.app',
  },
  // Other Projects
  {
    name: 'WhatsApp Reminder Service',
    description:
      'Developed an automated reminder application using the Twilio API to send personalized, scheduled messages via WhatsApp. Implemented number verification via RESTful APIs to ensure high reminder accuracy.',
    stack: ['Node.js', 'React', 'Twilio API', 'REST APIs'],
    sourceCode: 'https://github.com/balendra3316',
    livePreview: 'https://github.com/balendra3316',
  },
  {
    name: 'Moviex Review Rating',
    description:
      'As users, we see a page that lets anyone look for the movies rating from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, Operations like Choosing movie category can be performed in the project.',
    stack: ['ReactJS', 'Redux Toolkit', 'JavaScript', 'Movie Database API'],
    sourceCode: 'https://github.com/balendra3316/Moviex',
    livePreview: 'https://moviex-plum.vercel.app/',
  },
  {
    name: 'Insta Saver clone',
    description:
      'Develop the front-end of downloading Instagram reels, stories, YouTube videos, and Spotify songs with ease. Optimized content retrieval by 60% through strategic implementation of web scraping and API integration.',
    stack: ['ReactJS', 'npm', 'Rapid API', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/balendra3316/Insta-Saver',
    livePreview: 'https://insta-saver-4ebr335uj-balendra3316s-projects.vercel.app/',
  },
  {
    name: 'Code Pen editor',
    description:
      'Engineered a code editor akin to CodePen, facilitating HTML CSS JS code writing with live output. Integrated CodeMirror library to enable real-time rendering, achieving a 50% reduction in code testing time.',
    stack: ['HTML', 'CSS', 'JavaScript', 'CodeMirror', 'React'],
    sourceCode: 'https://github.com/balendra3316/CodePen',
    livePreview: 'https://balendra3316.github.io/CodePen/',
  },
];

const skills = [
  'JavaScript',
  'TypeScript',
  'C++',
  'C',
  'Java',
  'ES6+',
  'ReactJS',
  'Next.js',
  'Redux Toolkit',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Shadcn/ui',
  'Angular',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'SQL',
  'Mongoose',
  'Prisma ORM',
  'REST APIs',
  'Socket.io',
  'JWT',
  'Redis',
  'Generative AI',
  'LangChain',
  'Groq AI',
  'NestJS',
  'Microservices',
  'Docker',
  'AWS',
  'GraphQL',
  'Jest',
  'Git',
  'GitHub',
  'Figma',
  'VS Code',
  'Supabase',
  'VPS',
];
const contact = {
  
  email: 'vinay626397@gmail.com',
}

export { header, about, projects, skills, contact }
