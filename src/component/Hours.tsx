function Hours() {
  return (
    <section className="hours">
      <span className="section-label">Åpningstider 2025</span>
      <h2 className="section-title">Velkommen innom</h2>

      <div className="hours-grid">
        <div className="hours-cell">
          <div className="hours-day">Mandag</div>
          <div className="hours-closed">Stengt</div>
        </div>
        <div className="hours-cell">
          <div className="hours-day">Tir – Lør</div>
          <div className="hours-time">12 – 20</div>
        </div>
        <div className="hours-cell">
          <div className="hours-day">Søndag</div>
          <div className="hours-time">12 – 18</div>
        </div>
      </div>

      <p className="hours-note">Kjøkkenet stenger 30 min. før stengetid</p>
    </section>
  );
}

export default Hours;
