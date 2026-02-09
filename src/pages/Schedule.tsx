import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import CTAButtons from "@/components/CTAButtons";
import { SectionContainer, SectionTitle } from "@/components/PageLayout";
import { Calendar, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Agendamento de Atendimento
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Escolha o dia e horário mais conveniente para você. Após o
            agendamento, você receberá uma confirmação por e-mail ou WhatsApp. Se
            preferir, entre em contato diretamente.
          </p>

          {/* Calendar embed placeholder */}
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-10 bg-muted/30">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2">
              Calendário de agendamento
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Substitua este bloco pelo embed do seu calendário (Calendly,
              TidyCal, GHL Calendar, etc.)
            </p>
            <code className="text-xs bg-muted px-3 py-1 rounded text-muted-foreground">
              [CALENDAR_EMBED_URL]
            </code>
          </div>

          {/* Fallback */}
          <div className="bg-secondary/50 rounded-lg p-8">
            <h3 className="font-semibold text-lg text-foreground mb-4">
              Prefere outro canal?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" asChild>
                <a
                  href="https://wa.me/55[TELEFONE_LIMPO]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:[EMAIL]">
                  <Mail className="h-4 w-4 mr-2" />
                  E-mail
                </a>
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            O agendamento não constitui contratação nem cria relação
            advogado-cliente. Retornaremos para confirmar e orientar os
            próximos passos.
          </p>
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default SchedulePage;