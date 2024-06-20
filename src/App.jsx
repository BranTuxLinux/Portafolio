import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing.routes";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
