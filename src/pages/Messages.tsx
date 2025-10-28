import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getRandomMessage } from "@/data/sweetMessages";
import { Sparkles } from "lucide-react";
import myCat from '../assets/my-cat.png';

const Messages = () => {
  const [message, setMessage] = useState("Tekan celengan untuk pesan dari Ellyn 💕");
  const [isShaking, setIsShaking] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const handlePiggyBankClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setMessage(getRandomMessage());
      setMessageCount(prev => prev + 1);
      setIsShaking(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
              Sweet Messages for Hansi sayang
            </h1>
            <p className="text-lg text-pink-600">
              Kalau kamu butuh untuk tenang, pencet celengannya ya sayang ✨
            </p>
          </div>



{/* Grey Cat Love Jar */}
<div className="flex justify-center mb-8">
  <button
    onClick={handlePiggyBankClick}
    className={`relative group animate-float`} // masih ada float kalau mau
  >
    {/* Glow background abu-abu */}
    <div className="absolute inset-0 bg-gray-400 rounded-full blur-3xl opacity-40"></div>

    {/* Gambar kucing */}
    <div className="relative w-32 h-32 md:w-[200px] md:h-[200px] transition-transform duration-300 hover:scale-125 hover:rotate-12 cursor-pointer">
      <img src={myCat} alt="Grey Cat" className="w-full h-full object-contain" />
    </div>

    {/* Message count */}
    <div className="absolute top-0 right-0 bg-gray-600 text-white rounded-full px-3 py-1 text-sm font-bold animate-pulse">
      {messageCount}
    </div>

    {/* Sparkles abu-abu */}
    <Sparkles className="absolute -top-4 -right-4 text-gray-400 w-8 h-8 animate-pulse" />
    <Sparkles className="absolute -bottom-4 -left-4 text-gray-500 w-6 h-6 animate-pulse" />

    {/* Mini hearts saat hover */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-[-2rem]">
      ❤️
    </div>
  </button>
</div>



          {/* Message Display */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-pink-200 animate-fadeIn">
            <div className="text-center">
              <div className="inline-block bg-pink-200/50 rounded-full p-4 mb-4">
                <span className="text-4xl">💌</span>
              </div>
              <p className="text-xl md:text-2xl text-pink-700 leading-relaxed font-medium">
                {message}
              </p>
              <div className="mt-8 pt-8 border-t border-pink-300">
                <p className="text-sm text-pink-600 italic">
                  Always with love, Ellyn 💕
                </p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-pink-600">
              Aku udah siapin banyak banget pesan buat kamu, Hans sayang ✨
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Messages;
