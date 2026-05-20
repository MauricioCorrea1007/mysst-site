import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-2 to-primary-dark">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Plataforma digital de SST
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sua <span className="text-blue-400">NR-01</span> do planejamento à entrega.
            <br />
            <span className="text-gray-300">Tudo em um só lugar.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            A mysst é a plataforma digital que ajuda sua empresa a estruturar o gerenciamento
            de riscos ocupacionais — do diagnóstico inicial aos documentos obrigatórios — com
            tecnologia, praticidade e conformidade legal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30"
            >
              QUERO ESTRUTURAR A NR-01
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#login"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-200 px-8 py-3.5 rounded-lg text-base font-semibold hover:border-white hover:text-white transition-colors"
            >
              <ShieldCheck className="w-5 h-5" />
              ACESSAR PLATAFORMA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}