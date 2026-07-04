</> TypeScript
export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      borderBottom: "1px solid #1f2937"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="/logo.png" width={40} height={40} />
        <b>СИНЕРГИЯ</b>
      </div>

      <nav style={{ display: "flex", gap: 20 }}>
        <a href="#">Услуги</a>
        <a href="#">Проекты</a>
        <a href="#">Контакты</a>
      </nav>
    </header>
  );
}
