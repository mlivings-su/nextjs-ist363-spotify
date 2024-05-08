import Col from "../../layout/Col/Col";
import Container from "../../layout/Container/Container";
import Row from "../../layout/Row/Row";
import styles from "./Showcase.module.scss";

const Showcase = () => {
  return (
    <div classNames={styles.showcase}>
      <div className={styles.showcase__images}>Image goes here</div>
      <div className={styles.showcase__content}>
        <Container>
          <Row alignItems="flex-end">
            <Col md={1}>
              <span className={styles.showcase__counter}> 01/10</span>
            </Col>
            <Col xs={3} md={5}>
              1
            </Col>
            <span className={styles.showcase__number}>1</span>

            <Col xs={9} md={6}>
              <h2 className={styles.showcase__artist}>Taylor Swift</h2>
            </Col>
          </Row>
          <Row paddingBottom={1} paddingTop={1} borderTop={1}>
            <Col md={1}>
              <Row justifyContent="space-between">
                <button>Prev</button>
                <button>Next</button>
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
    </div>
  );
};
export default Showcase;
