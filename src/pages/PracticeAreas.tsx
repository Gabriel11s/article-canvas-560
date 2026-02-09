import { Link, useParams } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Clock,
  Scale,
  Home,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import CTAButtons from "@/components/CTAButtons";
import { SectionContainer, SectionTitle } from "@/components/PageLayout";
import { practiceAreas } from "@/data/practiceAreas";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="h-8 w-8" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8" />,
  Clock: <Clock className="h-8 w-8" />,
  Scale: <Scale className="h-8 w-8" />,
  Home: <Home className="h-8 w-8" />,
  Briefcase: <Briefcase className="h-8 w-8" />,
};

/* Listing page */
export const PracticeAreasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      <SectionContainer>
        <SectionTitle subtitle="Conheça as áreas em que oferecemos orientação jurídica.">
          Áreas de Atuação
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <Card
              key={area.slug}
              className="group hover:shadow-md transition-shadow border-border/60"
            >
              <CardContent className="p-6">
                <div className="text-primary mb-4">{iconMap[area.icon]}</div>
                <h3 className="font-semibold text-xl text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {area.shortDescription}
                </p>
                <Link
                  to={`/areas-de-atuacao/${area.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-secondary/50">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Não encontrou sua área?
          </h2>
          <p className="text-muted-foreground mb-6">
            Entre em contato e descreva sua situação. Faremos uma triagem
            inicial para orientar os próximos passos.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

/* Individual area page */
export const PracticeAreaDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen bg-background">
        <LawyerHeader />
        <SectionContainer>
          <div className="text-center">
            <h1 className="font-serif text-3xl font-semibold mb-4">
              Área não encontrada
            </h1>
            <Link to="/areas-de-atuacao" className="text-primary hover:underline">
              ← Voltar para Áreas de Atuação
            </Link>
          </div>
        </SectionContainer>
        <LawyerFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      {/* Hero */}
      <SectionContainer>
        <Link
          to="/areas-de-atuacao"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Áreas de Atuação
        </Link>
        <div className="flex items-start gap-4 mb-6">
          <div className="text-primary">{iconMap[area.icon]}</div>
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">
            {area.title}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          {area.description}
        </p>
      </SectionContainer>

      {/* Situações comuns */}
      <SectionContainer className="bg-secondary/50">
        <SectionTitle>Situações comuns</SectionTitle>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
          {area.commonSituations.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <span className="text-foreground">{s}</span>
            </li>
          ))}
        </ul>
      </SectionContainer>

      {/* Como funciona */}
      <SectionContainer>
        <SectionTitle>Como é a atuação</SectionTitle>
        <div className="max-w-2xl space-y-4">
          {area.methodology.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <p className="text-foreground pt-1">{step}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Documentos */}
      <SectionContainer className="bg-secondary/50">
        <SectionTitle>Documentos iniciais</SectionTitle>
        <ul className="max-w-2xl space-y-2">
          {area.documents.map((doc, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-foreground">{doc}</span>
            </li>
          ))}
        </ul>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer>
        <SectionTitle>Perguntas frequentes</SectionTitle>
        <div className="max-w-2xl">
          <Accordion type="single" collapsible>
            {area.faq.map((item, i) => (
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

      {/* CTA */}
      <SectionContainer className="bg-secondary/50">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Precisa de orientação nesta área?
          </h2>
          <p className="text-muted-foreground mb-6">
            Agende um atendimento para analisarmos seu caso com atenção e
            responsabilidade.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default PracticeAreasPage;