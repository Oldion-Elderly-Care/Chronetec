import './Cadastro.css';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleCadastro = () => {
    localStorage.setItem('usuario', JSON.stringify({
      nome: 'Novo Usuário',
      tipo: 'Aluno',
      email: 'novo@escola.com',
      rm: '654321',
    }));
    navigate('/perfil');
  };

  return (
    <div className="main-wrapper">
      <div className="back-button">
        <button onClick={() => navigate('/')}>↩</button>
      </div>

      <div className="login-card">
        <h1 className="title">Criar nova conta</h1>

        <div className="social-buttons">
          <button className="social-btn google">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
            Criar com conta Google
          </button>

          <button className="social-btn facebook">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" />
            Criar com conta Facebook
          </button>
        </div>

        <div className="divider">ou</div>

        <div className="form-container">
          <div className="input-field">
            <span className="icon">🚹</span>
            <input type="text" placeholder="Funcionário ou Aluno..." />
          </div>

          <div className="input-field">
            <span className="icon">✉</span>
            <input type="text" placeholder="Email ou RM..." />
          </div>

          <div className="input-field">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Senha..." />
          </div>

          <div className="input-field">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Confirme a senha..." />
          </div>

          <button className="submit-btn" onClick={handleCadastro}>Criar</button>

          <p className="switch-link">
            Já tem conta?{' '}
            <span onClick={() => navigate('/login')}>Entrar</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
