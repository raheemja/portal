// UI Components
import { SimpleGrid, Box, Button, Text } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";

// Next Components

// Components
import AppLayout from "../../components/appLayout.tsx";
import Seo from "../../components/seo";
import Card from "../../common/card";

import Todo from "../../components/dashboard/todo/todo.tsx";

const DashboardPage = () => {
  const platform = require("platform");

  return (
    <>
      <Seo title="Dashboard" />
      <AppLayout>
        <Col md={8}>
          <Card />
        </Col>
        <Col md={4}>
          <Todo />
        </Col>
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
