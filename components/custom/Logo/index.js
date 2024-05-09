import Image from "next/image";

import styles from "./Logo.module.scss";

const Logo = ({ fill }) => {
  return (
    <Image
      src={`spotify-logo--${fill}.svg`}
      alt={`${fill} Spotify Logo`}
      width={78}
      height={24}
      className={styles.logo}
    />
  );
};

export default Logo;
