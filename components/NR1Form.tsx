import { useState } from "react";

export default function NR1Form() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    colaboradores: "Até 10 colaboradores",
    cargo: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Monta a mensagem para o WhatsApp
    const msg =
      `*Solicitação de Estruturação NR-1*%0A` +
      `Nome: ${form.nome}%0A` +
      `Telefone: ${form.telefone}%0A` +
      `E-mail: ${form.email}%0A` +
      `Colaboradores: ${form.colaboradores}%0A` +
      `Cargo: ${form.cargo}`;
    // Número de destino (exemplo: 5547996099966)
    const phone = "5547996099966";
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank");
  }

  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg p-6 md:p-10 max-w-md w-full mx-auto">
      <div className="rounded-t-2xl -mt-6 -mx-6 md:-mx-10 md:-mt-10 bg-gradient-to-r from-blue-500 to-cyan-400 p-6 text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Transforme a adequação à NR-1 em vantagem competitiva</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label className="block text-blue-700 font-bold mb-1" htmlFor="nome">Nome <span className="text-red-500">*</span></label>
          <input name="nome" id="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required className="w-full rounded-lg border border-blue-200 px-4 py-3 text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label className="block text-blue-700 font-bold mb-1" htmlFor="telefone">Telefone <span className="text-red-500">*</span></label>
          <input name="telefone" id="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone" required className="w-full rounded-lg border border-blue-200 px-4 py-3 text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label className="block text-blue-700 font-bold mb-1" htmlFor="email">E-mail corporativo <span className="text-red-500">*</span></label>
          <input name="email" id="email" type="email" value={form.email} onChange={handleChange} placeholder="E-mail corporativo" required className="w-full rounded-lg border border-blue-200 px-4 py-3 text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label className="block text-blue-700 font-bold mb-1" htmlFor="colaboradores">Quantidade de Colaboradores <span className="text-red-500">*</span></label>
          <select name="colaboradores" id="colaboradores" value={form.colaboradores} onChange={handleChange} required className="w-full rounded-lg border border-blue-200 px-4 py-3 text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Até 10 colaboradores</option>
            <option>11 a 50 colaboradores</option>
            <option>51 a 100 colaboradores</option>
            <option>Mais de 100 colaboradores</option>
          </select>
        </div>
        <div>
          <label className="block text-blue-700 font-bold mb-1" htmlFor="cargo">Cargo <span className="text-red-500">*</span></label>
          <input name="cargo" id="cargo" value={form.cargo} onChange={handleChange} placeholder="Cargo" required className="w-full rounded-lg border border-blue-200 px-4 py-3 text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-4 rounded-lg flex items-center justify-center transition-all">
          QUERO NA MINHA EMPRESA <span className="ml-2">✔️</span>
        </button>
      </form>
    </div>
  );
}
