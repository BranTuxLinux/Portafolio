import { Routes, Route } from "react-router-dom";
import { BentoPage } from "./pages/bento.landing";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BentoPage />} />
    </Routes>
  );
}
