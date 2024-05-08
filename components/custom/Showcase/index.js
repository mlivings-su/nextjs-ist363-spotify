import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Col from "../../layout/Col/Col";
import Container from "../../layout/Container/Container";
import Image from "next/image";
import Row from "../../layout/Row/Row";
import styles from "./Showcase.module.scss";

const Showcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headlineVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const numberVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };
  return (
    <div className={styles.showcase}>
      <AnimatePresence>
        <div className={styles.showcase__images}>
          <ul
            className={styles.showcase__images__list}
            style={{
              width: `${items.length * 100}%`,
              transform: `translateX(-${(activeIndex / items.length) * 100}%)`,
            }}
          >
            {items.map((item, index) => {
              return (
                <li className={styles.showcase__images__list__item} key={index}>
                  <Image
                    src={item.images[0].url}
                    alt={item.name}
                    width={item.images[0].width}
                    height={item.images[0].height}
                    className={styles.showcase__images____list__item__image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.showcase__content}>
          <Container>
            <Row alignItems="flex-end">
              <Col md={1}>
                <span className={styles.showcase__counter}>
                  {activeIndex + 1}/{items.length}
                </span>
              </Col>
              <Col xs={3} md={5}>
                <motion.div
                  variants={numberVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={`number=${activeIndex}`}
                >
                  <span className={styles.showcase__number}>
                    {activeIndex + 1}
                  </span>
                </motion.div>
              </Col>

              <Col xs={9} md={6}>
                <motion.h2
                  className={styles.showcase__artist}
                  key={items[activeIndex].name}
                  variants={headlineVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {items[activeIndex].name}
                </motion.h2>
              </Col>
            </Row>
            <Row paddingBottom={1} paddingTop={1} borderTop={1}>
              <Col md={1}>
                <Row justifyContent="space-between">
                  <button
                    onClick={() => {
                      setActiveIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
                    }}
                  >
                    Prev
                  </button>

                  <button
                    onClick={() => {
                      setActiveIndex(
                        activeIndex >= items.length - 1
                          ? items.length - 1
                          : activeIndex + 1
                      );
                    }}
                  >
                    Next
                  </button>
                </Row>
              </Col>
              <Col md={5}>Latests release</Col>

              <Col md={6}>
                <button>Watch music video</button>
                <button>View artists page</button>
              </Col>
            </Row>
          </Container>
        </div>
      </AnimatePresence>
    </div>
  );
};
export default Showcase;
