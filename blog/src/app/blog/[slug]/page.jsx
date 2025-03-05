import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/4836103/pexels-photo-4836103.jpeg"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          {" "}
          <Image
            src="https://images.pexels.com/photos/4836103/pexels-photo-4836103.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
          facilisis odio. Proin dignissim odio sit amet arcu consectetur,
          porttitor ornare lacus maximus. Aenean maximus, mauris eget hendrerit
          mattis, nisi sapien faucibus ligula, at suscipit nisi lorem eget
          purus. Praesent porta purus eget neque vehicula pulvinar. Aenean
          gravida consectetur odio, nec auctor felis convallis vitae.
          Suspendisse pulvinar sem a lectus vulputate, ac vulputate tellus
          molestie. Proin non elementum massa, in pretium turpis. In faucibus
          porttitor est, in pretium risus aliquet at. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed vel dapibus urna.
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
