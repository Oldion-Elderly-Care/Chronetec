import '../Login/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', perfil: 'Aluno', email: '', senha: '', confirmar: '' });
  const [error, setError] = useState('');

  const handleCadastro = (event) => {
    event.preventDefault();
    if (form.senha !== form.confirmar) { setError('As senhas precisam ser iguais.'); return; }
    localStorage.setItem('usuario', JSON.stringify({ nome: form.nome, tipo: form.perfil, email: form.email, rm: '654321' }));
    navigate('/home');
  };

  return (
    <main className="auth-page signup-page">
      <section className="auth-brand-panel signup-brand">
        <button className="auth-logo" onClick={() => navigate('/')}><img src={`${import.meta.env.BASE_URL}chronetec-mark.svg`} alt="" /><span>Chronetec</span></button>
        <div className="auth-message">
          <span className="auth-kicker">COMECE AGORA</span>
          <h1>Um ano letivo<br />mais organizado.</h1>
          <p>Crie sua conta e reúna tudo que importa para sua vida escolar em um só lugar.</p>
          <ul className="signup-benefits"><li><span>✓</span> Calendário anual completo</li><li><span>✓</span> Provas, eventos e prazos por cor</li><li><span>✓</span> Acesso simples em qualquer tela</li></ul>
        </div>
      </section>

      <section className="auth-form-panel signup-form-panel">
        <button className="back-link" onClick={() => navigate('/')}><span>←</span> Voltar para o início</button>
        <form className="auth-card signup-card" onSubmit={handleCadastro}>
          <span className="auth-kicker">CRIE SUA CONTA</span>
          <h2>Vamos começar!</h2>
          <p className="form-intro">Preencha os dados abaixo. Leva menos de um minuto.</p>

          <label className="field-label" htmlFor="signup-name">Nome completo</label>
          <div className="auth-field"><span aria-hidden="true">○</span><input id="signup-name" required autoComplete="name" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Como podemos chamar você?" /></div>

          <label className="field-label" htmlFor="signup-profile">Seu perfil</label>
          <div className="auth-field"><span aria-hidden="true">◇</span><select id="signup-profile" value={form.perfil} onChange={(e) => setForm({ ...form, perfil: e.target.value })}><option>Aluno</option><option>Funcionário</option><option>Professor</option></select></div>

          <label className="field-label" htmlFor="signup-email">E-mail ou RM</label>
          <div className="auth-field"><span aria-hidden="true">@</span><input id="signup-email" required autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seuemail@etec.sp.gov.br" /></div>

          <div className="field-columns">
            <div><label className="field-label" htmlFor="signup-password">Senha</label><div className="auth-field"><input id="signup-password" type="password" minLength="6" required value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })} placeholder="Mín. 6 caracteres" /></div></div>
            <div><label className="field-label" htmlFor="signup-confirm">Confirmar senha</label><div className="auth-field"><input id="signup-confirm" type="password" minLength="6" required value={form.confirmar} onChange={(e) => setForm({ ...form, confirmar: e.target.value })} placeholder="Repita a senha" /></div></div>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="auth-submit" type="submit">Criar minha conta <span>→</span></button>
          <p className="auth-switch">Já tem uma conta? <button type="button" onClick={() => navigate('/login')}>Entrar</button></p>
        </form>
      </section>
    </main>
  );
};

export default Cadastro;
