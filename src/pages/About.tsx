import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import CTAButtons from "@/components/CTAButtons";
import { SectionContainer, SectionTitle } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import aboutPhoto from "@/assets/marcus-photo-1.jpg";
import couplePhoto from "@/assets/marcus-alyce.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      {/* Apresentação */}
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-8 tracking-tight">
            Sobre
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg">
              <img src={aboutPhoto} alt="Dr. Marcus Vinícius" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Sou Marcus Vinícius, advogado inscrito na OAB/MG sob o nº 213.881.
                Atuo há mais de 4 anos na advocacia, com foco em oferecer orientação
                jurídica clara, acessível e responsável.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Graduado em Direito, com cursos de aperfeiçoamento em Processo Civil, Direito de Família, Direito Previdenciário, Direito Bancário e Regularização Imobiliária. Busco aliar técnica jurídica à comunicação simples e direta.
              </p>
            </div>
          </div>
        </motion.div>
      </SectionContainer>

      {/* Trajetória */}
      <SectionContainer className="bg-secondary/40">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Trajetória</SectionTitle>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Com mais de 4 anos de atuação, desenvolvi experiência em Direito de Família e Sucessões, Previdenciário, Imobiliário/Regularização e Direito Bancário, atendendo pessoas em Pirapora/MG, região do Norte de Minas e, por meio do atendimento online, em todo o Brasil.
            </p>
            <p>
              O foco da minha atuação é a estratégia processual aliada à análise documental minuciosa, sempre buscando a condução clara e transparente de cada etapa para o cliente.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Forma de trabalho */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Forma de trabalho</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Atendimento direto com o advogado",
                desc: "Cada caso recebe atenção individual, sem intermediários, com acompanhamento estruturado e prazos monitorados.",
              },
              {
                title: "Transparência",
                desc: "Mantenho o cliente informado sobre cada etapa do processo, riscos, prazos e honorários.",
              },
              {
                title: "Linguagem clara",
                desc: "Orientação preventiva quando possível, com comunicação objetiva para que você compreenda cada aspecto da sua situação.",
              },
              {
                title: "Soluções práticas",
                desc: "Atuação focada em soluções seguras e eficientes, com atualizações regulares do andamento e organização de documentos.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Valores */}
      <SectionContainer className="bg-secondary/40">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Valores</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {["Ética", "Técnica", "Clareza", "Diligência", "Sigilo", "Compromisso", "Humanização", "Transparência", "Família", "Honestidade e Integridade", "Empatia"].map(
              (valor) => (
                <span
                  key={valor}
                  className="px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  {valor}
                </span>
              )
            )}
          </div>
        </div>
      </SectionContainer>

      {/* Atendimento */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Atendimento</SectionTitle>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">Presencial:</strong> R. Rio Grande do Sul, 189 A – Santo Antônio, Pirapora/MG
            </p>
            <p>
              <strong className="text-foreground">Online:</strong> Videoconferência
              para todo o Brasil, mediante agendamento.
            </p>
            <p>
              <strong className="text-foreground">Horário:</strong> Seg, Ter e Qua: 13h às 18h — Qui e Sex: 9h às 18h
            </p>
            <p>
              <strong className="text-foreground">Regiões atendidas:</strong> Pirapora/MG e região do Norte de Minas (presencial), além de atendimento online para todo o Brasil.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Mensagem pessoal */}
      <SectionContainer className="bg-secondary/40">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:flex-1">
              <p className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                "Meu objetivo é que você entenda o seu caso, as alternativas possíveis e o caminho mais eficiente para resolver o problema, com seriedade e respeito."
              </p>
              <p className="text-sm text-muted-foreground">
                — Dr. Marcus Vinícius e Alyce
              </p>
            </div>
            <div className="md:flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-sm" />
                <img
                  src={couplePhoto}
                  alt="Dr. Marcus Vinícius e Alyce"
                  className="relative rounded-2xl shadow-xl w-full max-w-[320px] aspect-[4/3] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground mb-6">
            Agende um atendimento ou entre em contato para esclarecer suas
            dúvidas.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default AboutPage;
