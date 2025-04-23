
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BadmintonCourt from "./pages/BadmintonCourt";
import MultiplaySystem from "./pages/MultiplaySystem";
import OutdoorFitness from "./pages/OutdoorFitness";
import FootballTurf from "./pages/FootballTurf";
import GymFlooring from "./pages/GymFlooring";
import PlaygroundEquipment from "./pages/PlaygroundEquipment";
import MultiSportsFlooring from "./pages/MultiSportsFlooring";
import CricketPitch from "./pages/CricketPitch";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import new page components for the new routes
import WindowBlinds from "./pages/WindowBlinds";
import WallPapers from "./pages/WallPapers";
import InsectScreens from "./pages/InsectScreens";
import GlassFilm from "./pages/GlassFilm";
import Flooring from "./pages/Flooring";
import OtherProducts from "./pages/OtherProducts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/badminton-court" element={<BadmintonCourt />} />
          <Route path="/multiplay-system" element={<MultiplaySystem />} />
          <Route path="/outdoor-fitness" element={<OutdoorFitness />} />
          <Route path="/football-turf" element={<FootballTurf />} />
          <Route path="/gym-flooring" element={<GymFlooring />} />
          <Route path="/playground-equipment" element={<PlaygroundEquipment />} />
          <Route path="/multi-sports-flooring" element={<MultiSportsFlooring />} />
          <Route path="/cricket-pitch" element={<CricketPitch />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* New routes */}
          <Route path="/window-blinds" element={<WindowBlinds />} />
          <Route path="/wall-papers" element={<WallPapers />} />
          <Route path="/insect-screens" element={<InsectScreens />} />
          <Route path="/glass-film" element={<GlassFilm />} />
          <Route path="/flooring" element={<Flooring />} />
          <Route path="/other-products" element={<OtherProducts />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
