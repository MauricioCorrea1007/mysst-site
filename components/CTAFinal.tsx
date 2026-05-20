import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ShieldCheck className="w-12 h-12 text-white/80 mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Sua NR-01 organizada do início ao fim
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Chega de planilhas perdidas, prazos estourados e documentos incompletos.
          A mysst unifica sua gestão de SST em uma plataforma digital, inteligente e acessível.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg text-base font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            QUERO COMEÇAR O DIAGNÓSTICO
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#login"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:border-white transition-colors"
          >
            <ShieldCheck className="w-5 h-5" />
            ACESSAR PLATAFORMA
          </a>
        </div>
      </div>
    </section>
  );
}