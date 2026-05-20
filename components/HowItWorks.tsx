import { SearchCheck, BarChart3, ListChecks, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Diagnóstico",
    description:
      "Aplicamos pesquisas inteligentes com gestores e colaboradores para mapear riscos, fatores psicossociais e o nível de maturidade em SST.",
    color: "bg-blue-500",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Análise",
    description:
      "Nossa plataforma cruza os dados coletados com a legislação, CNAE e normas técnicas para gerar um inventário de riscos completo.",
    color: "bg-indigo-500",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Plano de Ação",
    description:
      "Você recebe recomendações priorizadas com prazos, responsáveis e evidências. Acompanhe tudo em tempo real pelo dashboard.",
    color: "bg-emerald-500",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Documentos",
    description:
      "Emita PGR, AET, ASO, PCMSO e laudos diretamente da plataforma, com base nos dados reais da sua empresa.",
    color: "bg-amber-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Passo a Passo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Em 4 passos, sua SST em dia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center h-full">
                <div
                  className={`w-14 h-14 rounded-xl ${step.color} text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{step.number}</span>
                <h3 className="text-lg font-bold text-dark mt-1 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 text-gray-300 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}