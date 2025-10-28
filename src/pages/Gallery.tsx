import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Play, X } from "lucide-react";

// Import video lokal
import galery1 from "../assets/videos/galery1.mp4";
import galery2 from "../assets/videos/galery2.mp4";
import galery3 from "../assets/videos/galery3.mp4";
import galery4 from "../assets/videos/galery4.mp4";
import galery5 from "../assets/videos/galery5.mp4";

// Import gambar lokal
import image1 from "../assets/images/image1.jpg";

interface GalleryItem {
  type: "image" | "video";
  url: string;
  title: string;
  description: string;
  date?: string;
}

const galleryItems: GalleryItem[] = [
  {
    type: "video",
    url: galery1,
    title: "Our First date!",
    description: "Our first date! zixixi Aku diiem diem vidio in kamuu disiniii!! KAMUU GANTENG BANGET! ",
    date: "17 september 2025",
  },
  {
    type: "video",
    url: galery2,
    title: "EL CLASICOO!!",
    description: "ellyn seneng banget pas nonton el clasico bareng kamu hansi kuuu! cant wait buat nonton bareng lagi yaa sayangg ",
    date: "26 october 2025",
  },
  {
    type: "video",
    url: galery3,
    title: "HUG HUG WITH HANSII",
    description: "Ellyn slalu suka pelukan hangat dari hansii!!everytime hansi peluk ellyn, ellyn ngerasa aman & dicintai bangetttt ",
    date: "19 october 2025",
  },
  {
    type: "video",
    url: galery4,
    title: "BEAMM!!",
    description: "WKWKWK SERU BANGET SAYANG! inget nda kita naik beam yang pertama TERUS TERNYATA BEAM NYA RUSAKK KWKWKW akhirnyaa kita cari agii deh yang lain!! xixixi seru bangett bangett ayok kita main beam agi yah!",
    date: "16 october 2025",
  },
  {
    type: "video",
    url: galery5,
    title: "ZOO DATE WITH HANSI SAYANG",
    description: "SUPE SENANG BANGET! aku slalu seneng kemana pun sama kamu cintaku! trimakaci dah ajak ellyn kee zoo yaaa? supe dupe hwappyy!!",
    date: "13 october 2025",
  },
  {
    type: "image",
    url: image1,
    title: "our second date!",
    description: " masi ingett cake singkong sayang? wkwkwk aku seneng bangett di hari ituu! bener bener happy banget banget rasanya bisa ketemu sama hansi lagi! ",
    date: "21 september 2025",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/20">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery of hansi and ellyn
            </h1>
            <p className="text-lg text-muted-foreground">
              akuu slalu senang kaloo ngabisin waktuu sama hansi kuu! ayoo kita buat lebih banyak momen indah bareng ywaaa hansi sayang
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideIn">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.url}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                  />
                )}

                {/* Overlay for title */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.date}</p>
                  </div>
                </div>

                {/* Play button overlay for video */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/80 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-primary hover:bg-secondary text-primary-foreground rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video controls className="w-full h-full object-cover">
                  <source src={selectedItem.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {selectedItem.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {selectedItem.description}
              </p>
              {selectedItem.date && (
                <p className="text-sm text-muted-foreground italic">
                  {selectedItem.date}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
