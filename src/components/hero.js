import Image from "next/image";
import styles from "@/styles/hero.module.scss";

const Hero = ({ imageSrc, alt }) => (
  <div className={styles.heroImgContainer}>
    <div className={styles.tint}></div>
    <Image
      src={imageSrc}
      alt={alt}
      width={2000}
      height={2000}
      className={styles.heroImg}
    />
  </div>
);

export default Hero;
