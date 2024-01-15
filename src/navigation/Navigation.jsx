import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.font}>
      <ion-icon name="accessibility-outline"></ion-icon>
      Test test
      <p>
        <i className="fa-brands fa-linkedin-in"></i>
      </p>
    </div>
  );
}

export default Navigation;
