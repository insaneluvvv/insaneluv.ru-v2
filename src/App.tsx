import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import Footer from "./components/Footer";
import IntroVideo from "./components/IntroVideo";

import HomePage from "./pages/HomePage";
import NotFounPage from "./pages/NotFoundPage";

import LogofolioPage from "./pages/projects/LogofolioPage";
import KandinskyPage from "./pages/projects/KandinskyPage";
import StudJobPage from "./pages/projects/StudJobPage";
import CourseResearchWorkPage from "./pages/projects/CourseResearchWorkPage";
import TournamentsPage from "./pages/projects/TournamentsPage";
import LinguaFlowPage from "./pages/projects/LinguaFlowPage";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);

  // useEffect(() => {
  //   const hasSeenIntro = localStorage.getItem("hasSeenIntro");

  //   if (hasSeenIntro) {
  //     setShowIntro(true);
  //     setShowMain(false);
  //   } else {
  //     localStorage.setItem("hasSeenIntro", "true");
  //   }
  // }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
    setShowMain(true);
  };

  return (
    <AppWrapper>
      <Router>
        {showIntro && <IntroVideo onFinish={handleIntroFinish} />}

        <MainWrapper visible={showMain}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logofolio" element={<LogofolioPage />} />
            <Route path="/kandinsky" element={<KandinskyPage />} />
            <Route path="/studjob" element={<StudJobPage />} />
            <Route path="/course-research-work" element={<CourseResearchWorkPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/linguaflow" element={<LinguaFlowPage />} />
            <Route path="*" element={<NotFounPage />} />
          </Routes>
          <Footer />
        </MainWrapper>
      </Router>
    </AppWrapper>
  );
}

// 🔹 Стили
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AppWrapper = styled.div`
  min-height: 100vh;
`;

const MainWrapper = styled.div<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible }) => visible && fadeIn} 0.8s ease forwards; /* было 1.5s */
  transition: opacity 0.8s ease;
`;

export default App;
