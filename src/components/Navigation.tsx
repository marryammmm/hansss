import { Link, useLocation } from "react-router-dom";
import { Heart, Image, Flower2, MessageCircleHeart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Heart, label: "Home" },
    { path: "/messages", icon: MessageCircleHeart, label: "Sweet Messages" },
    { path: "/gallery", icon: Image, label: "Gallery" },
    { path: "/flower", icon: Flower2, label: "Flower" },
  ];

    return (
      <nav className="fixed top-0 left-0 right-0 z-30 bg-pink-200/80 backdrop-blur-lg border-b border-pink-300 shadow-sm">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <Link to="/" className="text-xl md:text-2xl font-bold text-pink-700 hover:text-pink-500 transition-colors">
        Dear Hans 💕
      </Link>
      <div className="flex gap-2 md:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 ${
              isActive(item.path)
                ? "bg-pink-400 text-white shadow-md"
                : "hover:bg-pink-300 text-pink-700"
            }`}
          >
            <item.icon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden md:inline text-sm">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navigation;
