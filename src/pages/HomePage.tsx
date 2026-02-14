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
  CheckCircle,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
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

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      {/* (A) Hero — Premium */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-[0.03]" />
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <MapPin className="h-3.5 w-3.5" />
              Pirapora/MG • Atendimento presencial e online
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-foreground leading-[1.15] mb-6 tracking-tight">
              Dr. Marcus Vinícius
              <span className="block text-xl md:text-2xl lg:text-[1.65rem] font-normal text-muted-foreground mt-3 font-sans tracking-normal">
                Advogado — OAB/MG 213.881
              </span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl mb-4 max-w-xl leading-relaxed">
              Atuação estratégica e humanizada em Direito de Família, Previdenciário e Regularização Imobiliária, com atendimento presencial e online.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-10">
              Idiomas: Português • English
            </p>
            <CTAButtons />
          </motion.div>
        </div>
      </section>

      {/* (B) Áreas — Cards */}
      <SectionContainer className="bg-secondary/40">
        <SectionTitle subtitle="Conheça as principais áreas em que posso orientá-lo.">
          Como posso te ajudar
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {practiceAreas.map((area, i) => (
            <motion.div
              key={area.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeIn}
            >
              <Card className="group hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 border-border/40 h-full">
                <CardContent className="p-6">
                  <div className="text-accent mb-4 p-2.5 bg-accent/10 rounded-lg w-fit">{iconMap[area.icon]}</div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {area.shortDescription}
                  </p>
                  <Link
                    to={`/areas-de-atuacao/${area.slug}`}
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Entenda como funciona
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* (C) Como funciona — 3 passos */}
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
          ].map((item, i) => (
            <motion.div
              key={item.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center md:text-left"
            >
              <span className="inline-block text-5xl font-serif font-bold text-accent/15 mb-3">
                {item.step}
              </span>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* (D) Mini bio */}
      <SectionContainer className="bg-secondary/40">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-28 h-28 rounded-2xl bg-primary/10 shrink-0 flex items-center justify-center">
              <span className="text-3xl font-serif font-bold text-primary/60">
                MV
              </span>
            </div>
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Sobre o advogado
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Advogado inscrito na OAB/MG 213.881, com atuação em Pirapora/MG e região. Atende demandas de Direito de Família e Sucessões, Previdenciário e Regularização Imobiliária. Foco em estratégia processual, análise documental minuciosa e condução clara das etapas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Atendimento presencial e online, com comunicação objetiva e humanizada. Compromisso com transparência quanto a riscos, prazos e honorários.
              </p>
              <div className="flex flex-wrap gap-2 mb-5 mt-4">
                {[
                  "Atendimento direto com o advogado",
                  "Análise documental minuciosa",
                  "Linguagem clara",
                  "Transparência",
                  "Atualizações regulares",
                  "Soluções práticas",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-3 w-3" />
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground/80 italic">
                "Meu objetivo é que você entenda o seu caso, as alternativas possíveis e o caminho mais eficiente para resolver o problema, com seriedade e respeito."
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <Link to="/sobre">Saiba mais sobre minha trajetória</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* (E) Depoimentos */}
      <SectionContainer>
        <SectionTitle subtitle="O que dizem sobre o atendimento.">
          Depoimentos
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="border-border/40 h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-5 w-5 text-accent/30 mb-3" />
                  <p className="text-foreground leading-relaxed mb-4 italic text-[0.95rem]">
                    "{t.text}"
                  </p>
                  <span className="text-sm text-muted-foreground font-medium">
                    — {t.initials}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-6 text-center max-w-xl mx-auto">
          {testimonialsDisclaimer}
        </p>
      </SectionContainer>

      {/* (F) FAQ */}
      <SectionContainer className="bg-secondary/40">
        <SectionTitle subtitle="Dúvidas frequentes sobre o atendimento.">
          Perguntas Frequentes
        </SectionTitle>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-[0.03]" />
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Precisa de orientação jurídica?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Agende um atendimento ou entre em contato. Estou à disposição para
                esclarecer suas dúvidas e orientar os próximos passos.
              </p>
              <CTAButtons className="justify-center" />
              <p className="text-xs text-muted-foreground mt-8 opacity-70">
                O envio de mensagem não constitui contratação nem cria relação
                advogado-cliente.
              </p>
            </motion.div>
          </div>
        </SectionContainer>
      </section>

      <LawyerFooter />
    </div>
  );
};

export default HomePage;
