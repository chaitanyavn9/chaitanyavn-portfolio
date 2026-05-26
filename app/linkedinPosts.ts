// ─────────────────────────────────────────────────────────────────────────────
//  LinkedIn Posts Data
//  HOW TO ADD A NEW POST:
//  1. Copy one of the objects below
//  2. Paste it at the TOP of the `linkedInPosts` array (newest first)
//  3. Fill in title, description, tags, link, type, and date
//  4. git add → git commit → git push  — done.
// ─────────────────────────────────────────────────────────────────────────────

export type PostType = "Carousel" | "Article" | "Poll" | "Video";

export interface LinkedInPost {
  /** Short, punchy title shown on the card */
  title: string;
  /** 2–3 sentence description of the insight (not the topic) */
  description: string;
  /** Up to 5 tags shown as chips on the card */
  tags: string[];
  /** Full LinkedIn post URL */
  link: string;
  /** Content format — controls the badge colour */
  type: PostType;
  /** Number of slides (only for Carousel type) */
  slides?: number;
  /** Display date e.g. "May 2026" */
  date: string;
  /** Set true to pin this card first regardless of array order */
  featured?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
//  ADD NEW POSTS AT THE TOP ↓
// ─────────────────────────────────────────────────────────────────────────────
export const linkedInPosts: LinkedInPost[] = [
  // ── TEMPLATE — copy this block, fill in, and paste above this line ─────────
  // {
  //   title: "Your Post Title Here",
  //   description:
  //     "The key insight of this post in 2–3 sentences. Focus on what the reader will learn, not just the topic.",
  //   tags: ["Tag1", "Tag2", "Tag3"],
  //   link: "https://www.linkedin.com/posts/chaitanyavn_YOUR-POST-URL",
  //   type: "Carousel",   // "Carousel" | "Article" | "Poll" | "Video"
  //   slides: 7,          // only for Carousel
  //   date: "Jun 2026",
  //   featured: false,
  // },
  // ─────────────────────────────────────────────────────────────────────────

  {
    title: "Stop Writing POM The Way You Were Taught",
    description:
      "Playwright isn't just faster Selenium — it's a different mental model entirely. Most QA engineers are still writing page objects the Selenium way. 5 modern patterns (Component Objects, Fixture Injection, Composition over Inheritance, App Actions, Lazy Locators) that make large frameworks actually maintainable at scale.",
    tags: ["Playwright", "Framework Design", "Page Object Model", "TypeScript"],
    link: "https://www.linkedin.com/posts/chaitanyavn_stop-writing-pom-the-way-you-were-taught-ugcPost-7460927194572173312-JG-7/",
    type: "Carousel",
    slides: 7,
    date: "May 2026",
    featured: true,
  },
  {
    title: "Building an AI Failure Analyzer for Test Automation",
    description:
      "Most automation suites tell you a test failed — but not why. This post explores how to build an AI-powered failure analyzer that categorises failures into flaky, network, environment, product, and automation buckets, enabling faster root cause analysis and smarter debugging.",
    tags: ["AI", "Test Automation", "Failure Analysis", "Playwright", "Observability"],
    link: "https://www.linkedin.com/posts/chaitanyavn_automation-ai-failure-analyzer-ugcPost-7464900624967487488-CDNx/",
    type: "Carousel",   // change to "Article" if it wasn't a carousel
    slides: 7,          // update to actual slide count
    date: "Jun 2026",
    featured: true,
  },
  {
    title: "Cucumber vs Gauge — Which BDD Framework Actually Scales?",
    description:
      "A framework decision you make in week one compounds over the next two years. Head-to-head comparison across 9 criteria that matter at scale — readability, maintainability, API testing, parallel execution, and reusability — based on real experience with both frameworks across enterprise projects.",
    tags: ["BDD", "Cucumber", "Gauge", "Playwright", "Framework Architecture"],
    link: "https://www.linkedin.com/posts/chaitanyavn_playwright-cucumber-gauge-share-7459581996478959618-1_Oh/",
    type: "Carousel",
    slides: 7,
    date: "May 2026",
    featured: false,
  },
  {
    title: "Playwright + TypeScript vs Python — Which Should You Choose?",
    description:
      "The honest answer most blog posts avoid: it depends on your team, not the trending language. A practical breakdown across UI automation, API testing, CLI automation, test runners, and AI/ML integration — with a clear recommendation based on your team's actual stack.",
    tags: ["Playwright", "TypeScript", "Python", "Test Automation"],
    link: "https://www.linkedin.com/posts/chaitanyavn_playwright-testautomation-typescript-share-7458837055943385088-vtOw/",
    type: "Article",
    date: "May 2026",
    featured: false,
  },
];
