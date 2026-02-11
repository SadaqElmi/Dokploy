import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/40">
              <span className="text-lg font-semibold text-sky-400">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                Dokploy
              </span>
              <span className="text-xs text-slate-400">
                Smart app deployments
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-slate-50">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-50">
              How it works
            </a>
            <a href="#pricing" className="hover:text-slate-50">
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-50">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500 hover:text-white sm:inline-flex">
              Log in
            </button>
            <button className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400">
              Get started free
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live deployments in under 60 seconds
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Ship production apps
              <span className="block bg-linear-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                without talking to servers.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Dokploy turns complex VPS deployments into a guided conversation.
              Describe your app, choose your stack, and watch containers,
              domains, SSL, and scaling configure themselves in real time.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400">
                Start a free workspace
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white">
                <span>Watch 2‑min demo</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[10px]">
                  ▶
                </span>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-slate-400 sm:text-xs">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-300">
                  ✓
                </span>
                Zero‑downtime deploys
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-300">
                  ✓
                </span>
                Built‑in SSL & monitoring
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-300">
                  ✓
                </span>
                Works on any VPS
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.14),transparent_55%)]" />

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_22px_80px_rgba(15,23,42,0.9)]">
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[11px] text-sky-300">
                    AI
                  </span>
                  <span>“Describe your app to deploy…”</span>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  Online
                </span>
              </div>

              <div className="mt-4 space-y-3 rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-950 to-slate-950 p-4 text-xs text-slate-200">
                <div className="space-y-1">
                  <p className="text-[11px] text-slate-400">You</p>
                  <div className="rounded-2xl bg-slate-800/80 px-3 py-2">
                    “Node API service with PostgreSQL, on my Frankfurt VPS.
                    Needs auto‑renewing SSL and rollbacks.”
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] text-sky-300">Dokploy Assistant</p>
                  <div className="space-y-2 rounded-2xl bg-slate-900/80 px-3 py-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>Analyzing server</span>
                      <span className="text-slate-500">SSH · Docker · DNS</span>
                    </div>
                    <div className="space-y-1 text-[11px] text-slate-200">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/80 px-2 py-1">
                        <span>Provision PostgreSQL cluster</span>
                        <span className="text-emerald-300">Ready</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/80 px-2 py-1">
                        <span>Build & push Docker image</span>
                        <span className="text-amber-300">Building…</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/80 px-2 py-1">
                        <span>Configure HTTPS & rollbacks</span>
                        <span className="text-sky-300">Queued</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-[11px] text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
                      ✓
                    </span>
                    <span>Production deployed · `api.yourdomain.com`</span>
                  </div>
                  <span className="text-slate-500">Rollback · Metrics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mt-20 space-y-8 border-t border-slate-800/60 pt-16"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Everything you need to run{" "}
                <span className="bg-linear-to-r from-sky-400 to-emerald-300 bg-clip-text text-transparent">
                  serious production
                </span>
                .
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300">
                From first deploy to thousands of requests per second, Dokploy
                keeps your apps healthy, observable, and easy to roll back.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Conversational setup",
                body: "Describe the app you want. We translate it into servers, containers, networks, and certificates.",
              },
              {
                title: "Safe rollbacks",
                body: "Versioned deployments with one‑click rollback and traffic draining keep incidents low‑stress.",
              },
              {
                title: "Unified monitoring",
                body: "Live logs, metrics, and alerts across every VPS and cluster, all in a single control plane.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/15 text-sm text-sky-300">
                  ●
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="mt-20 grid gap-10 border-t border-slate-800/60 pt-16 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Deploy on any VPS
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Point Dokploy at your existing VPS provider and let the AI‑guided
              workflow handle builds, network, and security hardening.
            </p>

            <ol className="mt-6 space-y-4 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-200">
                  1
                </span>
                <div>
                  <p className="font-medium">Connect your servers</p>
                  <p className="text-xs text-slate-400">
                    Securely link VPS instances via SSH or existing Docker
                    hosts. No lock‑in, no proprietary agents required.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-200">
                  2
                </span>
                <div>
                  <p className="font-medium">Describe your app</p>
                  <p className="text-xs text-slate-400">
                    Tell Dokploy about your services, databases, and domains. We
                    generate infra plans you can review and approve.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-200">
                  3
                </span>
                <div>
                  <p className="font-medium">Ship with confidence</p>
                  <p className="text-xs text-slate-400">
                    Automated builds, health checks, canary releases, and
                    instant rollbacks keep your team focused on features—not
                    fighting servers.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Example VPS deployment
              </span>
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-300">
                ubuntu@your‑vps
              </span>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-slate-950/90 p-3 font-mono text-[11px] leading-relaxed text-slate-200">
              <code>{`ssh ubuntu@your-vps
curl -fsSL https://get.docker.com | sh

git clone https://github.com/you/dokploy-app.git
cd dokploy-app

npm ci
npm run build
NODE_ENV=production npm start`}</code>
            </pre>
            <p className="text-[11px] text-slate-400">
              Pair this with an Nginx reverse proxy to serve your Next.js app on
              port 80/443 with automatic HTTPS.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="mt-20 space-y-8 border-t border-slate-800/60 pt-16"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Simple pricing for growing teams
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-300">
                Start free on a single VPS, then scale across regions and teams
                without changing tools.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Hobby</h3>
                <p className="text-xs text-slate-400">
                  Perfect for side projects and prototypes.
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  $0{" "}
                  <span className="align-middle text-xs font-normal text-slate-400">
                    / forever
                  </span>
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>• 1 VPS connection</li>
                  <li>• Up to 3 services</li>
                  <li>• Community support</li>
                </ul>
              </div>
              <button className="mt-4 w-full rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-100 hover:border-slate-500">
                Start for free
              </button>
            </article>

            <article className="flex flex-col justify-between rounded-2xl border border-sky-500/70 bg-slate-950 p-4 shadow-[0_20px_70px_rgba(56,189,248,0.45)]">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Startup</h3>
                  <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-medium text-sky-200">
                    Most popular
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  All the guardrails you need for production.
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  $39{" "}
                  <span className="align-middle text-xs font-normal text-slate-400">
                    / month
                  </span>
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-200">
                  <li>• 5 VPS connections</li>
                  <li>• Unlimited services</li>
                  <li>• Automatic SSL & rollbacks</li>
                  <li>• Email support</li>
                </ul>
              </div>
              <button className="mt-4 w-full rounded-full bg-sky-500 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400">
                Start 14‑day trial
              </button>
            </article>

            <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Scale</h3>
                <p className="text-xs text-slate-400">
                  Advanced controls for high‑traffic workloads.
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Custom
                  <span className="ml-1 align-middle text-xs font-normal text-slate-400">
                    / enterprise
                  </span>
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>• Unlimited regions</li>
                  <li>• SSO, audit logs</li>
                  <li>• 24/7 incident response</li>
                </ul>
              </div>
              <button className="mt-4 w-full rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-100 hover:border-slate-500">
                Talk to sales
              </button>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mt-20 space-y-6 border-t border-slate-800/60 pt-16"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Answers to common questions about deploying on VPSs with Dokploy.
            </p>
          </div>

          <div className="space-y-3 text-sm text-slate-200">
            <details className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                <span>Does this replace my cloud provider?</span>
                <span className="text-slate-500 group-open:hidden">＋</span>
                <span className="hidden text-slate-500 group-open:inline">
                  －
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-300">
                No. Dokploy sits on top of your existing VPS providers
                (Hetzner, OVH, DigitalOcean, etc.) and gives you a unified,
                safer deployment workflow.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                <span>Can I self‑host Dokploy?</span>
                <span className="text-slate-500 group-open:hidden">＋</span>
                <span className="hidden text-slate-500 group-open:inline">
                  －
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-300">
                Yes. You can run Dokploy entirely on your own infrastructure and
                keep all deployment metadata within your network.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                <span>Which stacks do you support?</span>
                <span className="text-slate-500 group-open:hidden">＋</span>
                <span className="hidden text-slate-500 group-open:inline">
                  －
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-300">
                Any app that can run in a container: Node, Python, Go, PHP,
                databases, background workers, and more.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dokploy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">
              Status
            </a>
            <a href="#" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
