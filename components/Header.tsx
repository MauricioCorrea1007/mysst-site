"use client";

import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/solucoes", label: "Gestão SST" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 font-bold text-xl text-dark">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold text-dark">mysst.com.br</span>
              <span className="text-lg font-extrabold text-dark flex items-center gap-2">
                innova pesquisas
                <img src="/logo_innova_new.png" alt="Logo Innova" className="h-10 w-auto ml-6" style={{ marginTop: '-30px' }} />
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://innova.zenobiaconsultoria.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            Acessar
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                className="block text-sm font-medium text-gray-600 hover:text-primary py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://innova.zenobiaconsultoria.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Acessar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}