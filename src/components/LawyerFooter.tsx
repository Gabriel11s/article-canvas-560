import { Link } from "react-router-dom";

const LawyerFooter = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Identity */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-semibold mb-2">
              Marcos Vinícius
            </h3>
            <p className="text-sm opacity-70 mb-4">
              Advogado — OAB/[UF] [Nº]
            </p>
            <p className="text-sm opacity-70 leading-relaxed max-w-md">
              Site de caráter informativo. O envio de mensagem não constitui
              contratação nem cria relação advogado-cliente.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">
              Contato
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>[CIDADE] / [UF]</li>
              <li>
                <a href="mailto:[EMAIL]" className="hover:opacity-100 transition-opacity">
                  [EMAIL]
                </a>
              </li>
              <li>
                <a href="tel:[TELEFONE]" className="hover:opacity-100 transition-opacity">
                  [TELEFONE]
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/55[TELEFONE_LIMPO]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-1">Seg. a Sex. — 9h às 18h</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">
              Links
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
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
                <Link to="/conteudos" className="hover:opacity-100 transition-opacity">
                  Conteúdos
                </Link>
              </li>
              <li>
                <Link to="/agendar" className="hover:opacity-100 transition-opacity">
                  Agendar
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:opacity-100 transition-opacity">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:opacity-100 transition-opacity">
                  Termos e Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-xs opacity-50">
          <p>© {new Date().getFullYear()} Marcos Vinícius — Advogado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default LawyerFooter;