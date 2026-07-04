export default function Hero() {
  return (
    <section style={{
      padding: "90px 20px",
      textAlign: "center"
    }}>
      <div className="container">
        <h1 style={{
          fontSize: 44,
          marginBottom: 16,
          lineHeight: 1.1
        }}>
          АСУ ТП и промышленная автоматизация
        </h1>

        <p style={{
          fontSize: 18,
          opacity: 0.75,
          maxWidth: 700,
          margin: "0 auto 30px"
        }}>
          Проектирование, внедрение и сопровождение систем управления технологическими процессами для промышленных предприятий
        </p>

        <button style={{
          background: "#ff4d1a",
          color: "white",
          padding: "12px 22px",
          borderRadius: 10,
          border: "none",
          fontWeight: 600,
          cursor: "pointer"
        }}>
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
