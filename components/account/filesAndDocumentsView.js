import React, { Component, useEffect, useState } from "react";
import {
  Container,
  Heading,
  Box,
  Spinner,
  Center,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// UI Components
import Card from "../../common/card";
import ContactCard from "./contactCard";
import Loading from "../../common/loading";
import NewContactModal from "./newContactModal";
import { Row, Col } from "react-bootstrap";

// Scripts
import getLoggedInUID from "../../scripts/getLoggedInUID";

const UserFilesAndDocumentsView = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState();

  const { uid } = props;

  /*
  useEffect(() => {
    setLoading(true);
    fetch(`/api/docs/${uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setData(data);
          setLoading(false);
        }

        setLoading(false);
      });
  }, []);
*/
  return (
    <>
      <Row>
        <Col md={8}>
          <Card>
            <Text>Files & Docs</Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Text>Files & Docs</Text>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserFilesAndDocumentsView;
