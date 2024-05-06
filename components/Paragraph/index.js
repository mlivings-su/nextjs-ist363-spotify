import classNames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classNames.bind(styles);
const Paragraph = ({
  caption,
  children,
  intro,
  marginBottom,
  marginTop,

  marginRight,
  marginLeft,
}) => {
  const paragraphClasses = cx({
    paragraph: true,
    intro: intro,
    caption: caption,
    [`margin-bottom--something`]: marginBottom,
    [`margin-top--something`]: marginTop,
    [`margin-right--something`]: marginRight,
    [`margin-left--something`]: marginLeft,
  });
  return <p className={paragraphClasses}>{children}</p>;
};
export default Paragraph;
