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
} from "@chakra-ui/react";

// Essential app components
import StudentStartLayout from "../../../components/studentStartLayout.tsx";
import Seo from "../../../components/seo";

// Custome components
import Card from "../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";

// Start page components

// Icons

// Scripts and libraries
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

const ExperienceStartPage = () => {
  const activeUser = useSelector((state) => state.user);

  return (
    <>
      <Seo title={`Experience Overview`} />
      <StudentStartLayout>
        <Col xs={12} md={8}>
          <Heading
            pt={2}
            as={"h3"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            Experience Overview
          </Heading>
        </Col>
        <Col xs={12} md={4}>
          <Row></Row>
        </Col>
      </StudentStartLayout>
    </>
  );
};

ExperienceStartPage.restricted = true;

export default ExperienceStartPage;
