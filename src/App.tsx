import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NotFoundPage from './pages/NotFoundPage';
import OpenPage from './pages/OpenPage';
import Header from './components/Header';
import ApplicationListPage from './pages/ApplicationListPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OpenPage />} />
        <Route path='*' element={<NotFoundPage />} />

        <Route element={<Header />}>
          {/* 헤더가 들어가야 하는 페이지들은 여기에 넣어주세요 :) */}
          <Route path='/applicationlist' element={<ApplicationListPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
