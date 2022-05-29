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

function Card(props) {
  return (
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
  );
}

export default Card;
