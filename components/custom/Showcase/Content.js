import { motion } from "framer-motion";
import ButtonUI from "../../html/ButtonUI";
import Col from "../../layout/Col/Col";
import Container from "../../layout/Container/Container";
import Heading from "../../html/Heading";
import Image from "next/image";
import Row from "../../layout/Row/Row";

import styles from "./Showcase.module.scss";

const ShowcaseContent = ({
  activeIndex,
  items,
  isExpanded,
  latestRelease,
  setActiveIndex,
  setIsExpanded,
}) => {
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
    <div className={styles.showcase__content}>
      <Container>
        <Row alignItems="flex-end" paddingBottom={2}>
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
              key={`number-${activeIndex}`}
            >
              <span className={styles.showcase__number}>{activeIndex + 1}</span>
            </motion.div>
          </Col>

          <Col xs={9} md={6}>
            <motion.h2
              variants={headlineVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.showcase__artist__name}
              key={`artist-${activeIndex}`}
            >
              {items[activeIndex].name}
            </motion.h2>
          </Col>
        </Row>
        <Row paddingBottom={1} paddingTop={1} borderTop={1}>
          <Col md={1}>
            <Row justifyContent="space-between">
              <ButtonUI
                icon="faAngleLeft"
                clickHandler={() => {
                  setActiveIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
                }}
              />
              <ButtonUI
                icon="faAngleRight"
                clickHandler={() => {
                  setActiveIndex(
                    activeIndex >= items.length - 1
                      ? items.length - 1
                      : activeIndex + 1
                  );
                }}
              />
            </Row>
          </Col>
          {latestRelease && (
            <Col md={5}>
              <div className={styles.showcase__latest}>
                <Row>
                  <Col xs={4} sm={4}>
                    <Image
                      src={latestRelease.images[0].url}
                      alt={latestRelease.name}
                      width={latestRelease.images[0].width}
                      height={latestRelease.images[0].height}
                      className={styles.album__cover}
                    />
                  </Col>
                  <Col xs={8} sm={8}>
                    <Heading level={3}>Latest release</Heading>
                    <Heading level={4}>{latestRelease.name}</Heading>
                    <Heading level={5}>
                      {latestRelease.release_date.split("-")[0]}
                    </Heading>
                    <p>{latestRelease.name}</p>
                    <p>{latestRelease.release_date}</p>
                  </Col>
                </Row>
              </div>
            </Col>
          )}
          <Col md={6} textAlign="right">
            <ButtonUI
              label="View artist page"
              icon="faArrowRight"
              clickHandler={() => {
                setIsExpanded(true);
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowcaseContent;