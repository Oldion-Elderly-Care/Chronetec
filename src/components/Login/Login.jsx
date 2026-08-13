import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = ({ onClick }) => <button className="auth-logo" onClick={onClick}><img src={`${import.meta.env.BASE_URL}chronetec-mark.svg`} alt="" /><span>Chronetec</span></button>;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', senha: '' });

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('usuario', JSON.stringify({ nome: 'Aluno Teste', tipo: 'Aluno', email: form.email || 'aluno@aluno.cps.sp.gov.br', rm: '123456' }));
    navigate('/home');
  };

  return (
    <main className="auth-page">
      <section className="auth-brand-panel">
        <Logo onClick={() => navigate('/')} />
        <div className="auth-message">
          <span className="auth-kicker">BEM-VINDO DE VOLTA</span>
          <h1>Sua rotina continua<br />por aqui.</h1>
          <p>Acesse seu calendário e mantenha provas, tarefas e eventos sempre à vista.</p>
          <div className="auth-mini-card">
            <span className="mini-check">✓</span>
            <div><strong>Organização que acompanha você</strong><small>Simples, visual e feita para estudantes.</small></div>
          </div>
        </div>
        <p className="auth-quote">“Planejar também é uma forma de cuidar do seu futuro.”</p>
      </section>

      <section className="auth-form-panel">
        <button className="back-link" onClick={() => navigate('/')}><span>←</span> Voltar para o início</button>
        <form className="auth-card" onSubmit={handleLogin}>
          <div className="mobile-auth-logo"><Logo onClick={() => navigate('/')} /></div>
          <span className="auth-kicker">ACESSE SUA CONTA</span>
          <h2>Olá novamente! <span aria-hidden="true">👋</span></h2>
          <p className="form-intro">Digite seus dados para acessar a Chronetec.</p>

          <label className="field-label" htmlFor="login-email">E-mail ou RM</label>
          <div className="auth-field">
            <span aria-hidden="true">@</span>
            <input id="login-email" autoComplete="username" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seuemail@etec.sp.gov.br" />
          </div>

          <div className="label-row"><label className="field-label" htmlFor="login-password">Senha</label><button type="button">Esqueci minha senha</button></div>
          <div className="auth-field">
            <span aria-hidden="true">⌑</span>
            <input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })} placeholder="Digite sua senha" />
            <button type="button" className="show-password" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
          </div>

          <button className="auth-submit" type="submit">Entrar <span>→</span></button>
          <div className="auth-divider"><span>ou continue com</span></div>
          <button className="google-button" type="button"><b>G</b> Conta Google</button>
          <p className="auth-switch">Ainda não tem uma conta? <button type="button" onClick={() => navigate('/cadastro')}>Criar conta</button></p>
        </form>
      </section>
    </main>
  );
};

export default Login;
