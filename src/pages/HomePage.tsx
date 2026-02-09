import { Link } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Clock,
  Scale,
  Home,
  Briefcase,
  Calendar,
  MessageCircle,
  Phone,
  ArrowRight,
  Quote,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import CTAButtons from "@/components/CTAButtons";
import { SectionContainer, SectionTitle } from "@/components/PageLayout";
import { practiceAreas } from "@/data/practiceAreas";
import { testimonials, testimonialsDisclaimer } from "@/data/testimonials";
import { faqData } from "@/data/faq";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Clock: <Clock className="h-6 w-6" />,
  Scale: <Scale className="h-6 w-6" />,
  Home: <Home className="h-6 w-6" />,
  Briefcase: <Briefcase className="h-6 w-6" />,
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      {/* (A) Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Marcos Vinícius
            </h1>
            <p className="text-lg lg:text-xl text-primary font-medium mb-2">
              Advogado — OAB/[UF] [Nº]
            </p>
            <p className="text-muted-foreground text-lg lg:text-xl mb-10 max-w-xl">
              Atuação em [Cidade/Estado] • Atendimento presencial e online
              mediante agendamento
            </p>
            <CTAButtons />
          </div>
        </div>
      </section>

      {/* (B) Como posso te ajudar - Cards */}
      <SectionContainer className="bg-secondary/50">
        <SectionTitle subtitle="Conheça as principais áreas em que posso orientá-lo.">
          Como posso te ajudar
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {practiceAreas.map((area) => (
            <Card
              key={area.slug}
              className="group hover:shadow-md transition-shadow border-border/60"
            >
              <CardContent className="p-6">
                <div className="text-primary mb-4">{iconMap[area.icon]}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {area.shortDescription}
                </p>
                <Link
                  to={`/areas-de-atuacao/${area.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Entenda como funciona
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* (C) Como funciona o atendimento - 3 passos */}
      <SectionContainer>
        <SectionTitle subtitle="Um processo simples, organizado e transparente.">
          Como funciona o atendimento
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              step: "01",
              title: "Pré-contato",
              description:
                "Entre em contato pelo formulário, WhatsApp ou telefone. Faremos uma triagem inicial da sua demanda.",
            },
            {
              step: "02",
              title: "Triagem e documentos",
              description:
                "Enviaremos uma lista dos documentos necessários para que possamos analisar previamente o seu caso.",
            },
            {
              step: "03",
              title: "Reunião agendada",
              description:
                "Realizamos o atendimento presencial ou online, com análise detalhada e orientação jurídica personalizada.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center md:text-left">
              <span className="inline-block text-4xl font-serif font-semibold text-primary/20 mb-3">
                {item.step}
              </span>
              <h3 className="font-semibold text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* (D) Mini bio */}
      <SectionContainer className="bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
            <span className="text-2xl font-serif font-semibold text-muted-foreground">
              MV
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Marcos Vinícius
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Advogado inscrito na OAB/[UF] sob o nº [Nº], com formação em
            [FACULDADE] e [X] anos de atuação em diversas áreas do Direito.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Com enfoque em técnica, clareza e estratégia, busco oferecer
            orientação jurídica acessível e responsável, atendendo presencialmente
            em [CIDADE/UF] e online para todo o Brasil.
          </p>
          <Button variant="outline" asChild>
            <Link to="/sobre">Saiba mais sobre minha trajetória</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* (E) Depoimentos */}
      <SectionContainer>
        <SectionTitle subtitle="O que dizem sobre o atendimento.">
          Depoimentos
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border/60">
              <CardContent className="p-6">
                <Quote className="h-5 w-5 text-primary/30 mb-3" />
                <p className="text-foreground leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <span className="text-sm text-muted-foreground font-medium">
                  — {t.initials}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-6 text-center max-w-xl mx-auto">
          {testimonialsDisclaimer}
        </p>
      </SectionContainer>

      {/* (F) FAQ */}
      <SectionContainer className="bg-secondary/50">
        <SectionTitle subtitle="Dúvidas frequentes sobre o atendimento.">
          Perguntas Frequentes
        </SectionTitle>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContainer>

      {/* (G) CTA Final */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Precisa de orientação jurídica?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Agende um atendimento ou entre em contato. Estou à disposição para
            esclarecer suas dúvidas e orientar os próximos passos.
          </p>
          <CTAButtons className="justify-center" />
          <p className="text-xs text-muted-foreground mt-6">
            O envio de mensagem não constitui contratação nem cria relação
            advogado-cliente.
          </p>
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default HomePage;