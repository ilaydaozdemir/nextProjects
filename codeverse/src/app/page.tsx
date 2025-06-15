import Image from "next/image";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.mainContainer}>
      <div className="slideSide">
        <Image src="/homepage.jpg" alt="Logo" width={450} height={350} />
      </div>
      <div className="mainContent">admin page</div>
    </div>
  );
}
