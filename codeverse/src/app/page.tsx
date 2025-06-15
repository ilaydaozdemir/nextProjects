import Image from "next/image";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.mainContainer}>
      <div className="slideSide">
        <Image src="/homepage.jpg" alt="Logo" width={450} height={350} />
      </div>
      <div className="mainContent">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        laborum quibusdam odio necessitatibus suscipit dicta optio ipsa
        voluptates praesentium est voluptate saepe quis consectetur deserunt,
        dolorum, repudiandae, provident sint molestiae distinctio nobis! Minus
        qui nihil ad perspiciatis, incidunt vitae blanditiis a deserunt esse
        assumenda veniam.
      </div>
    </div>
  );
}
