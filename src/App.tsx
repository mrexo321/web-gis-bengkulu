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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gis-upload" element={<GISUpload />} />
      <Route path="/map-layer" element={<MapLayer />} />
      <Route path="/report" element={<ReportLaporan />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/dashboard/infrastructure" element={<Infrastructure />} />
      <Route path="/dashboard/public-rules" element={<PublicationRules />} />
      <Route path="/dashboard/news" element={<ManagementNews />} />
      <Route path="/dashboard/slider" element={<SliderManagement />} />
    </Routes>
  );
}
