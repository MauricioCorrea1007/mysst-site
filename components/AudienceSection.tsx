import { Building2, Users, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Empresas",
    items: [
      "Conformidade com a NR-01 sem complicação",
      "Documentos prontos e riscos mapeados",
      "Auditoria tranquila e organizada",
    ],
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    icon: Users,
    title: "Profissionais de SST",
    items: [
      "Ferramenta completa para emitir laudos",
      "Gestão de clientes e agenda técnica",
      "Diagnósticos automatizados",
    ],
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600 bg-emerald-100",
  },
  {
    icon: Briefcase,
    title: "Consultorias",
    items: [
      "Atenda mais empresas com qualidade",
      "Automatize diagnósticos e documentos",
      "Escalabilidade nos processos",
    ],
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600 bg-amber-100",
  },
];

export default function AudienceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Público</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Soluções para cada perfil
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((item, index) => (
            <div key={index} className={`rounded-xl p-6 border ${item.color}`}>
              <div className={`w-12 h-12 rounded-lg ${item.iconColor} flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.items.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}