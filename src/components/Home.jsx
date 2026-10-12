import { navLinks, profile } from '../data.js'

export default function Home() {
  // The dashboard cards link to the other sections
  const cards = [
    { id: 'about', text: 'Who I am, my skills, and my interests' },
    { id: 'projects', text: 'Websites and systems I am working on' },
    { id: 'resume', text: 'My education and experience' },
    { id: 'contact', text: 'Send me a message' },
  ]

  return (
    <section id="home" className="scroll-mt-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-teal-700 font-medium">Welcome to my e-portfolio</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
            Hi, I'm {profile.name}.
          </h1>
          <p className="mt-2 text-lg text-slate-600">{profile.title}</p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-md">
            I'm a college student from Tanza, Cavite who enjoys learning how websites are made. I'm
            looking for chances to use what I learned in class on real tasks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="bg-teal-700 text-white px-5 py-2 rounded hover:bg-teal-800">
              View my projects
            </a>
            <a href="#contact" className="border border-slate-300 px-5 py-2 rounded hover:bg-slate-100">
              Contact me
            </a>
          </div>
        </div>

        <img
          src="/profile.jpg"
          alt="Portrait of Rojan Javier"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-top border-4 border-teal-100 mx-auto"
        />
      </div>

      {/* Dashboard cards */}
      <div className="max-w-5xl mx-auto px-4 pb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const link = navLinks.find((l) => l.id === card.id)
          return (
            <a
              key={card.id}
              href={'#' + card.id}
              className="block bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-teal-600"
            >
              <h3 className="font-semibold text-slate-900">{link.label}</h3>
              <p className="mt-1 text-sm text-slate-600">{card.text}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
