import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import OpenPage from './pages/OpenPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OpenPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
