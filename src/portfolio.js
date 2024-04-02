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
  resume: 'https://drive.google.com/file/d/1SYy8XFElw0lF8zLAhcuaq7Arm4U8C4Rg/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/balendra-singh-parihar-b9588a234/',
    github: 'https://github.com/balendra3316',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Moviex Review Rating',
    description:
      'As users, we see a page that lets anyone look for the movies rating from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, Operations like Choosing movie category can be performed in the project.',
    stack: ['ReactJS', 'Redux tool', 'JavaScript','Movie Database API'],
    sourceCode: 'https://github.com/balendra3316/Moviex',
    livePreview: 'https://moviex-plum.vercel.app/',
  },
  {
    name: 'Insta Saver clone',
    description:
      'Develop the front-end of downloading Instagram reels, stories, YouTube videos, and Spotify songs with ease. Optimized content retrieval by 60% through strategic implementation of web scraping and API integration.',
    stack: ['Reactjs', 'npm', 'Rapid API','HTML','css'],
    sourceCode: 'https://github.com/balendra3316/Insta-Saver',
    livePreview: 'https://insta-saver-4ebr335uj-balendra3316s-projects.vercel.app/',
  },
  {
    name: 'Code Pen editor',
    description:
      'Engineered a code editor akin to CodePen,facilitating HTML CSS JS code writing with live output,Integrated CodeMirror library to enable real-time rendering,  50% reduction in code testing',
    stack: ['html-css-javascript', 'code-mirror', 'React'],
    sourceCode: 'https://github.com/balendra3316/CodePen',
    livePreview: 'https://balendra3316.github.io/CodePen/',
  },
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Java ',
  'C',
  'C++',
  'Git/Github',
  'Heroku',
  'python'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vinay626397@gmail.com',
}

export { header, about, projects, skills, contact }
