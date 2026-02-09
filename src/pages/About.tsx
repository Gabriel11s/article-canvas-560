import { Link } from "react-router-dom";
import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import CTAButtons from "@/components/CTAButtons";
import { SectionContainer, SectionTitle } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      {/* Apresentação */}
      <SectionContainer>
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Sobre
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-full bg-muted shrink-0 flex items-center justify-center">
              <span className="text-3xl font-serif font-semibold text-muted-foreground">
                MV
              </span>
            </div>
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Sou Marcos Vinícius, advogado inscrito na OAB/[UF] sob o nº [Nº].
                Atuo há [X] anos na advocacia, com foco em oferecer orientação
                jurídica clara, acessível e responsável.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Formado em Direito pela [FACULDADE], busco aliar técnica jurídica
                à comunicação simples e direta, para que cada pessoa entenda seus
                direitos e possa tomar decisões informadas.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Trajetória */}
      <SectionContainer className="bg-secondary/50">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Trajetória</SectionTitle>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Graduado em Direito por [FACULDADE], com [ESPECIALIZAÇÕES/PÓS-GRADUAÇÕES].
              Ao longo de [X] anos de atuação, desenvolvi experiência em diversas
              áreas do Direito, atendendo pessoas e empresas em [CIDADE/UF] e
              região.
            </p>
            <p>
              [INSIRA AQUI INFORMAÇÕES ADICIONAIS SOBRE TRAJETÓRIA, CURSOS,
              EXPERIÊNCIAS RELEVANTES, ATUAÇÃO EM COMISSÕES DA OAB, ETC.]
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Forma de trabalho */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Forma de trabalho</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Organização",
                desc: "Cada caso recebe atenção individual, com acompanhamento estruturado e prazos monitorados.",
              },
              {
                title: "Transparência",
                desc: "Mantenho o cliente informado sobre cada etapa do processo, riscos e possibilidades.",
              },
              {
                title: "Responsabilidade",
                desc: "Atuo dentro dos limites éticos da profissão, com sigilo e diligência.",
              },
              {
                title: "Acessibilidade",
                desc: "Linguagem clara e objetiva, para que você compreenda cada aspecto da sua situação jurídica.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Valores */}
      <SectionContainer className="bg-secondary/50">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Valores</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {["Ética", "Técnica", "Clareza", "Diligência", "Sigilo", "Compromisso"].map(
              (valor) => (
                <span
                  key={valor}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
              <strong className="text-foreground">Presencial:</strong> [ENDEREÇO],
              [CIDADE/UF]
            </p>
            <p>
              <strong className="text-foreground">Online:</strong> Videoconferência
              para todo o Brasil, mediante agendamento.
            </p>
            <p>
              <strong className="text-foreground">Horário:</strong> Segunda a
              sexta, das 9h às 18h.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-secondary/50">
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