import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <SolutionsShowcase />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;
