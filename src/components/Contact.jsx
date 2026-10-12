import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  // Interactive feature 4: contact form with validation
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}

    if (form.name.trim() === '') newErrors.name = 'Please enter your name.'
    if (form.email.trim() === '') {
      newErrors.email = 'Please enter your email.'
    } else if (!form.email.includes('@') || !form.email.includes('.')) {
      newErrors.email = 'Please enter a valid email.'
    }
    if (form.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters.'

    setErrors(newErrors)

    // No errors: show the thank-you message and clear the form
    if (Object.keys(newErrors).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  const inputStyle = 'mt-1 w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-teal-600'

  return (
    <section id="contact" className="scroll-mt-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
          <p className="mt-2 text-slate-600">Feel free to reach out about projects or opportunities.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>
              Email:{' '}
              <a href={'mailto:' + profile.email} className="text-teal-700 hover:underline">
                {profile.email}
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-teal-700 hover:underline">
                github.com/rojannn1
              </a>
            </li>
            <li>Location: {profile.location}</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} className={inputStyle} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputStyle} />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className={inputStyle} />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-teal-700 text-white px-5 py-2 rounded hover:bg-teal-800">
            Send message
          </button>

          {sent && (
            <p className="text-sm text-teal-800 bg-teal-50 border border-teal-200 rounded p-3">
              Thank you! Your message was sent.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
