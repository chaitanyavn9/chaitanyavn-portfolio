"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { linkedInPosts, LinkedInPost, PostType } from "./linkedinPosts";

// ─── Badge colour per post type ──────────────────────────────────────────────
const typeBadge: Record<PostType, string> = {
  Carousel: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Article:  "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Poll:     "bg-orange-500/10 text-orange-400 border-orange-500/30",
  Video:    "bg-green-500/10 text-green-400 border-green-500/30",
};

// ─── Icons ────────────────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

// ─── Individual Post Card ─────────────────────────────────────────────────────
function PostCard({ post }: { post: LinkedInPost }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 flex flex-col h-full">
      {/* Top row: type badge + date */}
      <div className="flex items-center justify-between mb-6">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${typeBadge[post.type]}`}
        >
          {post.type === "Carousel" && post.slides
            ? `${post.type} · ${post.slides} slides`
            : post.type}
        </span>
        <span className="text-zinc-600 text-sm">{post.date}</span>
      </div>

      {/* Featured indicator */}
      {post.featured && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-xs uppercase tracking-widest">
            Featured
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4 text-white">
        {post.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 leading-relaxed flex-1 mb-6">
        {post.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-xl bg-black border border-zinc-800 text-zinc-500 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition group"
      >
        <LinkedInIcon />
        <span>Read on LinkedIn</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
}

// ─── Main Carousel ────────────────────────────────────────────────────────────
export default function LinkedInCarousel() {
  // Sort: featured first, then original order
  const posts = [...linkedInPosts].sort((a, b) =>
    a.featured === b.featured ? 0 : a.featured ? -1 : 1
  );

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);

  const total = posts.length;

  function goTo(index: number, dir: 1 | -1) {
    setDirection(dir);
    setCurrent((index + total) % total);
  }

  function prev() { goTo(current - 1, -1); }
  function next() { goTo(current + 1, 1); }

  // Swipe support
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchStartX.current = null;
  }

  const variants = {
    enter:  (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Section header */}
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
        LinkedIn
      </p>
      <div className="flex items-end justify-between mb-14">
        <h2 className="text-5xl font-bold">Writing & Insights</h2>
        <a
          href="https://linkedin.com/in/chaitanyavn"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition text-sm"
        >
          <LinkedInIcon />
          Follow on LinkedIn
        </a>
      </div>

      {/* Carousel area */}
      <div
        className="relative overflow-hidden rounded-3xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <PostCard post={posts[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Prev / Next arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center justify-center transition"
            aria-label="Previous post"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center justify-center transition"
            aria-label="Next post"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 items-center">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to post ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-cyan-400"
                  : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-zinc-600 text-sm tabular-nums">
          {current + 1} / {total}
        </span>
      </div>
    </section>
  );
}
