// UI Components
import { SimpleGrid, Box, Button, Text } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";

// Next Components

// Components
import AppLayout from "../../components/appLayout.tsx";
import Seo from "../../components/seo";
import Card from "../../common/card";

const DashboardPage = () => {
  return (
    <>
      <Seo title="Dashboard" />
      <AppLayout>
        <Col md={8}>
          <Row>
            <Card md={12}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>

            <Card md={4}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>

            <Card md={4}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>

            <Card md={4}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Row>
        </Col>
        <Col md={4}>
          <Card>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Card>
        </Col>
      </AppLayout>
    </>
  );
};

export default DashboardPage;
