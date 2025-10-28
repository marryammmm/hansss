import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart } from "lucide-react";
import mawarImage from "@/assets/images/mawar.png"; // ✅ Import gambar

const Flower = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 relative overflow-hidden">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
              A Flower for My Beloved Hansii
            </h1>
            <p className="text-lg text-pink-600">
              lowvvee ywouuu!!
            </p>
          </div>

          {/* Black Rose Display - Using Image */}
          <div className="relative flex justify-center mb-12">
            <div className="relative animate-float">
              {/* Soft Glow Background */}
              <div className="absolute inset-0 bg-pink-400 rounded-full blur-3xl opacity-30 w-[320px] h-[320px] md:w-[420px] md:h-[420px]"></div>

              {/* Rose Container */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-pink-300 flex justify-center items-center">
                {/* Gambar Mawar */}
                <div className="relative flex justify-center items-center">
                  <img
                    src={mawarImage}
                    alt="Black Rose for Hans"
                    className="w-48 h-48 md:w-64 md:h-64 object-contain animate-bloom"
                    // animate-bloom akan memberi efek "mengembang" halus
                  />
                </div>
              </div>

              {/* Floating Hearts */}
              <Heart className="absolute -top-8 -left-8 text-pink-500 w-12 h-12 animate-pulse" />
              <Heart className="absolute -top-4 -right-12 text-pink-400 w-8 h-8 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <Heart className="absolute -bottom-8 -right-8 text-pink-600 w-10 h-10 animate-pulse" style={{ animationDelay: "1s" }} />
              <Heart className="absolute -bottom-4 -left-12 text-pink-500 w-6 h-6 animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>

          {/* Message Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-pink-200 animate-slideIn">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-pink-700 mb-6">
                Why Black Rose? 🖤
              </h2>
            </div>

            <div className="space-y-6 text-pink-800 text-lg leading-relaxed">
              <p>
                <strong className="text-pink-600">Hans sayang,</strong> aku pilih mawar hitam karena black roses itu bungaa kesukaan kamu xixixi  
              </p>

              <p>
                Selain itu, mawar hitam itu melambangkan kekuatan, keindahan dalam kegelapan, dan kemampuan untuk bangkit kembali setelah masa sulit.
                Aku tahu akhir-akhir ini kamu lagi berjuang dengan perasaan dan pikiran yang berat. Tapi ingat yaa, di balik semua itu, kamu punya kekuatan luar biasa untuk melewati semuanya hansi ku sayang             </p>

              <p>
                Kalau kamu butuh waktu untuk grow, heal, dan restart 
                ingat mawar ini. You’re not alone. I’m here hansi kuuuu
              </p>

              <div className="bg-pink-200/50 rounded-2xl p-6 mt-8">
                <p className="text-center font-semibold italic text-pink-700">
                  “Even a black rose blooms with love.  
                  So do you, Hansi ku sayang. Always.” ✨
                </p>
              </div>

              <p className="text-center text-pink-600 mt-8">
                With endless love,<br/>
                <span className="text-pink-700 font-bold">Ellyn</span> 💖
              </p>
            </div>
          </div>

          {/* Additional Message */}
          <div className="mt-8 text-center">
            <p className="text-sm text-pink-600 italic">
              This flower will never wilt, just like my love for you ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flower;