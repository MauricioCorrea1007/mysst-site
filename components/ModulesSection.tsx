import {
  Search,
  Database,
  ListChecks,
  FileText,
  ArmchairIcon,
  HeartPulse,
  ClipboardList,
  LayoutDashboard,
} from "lucide-react";

const modules = [
  { icon: Search, title: "Diagnóstico NR-01", desc: "Pesquisas customizadas + relatório de maturidade em SST" },
  { icon: Database, title: "Inventário de Riscos", desc: "Mapeamento por CNAE, atividade e fatores psicossociais" },
  { icon: ListChecks, title: "Plano de Ação", desc: "Recomendações, prazos, status e evidências" },
  { icon: FileText, title: "PGR", desc: "Programa de Gerenciamento de Riscos documentado" },
  { icon: ArmchairIcon, title: "AET", desc: "Análise Ergonômica do Trabalho por função e posto" },
  { icon: HeartPulse, title: "PCMSO + ASO", desc: "Programa de Controle Médico e Atestados" },
  { icon: ClipboardList, title: "Inspeções", desc: "Checklists mobile com fotos e assinaturas" },
  { icon: LayoutDashboard, title: "Dashboard", desc: "Indicadores em tempo real para gestão" },
];

export default function ModulesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Módulos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            O que a mysst entrega
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-3">
                <mod.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark mb-1">{mod.title}</h3>
              <p className="text-gray-600 text-sm">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}