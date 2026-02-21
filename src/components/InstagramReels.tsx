import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, ExternalLink } from "lucide-react";

const reels = [
  {
    id: "reel-1",
    url: "https://www.instagram.com/reel/DTyWnL9jvul/",
    embedUrl: "https://www.instagram.com/reel/DTyWnL9jvul/embed/captioned/",
    title: "Dica Jurídica #1",
  },
  {
    id: "reel-2",
    url: "https://www.instagram.com/reel/DP3eh6MCXoC/",
    embedUrl: "https://www.instagram.com/reel/DP3eh6MCXoC/embed/captioned/",
    title: "Dica Jurídica #2",
  },
  {
    id: "reel-3",
    url: "https://www.instagram.com/reel/DPWb4FZDbUp/",
    embedUrl: "https://www.instagram.com/reel/DPWb4FZDbUp/embed/captioned/",
    title: "Dica Jurídica #3",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/marcusviniferr";
const WHATSAPP_URL = "https://wa.me/5538988469501?text=Ol%C3%A1%2C%20Dr.%20Marcos%20Vin%C3%ADcius.%20Encontrei%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20meu%20caso.%20Pode%20me%20orientar%3F";

const InstagramReels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reels.length);
    }, 8000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    setActiveIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reels.length);
    }, 8000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
      {/* Reels Carousel */}
      <div className="lg:col-span-2">
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reels.map((reel) => (
              <div key={reel.id} className="min-w-full flex justify-center">
                {/* Cropped container - hides IG header/footer chrome */}
                <div
                  className="relative rounded-2xl overflow-hidden border border-border/40 bg-muted"
                  style={{ width: 292, height: 520 }}
                >
                  <div
                    className="absolute"
                    style={{
                      top: -64,
                      left: -1,
                      right: -1,
                      bottom: -80,
                    }}
                  >
                    <iframe
                      src={reel.embedUrl}
                      className="border-0 w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      title={reel.title}
                      style={{ pointerEvents: "auto" }}
                    />
                  </div>
                  {/* Top mask to cover IG header */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-muted z-10" />
                  {/* Bottom mask to cover IG footer */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted z-10" />
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {reels.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Ver reel ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Social Widget */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Instagram Card */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 mb-4"
          >
            <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Instagram className="h-8 w-8" />
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-serif font-semibold text-lg mb-1">@marcusviniferr</h4>
              <p className="text-white/80 text-sm">Conteúdo jurídico acessível e dicas práticas sobre seus direitos.</p>
            </div>
            <div className="bg-card px-6 py-3 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Seguir no Instagram</span>
              <span className="text-xs text-muted-foreground">Conteúdo semanal</span>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <MessageCircle className="h-8 w-8" />
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-serif font-semibold text-lg mb-1">WhatsApp</h4>
              <p className="text-white/80 text-sm">Fale diretamente comigo para tirar dúvidas ou agendar atendimento.</p>
            </div>
            <div className="bg-card px-6 py-3 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Chamar no WhatsApp</span>
              <span className="text-xs text-muted-foreground">(38) 98846-9501</span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default InstagramReels;
