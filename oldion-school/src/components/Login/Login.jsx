import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simula login salva usuario fake e vai pro perfil
    localStorage.setItem('usuario', JSON.stringify({
      nome: 'Aluno Zanetti',
      tipo: 'Aluno',
      email: 'aluno@escola.com',
      rm: '123456',
    }));
    navigate('/perfil');
  };

  return (
    <div className="main-wrapper">
      <div className="back-button">
        <button onClick={() => navigate('/')}>↩</button>
      </div>

      <div className="login-card">
        <h1 className="title">Entrar</h1>

        <div className="social-buttons">
          <button className="social-btn google">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
            Entrar com conta Google
          </button>

          <button className="social-btn facebook">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" />
            Entrar com conta Facebook
          </button>
        </div>

        <div className="divider">ou</div>

        <div className="form-container">
          <div className="input-field">
            <span className="icon">✉</span>
            <input type="text" placeholder="Email ou RM..." />
          </div>

          <div className="input-field">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Senha..." />
          </div>

          <button className="submit-btn" onClick={handleLogin}>Entrar</button>

          <p className="switch-link">
            Não tem conta?{' '}
            <span onClick={() => navigate('/cadastro')}>Criar conta</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
