import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../../common/card";
import Loading from "../../../common/loading";
import getLoggedInUID from "../../../scripts/getLoggedInUID";

// UI Components
import { SimpleGrid, Box, Button, Text } from "@chakra-ui/react";

const Todo = (props) => {
  const activeUser = useSelector((state) => state.user);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/todo/${getLoggedInUID() || activeUser.uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    setLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!data)
    return (
      <>
        <Card>
          <Text>All caught up</Text>
        </Card>
      </>
    );

  return (
    <>
      <Card>
        <Text>{JSON.stringify(data, null, 2)}</Text>
      </Card>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Todo;
