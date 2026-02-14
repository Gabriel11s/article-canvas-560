import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const reels = [
  {
    id: "reel-1",
    url: "https://www.instagram.com/reel/DTyWnL9jvul/",
    title: "Dica Jurídica #1",
    description: "Orientação prática sobre seus direitos",
  },
  {
    id: "reel-2",
    url: "https://www.instagram.com/reel/DP3eh6MCXoC/",
    title: "Dica Jurídica #2",
    description: "Informação acessível e direta",
  },
  {
    id: "reel-3",
    url: "https://www.instagram.com/reel/DPWb4FZDbUp/",
    title: "Dica Jurídica #3",
    description: "Conteúdo educativo sobre direito",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/marcusviniferr";
const WHATSAPP_URL = "https://wa.me/5538988469501";

const InstagramReels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reels.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (i: number) => {
    setActiveIndex(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reels.length);
    }, 4000);
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
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-full group"
              >
                <div className="relative aspect-[9/16] max-h-[520px] mx-auto w-full max-w-[292px] rounded-2xl overflow-hidden bg-primary/5 border border-border/40">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10" />
                  
                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-7 w-7 text-accent-foreground ml-1" />
                    </div>
                  </div>

                  {/* Instagram branding top */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                      <Instagram className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-white/90">@marcusviniferr</span>
                  </div>

                  {/* Content bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <h4 className="text-white font-serif font-semibold text-lg mb-1">{reel.title}</h4>
                    <p className="text-white/70 text-sm">{reel.description}</p>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary" />
                </div>
              </a>
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
