import classes from "./header.module.scss";
import HeaderLink from "./headerLink";
export default function HeaderContainer() {
  return (
    <header>
      <div className={classes.headerContainer}>
        <div className={classes.logo}>CodeVerse</div>
        <div className={classes.rightside}>
          <HeaderLink href="/">Anasayfa</HeaderLink>
          <HeaderLink href="/category">Kategoriler</HeaderLink>
          <HeaderLink href="/admin">Admin</HeaderLink>
        </div>
      </div>
    </header>
  );
}
