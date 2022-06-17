// UI Components
import {
  Text,
  Heading,
  useColorModeValue,
  Link,
  ListItem,
  UnorderedList,
  Button,
  ListIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
} from "@chakra-ui/react";

import { ChevronRightIcon, InfoIcon } from "@chakra-ui/icons";

// Essential app components
import StudentStartLayout from "../../../components/studentStartLayout.tsx";
import Seo from "../../../components/seo";

// Custom components
import Card from "../../../common/card";
import { Col } from "react-bootstrap";

// Start page components

// Icons
import { BsFillCaretRightFill } from "react-icons/bs";

// Scripts and libraries
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import _ from "lodash";
import { isMobile, isBrowser } from "react-device-detect";

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

          <Breadcrumb
            pt={1}
            spacing="6px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink color="blue.500">App</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/start");
                }}
                color="blue.500"
              >
                Getting Started
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <br />
          <Card>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Hi, {activeUser.firstName}. Thank you for your interest in{" "}
              {process.env.NEXT_PUBLIC_SCHOOL_NAME}. Before you can start
              applying for our courses, please complete your student profile.
            </Text>

            <Text pt={3} color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Please note that:
            </Text>

            <UnorderedList
              pl={2}
              pt={4}
              spacing={2}
              style={{ listStyleType: "none" }}
            >
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                <ListIcon as={BsFillCaretRightFill} color="orange.400" />
                applications can only be submitted online via this portal
              </ListItem>
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                <ListIcon as={BsFillCaretRightFill} color="orange.400" />
                ensure that this application is
                <strong color="pink.800" style={{ paddingLeft: "4px" }}>
                  FULLY
                </strong>{" "}
                completed as incomplete applications will not be processed.
              </ListItem>
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                <ListIcon as={BsFillCaretRightFill} color="orange.400" />
                submit only one application. Duplicate applications will be
                rejected and duplicate accounts will be removed from our system
              </ListItem>
              <ListItem color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                <ListIcon as={BsFillCaretRightFill} color="orange.400" />
                if you cncounter any issues, please create a
                <Link
                  color={"blue.400"}
                  style={{ paddingLeft: "4px" }}
                  onClick={() => {
                    router.push("/app/tickets");
                  }}
                >
                  Support Ticket
                </Link>
              </ListItem>
            </UnorderedList>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Box pt={[0, 0, 95]}>
            <Card>
              <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                <InfoIcon color={"yellow.400"} mr={2} />
                You may see additional instructions on the right pane which will
                guide you through the process.
              </Text>
            </Card>
          </Box>
        </Col>

        <Link
          onClick={() => {
            router.push("/app/start/profile");
          }}
        >
          <Button w={{ base: "100%", sm: "30%" }} colorScheme="blue">
            Get Started
          </Button>
        </Link>
        <br />
        <br />
        <br />
      </StudentStartLayout>
    </>
  );
};

StartPage.restricted = true;

export default StartPage;
