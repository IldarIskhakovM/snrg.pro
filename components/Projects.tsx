const projects = [
  { title: "Насосная станция", desc: "Автоматизация управления насосами" },
  { title: "Котельная", desc: "Контроль температуры и давления" },
  { title: "Производственная линия", desc: "Интеграция PLC + SCADA" }
];

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ padding: "60px 20px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 20 }}>Проекты</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 16
      }}>
        {projects.map((p) => (
          <div key={p.title} style={{
            background: "#0f172a",
            padding: 18,
            borderRadius: 14,
            border: "1px solid #1f2937"
          }}>
            <h3>{p.title}</h3>
            <p style={{ opacity: 0.7 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
