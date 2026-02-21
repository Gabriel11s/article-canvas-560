import { useState } from "react";
import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import { SectionContainer } from "@/components/PageLayout";
import { Calendar, MessageCircle, Mail, Clock, Video, MapPin, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const OFFICE_HOURS: Record<number, { start: number; end: number } | null> = {
  0: null, // Dom
  1: { start: 13, end: 18 }, // Seg
  2: { start: 13, end: 18 }, // Ter
  3: { start: 13, end: 18 }, // Qua
  4: { start: 9, end: 18 },  // Qui
  5: { start: 9, end: 18 },  // Sex
  6: null, // Sáb
};

const MONTHS_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const DAYS_PT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const SchedulePage = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "time" | "confirm" | "done">("date");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", notes: "" });

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else setCurrentMonth(currentMonth - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else setCurrentMonth(currentMonth + 1);
  };

  const isDateAvailable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return false;
    const dayOfWeek = date.getDay();
    return OFFICE_HOURS[dayOfWeek] !== null;
  };

  const handleDateClick = (day: number) => {
    if (!isDateAvailable(day)) return;
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setStep("time");
  };

  const getTimeSlots = () => {
    if (!selectedDate) return [];
    const hours = OFFICE_HOURS[selectedDate.getDay()];
    if (!hours) return [];
    const slots: string[] = [];
    for (let h = hours.start; h < hours.end; h++) {
      slots.push(`${h.toString().padStart(2, "0")}:00`);
      if (h + 0.5 < hours.end) slots.push(`${h.toString().padStart(2, "0")}:30`);
    }
    return slots;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
  };

  const formatDate = (date: Date) =>
    `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;

  const types = ["Triagem inicial (orientação)", "Reunião / consulta", "Retorno"];

  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Agendamento de Atendimento
            </h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-2xl">
              Escolha o dia, horário e tipo de atendimento. Você receberá uma confirmação.
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Clock, label: "Duração", value: "30 min (padrão)" },
              { icon: Video, label: "Modalidade", value: "Presencial ou online" },
              { icon: MapPin, label: "Local", value: "Pirapora/MG ou videoconferência" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/40">
                <item.icon className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {step === "done" ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-6 rounded-2xl bg-accent/5 border border-accent/10">
              <Check className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Solicitação enviada!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-2">
                {selectedDate && `${DAYS_PT[selectedDate.getDay()]}, ${formatDate(selectedDate)} às ${selectedTime}`}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Retornaremos para confirmar o agendamento. Obrigado!
              </p>
              <Button variant="outline" className="mt-6" onClick={() => { setStep("date"); setSelectedDate(null); setSelectedTime(null); setSelectedType(null); setFormData({ name: "", phone: "", email: "", notes: "" }); }}>
                Novo agendamento
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Calendar */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border/40 bg-card p-6">
                  {/* Month nav */}
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-secondary transition-colors"><ChevronLeft className="h-5 w-5 text-foreground" /></button>
                    <h3 className="font-serif font-semibold text-lg text-foreground">{MONTHS_PT[currentMonth]} {currentYear}</h3>
                    <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-secondary transition-colors"><ChevronRight className="h-5 w-5 text-foreground" /></button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS_PT.map((d) => (
                      <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">{d}</div>
                    ))}
                  </div>

                  {/* Days grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const available = isDateAvailable(day);
                      const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth && selectedDate?.getFullYear() === currentYear;
                      const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();

                      return (
                        <button
                          key={day}
                          onClick={() => handleDateClick(day)}
                          disabled={!available}
                          className={`aspect-square rounded-xl text-sm font-medium transition-all duration-200 ${
                            isSelected
                              ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                              : available
                                ? "hover:bg-accent/10 text-foreground"
                                : "text-muted-foreground/30 cursor-not-allowed"
                          } ${isToday && !isSelected ? "ring-2 ring-accent/30" : ""}`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-accent" /> Selecionado</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded ring-2 ring-accent/30" /> Hoje</div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-muted-foreground/20" /> Indisponível</div>
                  </div>

                  {/* Office hours */}
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      Seg, Ter, Qua: 13h–18h • Qui, Sex: 9h–18h
                    </p>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="lg:col-span-2 space-y-5">
                {step === "time" && selectedDate && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                    <div className="rounded-2xl border border-border/40 bg-card p-5">
                      <h4 className="font-serif font-semibold text-foreground mb-1">
                        {DAYS_PT[selectedDate.getDay()]}, {formatDate(selectedDate)}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-4">Selecione o horário</p>
                      <div className="grid grid-cols-3 gap-2 max-h-[240px] overflow-y-auto pr-1">
                        {getTimeSlots().map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === slot
                                ? "bg-accent text-accent-foreground shadow-md"
                                : "bg-secondary/50 text-foreground hover:bg-accent/10"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedTime && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border/40 bg-card p-5">
                        <p className="text-xs text-muted-foreground mb-3">Tipo de atendimento</p>
                        <div className="space-y-2">
                          {types.map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedType(t)}
                              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                selectedType === t
                                  ? "bg-accent text-accent-foreground shadow-md"
                                  : "bg-secondary/50 text-foreground hover:bg-accent/10"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {selectedTime && selectedType && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20" size="lg" onClick={() => setStep("confirm")}>
                          Continuar
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {step === "date" && (
                  <div className="rounded-2xl border border-border/40 bg-card p-5">
                    <p className="text-sm text-muted-foreground">Selecione uma data no calendário para ver os horários disponíveis.</p>
                  </div>
                )}

                {step === "confirm" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <form onSubmit={handleSubmit} className="rounded-2xl border border-border/40 bg-card p-5 space-y-4">
                      <h4 className="font-serif font-semibold text-foreground">Seus dados</h4>
                      <p className="text-xs text-muted-foreground -mt-2">
                        {selectedDate && `${formatDate(selectedDate)} às ${selectedTime}`} • {selectedType}
                      </p>
                      {[
                        { name: "name", label: "Nome completo", type: "text" },
                        { name: "phone", label: "Telefone (com DDD)", type: "tel" },
                        { name: "email", label: "E-mail", type: "email" },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-xs font-medium text-foreground mb-1">{field.label}</label>
                          <input
                            type={field.type}
                            required
                            value={formData[field.name as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          />
                        </div>
                      ))}
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1">Observações (opcional)</label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-y"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" size="sm" onClick={() => setStep("time")}>Voltar</Button>
                        <Button type="submit" size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">Confirmar agendamento</Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* WhatsApp fallback */}
                <div className="rounded-2xl border border-border/40 bg-card p-5">
                  <h4 className="font-serif font-semibold text-sm text-foreground mb-2">Prefere outro canal?</h4>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" className="justify-start" asChild>
                      <a href="https://wa.me/5538988469501?text=Ol%C3%A1%2C%20Dr.%20Marcos%20Vin%C3%ADcius.%20Encontrei%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20meu%20caso.%20Pode%20me%20orientar%3F" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp (38) 98846-9501
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start" asChild>
                      <a href="mailto:marcusvfr@outlook.com">
                        <Mail className="h-4 w-4 mr-2" /> marcusvfr@outlook.com
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-8 opacity-70">
            O agendamento não constitui contratação nem cria relação advogado-cliente. Retornaremos para confirmar e orientar os próximos passos.
          </p>
        </div>
      </SectionContainer>
      <LawyerFooter />
    </div>
  );
};

export default SchedulePage;
