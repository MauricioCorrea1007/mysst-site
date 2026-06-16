import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Activity, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluções | mysst.com.br",
  description:
    "Conheça as soluções da mysst para gestão de SST, NR-01, riscos psicossociais e conformidade contínua.",
};

const pilares = [
  {
    titulo: "Diagnóstico e Mapa de Riscos",
    descricao:
      "Levantamento inicial técnico para identificar lacunas de conformidade, riscos críticos e prioridades de ação.",
  },
  {
    titulo: "Implantação do Programa",
    descricao:
      "Estruturação do fluxo de SST com trilhas por setor, responsáveis e evidências em um painel único.",
  },
  {
    titulo: "Monitoramento Contínuo",
    descricao:
      "Acompanhamento periódico com alertas de prazos, indicadores e histórico para auditorias e fiscalizações.",
  },
  {
    titulo: "Evolução e Governança",
    descricao:
      "Revisões de ciclo para amadurecer processos, reduzir passivos e consolidar cultura preventiva.",
  },
];

const solucoes = [
  {
    icone: ShieldCheck,
    nome: "Conformidade NR-01",
    texto: "Gestão orientada por requisitos legais, com trilhas de adequação e evidências organizadas.",
  },
  {
    icone: Activity,
    nome: "Riscos Psicossociais",
    texto: "Mapeamento de fatores de risco, planos de ação e acompanhamento para saúde ocupacional sustentável.",
  },
  {
    icone: Users,
    nome: "Jornada do Colaborador",
    texto: "Treinamentos, comunicação e engajamento para fortalecer comportamento seguro no dia a dia.",
  },
  {
    icone: Building2,
    nome: "SST para Multiplantas",
    texto: "Padronização de governança e indicadores em unidades diferentes, mantendo autonomia operacional.",
  },
];

export default function SolucoesPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_15%_10%,#14532d_0%,#0b2e1b_35%,#061911_100%)] text-emerald-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <span className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-200/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
          Soluções mysst
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-4xl">
          Gestão de SST com foco em resultado, governança e prevenção real
        </h1>
        <p className="mt-6 text-emerald-100/90 text-lg max-w-3xl leading-relaxed">
          Criamos jornadas de conformidade para empresas que precisam sair do modo reativo e operar com segurança,
          previsibilidade e performance em Segurança e Saúde no Trabalho.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-300 text-emerald-950 px-6 py-3 font-semibold hover:bg-emerald-200 transition-colors"
          >
            Falar com especialista
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#como-funciona"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-200/40 px-6 py-3 font-semibold text-emerald-100 hover:bg-emerald-200/10 transition-colors"
          >
            Ver método de implantação
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {solucoes.map((item) => (
            <article
              key={item.nome}
              className="rounded-2xl border border-emerald-200/20 bg-emerald-950/35 backdrop-blur p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
            >
              <item.icone className="w-8 h-8 text-emerald-300" />
              <h2 className="mt-4 text-xl font-bold text-emerald-50">{item.nome}</h2>
              <p className="mt-3 text-emerald-100/85 leading-relaxed">{item.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl border border-emerald-200/20 bg-gradient-to-r from-emerald-900/70 via-emerald-800/60 to-lime-900/55 p-8 lg:p-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Como entregamos valor em 4 etapas</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {pilares.map((item, index) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-emerald-100/20 bg-black/15 p-5"
              >
                <p className="text-emerald-300 text-xs font-bold tracking-[0.2em] uppercase">Etapa {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-emerald-50">{item.titulo}</h3>
                <p className="mt-3 text-emerald-100/85 leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div className="rounded-3xl border border-emerald-200/20 bg-emerald-950/40 p-8">
            <h2 className="text-3xl font-black text-white">Para quem é essa página de soluções</h2>
            <p className="mt-4 text-emerald-100/90 leading-relaxed">
              Empresas em crescimento, operações com múltiplas unidades e times de RH/SST que precisam de rotina,
              visibilidade e segurança jurídica para evoluir sem perder controle.
            </p>
            <ul className="mt-6 space-y-3">
              {["Mais previsibilidade para auditorias", "Menos retrabalho operacional", "Indicadores para decisão executiva", "Conformidade com evidências rastreáveis"].map(
                (beneficio) => (
                  <li key={beneficio} className="flex items-center gap-3 text-emerald-50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>{beneficio}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <aside className="rounded-3xl border border-lime-200/25 bg-lime-200/10 p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-lime-200">Comece agora</p>
              <h3 className="mt-3 text-2xl font-black text-white">Vamos desenhar sua estratégia de SST?</h3>
              <p className="mt-3 text-emerald-100/85">
                Em uma conversa rápida, avaliamos maturidade, riscos e o melhor plano de implementação para sua empresa.
              </p>
            </div>
            <a
              href="https://wa.me/5547996099966"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-lime-300 text-emerald-950 px-5 py-3 font-bold hover:bg-lime-200 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
