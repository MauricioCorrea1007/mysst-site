import { ShieldCheck, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Logomarcas de clientes */}
      <footer id="contato" className="bg-dark text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Zenobia Sistemas Ltda
              
            </div>
            <p className="text-sm text-gray-400">CNPJ: 47.632.960/0001-00</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mysst é um produto da Zenobia Sistemas Ltda. Sua plataforma digital para gestão de SST e conformidade com a NR-01.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegue</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block hover:text-primary transition-colors">Início</Link>
              <Link href="#servicos" className="block hover:text-primary transition-colors">Serviços</Link>
              <Link href="#como-funciona" className="block hover:text-primary transition-colors">Como funciona</Link>
              <Link href="#faq" className="block hover:text-primary transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@zenobiaconsultoria.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary" />
                <span>@zenobiaconsultoria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+55 47 99609-9966</span>
                <a
                  href="https://wa.me/554799609966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-green-500 hover:text-green-600"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 inline" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Rua Lazio, 50 - Sala 601 - Blumenau/SC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 mysst.com.br. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  </>);
}