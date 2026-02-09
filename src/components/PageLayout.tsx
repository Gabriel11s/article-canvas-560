import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
};

export default PageLayout;

export function SectionContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  subtitle,
  className = "",
}: {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-10 lg:mb-14 ${className}`}>
      <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}