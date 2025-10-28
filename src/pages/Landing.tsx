import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import video lokal
import video1 from "@/assets/videos/hansVideo1.mp4";
import video2 from "@/assets/videos/hansVideo2.mp4";
import video3 from "@/assets/videos/hansVideo3.mp4";
import video4 from "@/assets/videos/hansVideo4.mp4";

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [video1, video2, video3, video4];


  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pink-200/40 to-rose-200/40">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Dear Hans Christian
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              This space is for you, whenever you need it
            </p>
          </div>

          {/* Video Slideshow */}
          <div className="relative max-w-4xl mx-auto mb-16 animate-slideIn">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {slides.map((videoSrc, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-pink-300/60 backdrop-blur-sm p-3 rounded-full hover:bg-pink-500 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-white" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-pink-300/60 backdrop-blur-sm p-3 rounded-full hover:bg-pink-500 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:text-white" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-pink-500 w-8"
                        : "bg-white/50 backdrop-blur-sm"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-center max-w-2xl mx-auto animate-fadeIn">
            <p className="text-lg text-foreground leading-relaxed mb-8">
            Hansi sayang, Ellyn tau kadang kamu cuma butuh waktu sendiri dulu buat nenangin hati dan ngerapiin semua perasaan yang lagi numpuk di dalam kamu.
            Its okay yaa? Kamu nda perlu ngomong apa apa dulu. take ur time sayang kuu. 

            Aku tetap di sini, nemenin kamu dari jauh yaa?
            Jadi, pelan-pelan aja ya? 
      
            Aku selalu ada buat kamu. Selalu ⸜(｡˃ ᵕ ˂ )⸝♡
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="/messages"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Sweet Messages for hansi ku
              </a>
              <a
                href="/gallery"
                className="bg-white hover:bg-pink-300 text-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Our Memories (๑ᵕ◡ᵕ) (ˆ◡ˆc)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
