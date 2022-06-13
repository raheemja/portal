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

// Essential app components
import Seo from "../../../../components/seo";
import AdminSkin from "../../../../components/admin/skin";

// Custom components
import Card from "../../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";
import DatePicker from "react-datepicker";

// Adminssions page components
import AppLayout from "../../../../components/appLayout.tsx";

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

// Scripts and libraries
import getLoggedInUID from "../../../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import moment from "moment";
import Swal from "sweetalert2";

// Models
import { CourseModel } from "../../../../models/course/course";

const NewCoursePage = () => {
  const activeUser = useSelector((state) => state.user);
  const router = useRouter();

  const [course, setCourse] = useState(CourseModel());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const Yah = () => {
    return (
      <>
        <Text>Yeahhhhhhhhhhh</Text>
        <br />
      </>
    );
  };

  return (
    <>
      <Seo title="Site Administration" />
      <AppLayout>
        <AdminSkin>
          <Heading
            pt={2}
            as={"h3"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            Add new course
          </Heading>

          <Breadcrumb
            pt={1}
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/dashboard");
                }}
                color="blue.500"
              >
                App
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/admin");
                }}
                color="blue.500"
              >
                Site Admin
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/admin/courses");
                }}
                color="blue.500"
              >
                Courses
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/dashboard");
                }}
                color="blue.500"
              >
                Add new
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <br />
          <Card>
            <Row>
              {/* Display Name */}
              <Col xs={12} md={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name" color={"gray.500"}>
                    Full Name
                  </FormLabel>
                  <Input
                    color={"gray.500"}
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormControl>
                <br />
              </Col>
            </Row>

            <br />
            <br />
            <br />

            <Button>Add New</Button>
            <br />
            <br />
            <Text>{JSON.stringify(course, null, 2)}</Text>
          </Card>
        </AdminSkin>
      </AppLayout>
    </>
  );
};

NewCoursePage.restricted = true;

export default NewCoursePage;
