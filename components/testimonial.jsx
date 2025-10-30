export default function Testimonial({ quote, author, role }) {
  return (
    <blockquote className="glass rounded-[2.5rem] border border-white/10 p-8 text-lg text-gray-100 shadow-soft">
      <p>“{quote}”</p>
      <footer className="mt-4 text-sm text-gray-400">
        <span className="font-semibold text-atlas-gold">{author}</span> — {role}
      </footer>
    </blockquote>
  );
}
