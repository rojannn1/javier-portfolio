import { skills, interests } from '../data.js'

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl font-bold text-slate-900">About Me</h2>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-teal-700">Background</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">
            I was born in Bacoor, Cavite and now live in Tanza, Cavite. I finished Senior High at
            Tanza National Trade School and I am now studying at Cavite State University - Tanza.
            In class I'm learning web development, and I like being able to build something I can
            actually open and use.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-teal-700">Interests</h3>
          <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-teal-700">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white border border-slate-200 rounded-full px-3 py-1 text-sm text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
