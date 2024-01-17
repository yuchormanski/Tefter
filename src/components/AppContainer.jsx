import styles from "./AppContainer.module.css";

import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation.jsx";

function AppContainer() {
  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppContainer;
