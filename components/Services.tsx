export default function Services() {
  return (
    <section style={{ padding: "60px 40px" }}>
      <h2 style={{ fontSize: 32, marginBottom: 20 }}>Услуги</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }}>
        <div style={{ padding: 20, background: "#111827", borderRadius: 12 }}>
          <h3>АСУ ТП</h3>
          <p>Проектирование систем автоматизации</p>
        </div>

        <div style={{ padding: 20, background: "#111827", borderRadius: 12 }}>
          <h3>SCADA</h3>
          <p>Системы диспетчеризации и мониторинга</p>
        </div>

        <div style={{ padding: 20, background: "#111827", borderRadius: 12 }}>
          <h3>ПЛК</h3>
          <p>Контроллеры ОВЕН и FASTWEL</p>
        </div>
      </div>
    </section>
  );
}
