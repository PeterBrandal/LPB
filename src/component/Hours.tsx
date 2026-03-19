import { useState } from 'react';

type Season = 'summer' | 'offseason';

const schedules: Record<Season, { label: string; days: { day: string; time: string | null }[] }> = {
  summer: {
    label: 'Sommersesong',
    days: [
      { day: 'Mandag',   time: null },
      { day: 'Tir – Lør', time: '12 – 20' },
      { day: 'Søndag',   time: '12 – 18' },
    ],
  },
  offseason: {
    label: 'Lavsesong',
    days: [
      { day: 'Man – Ons', time: null },
      { day: 'Tor – Lør', time: '14 – 20' },
      { day: 'Søndag',   time: '13 – 17' },
    ],
  },
};

function Hours() {
  const [season, setSeason] = useState<Season>('summer');
  const schedule = schedules[season];

  return (
    <section id="apningstider" className="hours">
      <span className="section-label">Åpningstider 2026</span>
      <h2 className="section-title">Velkommen innom</h2>

      <div className="hours-toggle">
        {(Object.keys(schedules) as Season[]).map(s => (
          <button
            key={s}
            className={`hours-toggle-btn ${season === s ? 'active' : ''}`}
            onClick={() => setSeason(s)}
          >
            {schedules[s].label}
          </button>
        ))}
      </div>

      <div className="hours-grid">
        {schedule.days.map(({ day, time }) => (
          <div key={day} className="hours-cell">
            <div className="hours-day">{day}</div>
            {time
              ? <div className="hours-time">{time}</div>
              : <div className="hours-closed">Stengt</div>
            }
          </div>
        ))}
      </div>

      <p className="hours-note">Kjøkkenet stenger 30 min. før stengetid</p>
    </section>
  );
}

export default Hours;
