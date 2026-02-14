import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import { SectionContainer } from "@/components/PageLayout";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última atualização: Fevereiro de 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                1. Controlador dos dados
              </h2>
              <p>
                O responsável pelo tratamento dos dados pessoais coletados por este site é o advogado
                Dr. Marcus Vinícius Ferreira Rodrigues, OAB/MG 213.881, com escritório na R. Rio Grande do Sul, 189 A — Santo Antônio, Pirapora/MG, CEP 39272-144.
              </p>
              <p className="mt-2">
                Canal de contato para assuntos de privacidade:{" "}
                <a href="mailto:marcusvfr@outlook.com" className="text-accent underline underline-offset-2">
                  marcusvfr@outlook.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                2. Dados coletados
              </h2>
              <p>
                Coletamos apenas os dados que você fornece voluntariamente:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Nome, telefone, e-mail e mensagem enviados pelo formulário de contato</li>
                <li>Dados compartilhados via WhatsApp para fins de agendamento</li>
                <li>Cookies básicos necessários ao funcionamento do site (analíticos, se houver)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                3. Finalidade do tratamento
              </h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Responder a contatos e dúvidas enviadas</li>
                <li>Realizar agendamento de atendimento</li>
                <li>Prestar informações jurídicas iniciais</li>
                <li>Melhorar a experiência de navegação no site</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                4. Base legal
              </h2>
              <p>
                O tratamento dos dados pessoais é realizado com base no consentimento do titular (art. 7º, I, LGPD) — fornecido ao preencher o formulário e marcar a caixa de consentimento — e/ou no legítimo interesse do controlador (art. 7º, IX, LGPD), quando aplicável, para fins de comunicação e prestação de serviços.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                5. Compartilhamento de dados
              </h2>
              <p>
                Seus dados pessoais não são vendidos, alugados ou compartilhados com terceiros para fins comerciais. Poderão ser compartilhados apenas com:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Ferramentas de e-mail e agenda utilizadas para agendamento (ex.: Calendly)</li>
                <li>Provedores de hospedagem e infraestrutura do site</li>
                <li>Autoridades competentes, quando exigido por lei</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                6. Retenção e segurança
              </h2>
              <p>
                Os dados são armazenados pelo tempo necessário ao cumprimento das finalidades descritas ou pelo prazo legal aplicável. Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                7. Direitos do titular
              </h2>
              <p>
                Nos termos da LGPD (Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar, corrigir ou atualizar seus dados pessoais</li>
                <li>Solicitar a exclusão ou anonimização dos dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Obter informações sobre com quem seus dados foram compartilhados</li>
              </ul>
              <p className="mt-2">
                Para exercer seus direitos, entre em contato pelo e-mail{" "}
                <a href="mailto:marcusvfr@outlook.com" className="text-accent underline underline-offset-2">
                  marcusvfr@outlook.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                8. Alterações
              </h2>
              <p>
                Esta Política de Privacidade pode ser atualizada a qualquer momento. Recomendamos a consulta periódica desta página.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default PrivacyPolicyPage;
