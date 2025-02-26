"use client";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
const { default: Link } = require("next/link");

const NavLink = ({ item }) => {
  const pathName = usePathname();
  console.log(pathName);
  console.log(item.path, "item path");

  return (
    <Link
      href={item.path}
      className={`${styles.container}${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};
export default NavLink;
