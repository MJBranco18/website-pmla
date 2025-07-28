import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nos" element={<AboutPage />} />
        <Route path="/equipa" element={<TeamPage />} />
        <Route path="/contactos" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;