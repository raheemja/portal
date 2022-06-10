import {
  Container,
  Flex,
  Box,
  Alert,
  Text,
  Badge,
  Button,
  Avatar,
  useColorModeValue,
  Stack,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";

import Link from "next/link";
import Card from "../../../common/card";

import { Row, Col } from "react-bootstrap";

// Icons
import { FiTrash2 } from "react-icons/fi";

const TodoItem = (props) => {
  const { title, message, category, createdAt, href, action } = props;

  /* */
  const color =
    category === "ACCOUNT"
      ? "blue.400"
      : category === "PROFILE"
      ? "green.400"
      : category === "COURSE"
      ? "yellow.400"
      : "orange.400";

  return (
    <>
      <Row>
        <Col xs={1}>
          <Box
            w={"full"}
            color={""}
            bg={useColorModeValue(color, color)}
            boxShadow={"1xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack textAlign={"left"} p={6} align={"left"}>
              <br /> <br /> <br />
            </Stack>
          </Box>
        </Col>
        <Col xs={11}>
          <Box
            w={"full"}
            color={""}
            bg={useColorModeValue("white", "white")}
            boxShadow={"1xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack textAlign={"left"} p={6} align={"left"}>
              <Text
                color={"gray.500"}
                fontSize={{ base: "sm", sm: "md" }}
                pb={2}
              >
                {message}
              </Text>

              <Link href={href}>
                <Button
                  w="40%"
                  color={"white"}
                  bg={useColorModeValue("gray.400", "gray.400")}
                  size={"sm"}
                >
                  {action || "Get Started"}
                </Button>
              </Link>
            </Stack>
          </Box>
        </Col>
      </Row>

      <br />
    </>
  );
};

export default TodoItem;
