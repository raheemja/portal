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
import Seo from "../../../components/seo";

// Custom components
import Card from "../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";
import DatePicker from "react-datepicker";

// Admin Components
import AppLayout from "../../../components/appLayout.tsx";
import AdminSkin from "../../../components/admin/skin";

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
import getLoggedInUID from "../../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import moment from "moment";
import Swal from "sweetalert2";

const AdminIndexPage = () => {
  const activeUser = useSelector((state) => state.user);
  const router = useRouter();

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
            Site Admininstration
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

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/admin");
                }}
                color="blue.500"
              >
                Administration
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <br />
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
        </AdminSkin>
      </AppLayout>
    </>
  );
};

AdminIndexPage.restricted = true;

export default AdminIndexPage;
