const items = [
  { title: "АСУ ТП", desc: "Полный цикл автоматизации производств" },
  { title: "SCADA", desc: "Мониторинг и диспетчеризация" },
  { title: "ПЛК системы", desc: "Программирование и интеграция контроллеров" }
];

export default function Services() {
  return (
    <section id="services" className="container" style={{ padding: "60px 20px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 20 }}>Услуги</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 16
      }}>
        {items.map((i) => (
          <div key={i.title} style={{
            background: "#111827",
            padding: 18,
            borderRadius: 14,
            border: "1px solid #1f2937"
          }}>
            <h3 style={{ marginBottom: 8 }}>{i.title}</h3>
            <p style={{ opacity: 0.7 }}>{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
