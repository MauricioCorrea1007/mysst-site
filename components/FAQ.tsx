"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é a NR-01?",
    answer:
      "É a norma regulamentadora que estabelece as disposições gerais e o gerenciamento de riscos ocupacionais. Ela exige que toda empresa tenha um GRO (Gerenciamento de Riscos Ocupacionais) estruturado.",
  },
  {
    question: "Preciso ter um técnico de SST na empresa para usar a mysst?",
    answer:
      "Não necessariamente. A plataforma pode ser usada pela própria gestão da empresa para diagnóstico inicial, e você pode contratar profissionais de SST parceiros para emissão dos documentos.",
  },
  {
    question: "A mysst emite documentos com validade legal?",
    answer:
      "Sim. PGR, AET, PCMSO e ASO são gerados com base nos dados coletados e dentro dos requisitos das normas regulamentadoras.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "O diagnóstico inicial pode ser feito em dias. A plataforma fica disponível imediatamente após o cadastro.",
  },
  {
    question: "A mysst atende MEIs e pequenas empresas?",
    answer:
      "Sim. Temos planos adaptados para microempreendedores, ME e EPP, com processos simplificados e autodeclaração de conformidade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-dark hover:text-primary transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}