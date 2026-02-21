import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Send, Star, CheckCircle, User, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials, testimonialsDisclaimer } from "@/data/testimonials";

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

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.4 },
    }),
};

const TestimonialCard = ({
    text,
    name,
    rating,
    index,
}: {
    text: string;
    name: string;
    rating?: number;
    index: number;
}) => (
    <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
    >
        <Card className="border-border/40 h-full hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                {rating !== undefined && (
                    <div className="flex items-center gap-0.5 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`h-3.5 w-3.5 ${star <= rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "text-border fill-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                )}
                <Quote className="h-5 w-5 text-accent/30 mb-3" />
                <p className="text-foreground leading-relaxed mb-4 italic text-[0.95rem]">
                    "{text}"
                </p>
                <span className="text-sm text-muted-foreground font-medium">
                    — {name}
                </span>
            </CardContent>
        </Card>
    </motion.div>
);

const TestimonialForm = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showForm, setShowForm] = useState(false);
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
            setShowForm(false);
            setName("");
            setText("");
            setRating(5);
        }, 4000);
    };

    // Merge all testimonials into one unified list
    const allTestimonials = [
        ...testimonials.map((t) => ({
            text: t.text,
            name: t.initials,
            rating: 5 as number | undefined,
        })),
        ...userTestimonials.map((t) => ({
            text: t.text,
            name: t.name,
            rating: t.rating as number | undefined,
        })),
    ];

    return (
        <div className="space-y-8">
            {/* Unified testimonials grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {allTestimonials.map((t, i) => (
                    <TestimonialCard
                        key={`testimonial-${i}`}
                        text={t.text}
                        name={t.name}
                        rating={t.rating}
                        index={i}
                    />
                ))}
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
                {testimonialsDisclaimer}
            </p>

            {/* CTA to show form / Form */}
            <div className="flex justify-center">
                <AnimatePresence mode="wait">
                    {!showForm && !submitted ? (
                        <motion.div
                            key="cta"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => setShowForm(true)}
                                className="rounded-xl border-accent/30 hover:bg-accent/5 hover:border-accent/50 transition-all gap-2"
                            >
                                <MessageSquarePlus className="h-4 w-4 text-accent" />
                                Deixar meu depoimento
                            </Button>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

            {/* Inline form */}
            <AnimatePresence mode="wait">
                {(showForm || submitted) && (
                    <motion.div
                        key="form-container"
                        initial={{ opacity: 0, y: 20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-2xl mx-auto overflow-hidden"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-sm" />

                            <div className="relative rounded-2xl border border-accent/15 bg-card p-8 lg:p-10 shadow-lg shadow-accent/5">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="text-center py-6"
                                        >
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
                                                <CheckCircle className="h-8 w-8 text-green-500" />
                                            </div>
                                            <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                                                Obrigado pelo seu depoimento!
                                            </h4>
                                            <p className="text-muted-foreground text-sm">
                                                Sua contribuição já aparece acima.
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
                                            {/* Header */}
                                            <div className="text-center">
                                                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                                                    Compartilhe sua experiência
                                                </h3>
                                                <p className="text-muted-foreground text-sm">
                                                    Seu depoimento ajuda outras pessoas a conhecerem o atendimento.
                                                </p>
                                            </div>

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
                                                Ao enviar, você autoriza a publicação do depoimento neste site.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TestimonialForm;
