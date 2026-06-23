import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Career from "./pages/Career";
import AiAutomationSmallBusiness from "./pages/blog/AiAutomationSmallBusiness";
import UseCasesIndex from "./pages/usecases/UseCasesIndex";
import CategoryPage from "./pages/usecases/CategoryPage";
import SolutionPage from "./pages/usecases/SolutionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/career" element={<Career />} />
            <Route path="/use-cases" element={<UseCasesIndex />} />
            <Route path="/use-cases/:category" element={<CategoryPage />} />
            <Route path="/use-cases/:category/:solution" element={<SolutionPage />} />
            <Route path="/blog/ai-automation-small-business" element={<AiAutomationSmallBusiness />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
