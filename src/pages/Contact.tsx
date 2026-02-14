import { useState } from "react";
import { motion } from "framer-motion";
import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import { SectionContainer } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, MessageCircle, Clock, Instagram, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, marque a caixa de consentimento com a Política de Privacidade para enviar.",
        variant: "destructive",
      });
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Contato
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl leading-relaxed">
              Entre em contato para agendar um atendimento ou esclarecer dúvidas. Responderemos o mais breve possível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 px-6 rounded-2xl bg-accent/5 border border-accent/10"
                >
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                    Obrigado pelo contato. Retornaremos em breve para orientar os próximos passos.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
                      setConsent(false);
                    }}
                  >
                    Enviar nova mensagem
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                        Telefone (com DDD)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    >
                      <option value="">Selecione...</option>
                      <option value="Direito de Família e Sucessões">Direito de Família e Sucessões</option>
                      <option value="Direito Previdenciário">Direito Previdenciário</option>
                      <option value="Direito Imobiliário e Regularização">Direito Imobiliário e Regularização</option>
                      <option value="Direito Bancário">Direito Bancário</option>
                      <option value="Direito do Consumidor">Direito do Consumidor</option>
                      <option value="Direito Cível">Direito Cível</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-y"
                    />
                  </div>

                  {/* LGPD Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                      Li e concordo com a{" "}
                      <a href="/politica-de-privacidade" target="_blank" className="text-accent underline underline-offset-2">
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o tratamento dos meus dados pessoais para fins de contato e agendamento.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                  >
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-muted-foreground opacity-70">
                    O envio de mensagem não constitui contratação nem cria relação advogado-cliente. Retornaremos para orientar o agendamento.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-secondary/50 border border-border/40 p-6 space-y-5">
                <h3 className="font-serif font-semibold text-foreground">Canais de contato</h3>
                <div className="space-y-4 text-sm">
                  <a href="https://wa.me/5538988469501" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    (38) 98846-9501 (WhatsApp)
                  </a>
                  <a href="tel:+5538988469501" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                    <Phone className="h-4 w-4 text-accent" />
                    (38) 98846-9501
                  </a>
                  <a href="mailto:marcusvfr@outlook.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                    <Mail className="h-4 w-4 text-accent" />
                    marcusvfr@outlook.com
                  </a>
                  <a href="https://instagram.com/marcusviniferr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                    <Instagram className="h-4 w-4 text-accent" />
                    @marcusviniferr
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-secondary/50 border border-border/40 p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground">Endereço</h3>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>R. Rio Grande do Sul, 189 A<br />Santo Antônio, Pirapora – MG<br />CEP 39272-144</span>
                </div>
                <a
                  href="https://share.google/thTEFMvvuZYaq03Bx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-accent hover:underline"
                >
                  Ver no Google Maps →
                </a>
              </div>

              <div className="rounded-2xl bg-secondary/50 border border-border/40 p-6 space-y-3">
                <h3 className="font-serif font-semibold text-foreground">Horário</h3>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>Seg, Ter e Qua: 13h às 18h<br />Qui e Sex: 9h às 18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default ContactPage;
