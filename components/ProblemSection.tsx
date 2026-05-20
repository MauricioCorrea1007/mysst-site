import { AlertTriangle, CheckCircle2, FileSpreadsheet, FolderOpen, ClipboardCheck, Stethoscope } from "lucide-react";

const problems = [
  {
    before: "Processos manuais e descentralizados",
    after: "Plataforma unificada com fluxo completo",
    icon: FileSpreadsheet,
  },
  {
    before: "Documentos espalhados em planilhas e pastas",
    after: "Tudo organizado, versionado e acessível",
    icon: FolderOpen,
  },
  {
    before: "Dificuldade em comprovar conformidade",
    after: "Relatórios prontos para auditoria e fiscalização",
    icon: ClipboardCheck,
  },
  {
    before: "Diagnósticos lentos e sem profundidade",
    after: "Pesquisas inteligentes com análise automatizada",
    icon: Stethoscope,
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">O Desafio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            A nova NR-01 mudou. Sua gestão de SST acompanhou?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Desde a atualização da NR-01, as empresas precisam ir muito além do PGR.
            A gestão de riscos ocupacionais exige diagnóstico estruturado, inventário
            completo e plano de ação monitorado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-red-600 font-medium mb-1">Antes</p>
                  <p className="text-gray-700">{item.before}</p>
                </div>
              </div>
              <div className="border-t border-gray-100 my-4" />
              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-lg shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-green-600 font-medium mb-1">Com a mysst</p>
                  <p className="text-gray-700 font-medium">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}