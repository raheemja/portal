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

// Essential app components
import Seo from "../../../components/seo";

// Custom components
import Card from "../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";
import DatePicker from "react-datepicker";

// Adminssions page components
import AppLayout from "../../../components/appLayout.tsx";

// Icons
import { FiExternalLink, FiBookmark, FiUser } from "react-icons/fi";
import {
  MdCheckCircle,
  MdSettings,
  WarningIcon,
  InfoIcon,
  FiExternalLik,
} from "@chakra-ui/icons";

// Scripts and libraries
import getLoggedInUID from "../../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import moment from "moment";
import Swal from "sweetalert2";

const AdminIndexPage = () => {
  const activeUser = useSelector((state) => state.user);

  return (
    <>
      <Seo title="Site Administration" />
      <AppLayout>
        <Heading
          pt={2}
          as={"h3"}
          size="lg"
          color={useColorModeValue("gray.600", "gray.600")}
        >
          Site Admininstration
        </Heading>

        <br />
        <br />
        <br />
        <Col xs={12} md={8}>
          <Row>
            <Card>
              <br />
              <br />
              <br />
              <br />
            </Card>

            <Heading
              pt={2}
              as={"h4"}
              size="md"
              color={useColorModeValue("gray.600", "gray.600")}
            >
              User Management
            </Heading>

            <br />
            <br />
            <Card>
              <br />
              <br />
              <br />
              <br />
            </Card>

            <Heading
              pt={2}
              as={"h4"}
              size="md"
              color={useColorModeValue("gray.600", "gray.600")}
            >
              Course Management
            </Heading>

            <br />
            <br />
            <Card>
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Card xs={12}>
              <Heading
                pt={2}
                as={"h4"}
                size="md"
                color={useColorModeValue("gray.600", "gray.600")}
              >
                Bookmarks
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
                  <Link href="/app/admin/" color={"blue.400"}>
                    Add New Course
                  </Link>
                </ListItem>

                {/*  */}
                <ListItem fontSize={{ base: "sm", sm: "md" }}>
                  <Link href="/app/admin/" color={"blue.400"}>
                    Configure Admissions
                  </Link>
                </ListItem>

                {/*  */}
                <ListItem fontSize={{ base: "sm", sm: "md" }}>
                  <Link href="/app/admin/" color={"blue.400"}>
                    Manage Courses
                  </Link>
                </ListItem>
              </UnorderedList>
            </Card>

            <Card xs={12}>
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Row>
        </Col>
      </AppLayout>
    </>
  );
};

AdminIndexPage.restricted = true;

export default AdminIndexPage;
