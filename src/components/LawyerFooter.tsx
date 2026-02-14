import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock, Instagram } from "lucide-react";

const LawyerFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Identity */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-1">
              Dr. Marcus Vinícius
            </h3>
            <p className="text-sm opacity-60 mb-5 tracking-wide">
              Advogado — OAB/MG 213.881
            </p>
            <p className="text-sm opacity-50 leading-relaxed max-w-md mb-6">
              Atuação estratégica e humanizada em Direito de Família, Previdenciário e Regularização Imobiliária, com atendimento presencial e online.
            </p>
            <p className="text-xs opacity-40 leading-relaxed max-w-md border-t border-primary-foreground/10 pt-4">
              Site de caráter informativo. O envio de mensagem não constitui
              contratação nem cria relação advogado-cliente.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] mb-5 opacity-60">
              Contato
            </h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-60" />
                <span>R. Rio Grande do Sul, 189 A<br />Santo Antônio, Pirapora – MG<br />CEP 39272-144</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 opacity-60" />
                <a href="mailto:marcusvfr@outlook.com" className="hover:opacity-100 transition-opacity">
                  marcusvfr@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 opacity-60" />
                <a href="tel:+5538988469501" className="hover:opacity-100 transition-opacity">
                  (38) 98846-9501
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 opacity-60" />
                <span>Seg–Qua: 13h–18h<br />Qui–Sex: 9h–18h</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 shrink-0 opacity-60" />
                <a
                  href="https://instagram.com/marcusviniferr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  @marcusviniferr
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] mb-5 opacity-60">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li>
                <Link to="/areas-de-atuacao" className="hover:opacity-100 transition-opacity">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:opacity-100 transition-opacity">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/agendar" className="hover:opacity-100 transition-opacity">
                  Agendar
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:opacity-100 transition-opacity">
                  Contato
                </Link>
              </li>
              <li className="pt-2 border-t border-primary-foreground/10">
                <Link to="/politica-de-privacidade" className="hover:opacity-100 transition-opacity text-xs">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:opacity-100 transition-opacity text-xs">
                  Termos e Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs opacity-40">
          <p>© {new Date().getFullYear()} Dr. Marcus Vinícius Ferreira Rodrigues — OAB/MG 213.881. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default LawyerFooter;
