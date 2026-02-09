import { Link } from "react-router-dom";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  variant?: "default" | "compact";
  className?: string;
}

const CTAButtons = ({ variant = "default", className = "" }: CTAButtonsProps) => {
  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        <Button size="sm" asChild>
          <Link to="/agendar">
            <Calendar className="h-4 w-4 mr-1" />
            Agendar
          </Link>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a href="https://wa.me/55[TELEFONE_LIMPO]" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4 mr-1" />
            WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button size="lg" asChild>
        <Link to="/agendar">
          <Calendar className="h-5 w-5 mr-2" />
          Agendar Atendimento
        </Link>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <a href="https://wa.me/55[TELEFONE_LIMPO]" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5 mr-2" />
          WhatsApp
        </a>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <a href="tel:[TELEFONE]">
          <Phone className="h-5 w-5 mr-2" />
          Ligar Agora
        </a>
      </Button>
    </div>
  );
};

export default CTAButtons;