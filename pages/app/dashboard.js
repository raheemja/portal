// UI Components
import { SimpleGrid, Box, Button, Text, Heading } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";

// Next & Redux Components
import { useSelector, useDispatch } from "react-redux";

// Components
import AppLayout from "../../components/appLayout.tsx";
import Seo from "../../components/seo";
import Card from "../../common/card";

// Dashboard components
import Todo from "../../components/dashboard/todo/todo.tsx";
import Tuition from "../../components/dashboard/tuition/tuition";
import GPA from "../../components/dashboard/gpa/gpa";

const DashboardPage = () => {
  const activeUser = useSelector((state) => state.user);

  return (
    <>
      <Seo title="Dashboard" />
      <AppLayout>
        <Card bg={""} xs={12} md={8}>
          <br />
        </Card>
        <Col md={4}>
          <Row>
            <GPA />
            <Tuition />
            <Todo />
          </Row>
        </Col>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </AppLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

DashboardPage.restricted = true;

export default DashboardPage;
