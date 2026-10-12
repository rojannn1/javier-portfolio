export const profile = {
  name: 'Rojan Javier',
  title: 'IT Student and Aspiring Web Developer',
  email: 'javierrojan15@gmail.com',
  github: 'https://github.com/rojannn1',
  location: 'Tanza, Cavite, Philippines',
}

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Me', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

export const skills = [
  'HTML and CSS',
  'ReactJS',
  'Tailwind CSS',
  'Willing to learn',
  'Good attendance and punctual',
  'Works with minimal supervision',
  'Computer literate',
]

export const interests = [
  'Web development',
  'Building websites for small businesses',
  'Learning new tools and technologies',
]

export const projects = [
  {
    id: 1,
    title: 'R. Woodworks Ordering System',
    short: 'A web-based ordering and project management system for a woodworking business.',
    details:
      'My study project for R. Woodworks, a business that makes custom furniture. Customers can view products, send orders and customization requests, and track the progress of their order. The owner gets an admin side to manage orders, record payments, and keep records.',
    tools: ['Web Development', 'Database', 'Admin Dashboard'],
    status: 'In progress',
  },
  {
    id: 2,
    title: 'My E-Portfolio',
    short: 'The website you are looking at, made with ReactJS and Tailwind CSS.',
    details:
      'A responsive portfolio with a home page, about section, projects, resume, and contact form. It uses React components, useState for the interactive parts, and Tailwind CSS for the layout and design. It is deployed on Vercel.',
    tools: ['ReactJS', 'Tailwind CSS', 'Vercel'],
    status: 'Completed',
  },
  {
    id: 3,
    title: 'DCIT 26 Class Labs',
    short: 'Laboratory activities in Application Development and Emerging Technologies.',
    details:
      'Hands-on lab work from my DCIT 26 class where I practice building and deploying web pages. Each lab is hosted online so it can be opened with a link.',
    tools: ['HTML', 'CSS', 'ReactJS', 'GitHub'],
    status: 'Ongoing',
  },
]

export const education = [
  { level: 'College', school: 'Cavite State University - Tanza', years: '2024 - present' },
  { level: 'Senior High School', school: 'Tanza National Trade School', years: '2023 - 2024' },
  { level: 'Junior High School', school: 'Mendez Nuñez Montessori', years: '2018 - 2023' },
  { level: 'Elementary', school: 'Soldiers Hills 4 Elementary School', years: '2012 - 2018' },
]

export const experience = [
  {
    role: 'IT Student, Web Development Coursework',
    place: 'Cavite State University - Tanza',
    note: 'Building and deploying class projects using ReactJS, Tailwind CSS, GitHub, and Vercel.',
  },
]
