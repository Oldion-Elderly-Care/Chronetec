import './Perfil.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Perfil = () => {
  const navigate = useNavigate();
  const [usuario] = useState(() => {
    try { return JSON.parse(localStorage.getItem('usuario')) || {}; } catch { return {}; }
  }, []);
  const user = { nome: usuario.nome || 'Aluno Teste', tipo: usuario.tipo || 'Aluno', email: usuario.email || 'aluno@aluno.cps.sp.gov.br', rm: usuario.rm || '123456' };

  const handleSair = () => { localStorage.removeItem('usuario'); navigate('/'); };

  return (
    <main className="profile-page">
      <header className="profile-header">
        <button className="profile-logo" onClick={() => navigate('/')}><img src={`${import.meta.env.BASE_URL}chronetec-logo.svg`} alt="Chronetec" /></button>
        <button className="back-dashboard" onClick={() => navigate('/home')}>← Voltar ao calendário</button>
      </header>
      <section className="profile-layout">
        <aside className="profile-summary">
          <div className="avatar-ring"><span>{user.nome.charAt(0).toUpperCase()}</span><i>✓</i></div>
          <h1>{user.nome}</h1>
          <span className="role-pill">{user.tipo}</span>
          <p>Seu espaço para cuidar dos dados da conta e acessar rapidamente sua rotina.</p>
          <button className="go-calendar" onClick={() => navigate('/home')}>▦ Acessar calendário <span>→</span></button>
        </aside>
        <section className="profile-card">
          <div className="profile-card-header"><div><span>MINHA CONTA</span><h2>Informações pessoais</h2><p>Dados usados para identificar você na Chronetec.</p></div><span className="secure-badge">✓ Conta ativa</span></div>
          <div className="info-grid">
            <div className="profile-info-item"><span className="profile-icon">○</span><div><small>NOME COMPLETO</small><strong>{user.nome}</strong></div></div>
            <div className="profile-info-item"><span className="profile-icon">◇</span><div><small>PERFIL</small><strong>{user.tipo}</strong></div></div>
            <div className="profile-info-item wide"><span className="profile-icon">@</span><div><small>E-MAIL INSTITUCIONAL</small><strong>{user.email}</strong></div></div>
            <div className="profile-info-item"><span className="profile-icon">#</span><div><small>REGISTRO (RM)</small><strong>{user.rm}</strong></div></div>
          </div>
          <div className="profile-tip"><span>✦</span><div><strong>Seus dados ficam salvos neste dispositivo.</strong><p>Esta é uma versão acadêmica da Chronetec. A integração com a conta institucional poderá ser adicionada futuramente.</p></div></div>
          <div className="profile-footer"><button className="logout-button" onClick={handleSair}>↪ Sair da conta</button></div>
        </section>
      </section>
    </main>
  );
};

export default Perfil;
