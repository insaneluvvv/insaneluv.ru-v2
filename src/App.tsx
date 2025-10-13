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

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <AppWrapper>
      <Router>
        {/* 🔹 IntroVideo всегда сверху */}
        {showIntro && <IntroVideo onFinish={handleIntroFinish} />}

        {/* 🔹 Главный контент загружается сразу, но скрыт под видео */}
        <MainWrapper >
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
        </MainWrapper>
        <Footer />
      </Router>
    </AppWrapper>
  );
}

// 🔹 Анимация появления главной страницы
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

const MainWrapper = styled.div`
  min-height: calc(100vh - 100px);
  @media (max-width: 1060px) {
    min-height: calc(100vh - 100px - 40px);
  }
`;

export default App;
