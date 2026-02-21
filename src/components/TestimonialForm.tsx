import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Send, Star, CheckCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface UserTestimonial {
    text: string;
    name: string;
    rating: number;
    date: string;
}

const STORAGE_KEY = "user-testimonials";

const getStoredTestimonials = (): UserTestimonial[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

const saveTestimonial = (testimonial: UserTestimonial) => {
    const existing = getStoredTestimonials();
    existing.unshift(testimonial);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
};

const TestimonialForm = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [userTestimonials, setUserTestimonials] = useState<UserTestimonial[]>([]);

    useEffect(() => {
        setUserTestimonials(getStoredTestimonials());
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) return;

        const newTestimonial: UserTestimonial = {
            text: text.trim(),
            name: name.trim(),
            rating,
            date: new Date().toISOString(),
        };

        saveTestimonial(newTestimonial);
        setUserTestimonials(getStoredTestimonials());
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setName("");
            setText("");
            setRating(5);
        }, 4000);
    };

    const formatDate = (iso: string) => {
        return new Date(iso).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="space-y-10">
            {/* Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
            >
                <div className="relative">
                    {/* Decorative background */}
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-sm" />

                    <div className="relative rounded-2xl border border-accent/15 bg-card p-8 lg:p-10 shadow-lg shadow-accent/5">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
                                <Quote className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                                Deixe seu depoimento
                            </h3>
                            <p className="text-muted-foreground text-sm max-w-md mx-auto">
                                Sua experiência é importante. Compartilhe como foi o atendimento
                                para ajudar outras pessoas.
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-center py-8"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
                                        <CheckCircle className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                                        Obrigado pelo seu depoimento!
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Sua contribuição foi registrada com sucesso.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Rating */}
                                    <div className="text-center">
                                        <label className="block text-sm font-medium text-foreground mb-3">
                                            Como você avalia o atendimento?
                                        </label>
                                        <div className="inline-flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                    className="p-1 transition-transform hover:scale-110"
                                                >
                                                    <Star
                                                        className={`h-7 w-7 transition-colors duration-200 ${star <= (hoverRating || rating)
                                                                ? "fill-amber-400 text-amber-400"
                                                                : "text-border fill-transparent"
                                                            }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="testimonial-name"
                                            className="block text-sm font-medium text-foreground mb-1.5"
                                        >
                                            Seu nome
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                                            <input
                                                type="text"
                                                id="testimonial-name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                placeholder="Ex: Maria da Silva"
                                                className="w-full pl-10 pr-4 py-3 text-sm border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <label
                                            htmlFor="testimonial-text"
                                            className="block text-sm font-medium text-foreground mb-1.5"
                                        >
                                            Seu depoimento
                                        </label>
                                        <textarea
                                            id="testimonial-text"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            required
                                            rows={4}
                                            placeholder="Conte como foi sua experiência com o atendimento..."
                                            className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-y"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 rounded-xl"
                                    >
                                        <Send className="h-4 w-4 mr-2" />
                                        Enviar Depoimento
                                    </Button>

                                    <p className="text-xs text-muted-foreground text-center opacity-60">
                                        Ao enviar, você autoriza a publicação do depoimento neste
                                        site.
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* User-submitted testimonials */}
            {userTestimonials.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-5 text-center">
                        Depoimentos recentes
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {userTestimonials.map((t, i) => (
                            <motion.div
                                key={`user-${i}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <Card className="border-accent/10 h-full hover:shadow-md transition-shadow bg-accent/[0.02]">
                                    <CardContent className="p-6">
                                        {/* Stars */}
                                        <div className="flex items-center gap-0.5 mb-3">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`h-3.5 w-3.5 ${star <= t.rating
                                                            ? "fill-amber-400 text-amber-400"
                                                            : "text-border fill-transparent"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <Quote className="h-4 w-4 text-accent/30 mb-2" />
                                        <p className="text-foreground leading-relaxed mb-4 italic text-[0.95rem]">
                                            "{t.text}"
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground font-medium">
                                                — {t.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground/50">
                                                {formatDate(t.date)}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default TestimonialForm;
