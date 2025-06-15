import classes from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p>© 2025 CodeVerse. Tüm hakları saklıdır.</p>
        <nav className={classes.nav}>
          <a href="/about">Hakkımızda</a>
          <a href="/contact">İletişim</a>
          <a href="/privacy">Gizlilik Politikası</a>
        </nav>
      </div>
    </footer>
  );
}
