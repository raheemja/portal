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
  Link,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
} from "@chakra-ui/react";

// Essential app components
import StudentStartLayout from "../../components/studentStartLayout.tsx";
import Seo from "../../components/seo";

// Custom components
import Card from "../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";

// Start page components

// Icons

// Scripts and libraries
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

const StartPage = () => {
  const activeUser = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <>
      <Seo title={`Start Here`} />
      <StudentStartLayout>
        <Col xs={12} md={8}>
          <Heading
            pt={2}
            as={"h3"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            Welcome to the Application Portal
          </Heading>

          <br />
          <Card>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Hi, {activeUser.firstName}. Thank you for your interest in{" "}
              {process.env.NEXT_PUBLIC_SCHOOL_NAME}. Before you can start
              applying for our courses, please complete your account. Please
              note that:
            </Text>

            <UnorderedList pl={4} pt={4} spacing={3}>
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                applications can only be submitted online via this portal
              </ListItem>
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                ensure that this application is <strong>FULLY</strong> completed
                as incomplete applications will not be processed.{" "}
              </ListItem>
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                submit only one application. Duplicate applications will be
                rejected and duplicate accounts will be removed from our system
              </ListItem>
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                if you cncounter any issues, please send an email to
                admissions@csglearn.com
              </ListItem>
            </UnorderedList>
          </Card>

          <br />
          <Link
            onClick={() => {
              router.push("/app/start/profile");
            }}
          >
            <Button w={{ base: "100%", sm: "50%" }} colorScheme="blue">
              Get Started
            </Button>
          </Link>

          <br />
          <br />
          <br />
        </Col>
        <Col xs={12} md={4}></Col>
      </StudentStartLayout>
    </>
  );
};

StartPage.restricted = true;

export default StartPage;
