// Refund policy

import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import Collapsible from "react-collapsible";

import { Row, Col } from "react-bootstrap";

import { useState, useEffect } from "react";

const RefundPolicy = () => {
  const [instructions, setInstructions] = useState("Click to open");

  return (
    <Box px={0} w={"100%"}>
      <Heading
        as={"h6"}
        size="md"
        color={useColorModeValue("gray.600", "gray.600")}
      >
        Refund Policy
      </Heading>

      <Collapsible
        onOpening={(e) => {
          setInstructions("Click to close");
        }}
        onClosing={(e) => {
          setInstructions("Click to open");
        }}
        trigger={
          <Text>
            <Link
              href="#"
              color={"blue.400"}
              fontSize={{ base: "sm", sm: "sm" }}
            >
              {instructions}
            </Link>
            <br />
          </Text>
        }
      >
        <br />

        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.1
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Students are only eligible for a refund if they are in good
              financial standing with the Institution.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.2
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Students are eligible for a refund if the scheduled
              programme/course is cancelled by the Institution.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.3
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Students are eligible for a refund of a portion of tuition costs
              if they withdraw from the Institution or request Leave of Absence
              in writing before the end of the third week of semester classes.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.4
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Students may be eligible for a refund of a portion of tuition
              costs if they change their registration by dropping a course
              before the end of the third week of semester classes.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.5
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Tuition and fees are neither refundable nor transferable after the
              end of the third week of semester classes.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.6
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Only tuition fees and exam fees are refundable. Other fees are
              non-refundable unless stated otherwise.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.7
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Examination fees, where payable, cannot be transferred from one
              examination to another and can be returned only under exceptional
              circumstances by approval of the Academic Board.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.8
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Fees are not refundable if a student is required to withdraw or is
              suspended for academic or disciplinary reasons.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.9
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Fees are not refundable if operations are suspended due to an act
              of nature, civil disturbance or any reason beyond the control of
              the Institution.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.10
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={10} xl={10}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}></Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.11
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Incomplete forms or forms submitted without the required
              supporting documents will not be processed.
            </Text>
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={2} sm={2} md={2} lg={1} xl={1}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              1.12
            </Text>
          </Col>
          <Col xs={10} sm={10} md={10} lg={11} xl={11}>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Refunds will only be processed after the end of the registration
              period each semester or summer or 60 days after request.
            </Text>
          </Col>
        </Row>
      </Collapsible>
    </Box>
  );
};

export default RefundPolicy;
