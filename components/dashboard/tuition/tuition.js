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
  Link,
  Button,
  Switch,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// Custom Components
import Card from "../../../common/card";
import Loading from "../../../common/loading";
import TuitionPopover from "./tuitionPopover";

// Scripts and libraries
import getLoggedInUID from "../../../scripts/getLoggedInUID";
import getCurrency from "../../../scripts/getCurrency";
import moment from "moment";

const Tuition = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  // Get the active user
  const activeUser = useSelector((state) => state.user);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: getCurrency(activeUser.country || "JMD"),
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
        } else {
          setData({
            tuition: 0,
            due: moment(new Date(), "YYYYMMDD").fromNow(),
          });
        }

        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Card xs={12} md={12} bg={"blue.400"}>
        <Loading />
      </Card>
    );

  return (
    <Card xs={12} md={12} bg={"blue.400"} color={"white"}>
      <Stat>
        <StatLabel>Tuition</StatLabel>
        <StatNumber>{formatter.format(data.tuition)}</StatNumber>
        <StatHelpText>Due {data.due}</StatHelpText>
      </Stat>

      {data.tuition ? (
        <>
          <Button
            size={"sm"}
            bg={"white"}
            color={"blue.400"}
            _hover={{ bg: "white", color: "blue.400" }}
            w={"40%"}
            href={"/app/tuition"}
          >
            Pay Now
          </Button>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default Tuition;
