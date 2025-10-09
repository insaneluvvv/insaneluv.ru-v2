import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Footer from "./components/Footer"

import HomePage from "./pages/HomePage"
import NotFounPage from "./pages/NotFoundPage"

import LogofolioPage from "./pages/projects/LogofolioPage"
import KandinskyPage from "./pages/projects/KandinskyPage"
import StudJobPage from "./pages/projects/StudJobPage"
import CourseResearchWorkPage from "./pages/projects/CourseResearchWorkPage"
import TournamentsPage from "./pages/projects/TournamentsPage"
import LinguaFlowPage from "./pages/projects/LinguaFlowPage"

function App() {

  return (
    <AppWrapper>
      <Router>
        <MainWrapper>
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
  )
}

const AppWrapper = styled.div`
  min-height: 100vh;

`
const MainWrapper = styled.div`
  min-height: calc(100vh - 50px - 100px);
  @media (max-width: 800px) {
    min-height: calc(100vh - 50px - 140px);
  }
`

export default App
