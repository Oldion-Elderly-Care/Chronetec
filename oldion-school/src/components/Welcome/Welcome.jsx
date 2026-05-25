import './Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <div className="login-card welcome-card">
        <h1 className="title">Olá, seja bem-vindo!</h1>
        <p className="subtitle">
          Esse é o <strong>Oldion</strong> — seu parceiro aqui na escola. 
          Ele cuida de tudo pra você: notas, presença e muito mais. 
          Pode confiar nele!
        </p>

        <div className="welcome-buttons">
          <button className="submit-btn" onClick={() => navigate('/login')}>
            Entrar
          </button>
          <button className="submit-btn outline-btn" onClick={() => navigate('/cadastro')}>
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
