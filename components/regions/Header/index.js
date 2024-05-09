import Heading from "../../html/Heading/index";
import Logo from "../../custom/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo fill="white" />
      <br />
      <Heading level={1}>Top 10 artitsts</Heading>
    </header>
  );
};

export default Header;
