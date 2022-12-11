import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import OpenPage from "./pages/OpenPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ApplicationListPage from "./pages/ApplicationListPage";
import ProjectPage from "./pages/ProjectPage";
import WritePage from "./pages/WritePage";
import MyPage from "./pages/MyPage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpenPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<Header />}>
          {/* 헤더가 들어가야 하는 페이지들은 여기에 넣어주세요 :) */}
          <Route path="/applicationlist" element={<ApplicationListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
          <Route path="/portfoliodetail" element={<PortfolioDetailPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
