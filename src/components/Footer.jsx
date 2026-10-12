import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
      &copy; {new Date().getFullYear()} {profile.name}. Built with ReactJS and Tailwind CSS.
    </footer>
  )
}
