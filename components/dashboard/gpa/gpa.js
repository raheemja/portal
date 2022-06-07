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

const GPA = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  // Copies the User ID
  const { uid } = props;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/gpa/${uid || getLoggedInUID()}`)
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
      <Card xs={6} md={6} bg={"pink.400"} color={"white"}>
        <Stat>
          <StatLabel>GPA</StatLabel>
          <StatNumber>0</StatNumber>
          <StatHelpText>No GPA found</StatHelpText>
        </Stat>
      </Card>
    );
  }

  return (
    <Card xs={6} md={6} bg={"pink.400"} color={"white"}>
      <Stat>
        <StatLabel>GPA</StatLabel>
        <StatNumber>3.6</StatNumber>
        <StatHelpText>Grade: 89%</StatHelpText>
      </Stat>
    </Card>
  );
};

export default GPA;
