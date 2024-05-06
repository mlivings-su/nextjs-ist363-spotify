import classNames from "classnames/bind";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const Home = () => {
  return (
    <main>
      <Heading level={1}>Spotify</Heading>

      <Heading level={2} marginBottom>
        Artists
      </Heading>

      <Heading level={3}>Songs</Heading>

      <Paragraph intro>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. voluptas nulla
      </Paragraph>

      <Paragraph marginBottom={1}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. voluptas nulla
      </Paragraph>

      <Paragraph marginBottom={5}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. voluptas nulla
      </Paragraph>

      <Paragraph caption>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. voluptas nulla
      </Paragraph>
    </main>
  );
};
export default Home;
