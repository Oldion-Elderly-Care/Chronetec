import './Perfil.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Perfil = () => {
  const navigate = useNavigate();

  const [usuario] = useState({
    nome: 'Aluno Zanetti',
    tipo: 'Aluno',
    email: 'aluno@cps.sp.gov.br',
    rm: '123456',
  });

  const handleSair = () => {
    navigate('/');
  };

  return (
    <div className="main-wrapper">
      <div className="login-card perfil-card">
        <div className="avatar">
          {usuario.nome.charAt(0).toUpperCase()}
        </div>

        <h1 className="title">{usuario.nome}</h1>

        <div className="perfil-info">
          <div className="info-item">
            <span className="icon">🚹</span>
            <span>{usuario.tipo}</span>
          </div>
          <div className="info-item">
            <span className="icon">✉</span>
            <span>{usuario.email}</span>
          </div>
          <div className="info-item">
            <span className="icon">🪪</span>
            <span>RM: {usuario.rm}</span>
          </div>
        </div>

        <button className="submit-btn sair-btn" onClick={handleSair}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Perfil;