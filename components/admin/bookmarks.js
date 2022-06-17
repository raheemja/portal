// UI Components
import {
  SimpleGrid,
  Badge,
  Box,
  Text,
  Avatar,
  Alert,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  AlertIcon,
  TabPanel,
  Heading,
  Show,
  Hide,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
  Radio,
  RadioGroup,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";

import { Row, Col } from "react-bootstrap";

// Custom components
import Card from "../../common/card";

const Bookmarks = (props) => {
  return (
    <>
      <br />
      <br />
      <Card xs={12}>
        <Heading
          pt={2}
          as={"h4"}
          size="md"
          color={useColorModeValue("gray.600", "gray.600")}
        >
          Admin Bookmarks
        </Heading>

        <UnorderedList
          pl={2}
          pt={4}
          spacing={2}
          style={{ listStyleType: "none" }}
        >
          {/* Add New User */}
          <ListItem fontSize={{ base: "sm", sm: "md" }}>
            <Link href="/app/admin/" color={"blue.400"}>
              Add New User
            </Link>
          </ListItem>

          {/* Add New Course */}
          <ListItem fontSize={{ base: "sm", sm: "md" }}>
            <Link href="/app/admin/courses/new" color={"blue.400"}>
              Add New Course
            </Link>
          </ListItem>

          {/* Configure Admissions */}
          <ListItem fontSize={{ base: "sm", sm: "md" }}>
            <Link href="/app/admin/" color={"blue.400"}>
              Configure Admissions
            </Link>
          </ListItem>

          {/* Manage Courses */}
          <ListItem fontSize={{ base: "sm", sm: "md" }}>
            <Link href="/app/admin/courses" color={"blue.400"}>
              Manage Courses
            </Link>
          </ListItem>
        </UnorderedList>
      </Card>
    </>
  );
};

export default Bookmarks;
