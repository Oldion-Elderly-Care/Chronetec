import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const months = [
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
];

const typeColors = {
  evento: '#b8f3a7',
  tarefa: '#5c74e8',
  prova: '#ff6b6b',
  prazo: '#d86be6'
};

const storageKey = 'oldion-events';

export default function Home() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const [events, setEvents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch {
      return [];
    }
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [form, setForm] = useState({ title: '', type: 'evento', time: '', description: '' });

  const calendar = useMemo(() => {
    return Array.from({ length: 12 }, (_, month) => {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startWeekday = (firstDay.getDay() + 6) % 7;
      const days = [];
      for (let i = 0; i < startWeekday; i++) days.push(null);
      for (let d = 1; d <= lastDay.getDate(); d++) days.push(d);
      while (days.length % 7 !== 0) days.push(null);
      return { month, days };
    });
  }, [year]);

  const saveEvents = (next) => {
    setEvents(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const handleDayClick = (month, day) => {
    const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(iso);
  };

  const handleCreate = () => {
    if (!form.title.trim() || !selectedDate) return;
    const next = [...events, { id: Date.now(), date: selectedDate, ...form }];
    saveEvents(next);
    setForm({ title: '', type: 'evento', time: '', description: '' });
    setSelectedDate('');
  };

  const eventsByDate = (date) => events.filter(e => e.date === date);

  return (
    <div className="home-shell">
      <aside className="sidebar">
        <div className="brand-box">
          <div className="brand-title">Oldion</div>
          <div className="brand-subtitle">Calendário escolar</div>
        </div>

        <div className="legend-title">Cores cronograma</div>
        {[
          ['prova', 'Provas/importante'],
          ['evento', 'Eventos'],
          ['tarefa', 'Atividades/tarefas'],
          ['prazo', 'Prazo Projetos'],
        ].map(([key, label]) => (
          <div className="legend-item" key={key}>
            <span className="legend-dot" style={{ background: typeColors[key] }} />
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div>
            <h1>Calendário - {year}</h1>
            <p>Crie tarefas e eventos para qualquer data do ano</p>
          </div>
          <button className="profile-btn" onClick={() => navigate('/perfil')} title="Perfil">👤</button>
        </header>

        <section className="year-grid">
          {calendar.map(({ month, days }) => (
            <div className="month-card" key={month}>
              <div className="month-title">{months[month]}</div>
              <div className="weekday-row">
                {['S','T','Q','Q','S','S','D'].map((w, i) => <span key={i}>{w}</span>)}
              </div>
              <div className="days-grid">
                {days.map((day, idx) => {
                  if (!day) return <div className="day empty" key={idx} />;
                  const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const dayEvents = eventsByDate(iso);
                  return (
                    <button className="day" key={idx} onClick={() => handleDayClick(month, day)}>
                      <span className="day-number">{day}</span>
                      <div className="event-dots">
                        {dayEvents.slice(0, 3).map(ev => (
                          <span key={ev.id} className="event-dot" style={{ background: typeColors[ev.type] || '#999' }} />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {selectedDate && (
          <div className="modal-overlay" onClick={() => setSelectedDate('')}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <h2>Novo compromisso</h2>
              <p>{selectedDate}</p>
              <input placeholder="Título" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option value="evento">Evento</option>
                <option value="tarefa">Tarefa</option>
                <option value="prova">Prova</option>
                <option value="prazo">Prazo</option>
              </select>
              <input placeholder="Horário (opcional)" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
              <textarea placeholder="Descrição (opcional)" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <div className="modal-actions">
                <button className="secondary" onClick={() => setSelectedDate('')}>Cancelar</button>
                <button className="primary" onClick={handleCreate}>Salvar</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}