import {
  ArrowRight,
  BarChart3,
  Braces,
  Database,
  FileSpreadsheet,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  {
    title: 'SQL',
    icon: Database,
    summary: 'Writing structured queries to find trends, compare segments, and answer business questions.',
    details: ['JOIN', 'GROUP BY', 'WHERE'],
  },
  {
    title: 'Power BI',
    icon: BarChart3,
    summary: 'Designing dashboards that make performance, patterns, and KPIs easy to understand.',
    details: ['DAX', 'Dashboard'],
  },
  {
    title: 'Excel',
    icon: FileSpreadsheet,
    summary: 'Using spreadsheets for quick analysis, visual summaries, and business-friendly reporting.',
    details: ['Pivot Tables', 'Charts'],
  },
  {
    title: 'Python',
    icon: Braces,
    summary: 'Applying basic scripting to inspect, clean, and work with data more efficiently.',
    details: ['Basics'],
  },
];

const projects = [
  {
    title: 'E-Commerce Customer Behavior Analysis',
    tools: ['SQL', 'Power BI'],
    tag: 'Customer Analytics',
    description:
      'Analyzed customer purchase data and built a dashboard to understand buying patterns, revenue contribution, and product performance.',
    insights: [
      'Repeat customers generate higher revenue',
      'Top products identified',
      'Sales trends analyzed',
    ],
  },
  {
    title: 'IPL 2026 Data Analysis Dashboard',
    tools: ['Excel', 'Power BI'],
    tag: 'Sports Dashboard',
    description:
      'Explored IPL match data to evaluate team performance, match conditions, and how toss decisions influenced results.',
    insights: ['Toss impact identified', 'Top-performing teams analyzed'],
  },
  {
    title: 'AI Job Impact & Salary Dashboard',
    tools: ['Excel'],
    tag: 'Career Trends',
    description:
      'Reviewed AI job and salary data to highlight role demand, salary movement, and changing opportunities in the market.',
    insights: [
      'High demand roles identified',
      'Salary growth trends analyzed',
    ],
  },
];

const highlights = [
  'Dashboard building',
  'Business reporting',
  'Trend analysis',
  'Insight storytelling',
];

const contactLinks = [
  {
    label: 'Email',
    value: 'pradeepoffl5@gmail.com',
    href: 'mailto:pradeepoffl5@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'pradeep-r-69aa4a27b',
    href: 'https://www.linkedin.com/in/pradeep-r-69aa4a27b/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com',
    href: 'https://github.com/',
    icon: Github,
  },
];

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyanGlow/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

function GlassPanel({ className = '', children }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.05] shadow-glow backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-midnight bg-mesh text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 animate-drift rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-36 h-64 w-64 animate-pulseSoft rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 animate-drift rounded-full bg-purple-500/10 blur-3xl animation-delay-700" />
      </div>

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#090510]/80 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-cyanGlow/20 bg-cyanGlow/10">
                <img
                  src="/profile.jpeg"
                  alt="Pradeep"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">Pradeep</p>
                <p className="text-xs tracking-[0.18em] text-slate-400 uppercase">
                  Data Analyst
                </p>
              </div>
            </a>

            <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-4 py-2 text-sm font-medium text-cyanGlow transition hover:border-cyanGlow/40 hover:bg-cyanGlow/15"
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-200 md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-3 rounded-[28px] border border-white/10 bg-[#090510]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 rounded-2xl border border-cyanGlow/20 bg-cyanGlow/10 px-4 py-3 text-sm font-medium text-cyanGlow"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <GlassPanel className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/10 via-transparent to-violet-500/10" />
                <div className="relative animate-riseIn">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyanGlow">
                    <Sparkles size={14} />
                    Data Analyst Portfolio
                  </div>

                  <h1 className="mt-8 text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl xl:text-7xl">
                    <span className="block">Pradeep</span>
                    <span className="mt-3 block font-serif text-4xl italic text-slate-200 sm:text-5xl xl:text-6xl">
                      Turning
                      <span className="mx-3 bg-[length:200%_100%] bg-gradient-to-r from-fuchsia-300 via-violet-200 to-purple-500 bg-clip-text text-transparent animate-shimmer">
                        data
                      </span>
                      into useful insight
                    </span>
                  </h1>

                  <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                    Skilled in data analysis, visualization, and dashboard
                    development, with the ability to transform raw data into
                    actionable insights.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-500 px-6 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-500/30"
                    >
                      View Projects
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40 hover:bg-white/10"
                    >
                      Contact Me
                    </a>
                  </div>

                  <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#120a20]/70 px-4 py-4 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </div>

            <div className="grid gap-8 lg:col-span-5">
              <GlassPanel className="overflow-hidden p-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090510]" />
                  <img
                    src="/profile.jpeg"
                    alt="Pradeep profile"
                    className="h-[360px] w-full object-cover object-top"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Role
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    Data Analyst
                  </h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    Aspiring Data Analyst with a B.Tech degree and proficiency
                    in SQL, Excel, Python, and Power BI.
                  </p>
                </div>
              </GlassPanel>

              <GlassPanel className="grid gap-5 p-7">
                <div>
                  <p className="text-sm text-slate-400">Primary skills</p>
                  <p className="mt-2 text-white">SQL, Power BI, Excel, Python</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Tagline</p>
                  <p className="mt-2 text-white">Turning Data into Insights</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-white">
                    Business-ready dashboards and practical analysis.
                  </p>
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionIntro
                eyebrow="About"
                title="A practical profile shaped by both technical and business-facing roles."
              />
            </div>
            <div className="lg:col-span-8">
              <GlassPanel className="p-8 sm:p-10">
                <p className="text-lg leading-8 text-slate-300">
                  Aspiring Data Analyst with a B.Tech degree and proficiency in
                  SQL, Excel, Python, and Power BI. Skilled in data analysis,
                  visualization, and dashboard development, with the ability to
                  transform raw data into actionable insights. Eager to apply
                  analytical skills to support business decision-making and
                  organizational growth.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#120a20]/70 p-5">
                    <p className="text-sm text-slate-400">What I enjoy</p>
                    <p className="mt-2 text-white">
                      Exploring patterns, comparing outcomes, and making reports
                      easier to understand.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#120a20]/70 p-5">
                    <p className="text-sm text-slate-400">What I bring</p>
                    <p className="mt-2 text-white">
                      Technical curiosity with a business-oriented way of
                      thinking and presenting insights.
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Skills"
              title="Tools I use most"
              description="A cleaner view of the platforms I work with and the kind of analysis I use them for."
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map(({ title, icon: Icon, summary, details }) => (
              <GlassPanel
                key={title}
                className="group h-full p-6 transition duration-300 hover:-translate-y-2 hover:border-cyanGlow/30"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-cyanGlow/20 bg-cyanGlow/10 p-3 text-cyanGlow transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-white/10 bg-[#120a20]/75 px-3 py-1 text-sm text-slate-300"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <SectionIntro
              eyebrow="Projects"
              title="Selected portfolio work"
              description="Each project is presented more like a case-study card, with a clearer structure and better spacing."
            />
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <GlassPanel
                key={project.title}
                className="overflow-hidden p-0 transition duration-300 hover:border-cyanGlow/25"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="border-b border-white/10 bg-gradient-to-br from-fuchsia-500/12 via-violet-500/10 to-transparent p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
                    <div className="flex h-full flex-col justify-between rounded-[24px] border border-dashed border-cyanGlow/20 bg-[#120a20]/75 p-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-cyanGlow/70">
                          Dashboard Preview
                        </p>
                        <p className="mt-6 text-4xl font-semibold text-white">
                          0{index + 1}
                        </p>
                      </div>
                      <div className="mt-10">
                        <p className="text-sm text-slate-400">Category</p>
                        <p className="mt-1 text-white">{project.tag}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:col-span-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                          <h3 className="text-2xl font-semibold text-white">
                            {project.title}
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-slate-300">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 lg:max-w-[220px] lg:justify-end">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-1 text-sm text-cyanGlow"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        {project.insights.map((insight) => (
                          <div
                            key={insight}
                            className="rounded-2xl border border-white/10 bg-[#120a20]/65 p-4"
                          >
                            <div className="mb-3 h-2 w-2 rounded-full bg-cyanGlow" />
                            <p className="text-sm leading-6 text-slate-300">
                              {insight}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm font-medium text-cyanGlow transition duration-300 hover:translate-x-2"
                        >
                          View Project
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionIntro
                eyebrow="Contact"
                title="Open to roles and conversations around analytics work."
                description="If you'd like to connect, collaborate, or discuss opportunities, you can reach me here."
              />
            </div>
            <div className="lg:col-span-8">
              <GlassPanel className="p-6 sm:p-8">
                <div className="grid gap-5">
                  {contactLinks.map(({ label, value, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === 'Email' ? undefined : '_blank'}
                      rel={label === 'Email' ? undefined : 'noreferrer'}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#120a20]/75 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30"
                    >
                      <div className="rounded-2xl border border-cyanGlow/20 bg-cyanGlow/10 p-3 text-cyanGlow">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-slate-400">{label}</p>
                        <p className="mt-1 break-all text-white">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        {'\u00A9'} 2026 Pradeep | Data Analyst Portfolio
      </footer>
    </div>
  );
}

export default App;
