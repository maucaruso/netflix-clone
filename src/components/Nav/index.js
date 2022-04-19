import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import netflixLogo from "../../assets/logo-netflix.svg";
import avatarIcon from "../../assets/avatar.png";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`${styles.nav} ${show && styles.nav__black}`}>
      <div className={styles.nav__contents}>
        <img className={styles.nav__logo} src={netflixLogo} alt="Netflix" />
        <img
          className={styles.nav__avatar}
          src={avatarIcon}
          alt="Nome usuário"
        />
      </div>
    </div>
  );
}

export default Nav;
