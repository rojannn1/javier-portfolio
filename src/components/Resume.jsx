import { useState } from 'react'
import { education, experience, skills } from '../data.js'

export default function Resume() {
  // Interactive feature 3: tabs that change the content shown
  const [tab, setTab] = useState('Education')
  const tabs = ['Education', 'Experience', 'Skills']

  return (
    <section id="resume" className="scroll-mt-16 max-w-5xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-3xl font-bold text-slate-900">Resume / CV</h2>
        <a
          href="/Rojan-Javier-CV.pdf"
          download
          className="bg-teal-700 text-white px-4 py-2 rounded text-sm hover:bg-teal-800"
        >
          Download CV
        </a>
      </div>

      {/* Tab buttons */}
      <div className="mt-6 flex gap-2 border-b border-slate-200">
        {tabs.map((name) => (
          <button
            key={name}
            onClick={() => setTab(name)}
            className={
              tab === name
                ? 'px-4 py-2 text-sm font-medium border-b-2 border-teal-700 text-teal-700'
                : 'px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800'
            }
          >
            {name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {tab === 'Education' && (
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.level} className="bg-white border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">{item.school}</p>
                <p className="text-sm text-slate-600">
                  {item.level} | {item.years}
                </p>
              </li>
            ))}
          </ul>
        )}

        {tab === 'Experience' && (
          <ul className="space-y-4">
            {experience.map((item) => (
              <li key={item.role} className="bg-white border border-slate-200 rounded-lg p-4">
                <p className="font-semibold text-slate-900">{item.role}</p>
                <p className="text-sm text-slate-600">{item.place}</p>
                <p className="mt-2 text-sm text-slate-600">{item.note}</p>
              </li>
            ))}
          </ul>
        )}

        {tab === 'Skills' && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill} className="bg-white border border-slate-200 rounded-lg p-3 text-slate-700">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
