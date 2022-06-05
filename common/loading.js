import { Center, Spinner } from "@chakra-ui/react";
import Card from "./card";

const Loading = () => {
  return (
    <Card>
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    </Card>
  );
};

export default Loading;
