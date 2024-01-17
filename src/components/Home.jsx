import styles from "./Home.module.css";

function Home() {
  const gamesArray = ["Бридж-Белот", "Сантасе", "Генерал"];

  return (
    <>
      <h1 className={styles.mainHeading}>Tefter</h1>

      <p className={styles.homeTextContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At error
        recusandae voluptate quas, deleniti eos maxime odio molestiae explicabo
        hic, animi labore earum adipisci reiciendis saepe aliquid eius quidem
        porro ut quisquam. Quam eos saepe distinctio quia labore? Esse, dolorem
        et itaque quidem commodi praesentium eveniet accusantium cum ex facilis!
      </p>

      <ul className={styles.gamesContainer}>
        {gamesArray.map((game, i) => (
          <li key={i} className={styles.listItem}>
            <button className={styles.gameBtn}>{game}</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
