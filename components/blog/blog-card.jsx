"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  if (!post) return null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft transition-transform duration-200 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="text-xs uppercase tracking-[0.4em] text-atlas-gold">
          {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <h3 className="font-heading text-xl text-white group-hover:text-atlas-gold">
          {post.title}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-3">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto text-sm font-semibold text-atlas-gold"
        >
          Lire l’article →
        </Link>
      </div>
    </article>
  );
}
