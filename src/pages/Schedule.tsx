import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import { SectionContainer } from "@/components/PageLayout";
import { Calendar, MessageCircle, Mail, Clock, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Agendamento de Atendimento
            </h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Escolha o dia e horário mais conveniente para você. Após o
              agendamento, você receberá uma confirmação. Se preferir, entre em contato diretamente.
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Clock, label: "Duração", value: "30 min (padrão)" },
              { icon: Video, label: "Modalidade", value: "Presencial ou online" },
              { icon: MapPin, label: "Local", value: "Pirapora/MG ou videoconferência" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border/40">
                <item.icon className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Types */}
          <div className="mb-10">
            <h3 className="font-serif font-semibold text-lg text-foreground mb-3">Tipos de atendimento</h3>
            <div className="flex flex-wrap gap-2">
              {["Triagem inicial (orientação)", "Reunião / consulta", "Retorno"].map((type) => (
                <span key={type} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Calendar embed placeholder */}
          <div className="border-2 border-dashed border-border/60 rounded-2xl p-12 text-center mb-10 bg-muted/20">
            <Calendar className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2 font-medium">
              Calendário de agendamento
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Calendly em breve será integrado aqui.
            </p>
          </div>

          {/* Fallback */}
          <div className="bg-secondary/50 rounded-2xl p-8 border border-border/40">
            <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
              Prefere outro canal?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="border-primary/30" asChild>
                <a
                  href="https://wa.me/5538988469501"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="border-primary/30" asChild>
                <a href="mailto:marcusvfr@outlook.com">
                  <Mail className="h-4 w-4 mr-2" />
                  E-mail
                </a>
              </Button>
            </div>
          </div>

          {/* Post-scheduling message */}
          <div className="mt-8 p-5 rounded-lg bg-accent/5 border border-accent/10">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Após o agendamento:</strong> Confirmação recebida. Caso precise reagendar ou cancelar, avise com antecedência. Se possível, envie um breve resumo do caso e documentos essenciais para otimizar o atendimento.
            </p>
          </div>

          <p className="text-xs text-muted-foreground mt-6 opacity-70">
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
