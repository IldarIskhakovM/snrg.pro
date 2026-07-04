export default function Hero() {
  return (
    <section style={{
      textAlign: "center",
      padding: "110px 20px"
    }}>
      <div className="container">
        <h1 style={{
          fontSize: 52,
          fontWeight: 700,
          letterSpacing: -1,
          marginBottom: 16
        }}>
          Автоматизация промышленных процессов
        </h1>

        <p style={{
          opacity: 0.7,
          fontSize: 18,
          maxWidth: 700,
          margin: "0 auto 30px"
        }}>
          Инженерные решения для АСУ ТП, SCADA и промышленных предприятий
        </p>

        <button style={{
          background: "linear-gradient(90deg,#ff4d1a,#ff7a18)",
          border: "none",
          padding: "14px 26px",
          borderRadius: 10,
          color: "white",
          fontWeight: 600,
          cursor: "pointer"
        }}>
          Обсудить проект
        </button>
      </div>
    </section>
  );
}
