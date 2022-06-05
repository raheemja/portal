import {
  Heading,
  Text,
  Avatar,
  useColorModeValue,
  Stack,
  HStack,
  Center,
  Alert,
  Link,
} from "@chakra-ui/react";

import { Row, Col } from "react-bootstrap";

import Card from "../../common/card";

// Icons
import { FiPhone, FiMail } from "react-icons/fi";

const ContactCard = (props) => {
  const { id, displayName, phoneNumber, email } = props;
  return (
    <Card>
      <Row>
        <Col xs={3} md={3} lg={3}>
          <Avatar scr="" />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <Text color="blue.400">{displayName}</Text>

          <Text fontSize="sm" pb={1}>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Text>

          <HStack>
            <FiPhone color="green" />
            <Text fontSize="sm">{phoneNumber}</Text>
          </HStack>
        </Col>
      </Row>
    </Card>
  );
};

export default ContactCard;
