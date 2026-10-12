import { useState } from 'react'
import { projects } from '../data.js'

export default function Projects() {
  // Interactive feature 2: "View More" opens a pop-up with the project details
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="scroll-mt-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900">Projects / Work Samples</h2>
        <p className="mt-2 text-slate-600">A few things I have worked on.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="border border-slate-200 rounded-lg overflow-hidden">
              {/* Simple colored banner instead of an image */}
              <div className="bg-teal-700 text-white h-24 flex items-center justify-center text-3xl font-bold">
                {project.title.charAt(0)}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{project.short}</p>
                <button
                  onClick={() => setSelected(project)}
                  className="mt-4 text-sm font-medium text-teal-700 hover:underline"
                >
                  View More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pop-up (only shows when a project is selected) */}
      {selected && (
        <div
          className="fixed inset-0 z-30 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-slate-900">{selected.title}</h3>
            <p className="mt-1 text-sm text-teal-700">Status: {selected.status}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">{selected.details}</p>

            <p className="mt-4 text-sm font-medium text-slate-900">Tools and topics</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {selected.tools.map((tool) => (
                <span key={tool} className="bg-slate-100 rounded px-2 py-1 text-xs text-slate-700">
                  {tool}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
