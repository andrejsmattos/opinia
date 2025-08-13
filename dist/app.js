"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const palette = {
  primary: "#FF6B35",
  accent: "#00B8A9",
  success: "#9EF01A",
  warning: "#FFD23F",
  neutral: "#F5F5F5",
  text: "#0F172A",
  white: "#FFFFFF"
};
function Shell(_ref) {
  let {
    route,
    setRoute,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "min-h-screen w-full",
    style: {
      background: "linear-gradient(135deg, ".concat(palette.neutral, " 0%, ").concat(palette.white, " 100%)")
    }
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "sticky top-0 z-10 backdrop-blur bg-white/70 border-b",
    style: {
      borderColor: palette.neutral
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-9 h-9 rounded-2xl",
    style: {
      backgroundColor: palette.primary
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xl font-extrabold tracking-tight",
    style: {
      color: palette.text
    }
  }, "Opinia")), /*#__PURE__*/_react.default.createElement("nav", {
    className: "hidden sm:flex items-center gap-2"
  }, /*#__PURE__*/_react.default.createElement(NavBtn, {
    label: "Dashboard",
    onClick: () => setRoute("dashboard"),
    active: route === "dashboard"
  }), /*#__PURE__*/_react.default.createElement(NavBtn, {
    label: "Criar pesquisa",
    onClick: () => setRoute("create"),
    active: route === "create"
  }), /*#__PURE__*/_react.default.createElement(NavBtn, {
    label: "Resultados",
    onClick: () => setRoute("results"),
    active: route === "results"
  }), /*#__PURE__*/_react.default.createElement(NavBtn, {
    label: "Admin",
    onClick: () => setRoute("admin"),
    active: route === "admin"
  }), /*#__PURE__*/_react.default.createElement(NavBtn, {
    label: "Pesquisa p\xFAblica",
    onClick: () => setRoute("public"),
    active: route === "public"
  })))), /*#__PURE__*/_react.default.createElement("main", {
    className: "max-w-6xl mx-auto px-4 py-6"
  }, children), /*#__PURE__*/_react.default.createElement("footer", {
    className: "py-6 text-center text-sm text-slate-500"
  }, "\xA9 ", new Date().getFullYear(), " Opinia \u2013 MVP Prototype"));
}
function NavBtn(_ref2) {
  let {
    label,
    active,
    onClick
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: "px-3 py-1.5 rounded-full text-sm font-medium transition-all ".concat(active ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-100")
  }, label);
}
function CTA(_ref3) {
  let {
    children,
    onClick,
    kind = "primary"
  } = _ref3;
  const styles = _react.default.useMemo(() => {
    const map = {
      primary: {
        bg: palette.primary,
        hover: "brightness-110"
      },
      accent: {
        bg: palette.accent,
        hover: "brightness-110"
      },
      ghost: {
        bg: "transparent",
        hover: "bg-slate-100"
      }
    };
    return map[kind];
  }, [kind]);
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: "px-4 py-2 rounded-2xl text-white font-semibold shadow transition-all hover:".concat(styles.hover),
    style: {
      backgroundColor: styles.bg
    }
  }, children);
}
function Card(_ref4) {
  let {
    title,
    subtitle,
    children,
    tone = "white"
  } = _ref4;
  const bg = tone === "brand" ? palette.accent : palette.white;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-2xl shadow-sm border p-5",
    style: {
      backgroundColor: bg,
      borderColor: palette.neutral
    }
  }, (title || subtitle) && /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, title && /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-lg font-bold",
    style: {
      color: palette.text
    }
  }, title), subtitle && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-sm text-slate-600"
  }, subtitle)), children);
}
function KPI(_ref5) {
  let {
    label,
    value,
    tone = "primary"
  } = _ref5;
  const color = tone === "primary" ? palette.primary : tone === "accent" ? palette.accent : palette.success;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-2xl p-4 border shadow-sm",
    style: {
      borderColor: palette.neutral
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm text-slate-600"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-1 text-3xl font-extrabold",
    style: {
      color
    }
  }, value));
}

// —— Mock de dados ——
const seedSurvey = () => ({
  id: Math.random().toString(36).slice(2),
  title: "Satisfação com o programa Mãe Sem Culpa",
  description: "Queremos ouvir você! Leva menos de 1 minuto.",
  questions: [{
    id: "q1",
    type: "nps",
    text: "De 0 a 10, quão provável você recomendaria o programa?"
  }, {
    id: "q2",
    type: "csat",
    text: "Quão satisfeito(a) você ficou com o episódio de hoje? (1–5)"
  }, {
    id: "q3",
    type: "text",
    text: "O que podemos melhorar?"
  }],
  link: "https://opinia.app/s/" + Math.random().toString(36).slice(2, 7)
});
function Bars(_ref6) {
  let {
    data
  } = _ref6;
  const max = Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-2"
  }, data.map((d, i) => /*#__PURE__*/_react.default.createElement("div", {
    key: i
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between text-sm mb-1"
  }, /*#__PURE__*/_react.default.createElement("span", null, d.label), /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, d.value)), /*#__PURE__*/_react.default.createElement("div", {
    className: "h-2 rounded-full bg-slate-200 overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h-full",
    style: {
      width: "".concat(d.value / max * 100, "%"),
      background: i % 2 ? palette.primary : palette.accent
    }
  })))));
}
function FakeQR(_ref7) {
  let {
    value
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-40 h-40 grid grid-cols-5 grid-rows-5 gap-1 p-2 rounded-lg border bg-white",
    style: {
      borderColor: palette.neutral
    }
  }, Array.from({
    length: 25
  }).map((_, i) => /*#__PURE__*/_react.default.createElement("div", {
    key: i,
    className: "rounded ".concat(i % 3 === 0 ? "bg-black" : "bg-slate-200")
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-5 row-span-5 hidden"
  }, value));
}

// ——— Telas ———
function Login(_ref8) {
  let {
    onLogged
  } = _ref8;
  const [toast, setToast] = _react.default.useState(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "grid md:grid-cols-2 gap-6 items-center"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-3xl font-extrabold mb-2",
    style: {
      color: palette.text
    }
  }, "Entre no Opinia"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-slate-600 mb-6"
  }, "Colete, entenda e aja sobre a experi\xEAncia do seu p\xFAblico \u2013 com fluidez."), /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-3 max-w-md"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "w-full border rounded-xl px-4 py-3",
    placeholder: "E-mail"
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "w-full border rounded-xl px-4 py-3",
    placeholder: "Senha",
    type: "password"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/_react.default.createElement(CTA, {
    onClick: () => {
      setToast(true);
      setTimeout(() => {
        setToast(false);
        onLogged();
      }, 600);
    }
  }, "Entrar"), /*#__PURE__*/_react.default.createElement("button", {
    className: "text-sm underline"
  }, "Esqueci minha senha")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/_react.default.createElement(Card, {
    tone: "brand",
    title: "Convide seu p\xFAblico a participar",
    subtitle: "Gere um QR code e comece a ouvir em minutos."
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-6"
  }, /*#__PURE__*/_react.default.createElement(FakeQR, {
    value: "/demo"
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "text-sm list-disc pl-5 space-y-1"
  }, /*#__PURE__*/_react.default.createElement("li", null, "Crie sua pesquisa"), /*#__PURE__*/_react.default.createElement("li", null, "Mostre o QR na TV/cartaz"), /*#__PURE__*/_react.default.createElement("li", null, "Respostas em tempo real"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-3 rounded-xl shadow text-white transition ".concat(false ? "opacity-100" : ""),
    style: {
      display: "none"
    }
  }));
}
function Dashboard(_ref9) {
  let {
    surveys,
    setRoute,
    setActiveSurvey
  } = _ref9;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "grid sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/_react.default.createElement(KPI, {
    label: "Total de respostas (7d)",
    value: "1.248"
  }), /*#__PURE__*/_react.default.createElement(KPI, {
    label: "NPS m\xE9dio",
    value: "62",
    tone: "accent"
  }), /*#__PURE__*/_react.default.createElement(KPI, {
    label: "CSAT m\xE9dio",
    value: "4,4/5",
    tone: "success"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-xl font-bold",
    style: {
      color: palette.text
    }
  }, "Suas pesquisas"), /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "accent",
    onClick: () => setRoute("create")
  }, "Criar pesquisa")), /*#__PURE__*/_react.default.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, surveys.map(s => /*#__PURE__*/_react.default.createElement(Card, {
    key: s.id,
    title: s.title,
    subtitle: s.description
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap gap-3 items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, "Link:"), " ", s.link), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "ghost",
    onClick: () => {
      setActiveSurvey(s);
      setRoute("create");
    }
  }, "Editar"), /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "ghost",
    onClick: () => {
      setActiveSurvey(s);
      setRoute("results");
    }
  }, "Resultados"), /*#__PURE__*/_react.default.createElement(CTA, {
    onClick: () => {
      setActiveSurvey(s);
      setRoute("public");
    }
  }, "Abrir pesquisa p\xFAblica")))))));
}
function CreateSurvey(_ref0) {
  let {
    survey,
    setSurvey,
    onGenerateQR
  } = _ref0;
  const [step, setStep] = _react.default.useState(1);
  const [local, setLocal] = _react.default.useState(survey !== null && survey !== void 0 ? survey : seedSurvey());
  const addQuestion = type => {
    const id = Math.random().toString(36).slice(2);
    const q = {
      id,
      type,
      text: type === "nps" ? "De 0 a 10, recomendaria?" : type === "csat" ? "Quão satisfeito(a) você ficou? (1–5)" : "Escreva seu comentário"
    };
    setLocal(_objectSpread(_objectSpread({}, local), {}, {
      questions: [...local.questions, q]
    }));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-3xl mx-auto space-y-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-xl font-bold",
    style: {
      color: palette.text
    }
  }, "Criar pesquisa"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm"
  }, "Etapa ", /*#__PURE__*/_react.default.createElement("span", {
    className: "font-semibold"
  }, step), " de 3")), step === 1 && /*#__PURE__*/_react.default.createElement(Card, {
    title: "Informa\xE7\xF5es b\xE1sicas"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "w-full border rounded-xl px-4 py-3",
    value: local.title,
    onChange: e => setLocal(_objectSpread(_objectSpread({}, local), {}, {
      title: e.target.value
    }))
  }), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "w-full border rounded-xl px-4 py-3",
    rows: 3,
    value: local.description,
    onChange: e => setLocal(_objectSpread(_objectSpread({}, local), {}, {
      description: e.target.value
    }))
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "accent",
    onClick: () => setStep(2)
  }, "Continuar")))), step === 2 && /*#__PURE__*/_react.default.createElement(Card, {
    title: "Perguntas"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "ghost",
    onClick: () => addQuestion("nps")
  }, "+ NPS"), /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "ghost",
    onClick: () => addQuestion("csat")
  }, "+ CSAT"), /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "ghost",
    onClick: () => addQuestion("text")
  }, "+ Texto"), /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "ghost",
    onClick: () => addQuestion("choice")
  }, "+ M\xFAltipla escolha")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "space-y-2"
  }, local.questions.map(q => /*#__PURE__*/_react.default.createElement("li", {
    key: q.id,
    className: "p-3 border rounded-xl flex items-center justify-between",
    style: {
      borderColor: palette.neutral
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs uppercase tracking-wide text-slate-500"
  }, q.type), /*#__PURE__*/_react.default.createElement("div", {
    className: "font-medium"
  }, q.text)), /*#__PURE__*/_react.default.createElement("button", {
    className: "text-sm text-red-600",
    onClick: () => setLocal(_objectSpread(_objectSpread({}, local), {}, {
      questions: local.questions.filter(x => x.id !== q.id)
    }))
  }, "Remover")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "accent",
    onClick: () => setStep(3)
  }, "Gerar link & QR")))), step === 3 && /*#__PURE__*/_react.default.createElement(Card, {
    title: "Publica\xE7\xE3o",
    subtitle: "Seu link e QR code est\xE3o prontos"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center gap-6 flex-wrap"
  }, /*#__PURE__*/_react.default.createElement(FakeQR, {
    value: local.link
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xs text-slate-500"
  }, "Link p\xFAblico"), /*#__PURE__*/_react.default.createElement("div", {
    className: "font-mono p-2 rounded bg-slate-100 inline-block"
  }, local.link)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/_react.default.createElement(CTA, {
    onClick: () => {
      setSurvey(local);
      onGenerateQR === null || onGenerateQR === void 0 || onGenerateQR(local);
    }
  }, "Salvar"), /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "accent",
    onClick: () => navigator.clipboard && navigator.clipboard.writeText(local.link)
  }, "Copiar link")), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-sm text-slate-600"
  }, "Dica: exiba o QR na TV ou em um cartaz para aumentar a taxa de participa\xE7\xE3o.")))));
}
function PublicSurvey(_ref1) {
  let {
    survey,
    onSubmitted
  } = _ref1;
  const [progress, setProgress] = _react.default.useState(0);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "max-w-3xl mx-auto space-y-6"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-xl font-bold",
    style: {
      color: palette.text
    }
  }, survey.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-slate-600"
  }, survey.description), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full h-2 bg-slate-200 rounded-full overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h-full",
    style: {
      width: "".concat(progress, "%"),
      background: palette.accent
    }
  })), /*#__PURE__*/_react.default.createElement(Card, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-5"
  }, survey.questions.map((q, idx) => /*#__PURE__*/_react.default.createElement("div", {
    key: q.id,
    className: "space-y-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-medium"
  }, q.text), q.type === "nps" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, Array.from({
    length: 11
  }).map((_, i) => /*#__PURE__*/_react.default.createElement("button", {
    key: i,
    className: "w-9 h-9 rounded-md border hover:scale-105 transition",
    style: {
      borderColor: palette.neutral
    },
    onClick: () => setProgress((idx + 1) / survey.questions.length * 100)
  }, i))), q.type === "csat" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex gap-2"
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/_react.default.createElement("button", {
    key: i,
    className: "px-3 py-2 rounded-md border",
    style: {
      borderColor: palette.neutral
    },
    onClick: () => setProgress((idx + 1) / survey.questions.length * 100)
  }, i + 1))), q.type === "text" && /*#__PURE__*/_react.default.createElement("textarea", {
    className: "w-full border rounded-xl px-3 py-2",
    rows: 3,
    placeholder: "Escreva aqui",
    onChange: () => setProgress((idx + 1) / survey.questions.length * 100)
  }), q.type === "choice" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, ["Opção A", "Opção B", "Opção C"].map(opt => /*#__PURE__*/_react.default.createElement("button", {
    key: opt,
    className: "px-3 py-2 rounded-md border",
    style: {
      borderColor: palette.neutral
    },
    onClick: () => setProgress((idx + 1) / survey.questions.length * 100)
  }, opt))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "flex items-center gap-2 text-sm"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox"
  }), " Concordo com a pol\xEDtica de privacidade"), /*#__PURE__*/_react.default.createElement(CTA, {
    onClick: onSubmitted
  }, "Enviar respostas")))));
}
function Results(_ref10) {
  let {
    survey
  } = _ref10;
  const sample = [{
    label: "Promotores (9–10)",
    value: 62
  }, {
    label: "Neutros (7–8)",
    value: 24
  }, {
    label: "Detratores (0–6)",
    value: 14
  }];
  const csat = [{
    label: "5 estrelas",
    value: 48
  }, {
    label: "4 estrelas",
    value: 31
  }, {
    label: "3 estrelas",
    value: 12
  }, {
    label: "2 estrelas",
    value: 6
  }, {
    label: "1 estrela",
    value: 3
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-xl font-bold",
    style: {
      color: palette.text
    }
  }, "Resultados \u2013 ", survey.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-slate-600"
  }, "Atualizado agora \u2022 Filtros: \xFAltimos 7 dias")), /*#__PURE__*/_react.default.createElement(CTA, {
    kind: "accent",
    onClick: () => alert("Exportação simulada (CSV/XLSX)")
  }, "Exportar")), /*#__PURE__*/_react.default.createElement("div", {
    className: "grid md:grid-cols-3 gap-4"
  }, /*#__PURE__*/_react.default.createElement(KPI, {
    label: "Respostas",
    value: "1.248"
  }), /*#__PURE__*/_react.default.createElement(KPI, {
    label: "NPS",
    value: "62",
    tone: "accent"
  }), /*#__PURE__*/_react.default.createElement(KPI, {
    label: "CSAT",
    value: "4,4/5",
    tone: "success"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react.default.createElement(Card, {
    title: "Distribui\xE7\xE3o NPS"
  }, /*#__PURE__*/_react.default.createElement(Bars, {
    data: sample
  })), /*#__PURE__*/_react.default.createElement(Card, {
    title: "CSAT \u2013 estrelas"
  }, /*#__PURE__*/_react.default.createElement(Bars, {
    data: csat
  }))), /*#__PURE__*/_react.default.createElement(Card, {
    title: "Nuvem de coment\xE1rios (amostra)"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap gap-2 text-sm"
  }, ["dinâmico", "conteúdo útil", "apresentadora carismática", "gosto das dicas", "quero mais entrevistas", "áudio baixo", "horário ruim", "trazer especialistas"].map((t, i) => /*#__PURE__*/_react.default.createElement("span", {
    key: i,
    className: "px-2 py-1 rounded-full",
    style: {
      background: i % 2 ? palette.neutral : palette.white,
      border: "1px solid ".concat(palette.neutral)
    }
  }, t)))));
}
function Admin() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-xl font-bold",
    style: {
      color: palette.text
    }
  }, "Admin (interno)"), /*#__PURE__*/_react.default.createElement(Card, {
    title: "Clientes"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: "text-left text-slate-500"
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: "py-2"
  }, "Empresa"), /*#__PURE__*/_react.default.createElement("th", null, "Email"), /*#__PURE__*/_react.default.createElement("th", null, "Pesquisas"), /*#__PURE__*/_react.default.createElement("th", null, "A\xE7\xE3o"))), /*#__PURE__*/_react.default.createElement("tbody", null, [{
    name: "RS Play TV",
    email: "contato@rsplay.tv",
    surveys: 5
  }, {
    name: "Clínica Saúde+",
    email: "cx@saudemais.com",
    surveys: 3
  }].map(c => /*#__PURE__*/_react.default.createElement("tr", {
    key: c.email,
    className: "border-t",
    style: {
      borderColor: palette.neutral
    }
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "py-2"
  }, c.name), /*#__PURE__*/_react.default.createElement("td", null, c.email), /*#__PURE__*/_react.default.createElement("td", null, c.surveys), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "text-red-600 text-sm"
  }, "Bloquear"))))))));
}
function App() {
  const [route, setRoute] = _react.default.useState("login");
  const [surveys, setSurveys] = _react.default.useState([seedSurvey()]);
  const [activeSurvey, setActiveSurvey] = _react.default.useState(surveys[0]);
  const handleSaveSurvey = saved => {
    setSurveys(prev => {
      const exists = prev.some(p => p.id === saved.id);
      if (exists) return prev.map(p => p.id === saved.id ? saved : p);
      return [saved, ...prev];
    });
    setActiveSurvey(saved);
    setRoute("dashboard");
  };
  return /*#__PURE__*/_react.default.createElement(Shell, {
    route: route,
    setRoute: setRoute
  }, route === "login" && /*#__PURE__*/_react.default.createElement(Login, {
    onLogged: () => setRoute("dashboard")
  }), route === "dashboard" && /*#__PURE__*/_react.default.createElement(Dashboard, {
    surveys: surveys,
    setRoute: setRoute,
    setActiveSurvey: setActiveSurvey
  }), route === "create" && /*#__PURE__*/_react.default.createElement(CreateSurvey, {
    survey: activeSurvey,
    setSurvey: setActiveSurvey,
    onGenerateQR: handleSaveSurvey
  }), route === "public" && /*#__PURE__*/_react.default.createElement(PublicSurvey, {
    survey: activeSurvey,
    onSubmitted: () => setRoute("results")
  }), route === "results" && /*#__PURE__*/_react.default.createElement(Results, {
    survey: activeSurvey
  }), route === "admin" && /*#__PURE__*/_react.default.createElement(Admin, null));
}