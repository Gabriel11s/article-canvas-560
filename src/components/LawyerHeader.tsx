import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Phone, MessageCircle, Calendar } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { to: "/sobre", label: "Sobre" },
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/agendar", label: "Agendar" },
  { to: "/contato", label: "Contato" },
];

const LawyerHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-lg lg:text-xl font-semibold text-foreground leading-tight">
              Marcos Vinícius
            </span>
            <span className="text-xs text-muted-foreground tracking-wider uppercase">
              Advogado • OAB/[UF] [Nº]
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:[TELEFONE]" aria-label="Ligar">
                <Phone className="h-4 w-4" />
                <span className="sr-only">Ligar</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://wa.me/55[TELEFONE_LIMPO]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </Button>
            <Button size="sm" asChild>
              <Link to="/agendar">
                <Calendar className="h-4 w-4 mr-1" />
                Agendar
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-foreground"
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-4 mt-2 flex flex-col gap-3">
                  <Button asChild className="w-full">
                    <Link to="/agendar" onClick={() => setIsOpen(false)}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Atendimento
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href="https://wa.me/55[TELEFONE_LIMPO]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a href="tel:[TELEFONE]">
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default LawyerHeader;