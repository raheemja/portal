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

  // Copies the User ID
  const { uid } = props;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/tuition/${uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setData(data);
          setLoading(false);
        }

        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

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
