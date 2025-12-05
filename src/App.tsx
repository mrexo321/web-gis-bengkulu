import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import GISUpload from "./pages/GisUpload";
import MapLayer from "./pages/MapLayer";
import ReportLaporan from "./pages/ReportLaporan";
import MapPage from "./pages/Map/MapPage";
import Infrastructure from "./pages/Infrastructure";
import PublicationRules from "./pages/PublicationRules";
import ManagementNews from "./pages/ManagementNews";
import SliderManagement from "./pages/ManagementSlider";
import News from "./views/news/News";
import Services from "./views/layanan/Services";
import LayerDetailPage from "./pages/LayerDetailPage";
import FeatureEditPage from "./pages/feature/FeatureEditPage";
import Help from "./pages/help/Help";
import Settings from "./pages/settings/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gis-upload" element={<GISUpload />} />
      <Route path="/map-layer" element={<MapLayer />} />
      <Route path="/map-layer/:id" element={<LayerDetailPage />} />
      <Route
        path="/layers/:layerId/edit-feature/:featureId"
        element={<FeatureEditPage />}
      />
      <Route path="/report" element={<ReportLaporan />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/dashboard/infrastructure" element={<Infrastructure />} />
      <Route path="/dashboard/public-rules" element={<PublicationRules />} />
      <Route path="/dashboard/news" element={<ManagementNews />} />
      <Route path="/dashboard/slider" element={<SliderManagement />} />
      <Route path="/help" element={<Help />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
