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
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

// Custom Components
import Card from "../../../common/card";
import Loading from "../../../common/loading";
import { Chart } from "react-google-charts";

// Scripts and libraries
import getLoggedInUID from "../../../scripts/getLoggedInUID";
import { isMobile, isBrowser } from "react-device-detect";

const AcademicPerformance = (props) => {
  const [data, setData] = useState([]);
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
        <></>
      </Card>
    );
  }

  return (
    <>
      <Heading
        as={"h3"}
        size="md"
        color={useColorModeValue("gray.600", "gray.600")}
      >
        Academic Performance
      </Heading>

      {isMobile ? (
        <>
          <br />
          <br />
        </>
      ) : (
        <br />
      )}
      <Card xs={12} md={12}>
        <br />
        <Text
          color={"gray.500"}
          fontSize={{ base: "sm", sm: "md" }}
          align={"center"}
        >
          No data available
        </Text>
        <br />
      </Card>
    </>
  );
};

export default AcademicPerformance;
