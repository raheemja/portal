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
      <Card bg="blue.400"></Card>
    </>
  );
};

export default TodoItem;
