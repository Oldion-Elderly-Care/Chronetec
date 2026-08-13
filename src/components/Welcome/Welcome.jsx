import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import heroLayers from '../../assets/hero.png';

const Arrow = () => <span aria-hidden="true">→</span>;

const Logo = () => (
  <button className="landing-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao início">
    <img src={`${import.meta.env.BASE_URL}chronetec-logo.svg`} alt="Chronetec" />
  </button>
);

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-nav">
        <Logo />
        <nav aria-label="Navegação principal">
          <a href="#recursos">Recursos</a>
          <a href="#sobre">Sobre</a>
          <a href="#equipe">Equipe</a>
        </nav>
        <div className="nav-actions">
          <button className="text-button" onClick={() => navigate('/login')}>Entrar</button>
          <button className="nav-cta" onClick={() => navigate('/cadastro')}>Criar conta</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow"><span>✦</span> Feito para a vida escolar</span>
            <h1>Sua rotina escolar, <em>mais leve.</em></h1>
            <p>Provas, trabalhos, eventos e prazos reunidos em um calendário simples — para você se organizar sem complicação.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => navigate('/cadastro')}>Começar agora <Arrow /></button>
              <a className="secondary-button" href="#recursos">Conhecer a Chronetec</a>
            </div>
            <div className="hero-note"><span>✓</span> Gratuito para estudantes <span>•</span> Fácil de usar</div>
          </div>

          <div className="hero-visual" aria-label="Prévia do calendário Chronetec">
            <div className="visual-blob visual-blob-one" />
            <div className="visual-blob visual-blob-two" />
            <div className="preview-card">
              <div className="preview-header">
                <div><small>MINHA SEMANA</small><strong>12 – 18 Agosto</strong></div>
                <span className="preview-avatar">MZ</span>
              </div>
              <div className="preview-days">
                {['SEG 12', 'TER 13', 'QUA 14', 'QUI 15', 'SEX 16'].map((day, index) => (
                  <span className={index === 2 ? 'active' : ''} key={day}>{day.split(' ')[0]}<b>{day.split(' ')[1]}</b></span>
                ))}
              </div>
              <div className="preview-events">
                <div className="preview-event purple"><span>09:30</span><div><strong>Prova de Matemática</strong><small>Sala 12 • 2º Bimestre</small></div></div>
                <div className="preview-event mint"><span>14:00</span><div><strong>Entrega do projeto</strong><small>Laboratório de Informática</small></div></div>
                <div className="preview-event amber"><span>18:30</span><div><strong>Feira Cultural</strong><small>Pátio principal</small></div></div>
              </div>
            </div>
            <img className="hero-layers" src={heroLayers} alt="" />
            <div className="floating-badge"><span>✓</span><div><strong>Tudo em dia!</strong><small>Você não perdeu nenhum prazo</small></div></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Benefícios">
          <div><strong>01</strong><span>Visão clara<br />do seu ano</span></div>
          <div><strong>02</strong><span>Organização<br />sem esforço</span></div>
          <div><strong>03</strong><span>Foco no que<br />importa</span></div>
        </section>

        <section className="features-section" id="recursos">
          <div className="section-heading">
            <span className="eyebrow">RECURSOS</span>
            <h2>Tudo que você precisa.<br /><em>Nada que complique.</em></h2>
            <p>Uma experiência pensada para ajudar estudantes a planejar melhor e viver a escola com mais tranquilidade.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card purple-card"><span className="feature-icon">▦</span><h3>Calendário completo</h3><p>Visualize todo o ano letivo e encontre provas, eventos e prazos rapidamente.</p></article>
            <article className="feature-card mint-card"><span className="feature-icon">✓</span><h3>Compromissos organizados</h3><p>Separe cada item por tipo e entenda suas prioridades com cores fáceis de reconhecer.</p></article>
            <article className="feature-card amber-card"><span className="feature-icon">◎</span><h3>Feito para você</h3><p>Uma interface acolhedora, responsiva e direta, do primeiro acesso ao último compromisso.</p></article>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <img className="about-logo" src={`${import.meta.env.BASE_URL}chronetec-mark.svg`} alt="Símbolo da Chronetec" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">NOSSO OBJETIVO</span>
            <h2>Menos preocupação.<br /><em>Mais aprendizado.</em></h2>
            <p>A Chronetec nasceu na ETEC Bento Quirino para transformar a maneira como a comunidade escolar acompanha seus cronogramas. Em vez de informações espalhadas, oferecemos um espaço único, visual e acessível para planejar o dia a dia.</p>
            <p>Nosso objetivo é simples: reduzir esquecimentos, dar clareza aos próximos passos e devolver ao aluno tempo para o que realmente importa — aprender.</p>
          </div>
        </section>

        <section className="team-section" id="equipe">
          <div className="section-heading centered">
            <span className="eyebrow">QUEM FAZ</span>
            <h2>Desenvolvido por quem<br /><em>acredita na educação.</em></h2>
          </div>
          <div className="team-grid">
            <article className="team-card"><span className="team-avatar murilo">MZ</span><div><h3>Murilo M. Zanetti</h3><p>Desenvolvimento do projeto</p></div></article>
            <article className="team-card"><span className="team-avatar felipe">FG</span><div><h3>Felipe Torres Gonzalez</h3><p>Desenvolvimento do projeto</p></div></article>
          </div>
        </section>

        <section className="final-cta">
          <span className="cta-spark">✦</span><span className="cta-dot" />
          <h2>Pronto para deixar sua<br />rotina escolar <em>mais leve?</em></h2>
          <p>Comece agora e organize seu ano letivo em poucos minutos.</p>
          <button className="primary-button light" onClick={() => navigate('/cadastro')}>Criar minha conta <Arrow /></button>
        </section>
      </main>

      <footer>
        <Logo />
        <p>Organizando hoje. Transformando o amanhã.</p>
        <span>© {new Date().getFullYear()} Chronetec • Projeto acadêmico</span>
      </footer>
    </div>
  );
};

export default Welcome;
