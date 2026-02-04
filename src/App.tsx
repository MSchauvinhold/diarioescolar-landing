import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import About from './pages/About';
import Institucional from './pages/Institucional';
import Comunidad from './pages/Comunidad';
import Pedagogico from './pages/Pedagogico';
import Administrativo from './pages/Administrativo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticia/:id" element={<NewsDetail />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/pedagogico" element={<Pedagogico />} />
        <Route path="/administrativo" element={<Administrativo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
