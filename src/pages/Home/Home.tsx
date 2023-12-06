import { Card } from "../../components/card/Card";
import { Text } from "../../components/text/Text";
import { Button } from "../../components/button/Button";

export const Home = () => (
  <Card>
    <Card.Body>
      <Text type="h1">Hello traveler,</Text>
      <Text>
        First time with us? Hah! No wonder I don&apos;t know your face! What?
        Would you like to know what is going on here in the region? Hah! No
        problem, I&apos;ll be happy to tell you, of course ... for the
        appropriate fee.
      </Text>
    </Card.Body>
    <Card.Footer>
      <Button isLink to="/generator">
        Gossip
      </Button>
    </Card.Footer>
  </Card>
);
