import Testimonial from "@/components/testimonial";

export default function TestimonialsGrid({ testimonials }) {
  if (!testimonials?.length) return null;

  return (
    <section className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-soft">
      <h2 className="font-heading text-3xl text-white">
        Ils recommandent Atlas PRO IPTV
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-gray-300">
        Des milliers d’abonnés en France, Belgique, Suisse et Luxembourg profitent déjà de notre service IPTV
        francophone.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={`${testimonial.author}-${testimonial.role}`}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  );
}
