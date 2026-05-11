import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="main-wrapper">
      <div className="back-button">
        <button onClick={() => window.history.back()}>↩</button>
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

          <button className="submit-btn">Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;