import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleRight,
  faAngleLeft,
  faArrowRight,
  faArrowDown,
  faAngleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faAngleLeft: faAngleLeft,
  faAngleRight: faAngleRight,
  faBars: faBars,
  faArrowRight: faArrowRight,
  faArrowDown: faArrowDown,
  faAngleDown: faAngleDown,
  faXmark: faXmark,
};

const Icon = ({ icon }) => {
  const matchingIcon = icons[icon];
  return <FontAwesomeIcon icon={matchingIcon} />;
};
export default Icon;
