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
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import axios from "axios";

function UserAccountPage(props) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  const activeUser = useSelector((state) => state.user);

  const router = useRouter();
  const { uid } = router.query;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/user/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTitle(data.firstName + " " + data.lastName);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Seo title={title} />
      <AppLayout>
        <Col>
          <Row>
            <Col xs={12} lg={8}>
              <Card>
                <Text>{JSON.stringify(data, null, 2)}</Text>
              </Card>
            </Col>
            <Col xs={12} lg={4}>
              <Card></Card>
            </Col>
          </Row>
        </Col>
      </AppLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const uid = context.params;

  return {
    props: { id: uid },
  };
}

UserAccountPage.restricted = true;

export default UserAccountPage;
