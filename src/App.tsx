import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Instructors from "./pages/Instructors";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/Navigation";
import VipassanaMountains from "./pages/VipassanaMountains";
import OneDaySeaRetreat from "./pages/OneDaySeaRetreat";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();



// Layout component to include Navigation on every page
const Layout = () => (
  <div className="min-h-screen pt-16 flex flex-col">
    <Navigation />
    <div className="flex-1">
      <Outlet />
    </div>
    <Footer />
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/retreats/vipassana-mountains" element={<VipassanaMountains />} />
            <Route path="/retreats/one-day-sea" element={<OneDaySeaRetreat />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
