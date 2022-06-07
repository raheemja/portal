// React imports
import { useEffect, useState } from "react";

// Next & Redux Components
import { useSelector, useDispatch } from "react-redux";

// Chakra-UI Components
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

// Custom Components
import Card from "../../../common/card";
import Loading from "../../../common/loading";

// Scripts and libraries
import getLoggedInUID from "../../../scripts/getLoggedInUID";
import getCurrency from "../../../scripts/getCurrency";

const Tuition = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  // Get the active user
  const activeUser = useSelector((state) => state.user);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: getCurrency(activeUser.country),
  });

  // Copies the User ID
  const { uid } = props;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/tuition/${uid || activeUser.uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error && !data.message) {
          setData(data);
        }

        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  if (!data) {
    return (
      <Card xs={6} md={6} bg={"blue.400"} color={"white"}>
        <Stat>
          <StatLabel>Tuition</StatLabel>
          <StatNumber>{formatter.format(0)}</StatNumber>
          <StatHelpText>No due date</StatHelpText>
        </Stat>
      </Card>
    );
  }

  return (
    <Card xs={6} md={6} bg={"blue.400"} color={"white"}>
      <Stat>
        <StatLabel>Tuition</StatLabel>
        <StatNumber>{data.tuition}</StatNumber>
        <StatHelpText>Due {data.due}</StatHelpText>
      </Stat>
    </Card>
  );
};

export default Tuition;
