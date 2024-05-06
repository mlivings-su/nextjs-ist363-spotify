import classnames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

const Heading = ({ children, level, marginBottom }) => {
  const Tag = `h${level}`;

  const headingClasses = cx({
    heading: true,
    [`heading--${level}`]: level,
    [`margin-bottom--something`]: marginBottom,
  });

  return <Tag classNames={headingClasses}>{children}</Tag>;
};
export default Heading;
