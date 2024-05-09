import { useState, useEffect } from "react";

import { AnimatePresence } from "framer-motion";

import ShowcaseContent from "./Content";
import ShowcaseImages from "./images";

import styles from "./Showcase.module.scss";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";

const Showcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [albums, SetAlbums] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      try {
        // console.log("useeffect for showcase");
        fetch(`/api/albums?id=${items[activeIndex].id}`)
          .then((res) => res.json())
          .then((data) => {
            SetAlbums(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [activeIndex]);

  return (
    <div className={styles.showcase}>
      <AnimatePresence>
        <ShowcaseImages
          items={items}
          activeIndex={activeIndex}
          isExpanded={isExpanded}
        />

        <ShowcaseContent
          item={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          latestRelease={albums.length > 0 ? albums[0] : null}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </AnimatePresence>
    </div>
  );
};
export default Showcase;
