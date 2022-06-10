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
} from "@chakra-ui/react";

// Essential app components
import Seo from "../../components/seo";

// Custom components
import Card from "../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";
import DatePicker from "react-datepicker";

// Adminssions page components
import AppLayout from "../../components/appLayout.tsx";

// Icons
import { FiSave } from "react-icons/fi";
import {
  MdCheckCircle,
  MdSettings,
  WarningIcon,
  InfoIcon,
} from "@chakra-ui/icons";

// Scripts and libraries
import getLoggedInUID from "../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import moment from "moment";
import Swal from "sweetalert2";

const AdminDashboardPage = () => {
  return (
    <>
      <Seo title="Administrator Dashboard" />
      <AppLayout>
        <Col xs={12} md={8}>
          <Row>
            <Card></Card>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Card></Card>
          </Row>
        </Col>
      </AppLayout>
    </>
  );
};

AdminDashboardPage.restricted = true;

export default AdminDashboardPage;
