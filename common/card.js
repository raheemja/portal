import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Col } from "react-bootstrap";

function Card(props) {
  // Extracting all columns
  const { xs, sm, md, lg, xl } = props;

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Box
        p={4}
        display={{ md: "flex" }}
        maxWidth="auto"
        borderWidth={1}
        margin={2}
        bg={useColorModeValue("white", "white")}
      >
        <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          {props.children}
        </Stack>
      </Box>
      <br />
    </Col>
  );
}

export default Card;
