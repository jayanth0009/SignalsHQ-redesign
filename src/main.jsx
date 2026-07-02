import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Brain,
  Check,
  ChevronRight,
  CircleGauge,
  ClipboardCheck,
  DatabaseZap,
  FileSearch,
  FolderKanban,
  LockKeyhole,
  MessageSquareText,
  Play,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UsersRound,
} from "lucide-react";
import "./styles.css";

const workflow = [
  {
    id: "intake",
    label: "Intake",
    title: "Client docs arrive organized, searchable, and ready for review.",
    icon: UploadCloud,
    stat: "95%+",
    statLabel: "extraction accuracy",
    bullets: ["Drag-and-drop tax packets", "Auto-detect W-2, 1099, K-1", "Missing info checklist"],
  },
  {
    id: "research",
    label: "Research",
    title: "Tax questions get cited answers inside the same workflow.",
    icon: BookOpenCheck,
    stat: "4 hrs",
    statLabel: "saved per preparer",
    bullets: ["IRS-backed answers", "Federal and SALT coverage", "Exportable client memo"],
  },
  {
    id: "review",
    label: "Review",
    title: "Partners see risks, deltas, and workpaper context before sign-off.",
    icon: SearchCheck,
    stat: "70%",
    statLabel: "faster first pass",
    bullets: ["Entity-level rollups", "Risk flags by category", "Audit-ready activity trail"],
  },
];

const modules = [
  {
    name: "Tax Assist",
    copy: "Ask nuanced tax questions and receive answers with source trail, jurisdiction context, and memo-ready structure.",
    icon: MessageSquareText,
    status: "Live",
  },
  {
    name: "Client Organizer",
    copy: "Turn unstructured client uploads into a clean binder with extracted fields, missing items, and review priorities.",
    icon: FolderKanban,
    status: "Live",
  },
  {
    name: "Client Review",
    copy: "Surface anomalies, category rollups, and entity-level insight so reviewers spend time on judgment, not hunting.",
    icon: ClipboardCheck,
    status: "Preview",
  },
];

const documents = [
  ["W-2", "Matched", "Income"],
  ["1099-INT", "Flagged", "Interest"],
  ["K-1", "Review", "Partnership"],
  ["Home office", "Missing", "Deduction"],
];

function App() {
  const [activeWorkflow, setActiveWorkflow] = useState(workflow[0]);
  const [activeModule, setActiveModule] = useState(modules[0]);
  const [assistantRan, setAssistantRan] = useState(false);

  const completion = useMemo(() => {
    const index = workflow.findIndex((step) => step.id === activeWorkflow.id);
    return `${((index + 1) / workflow.length) * 100}%`;
  }, [activeWorkflow]);

  return (
    <main>
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label="SignalsHQ home">
          <span className="brand-mark">S</span>
          <span>SignalsHQ</span>
        </a>
        <div className="nav-links">
          <a href="#workflow">Workflow</a>
          <a href="#product">Product</a>
          <a href="#security">Security</a>
        </div>
        <a className="nav-cta" href="mailto:careers@signalshq.io?subject=Frontend%20Product%20Engineer%20Intern">
          <span>Fast-track build</span>
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            AI tax command center for scaling CPA firms
          </div>
          <h1>Move tax work from document chaos to partner-ready decisions.</h1>
          <p>
            A product-led redesign concept for SignalsHQ: built around the real daily flow of tax teams,
            from client intake to cited research, review queues, and audit-ready outputs.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#assistant">
              <Play size={17} aria-hidden="true" />
              Try workflow
            </a>
            <a className="secondary-button" href="#product">
              View product modules
              <ChevronRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="proof-row" aria-label="SignalsHQ outcomes">
            <span><strong>4+ hrs</strong> saved per preparer</span>
            <span><strong>95%+</strong> extraction accuracy</span>
            <span><strong>SOC 2</strong> ready posture</span>
          </div>
        </div>

        <section className="product-shell" aria-label="SignalsHQ product preview">
          <div className="shell-header">
            <div>
              <span className="window-dot"></span>
              <span className="window-dot amber"></span>
              <span className="window-dot green"></span>
            </div>
            <span>Client Review: Henderson Family Trust</span>
          </div>
          <div className="shell-grid">
            <aside className="client-rail">
              <span className="rail-label">Queue</span>
              {["Needs review", "Ready to file", "Missing docs"].map((item, index) => (
                <button className={index === 0 ? "rail-item active" : "rail-item"} key={item}>
                  <span>{item}</span>
                  <strong>{[8, 21, 4][index]}</strong>
                </button>
              ))}
            </aside>
            <div className="review-panel">
              <div className="panel-top">
                <div>
                  <span className="small-label">Current client</span>
                  <h2>2025 Tax Packet</h2>
                </div>
                <span className="status-pill">AI review running</span>
              </div>
              <div className="progress-track">
                <span style={{ width: completion }}></span>
              </div>
              <div className="doc-list">
                {documents.map(([name, status, type]) => (
                  <div className="doc-row" key={name}>
                    <FileSearch size={18} aria-hidden="true" />
                    <div>
                      <strong>{name}</strong>
                      <span>{type}</span>
                    </div>
                    <em className={status.toLowerCase().replace(" ", "-")}>{status}</em>
                  </div>
                ))}
              </div>
            </div>
            <aside className="insight-panel">
              <span className="small-label">AI signal</span>
              <h3>Potential deduction risk</h3>
              <p>
                Home office claim lacks exclusive-use confirmation. Ask client for supporting note before partner review.
              </p>
              <button>
                Generate request
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </aside>
          </div>
        </section>
      </section>

      <section id="workflow" className="section workflow-section">
        <div className="section-heading">
          <span className="eyebrow compact">
            <CircleGauge size={15} aria-hidden="true" />
            Built for busy season speed
          </span>
          <h2>One continuous workflow, not another disconnected tax tool.</h2>
        </div>
        <div className="workflow-layout">
          <div className="step-stack" role="tablist" aria-label="Workflow steps">
            {workflow.map((step) => {
              const Icon = step.icon;
              const selected = activeWorkflow.id === step.id;
              return (
                <button
                  className={selected ? "step-button active" : "step-button"}
                  key={step.id}
                  onClick={() => setActiveWorkflow(step)}
                  role="tab"
                  aria-selected={selected}
                >
                  <Icon size={21} aria-hidden="true" />
                  <span>{step.label}</span>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <article className="workflow-card">
            <span className="metric">{activeWorkflow.stat}</span>
            <span className="metric-label">{activeWorkflow.statLabel}</span>
            <h3>{activeWorkflow.title}</h3>
            <div className="bullet-grid">
              {activeWorkflow.bullets.map((item) => (
                <span key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="assistant" className="section assistant-section">
        <div className="assistant-copy">
          <span className="eyebrow compact">
            <Brain size={15} aria-hidden="true" />
            Interactive AI workflow
          </span>
          <h2>Show the answer, the source trail, and the next action.</h2>
          <p>
            CPA users do not only need a chatbot. They need a confident workflow that turns ambiguous tax
            questions into reviewable, documented decisions.
          </p>
        </div>
        <div className="assistant-box">
          <div className="prompt-row">
            <span>Question</span>
            <p>Can my client deduct home office expenses for a multi-state return?</p>
            <button onClick={() => setAssistantRan(true)}>
              Run analysis
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          <div className={assistantRan ? "answer-panel visible" : "answer-panel"}>
            <div>
              <BadgeCheck size={20} aria-hidden="true" />
              <strong>Likely deductible with documentation</strong>
            </div>
            <p>
              Confirm exclusive and regular use, business purpose, and state-level treatment before filing.
              SignalsHQ would attach cited authority and convert this into a client-ready memo.
            </p>
            <div className="source-row">
              <span>IRS citation</span>
              <span>SALT check</span>
              <span>Export memo</span>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="section product-section">
        <div className="section-heading">
          <span className="eyebrow compact">
            <DatabaseZap size={15} aria-hidden="true" />
            Product modules
          </span>
          <h2>Each module gets a clearer job in the buyer's mind.</h2>
        </div>
        <div className="module-layout">
          <div className="module-tabs" role="tablist" aria-label="Product modules">
            {modules.map((module) => {
              const Icon = module.icon;
              const selected = module.name === activeModule.name;
              return (
                <button
                  key={module.name}
                  className={selected ? "module-tab active" : "module-tab"}
                  onClick={() => setActiveModule(module)}
                  role="tab"
                  aria-selected={selected}
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>{module.name}</span>
                  <em>{module.status}</em>
                </button>
              );
            })}
          </div>
          <article className="module-preview">
            <div className="preview-header">
              <span>{activeModule.status}</span>
              <strong>{activeModule.name}</strong>
            </div>
            <p>{activeModule.copy}</p>
            <div className="preview-grid">
              <span>Client context</span>
              <span>Source trail</span>
              <span>Review state</span>
              <span>Export path</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="comparison">
          <div>
            <h2>Before SignalsHQ</h2>
            <ul>
              <li>Documents buried across email, portals, and folders</li>
              <li>Research notes separated from client workpapers</li>
              <li>Reviewers discover missing context too late</li>
            </ul>
          </div>
          <div>
            <h2>With SignalsHQ</h2>
            <ul>
              <li>Structured intake with extraction and missing-item detection</li>
              <li>Cited tax answers connected to the client file</li>
              <li>Partner review starts with risks, deltas, and next actions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="security" className="section security-section">
        <div>
          <span className="eyebrow compact">
            <ShieldCheck size={15} aria-hidden="true" />
            Trust layer
          </span>
          <h2>Designed for sensitive financial data from the first impression.</h2>
        </div>
        <div className="security-grid">
          {[
            [LockKeyhole, "Encryption", "Client data protected in transit and at rest."],
            [UsersRound, "Role access", "Firm teams see only the files and clients they should."],
            [SearchCheck, "Audit trail", "Every answer, extraction, and export remains reviewable."],
          ].map(([Icon, title, copy]) => (
            <article key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <span className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span>SignalsHQ</span>
          </span>
          <p>Fast-track redesign concept built by Jayanth Kandula for the Frontend Product Engineer Intern role.</p>
        </div>
        <a className="primary-button" href="mailto:careers@signalshq.io?subject=Frontend%20Product%20Engineer%20Intern">
          Email application
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
