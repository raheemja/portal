// React imports
import { useEffect, useState } from "react";

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

const Tuition = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "JMD",
  });

  // Copies the User ID
  const { uid } = props;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/tuition/${uid || getLoggedInUID()}`)
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
          <StatHelpText>Due in 5 days</StatHelpText>
        </Stat>
      </Card>
    );
  }

  return (
    <Card xs={6} md={6} bg={"blue.400"} color={"white"}>
      <Stat>
        <StatLabel>Tuition</StatLabel>
        <StatNumber>$33,000</StatNumber>
        <StatHelpText>Due in 5 days</StatHelpText>
      </Stat>
    </Card>
  );
};

export default Tuition;
