import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, Phone, MessageCircle, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { to: "/sobre", label: "Sobre" },
  { to: "/agendar", label: "Agendar" },
  { to: "/contato", label: "Contato" },
];

const LawyerHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-serif text-lg lg:text-xl font-semibold text-foreground leading-tight tracking-tight">
              Dr. Marcus Vinícius
            </span>
            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
              Advogado • OAB/MG 213.881
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="tel:+5538988469501" aria-label="Ligar">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
              <a
                href="https://wa.me/5538988469501?text=Ol%C3%A1%2C%20Dr.%20Marcos%20Vin%C3%ADcius.%20Encontrei%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20meu%20caso.%20Pode%20me%20orientar%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm" asChild>
              <Link to="/agendar">
                <Calendar className="h-4 w-4 mr-1.5" />
                Agendar
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border/50 pt-4 mt-3 flex flex-col gap-3">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link to="/agendar" onClick={() => setIsOpen(false)}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Atendimento
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="https://wa.me/5538988469501?text=Ol%C3%A1%2C%20Dr.%20Marcos%20Vin%C3%ADcius.%20Encontrei%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20meu%20caso.%20Pode%20me%20orientar%3F" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="tel:+5538988469501">
                    <Phone className="h-4 w-4 mr-2" />
                    (38) 98846-9501
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default LawyerHeader;
