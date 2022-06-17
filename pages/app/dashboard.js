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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import { Row, Col } from "react-bootstrap";

// Next & Redux Components
import { useSelector, useDispatch } from "react-redux";

// Components
import AppLayout from "../../components/appLayout.tsx";
import Seo from "../../components/seo";
import Card from "../../common/card";
import { isMobile, isBrowser } from "react-device-detect";

// Dashboard components
import Todo from "../../components/dashboard/todo/todo.tsx";
import Tuition from "../../components/dashboard/tuition/tuition";
import GPA from "../../components/dashboard/gpa/gpa";
import AcademicPerformance from "../../components/dashboard/ap/academicPerformance";

// Icons
import { FiExternalLink, FiBookmark, FiUser } from "react-icons/fi";

import {
  MdCheckCircle,
  MdSettings,
  WarningIcon,
  InfoIcon,
  FiExternalLik,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const DashboardPage = () => {
  const activeUser = useSelector((state) => state.user);

  return (
    <>
      <Seo title="Dashboard" />
      <AppLayout>
        <Col xs={12} md={8}>
          <Heading
            pt={2}
            as={"h3"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            {activeUser.firstName}'s Dashboard
          </Heading>

          <Breadcrumb
            pt={1}
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink color="blue.500">App</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/dashboard");
                }}
                color="blue.500"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <br />

          <Card bg={""} xs={12} md={12}>
            <br />
            <Text
              color={"gray.500"}
              fontSize={{ base: "sm", sm: "md" }}
              align={"center"}
            >
              No data available
            </Text>
            <br />
          </Card>

          {isBrowser ? (
            <>
              <AcademicPerformance />
            </>
          ) : null}

          {isMobile ? (
            <>
              <Row>
                <Tuition />
                <Todo />
                <AcademicPerformance />
              </Row>
            </>
          ) : null}
        </Col>

        {isBrowser ? (
          <Col xs={12} md={4}>
            <Row>
              <Tuition />
              <Todo />
            </Row>
          </Col>
        ) : null}

        <br />
      </AppLayout>
    </>
  );
};

DashboardPage.restricted = true;

export default DashboardPage;
