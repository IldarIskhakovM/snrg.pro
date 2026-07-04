export default function Header() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      backdropFilter: "blur(10px)",
      background: "rgba(11,18,32,0.7)",
      borderBottom: "1px solid #1f2937",
      zIndex: 10
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo.png" width={38} height={38} />
          <b style={{ letterSpacing: 1 }}>СИНЕРГИЯ</b>
        </div>

        <nav style={{ display: "flex", gap: 22, fontSize: 14 }}>
          <a href="#services">Услуги</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
