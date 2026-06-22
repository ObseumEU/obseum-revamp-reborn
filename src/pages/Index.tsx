import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Metrics from "@/components/Metrics";
import AgentFlow from "@/components/AgentFlow";
import Services from "@/components/Services";
import AutomationFlow from "@/components/AutomationFlow";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <AgentFlow />
        <Services />
        <AutomationFlow />
        <UseCases />
        <Metrics />
        <Process />
        <Tools />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
