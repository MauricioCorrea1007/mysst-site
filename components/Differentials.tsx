import { Database, Brain, Smartphone, ShieldCheck, HeadphonesIcon } from "lucide-react";

const diffs = [
  {
    icon: Database,
    title: "Baseado em dados reais",
    desc: "Nada de templates genéricos. Cada documento é gerado a partir dos dados da sua empresa.",
  },
  {
    icon: Brain,
    title: "Inteligência integrada",
    desc: "IA que cruza CNAE, riscos, normas e dados coletados para gerar diagnósticos precisos.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    desc: "Checklists e inspeções direto do celular, com fotos e assinatura digital.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade garantida",
    desc: "Alinhado com NR-01, NR-17, NR-07 e demais normas regulamentadoras vigentes.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte especializado",
    desc: "Equipe técnica com experiência em SST e legislação trabalhista para te apoiar.",
  },
];

export default function Differentials() {
  return (
    <section className="py-20 bg-white" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Por que a mysst?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {diffs.map((diff, index) => (
            <div key={index} className="flex gap-4 p-5 rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0 mt-1">
                <diff.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-dark mb-1">{diff.title}</h3>
                <p className="text-gray-600 text-sm">{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}