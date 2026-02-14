import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import { SectionContainer } from "@/components/PageLayout";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Termos de Uso e Disclaimer
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última atualização: Fevereiro de 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                1. Natureza do conteúdo
              </h2>
              <p>
                Todo o conteúdo deste site tem caráter estritamente informativo e
                educativo. As informações aqui disponibilizadas não constituem
                orientação jurídica, consultoria, parecer ou recomendação
                profissional para casos específicos.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                2. Ausência de relação advogado-cliente
              </h2>
              <p>
                O acesso a este site, o envio de mensagens pelo formulário de
                contato, WhatsApp ou qualquer outro canal não constitui
                contratação de serviços advocatícios nem cria relação
                advogado-cliente. O vínculo profissional se forma exclusivamente
                mediante contratação formal.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                3. Não garantia de resultados
              </h2>
              <p>
                Os resultados de qualquer demanda jurídica dependem de diversos
                fatores, incluindo a análise do caso concreto, provas, legislação
                aplicável e entendimento judicial. Nenhuma informação neste site
                deve ser interpretada como promessa ou garantia de resultado.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                4. Propriedade intelectual
              </h2>
              <p>
                Todo o conteúdo deste site (textos, imagens, layout) é protegido
                por direitos autorais. A reprodução total ou parcial depende de
                autorização prévia por escrito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                5. Links externos
              </h2>
              <p>
                Este site pode conter links para sites de terceiros. Não nos
                responsabilizamos pelo conteúdo, políticas de privacidade ou
                práticas desses sites.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                6. Atualizações
              </h2>
              <p>
                Estes termos podem ser atualizados a qualquer momento, sem
                notificação prévia. Recomendamos a consulta periódica desta
                página.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                7. Contato
              </h2>
              <p>
                Para dúvidas sobre estes termos, entre em contato pelo e-mail{" "}
                <a href="mailto:marcusvfr@outlook.com" className="text-accent underline underline-offset-2">
                  marcusvfr@outlook.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default TermsPage;
