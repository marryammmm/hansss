import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6287710793375"; // ✅ Benar: tanpa +, tanpa spasi
  const message = encodeURIComponent("hii ellyn");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`; // ❗ Juga hapus spasi di sini

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="relative bg-primary hover:bg-secondary transition-all duration-300 rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110">
          <MessageCircle className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <div className="bg-card text-card-foreground px-4 py-2 rounded-lg shadow-lg text-sm">
          Kalo hans sayang sudah tenang aku disini ywaa?💕
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;