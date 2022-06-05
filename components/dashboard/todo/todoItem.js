import {
  Container,
  Flex,
  Box,
  Alert,
  Text,
  Badge,
  Button,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import Card from "../../../common/card";

const TodoItem = (props) => {
  const { title, message, category, createdAt, href, action } = props;
  return (
    <>
      <Card>
        <Container>
          <Flex>
            <Box ml="">
              <Badge
                ml=""
                colorScheme={
                  category === "ACCOUNT"
                    ? "blue"
                    : category === "PAYMENT"
                    ? "blue"
                    : category === "COURSE"
                    ? "yellow"
                    : ""
                }
              >
                {category}
              </Badge>
            </Box>
          </Flex>
          <Text style={{ paddingTop: "15px" }} fontWeight="">
            {message}
          </Text>

          <Link href={"/app/courses"}>
            <Button
              style={{ marginTop: "15px" }}
              colorScheme={
                category === "ACCOUNT"
                  ? "blue"
                  : category === "PAYMENT"
                  ? "blue"
                  : category === "COURSE"
                  ? "yellow"
                  : ""
              }
            >
              {action || "Get Started"}
            </Button>
          </Link>
        </Container>
      </Card>
    </>
  );
};

export default TodoItem;
