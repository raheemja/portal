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
  Badge,
} from "@chakra-ui/react";

import { Row, Col } from "react-bootstrap";

import Card from "../../common/card";

// Icons
import { FiPhone, FiMail } from "react-icons/fi";

const ContactCard = (props) => {
  const { id, displayName, phoneNumber, email, relationship } = props;

  function getBadgeColor() {
    let badgeColor = "";

    switch (relationship) {
      case "Mother":
        badgeColor = "pink.400";
        break;

      case "Father":
        badgeColor = "blue.400";
        break;

      case "Brother":
        badgeColor = "blue.600";
        break;

      case "Sister":
        badgeColor = "pink.600";
        break;

      case "Son":
        badgeColor = "blue.500";
        break;

      case "Uncle":
        badgeColor = "blue.900";
        break;

      case "Aunt":
        badgeColor = "pink.700";
        break;

      case "Partner":
        badgeColor = "green.500";
        break;

      case "Spouse":
        badgeColor = "orange.400";
        break;

      case "Friend":
        badgeColor = "";
        break;

      case "Family Member":
        badgeColor = "";
        break;

      case "Emergency":
        badgeColor = "red.500";
        break;

      case "Teacher":
        badgeColor = "teal.400";
        break;

      default:
        badgeColor = "blue.400";
    }

    return badgeColor;
  }

  return (
    <Card xs={12} md={12} lg={12} w={"100%"}>
      <Heading
        pt={2}
        as={"h6"}
        size="sm"
        color={useColorModeValue("gray.500", "gray.600")}
      >
        {displayName}
        {relationship ? (
          <Badge ml={2} variant="solid" bg={getBadgeColor()}>
            {relationship}
          </Badge>
        ) : (
          <></>
        )}
      </Heading>

      <HStack>
        <FiMail color={"gray.300"} />
        <Text fontSize="sm" pb={1} color={"blue.400"}>
          <Link href={`mailto:${email}`}>{email}</Link>
        </Text>
      </HStack>

      <HStack>
        <FiPhone color="green" />
        <Text fontSize="sm" color={"gray.500"}>
          {phoneNumber}
        </Text>
      </HStack>
    </Card>
  );
};

export default ContactCard;
