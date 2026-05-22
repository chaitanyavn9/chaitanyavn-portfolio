"use client";

import { motion } from "framer-motion";

export default function Home() {
  const metrics = [
    {
      number: "14+",
      label: "Years Experience",
    },
    {
      number: "200+",
      label: "Legacy Tests Migrated",
    },
    {
      number: "30%",
      label: "Flaky Test Reduction",
    },
    {
      number: "25%",
      label: "Regression Optimization",
    },
  ];

  const skills = [
    "Playwright",
    "Cypress",
    "Selenium",
    "Gauge",
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "REST APIs",
    "Allure Reporting",
    "GitHub Actions",
    "AI-Driven QA",
    "Accessibility Testing",
    "Observability",
    "BDD Frameworks",
    "CI/CD",
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Senior QA Automation Engineer
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Chaitanya VN
            </h1>

            <p className="text-zinc-300 text-xl max-w-4xl leading-relaxed">
              Building enterprise-grade automation frameworks,
              AI-driven testing systems, scalable QA ecosystems,
              and intelligent automation workflows using
              Playwright, Cypress, Selenium, Gauge, and
              TypeScript.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/chaitanyavn9"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/chaitanyavn"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={metric.label}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
            >
              <h2 className="text-5xl font-black text-cyan-400">
                {metric.number}
              </h2>

              <p className="text-zinc-400 mt-4">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About
            </p>

            <h2 className="text-5xl font-bold mb-8">
              QA Architect Mindset
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Senior QA Automation Engineer with 14+ years of
              experience designing scalable automation
              frameworks, enterprise QA solutions, and modern
              testing ecosystems for large-scale enterprise
              applications.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              Specialized in Playwright, Cypress, Selenium,
              Gauge with Taiko, API automation, AI-assisted
              testing workflows, accessibility validation, and
              framework optimization.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              Passionate about next-generation AI-powered QA
              ecosystems involving intelligent failure analysis,
              flaky-test prediction, unified observability, and
              autonomous debugging systems.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-8">
              Engineering Highlights
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-cyan-500 pl-5">
                <h4 className="font-semibold text-lg">
                  Enterprise Framework Design
                </h4>

                <p className="text-zinc-400 mt-2">
                  Built scalable Playwright + Gauge automation
                  frameworks with reusable architecture.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500 pl-5">
                <h4 className="font-semibold text-lg">
                  AI-Assisted Migration
                </h4>

                <p className="text-zinc-400 mt-2">
                  Migrated 200+ Selenium tests using AI Copilot
                  while improving framework stability.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500 pl-5">
                <h4 className="font-semibold text-lg">
                  Automation Optimization
                </h4>

                <p className="text-zinc-400 mt-2">
                  Reduced regression execution time by 25% and
                  flaky failures by 30%.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500 pl-5">
                <h4 className="font-semibold text-lg">
                  Enterprise QA Leadership
                </h4>

                <p className="text-zinc-400 mt-2">
                  Conducted automation code reviews, QA process
                  improvements, and reusable component design.
                </p>
              </div>
              <div className="mt-16 bg-black border border-zinc-800 rounded-3xl p-10">
  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
    AI Failure Intelligence
  </p>

  <h3 className="text-4xl font-bold mb-8">
    Intelligent Failure Analysis Vision
  </h3>

  <div className="space-y-6">
    <div className="border-l-2 border-cyan-500 pl-5">
      <h4 className="font-semibold text-xl">
        Failure Categorization
      </h4>

      <p className="text-zinc-400 mt-3 leading-relaxed">
        Exploring intelligent classification of flaky,
        network, environment, product, and automation
        failures using structured telemetry and automation
        observability.
      </p>
    </div>

    <div className="border-l-2 border-cyan-500 pl-5">
      <h4 className="font-semibold text-xl">
        AI-Assisted Root Cause Analysis
      </h4>

      <p className="text-zinc-400 mt-3 leading-relaxed">
        Designing workflows to push categorized failures
        into AI analysis pipelines for intelligent debugging,
        trend detection, and faster issue triaging.
      </p>
    </div>

    <div className="border-l-2 border-cyan-500 pl-5">
      <h4 className="font-semibold text-xl">
        Automation Observability
      </h4>

      <p className="text-zinc-400 mt-3 leading-relaxed">
        Interested in building telemetry-driven QA
        ecosystems integrating logs, screenshots, traces,
        execution metadata, and reporting analytics for
        enterprise-scale automation platforms.
      </p>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-bold mb-14">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 rounded-2xl bg-black border border-zinc-800 hover:border-cyan-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Featured Project
        </p>

        <h2 className="text-5xl font-bold mb-14">
          PlayGauge Framework
        </h2>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10"
        >
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Enterprise QA framework combining Playwright,
            Gauge, and TypeScript with AI-powered failure
            analysis, Allure reporting, observability telemetry,
            reusable architecture, and scalable automation
            workflows.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-2xl font-bold text-cyan-400">
                Playwright
              </h3>

              <p className="text-zinc-500 mt-3">
                Modern browser automation framework
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-2xl font-bold text-cyan-400">
                Gauge
              </h3>

              <p className="text-zinc-500 mt-3">
                BDD-based specification execution
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-2xl font-bold text-cyan-400">
                AI Analytics
              </h3>

              <p className="text-zinc-500 mt-3">
                Intelligent failure analysis systems
              </p>
            </div>
          </div>

          <a
            href="https://github.com/chaitanyavn9/playgauge_framework"
            target="_blank"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-lg"
          >
            View GitHub Repository →
          </a>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-bold mb-14">
            Career Journey
          </h2>

          <div className="space-y-10">
            {[
              {
                company: "OpenText",
                role: "Senior QA Automation Engineer",
                period: "2022 - Present",
              },
              {
                company: "Wipro Technologies",
                role: "Lead QA Engineer",
                period: "2020 - 2022",
              },
              {
                company: "Randstad (Telstra Singapore)",
                role: "QA Application Programmer",
                period: "2017 - 2020",
              },
              {
                company: "Harman Connected Services",
                role: "Lead Product Engineer",
                period: "2011 - 2017",
              },
            ].map((job) => (
              <div
                key={job.company}
                className="border-l-2 border-cyan-500 pl-6"
              >
                <h3 className="text-2xl font-bold">
                  {job.company}
                </h3>

                <p className="text-cyan-400 mt-1">
                  {job.role}
                </p>

                <p className="text-zinc-500 mt-2">
                  {job.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Chaitanya VN
            </h3>

            <p className="text-zinc-500 mt-2">
              Senior QA Automation Engineer
            </p>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="https://github.com/chaitanyavn9"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/chaitanyavn"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:chaitanyavn9@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}