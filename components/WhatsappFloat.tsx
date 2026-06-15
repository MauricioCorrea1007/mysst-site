import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  return (
    <div className="fixed z-50 right-4 bottom-4 flex items-center">
      <div className="bg-white rounded-l-2xl shadow-lg px-4 py-3 flex items-center text-gray-800 font-semibold text-base mr-[-8px]">
        <div>
          Considerando contratar nossas<br />
          soluções?<br />
          <span className="font-bold">Fale conosco</span>
        </div>
      </div>
      <a
        href="https://wa.me/5547996099966"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9 text-white" />
      </a>
    </div>
  );
}
