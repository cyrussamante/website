import styles from "./hero.module.css";
import Button from "../components/Button";

const greeting = "Hey, I'm";
const name = "CYRUSS AMANTE";
const description =
  "A passionate web developer with a love for creating dynamic and responsive user experiences.";

function Hero() {
  const circleC1 = `${styles.circle} ${styles.c1}`;
  const circleC2 = `${styles.circle} ${styles.c2}`;
  const circleC3 = `${styles.circle} ${styles.c3}`;
  return (
    <div className={styles.container}>
      <section className={styles.leftSection}>
        <div className={styles.textContainer}>
          <h3 className={styles.greeting}>{greeting}</h3>
          <h1 className={styles.name}>{name}</h1>
          <p>{description}</p>
          <Button id={styles.heroBtn} type="button" variant="primary" size="lg">
            Check out my work
          </Button>
        </div>
      </section>
      <section className={styles.rightSection}>
        <img
          src="../images/hero-image.jpg"
          alt="An image of Cyruss Amante showing his iron ring."
          className={styles.heroImage}
        />
        <div className={styles.circleBackdrop}>
          <div className={circleC1} />
          <div className={circleC2} />
          <div className={circleC3} />
        </div>
      </section>
    </div>
  );
}

export default Hero;
