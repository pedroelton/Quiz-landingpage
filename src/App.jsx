import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import BeforeAfterPage from "./pages/BeforeAfterPage";
import TextImagePage from "./pages/TextImagePage";
import ResultPage from "./pages/ResultPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/before-after" element={<BeforeAfterPage />} />
        <Route path="/olivia-wilson" element={<TextImagePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
