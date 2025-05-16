import './App.css';
import logo from './assets/logo.png';


function App() {
  return (
    <div className="container">
      <div className="content-box">
        <div className="logo">
          <img 
            src={logo}
            alt="PMLA Logo" 
            className="company-logo"
          />
        </div>
        
        <h1>Website em Desenvolvimento</h1>
        
        <div className="divider"></div>
        
        <p>Estamos a trabalhar para lhe trazer uma melhor experiência, fique atento!</p>
        
        <div className="status">
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>
          <p className="status-text">Previsão de lançamento: em breve</p>
        </div>
      </div>
      
      <footer>© {new Date().getFullYear()} PMLA Investments, LDA</footer>
    </div>
  );
}

export default App;