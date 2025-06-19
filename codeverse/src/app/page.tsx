import Image from "next/image";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.title}>
        CodeVerse’e Hoş Geldiniz: Kodlama Arkadaşınız
      </div>
      <div className={classes.mainContent}>
        <div className={classes.slideSide}>
          <Image src="/homepage.jpg" alt="Logo" width={450} height={350} />
        </div>
        <div className="mainContent">
          <b>
            CodeVerse, web geliştirme dünyasına adım atan herkes için
            tasarlanmış modern ve kullanıcı dostu bir platformdur.
          </b>
          <br /> Burada; Güncel teknoloji ve araçlarla hazırlanmış örnek
          projeler bulabilir, <br />
          Frontend ve backend konularında faydalı kaynaklara ulaşabilir, <br />{" "}
          Kendi projelerinizi yönetip paylaşabilir, <br /> Kodlama
          becerilerinizi geliştirmek için rehberler ve ipuçları
          keşfedebilirsiniz. <br />
          Amacımız, hem yeni başlayanlara hem de deneyimli geliştiricilere ilham
          vermek ve birlikte öğrenme ortamı yaratmaktır. CodeVerse ile kodlama
          yolculuğunuzda her adımda yanınızdayız!
        </div>
      </div>
    </div>
  );
}
