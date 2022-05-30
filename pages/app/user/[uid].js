// UI Components
import { SimpleGrid, Box, Text } from "@chakra-ui/react";

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

export default UserAccountPage;
