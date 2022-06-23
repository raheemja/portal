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
import { useRouter } from "next/router";

// UI Components
import Card from "../../common/card";
import ContactCard from "./contactCard";
import Loading from "../../common/loading";
import NewContactModal from "./newContactModal";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const UserExperienceView = ({ uid, self, ...rest }) => {
  const router = useRouter();

  const activeUser = useSelector((state) => state.user);

  const [editable, setEditable] = useState(self);
  const [user, setUser] = useState(self ? activeUser : null);

  return (
    <Row>
      <Col md={8}>
        <Card>
          <Text>Experience</Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Text>Experience</Text>
        </Card>
      </Col>
    </Row>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default UserExperienceView;
