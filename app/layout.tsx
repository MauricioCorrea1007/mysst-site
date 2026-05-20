import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "mysst.com.br - Sua plataforma de SST e NR-01",
  description:
    "A mysst é a plataforma digital que ajuda sua empresa a estruturar o gerenciamento de riscos ocupacionais — do diagnóstico inicial aos documentos obrigatórios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="antialiased text-gray-800 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}