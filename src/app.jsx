import React, { useMemo, useState } from "react";

const palette = {
  primary: "#FF6B35",
  accent: "#00B8A9",
  success: "#9EF01A",
  warning: "#FFD23F",
  neutral: "#F5F5F5",
  text: "#0F172A",
  white: "#FFFFFF",
};

function Shell({ route, setRoute, children }) {
  return (
    <div className="min-h-screen w-full" style={{ background: `linear-gradient(135deg, ${palette.neutral} 0%, ${palette.white} 100%)` }}>
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b" style={{ borderColor: palette.neutral }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl" style={{ backgroundColor: palette.primary }} />
            <div className="text-xl font-extrabold tracking-tight" style={{ color: palette.text }}>Opinia</div>
          </div>
          <nav className="hidden sm:flex items-center gap-2">
            <NavBtn label="Dashboard" onClick={() => setRoute("dashboard")} active={route==="dashboard"} />
            <NavBtn label="Criar pesquisa" onClick={() => setRoute("create")} active={route==="create"} />
            <NavBtn label="Resultados" onClick={() => setRoute("results")} active={route==="results"} />
            <NavBtn label="Admin" onClick={() => setRoute("admin")} active={route==="admin"} />
            <NavBtn label="Pesquisa pública" onClick={() => setRoute("public")} active={route==="public"} />
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      <footer className="py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Opinia – MVP Prototype</footer>
    </div>
  );
}

function NavBtn({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${active ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-100"}`}
    >
      {label}
    </button>
  );
}

function CTA({ children, onClick, kind = "primary" }) {
  const styles = React.useMemo(() => {
    const map = {
      primary: { bg: palette.primary, hover: "brightness-110" },
      accent: { bg: palette.accent, hover: "brightness-110" },
      ghost: { bg: "transparent", hover: "bg-slate-100" },
    };
    return map[kind];
  }, [kind]);
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-2xl text-white font-semibold shadow transition-all hover:${styles.hover}`}
      style={{ backgroundColor: styles.bg }}
    >
      {children}
    </button>
  );
}

function Card({ title, subtitle, children, tone = "white" }) {
  const bg = tone === "brand" ? palette.accent : palette.white;
  return (
    <div className="rounded-2xl shadow-sm border p-5" style={{ backgroundColor: bg, borderColor: palette.neutral }}>
      {(title || subtitle) && (
        <div className="mb-3">
          {title && <h3 className="text-lg font-bold" style={{ color: palette.text }}>{title}</h3>}
          {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

function KPI({ label, value, tone = "primary" }) {
  const color = tone === "primary" ? palette.primary : tone === "accent" ? palette.accent : palette.success;
  return (
    <div className="rounded-2xl p-4 border shadow-sm" style={{ borderColor: palette.neutral }}>
      <div className="text-sm text-slate-600">{label}</div>
      <div className="mt-1 text-3xl font-extrabold" style={{ color }}>{value}</div>
    </div>
  );
}

// —— Mock de dados ——
const seedSurvey = () => ({
  id: Math.random().toString(36).slice(2),
  title: "Satisfação com o programa Mãe Sem Culpa",
  description: "Queremos ouvir você! Leva menos de 1 minuto.",
  questions: [
    { id: "q1", type: "nps", text: "De 0 a 10, quão provável você recomendaria o programa?" },
    { id: "q2", type: "csat", text: "Quão satisfeito(a) você ficou com o episódio de hoje? (1–5)" },
    { id: "q3", type: "text", text: "O que podemos melhorar?" },
  ],
  link: "https://opinia.app/s/" + Math.random().toString(36).slice(2, 7),
});

function Bars({ data }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="space-y-2">
      {data.map((d, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm mb-1"><span>{d.label}</span><span className="font-semibold">{d.value}</span></div>
          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
            <div className="h-full" style={{ width: `${(d.value / max) * 100}%`, background: i % 2 ? palette.primary : palette.accent }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function FakeQR({ value }) {
  return (
    <div className="w-40 h-40 grid grid-cols-5 grid-rows-5 gap-1 p-2 rounded-lg border bg-white" style={{ borderColor: palette.neutral }}>
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className={`rounded ${i % 3 === 0 ? "bg-black" : "bg-slate-200"}`} />
      ))}
      <div className="col-span-5 row-span-5 hidden">{value}</div>
    </div>
  );
}

// ——— Telas ———
function Login({ onLogged }) {
  const [toast, setToast] = React.useState(false);
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: palette.text }}>Entre no Opinia</h1>
        <p className="text-slate-600 mb-6">Colete, entenda e aja sobre a experiência do seu público – com fluidez.</p>
        <div className="space-y-3 max-w-md">
          <input className="w-full border rounded-xl px-4 py-3" placeholder="E-mail" />
          <input className="w-full border rounded-xl px-4 py-3" placeholder="Senha" type="password" />
          <div className="flex items-center gap-3">
            <CTA onClick={() => { setToast(true); setTimeout(() => { setToast(false); onLogged(); }, 600); }}>Entrar</CTA>
            <button className="text-sm underline">Esqueci minha senha</button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Card tone="brand" title="Convide seu público a participar" subtitle="Gere um QR code e comece a ouvir em minutos.">
          <div className="flex items-center gap-6">
            <FakeQR value="/demo" />
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Crie sua pesquisa</li>
              <li>Mostre o QR na TV/cartaz</li>
              <li>Respostas em tempo real</li>
            </ul>
          </div>
        </Card>
      </div>
      {/* Toast */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-3 rounded-xl shadow text-white transition ${false ? "opacity-100" : ""}`} style={{ display: "none" }} />
    </div>
  );
}

function Dashboard({ surveys, setRoute, setActiveSurvey }) {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <KPI label="Total de respostas (7d)" value="1.248" />
        <KPI label="NPS médio" value="62" tone="accent" />
        <KPI label="CSAT médio" value="4,4/5" tone="success" />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" style={{ color: palette.text }}>Suas pesquisas</h2>
        <CTA kind="accent" onClick={() => setRoute("create")}>Criar pesquisa</CTA>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {surveys.map((s) => (
          <Card key={s.id} title={s.title} subtitle={s.description}>
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="text-sm"><span className="font-semibold">Link:</span> {s.link}</div>
              <div className="flex gap-2">
                <CTA kind="ghost" onClick={() => { setActiveSurvey(s); setRoute("create"); }}>Editar</CTA>
                <CTA kind="ghost" onClick={() => { setActiveSurvey(s); setRoute("results"); }}>Resultados</CTA>
                <CTA onClick={() => { setActiveSurvey(s); setRoute("public"); }}>Abrir pesquisa pública</CTA>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CreateSurvey({ survey, setSurvey, onGenerateQR }) {
  const [step, setStep] = React.useState(1);
  const [local, setLocal] = React.useState(survey ?? seedSurvey());

  const addQuestion = (type) => {
    const id = Math.random().toString(36).slice(2);
    const q = { id, type, text: type === "nps" ? "De 0 a 10, recomendaria?" : type === "csat" ? "Quão satisfeito(a) você ficou? (1–5)" : "Escreva seu comentário" };
    setLocal({ ...local, questions: [...local.questions, q] });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" style={{ color: palette.text }}>Criar pesquisa</h2>
        <div className="text-sm">Etapa <span className="font-semibold">{step}</span> de 3</div>
      </div>

      {step === 1 && (
        <Card title="Informações básicas">
          <div className="space-y-3">
            <input className="w-full border rounded-xl px-4 py-3" value={local.title} onChange={(e) => setLocal({ ...local, title: e.target.value })} />
            <textarea className="w-full border rounded-xl px-4 py-3" rows={3} value={local.description} onChange={(e) => setLocal({ ...local, description: e.target.value })} />
            <div className="flex gap-2">
              <CTA kind="accent" onClick={() => setStep(2)}>Continuar</CTA>
            </div>
          </div>
        </Card>
      )}

      {step === 2 && (
        <Card title="Perguntas">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <CTA kind="ghost" onClick={() => addQuestion("nps")}>+ NPS</CTA>
              <CTA kind="ghost" onClick={() => addQuestion("csat")}>+ CSAT</CTA>
              <CTA kind="ghost" onClick={() => addQuestion("text")}>+ Texto</CTA>
              <CTA kind="ghost" onClick={() => addQuestion("choice")}>+ Múltipla escolha</CTA>
            </div>
            <ul className="space-y-2">
              {local.questions.map((q) => (
                <li key={q.id} className="p-3 border rounded-xl flex items-center justify-between" style={{ borderColor: palette.neutral }}>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500">{q.type}</div>
                    <div className="font-medium">{q.text}</div>
                  </div>
                  <button className="text-sm text-red-600" onClick={() => setLocal({ ...local, questions: local.questions.filter((x) => x.id !== q.id) })}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <CTA kind="accent" onClick={() => setStep(3)}>Gerar link & QR</CTA>
            </div>
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card title="Publicação" subtitle="Seu link e QR code estão prontos">
          <div className="flex items-center gap-6 flex-wrap">
            <FakeQR value={local.link} />
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-500">Link público</div>
                <div className="font-mono p-2 rounded bg-slate-100 inline-block">{local.link}</div>
              </div>
              <div className="flex gap-2">
                <CTA onClick={() => { setSurvey(local); onGenerateQR?.(local); }}>Salvar</CTA>
                <CTA kind="accent" onClick={() => navigator.clipboard && navigator.clipboard.writeText(local.link)}>Copiar link</CTA>
              </div>
              <p className="text-sm text-slate-600">Dica: exiba o QR na TV ou em um cartaz para aumentar a taxa de participação.</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

function PublicSurvey({ survey, onSubmitted }) {
  const [progress, setProgress] = React.useState(0);
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl font-bold" style={{ color: palette.text }}>{survey.title}</h2>
      <div className="text-slate-600">{survey.description}</div>
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full" style={{ width: `${progress}%`, background: palette.accent }} />
      </div>
      <Card>
        <div className="space-y-5">
          {survey.questions.map((q, idx) => (
            <div key={q.id} className="space-y-2">
              <div className="text-sm font-medium">{q.text}</div>
              {q.type === "nps" && (
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <button key={i} className="w-9 h-9 rounded-md border hover:scale-105 transition" style={{ borderColor: palette.neutral }} onClick={() => setProgress(((idx + 1) / survey.questions.length) * 100)}>{i}</button>
                  ))}
                </div>
              )}
              {q.type === "csat" && (
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button key={i} className="px-3 py-2 rounded-md border" style={{ borderColor: palette.neutral }} onClick={() => setProgress(((idx + 1) / survey.questions.length) * 100)}>{i + 1}</button>
                  ))}
                </div>
              )}
              {q.type === "text" && (
                <textarea className="w-full border rounded-xl px-3 py-2" rows={3} placeholder="Escreva aqui" onChange={() => setProgress(((idx + 1) / survey.questions.length) * 100)} />
              )}
              {q.type === "choice" && (
                <div className="flex flex-wrap gap-2">
                  {["Opção A", "Opção B", "Opção C"].map((opt) => (
                    <button key={opt} className="px-3 py-2 rounded-md border" style={{ borderColor: palette.neutral }} onClick={() => setProgress(((idx + 1) / survey.questions.length) * 100)}>{opt}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Concordo com a política de privacidade</label>
            <CTA onClick={onSubmitted}>Enviar respostas</CTA>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Results({ survey }) {
  const sample = [
    { label: "Promotores (9–10)", value: 62 },
    { label: "Neutros (7–8)", value: 24 },
    { label: "Detratores (0–6)", value: 14 },
  ];
  const csat = [
    { label: "5 estrelas", value: 48 },
    { label: "4 estrelas", value: 31 },
    { label: "3 estrelas", value: 12 },
    { label: "2 estrelas", value: 6 },
    { label: "1 estrela", value: 3 },
  ];
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold" style={{ color: palette.text }}>Resultados – {survey.title}</h2>
          <p className="text-slate-600">Atualizado agora • Filtros: últimos 7 dias</p>
        </div>
        <CTA kind="accent" onClick={() => alert("Exportação simulada (CSV/XLSX)")}>Exportar</CTA>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <KPI label="Respostas" value="1.248" />
        <KPI label="NPS" value="62" tone="accent" />
        <KPI label="CSAT" value="4,4/5" tone="success" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Distribuição NPS"><Bars data={sample} /></Card>
        <Card title="CSAT – estrelas"><Bars data={csat} /></Card>
      </div>
      <Card title="Nuvem de comentários (amostra)">
        <div className="flex flex-wrap gap-2 text-sm">
          {["dinâmico","conteúdo útil","apresentadora carismática","gosto das dicas","quero mais entrevistas","áudio baixo","horário ruim","trazer especialistas"].map((t, i) => (
            <span key={i} className="px-2 py-1 rounded-full" style={{ background: i % 2 ? palette.neutral : palette.white, border: `1px solid ${palette.neutral}` }}>{t}</span>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Admin() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold" style={{ color: palette.text }}>Admin (interno)</h2>
      <Card title="Clientes">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2">Empresa</th>
              <th>Email</th>
              <th>Pesquisas</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "RS Play TV", email: "contato@rsplay.tv", surveys: 5 },
              { name: "Clínica Saúde+", email: "cx@saudemais.com", surveys: 3 },
            ].map((c) => (
              <tr key={c.email} className="border-t" style={{ borderColor: palette.neutral }}>
                <td className="py-2">{c.name}</td>
                <td>{c.email}</td>
                <td>{c.surveys}</td>
                <td><button className="text-red-600 text-sm">Bloquear</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = React.useState("login");
  const [surveys, setSurveys] = React.useState([seedSurvey()]);
  const [activeSurvey, setActiveSurvey] = React.useState(surveys[0]);

  const handleSaveSurvey = (saved) => {
    setSurveys((prev) => {
      const exists = prev.some((p) => p.id === saved.id);
      if (exists) return prev.map((p) => (p.id === saved.id ? saved : p));
      return [saved, ...prev];
    });
    setActiveSurvey(saved);
    setRoute("dashboard");
  };

  return (
    <Shell route={route} setRoute={setRoute}>
      {route === "login" && <Login onLogged={() => setRoute("dashboard")} />}
      {route === "dashboard" && (
        <Dashboard surveys={surveys} setRoute={setRoute} setActiveSurvey={setActiveSurvey} />
      )}
      {route === "create" && (
        <CreateSurvey survey={activeSurvey} setSurvey={setActiveSurvey} onGenerateQR={handleSaveSurvey} />
      )}
      {route === "public" && (
        <PublicSurvey survey={activeSurvey} onSubmitted={() => setRoute("results")} />
      )}
      {route === "results" && <Results survey={activeSurvey} />}
      {route === "admin" && <Admin />}
    </Shell>
  );
}
