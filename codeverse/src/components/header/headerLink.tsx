"use client";
import Link from "next/link";
import classes from "./header.module.scss";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function Header(props: NavLinkProps) {
  const path = usePathname();
  const isActive = path === props.href;
  return (
    <Link href={props.href} className={isActive ? classes.active : "undefined"}>
      {props.children}
    </Link>
  );
}
