import { Search, Database, FileText, Target, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Diagnóstico Inteligente",
    description:
      "Pesquisas digitais customizadas para mapear riscos, fatores psicossociais e conformidade com a NR-01.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Database,
    title: "Inventário de Riscos Automatizado",
    description:
      "Cruzamento inteligente de dados (CNAE, atividade econômica, riscos ocupacionais) para gerar inventários precisos.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: FileText,
    title: "Documentos Técnicos",
    description:
      "PGR, AET, ASO, PCMSO e laudos gerados com base nos dados reais coletados, não em templates genéricos.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Target,
    title: "Plano de Ação Monitorado",
    description:
      "Recomendações priorizadas por risco, com status, responsáveis, prazos e evidências em tempo real.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: ClipboardList,
    title: "Inspeções e Checklists",
    description:
      "Formulários mobile para vistorias in loco, com fotos, assinaturas e não conformidades documentadas.",
    color: "bg-rose-50 text-rose-600",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">A Solução</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            A plataforma completa para gestão de SST
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Da coleta de dados ao documento final. Um ecossistema digital que conecta
            empresas, profissionais de SST e tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}