// UI Components
import {
  SimpleGrid,
  Box,
  Button,
  Text,
  Heading,
  useColorModeValue,
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
                <GPA />
                <Tuition />
                <Todo />
                <AcademicPerformance />
              </Row>
            </>
          ) : null}
        </Col>

        {isBrowser ? (
          <Col md={4}>
            <Row>
              <GPA />
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
