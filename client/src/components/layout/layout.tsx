import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { GlobalReveal } from "@/hooks/use-reveal";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <GlobalReveal />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
