export default function Projects() {
  return (
    <section style={{ padding: "60px 40px" }}>
      <h2 style={{ fontSize: 32, marginBottom: 20 }}>
        Реализованные проекты
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }}>
        
        <div style={{ padding: 20, background: "#111827", borderRadius: 12 }}>
          <h3>Насосная станция</h3>
          <p>Автоматизация управления насосами</p>
        </div>

        <div style={{ padding: 20, background: "#111827", borderRadius: 12 }}>
          <h3>Котельная</h3>
          <p>Система контроля температуры и давления</p>
        </div>

        <div style={{ padding: 20, background: "#111827", borderRadius: 12 }}>
          <h3>Заводская линия</h3>
          <p>Полная интеграция PLC и SCADA</p>
        </div>

      </div>
    </section>
  );
}
