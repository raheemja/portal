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
          <Row></Row>
        </Col>
      </AppLayout>
    </>
  );
};

export default DashboardPage;
