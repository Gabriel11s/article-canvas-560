import LawyerHeader from "@/components/LawyerHeader";
import LawyerFooter from "@/components/LawyerFooter";
import { SectionContainer, SectionTitle } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "alimentos-como-juiz-define-valor",
    title: "Alimentos: como o juiz define o valor da pensão?",
    excerpt:
      "Entenda os critérios legais utilizados para fixar o valor da pensão alimentícia e como o juiz avalia necessidade e possibilidade.",
    category: "Família",
    date: "2024-11-15",
  },
  {
    slug: "descontos-indevidos-beneficio",
    title: "Descontos indevidos em benefício do INSS: o que observar",
    excerpt:
      "Saiba como identificar descontos não autorizados no seu benefício previdenciário e quais medidas tomar.",
    category: "Previdenciário",
    date: "2024-10-22",
  },
  {
    slug: "usucapiao-requisitos-documentos",
    title: "Usucapião: requisitos e documentos necessários",
    excerpt:
      "Conheça os tipos de usucapião, os requisitos legais e quais documentos são essenciais para dar início ao processo.",
    category: "Imobiliário",
    date: "2024-09-18",
  },
  {
    slug: "negativacao-indevida-primeiros-passos",
    title: "Negativação indevida: primeiros passos para resolver",
    excerpt:
      "Teve o nome negativado indevidamente? Veja quais providências tomar e quais direitos você tem como consumidor.",
    category: "Consumidor",
    date: "2024-08-05",
  },
  {
    slug: "direitos-demissao-sem-justa-causa",
    title: "Demissão sem justa causa: conheça seus direitos",
    excerpt:
      "Entenda quais verbas rescisórias são devidas e os prazos para pagamento quando há demissão sem justa causa.",
    category: "Trabalhista",
    date: "2024-07-12",
  },
  {
    slug: "como-funciona-mediacao-conflitos",
    title: "Mediação de conflitos: quando é indicada?",
    excerpt:
      "A mediação pode ser uma alternativa mais rápida e menos desgastante do que um processo judicial. Entenda quando e como funciona.",
    category: "Cível",
    date: "2024-06-28",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <LawyerHeader />

      <SectionContainer>
        <SectionTitle subtitle="Artigos informativos sobre temas jurídicos do dia a dia.">
          Conteúdos
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="group hover:shadow-md transition-shadow border-border/60"
            >
              <CardContent className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="font-semibold text-lg text-foreground mt-2 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-10 text-center">
          Todo conteúdo publicado neste site tem caráter estritamente
          informativo e educativo, não constituindo orientação jurídica
          específica.
        </p>
      </SectionContainer>

      <LawyerFooter />
    </div>
  );
};

export default BlogPage;