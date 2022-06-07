import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  Alert,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Other components
import { Row, Col } from "react-bootstrap";

export default function Card(props) {
  const { xs, sm, md, lg, xl, bc, color, bg } = props;

  return (
    <>
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <Box
          w={"full"}
          color={color || ""}
          bg={useColorModeValue(bg, bg) || useColorModeValue("white", "white")}
          boxShadow={"1xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack textAlign={"left"} p={6} align={"left"}>
            {props.children}
          </Stack>
        </Box>
        <br />
      </Col>
    </>
  );
}
