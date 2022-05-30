// UI Components
import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import Card from "../../../common/card";

// Components
import Seo from "../../../components/seo";
import AppLayout from "../../../components/appLayout.tsx";

// Framework
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Scripts and libraries
import { useSelector, userDispatch } from "react-redux";
import _ from "lodash";
import axios from "axios";

function UserAccountPage(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const activeUser = useSelector((state) => state.user);

  const router = useRouter();
  const { uid } = router.query;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/user/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setData(_.omit(data, "password"));
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Seo title="Account" />
      <AppLayout>
        <Col>
          <Row>
            <Col xs={12} lg={8}>
              <Card></Card>
            </Col>
            <Col xs={12} lg={4}>
              <Card></Card>
            </Col>
          </Row>
        </Col>

        <Text>
          {isLoading
            ? "Loading"
            : !data
            ? "No account information found"
            : JSON.stringify(data, null, 2)}
        </Text>
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default UserAccountPage;
