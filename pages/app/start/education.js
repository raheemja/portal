// UI Components
import {
  SimpleGrid,
  Badge,
  Box,
  Text,
  Avatar,
  Alert,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  AlertIcon,
  TabPanel,
  Heading,
  Show,
  Hide,
  Stack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  ButtonGroup,
  Textarea,
} from "@chakra-ui/react";

// Essential app components
import StudentStartLayout from "../../../components/studentStartLayout.tsx";
import Seo from "../../../components/seo";

// Custom components
import Card from "../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";
import LazyLoad from "react-lazyload";

// Start page components

// Icons
import { FiSave } from "react-icons/fi";
import {
  MdCheckCircle,
  MdSettings,
  WarningIcon,
  InfoIcon,
} from "@chakra-ui/icons";

// Scripts and libraries
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

const EducationStartPage = () => {
  const activeUser = useSelector((state) => state.user);
  const [state, setState] = useState({
    startMonth: "January",
    endMonth: "January",
  });

  // Data
  const degrees = require("../../../data/degrees.json");
  const months = require("../../../data/months-detailed.json");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const InfoTab = () => {
    return (
      <>
        <Col xs={12} md={12}>
          <Card>
            <Text color={"gray.500"}>
              <InfoIcon mr={3} color={"blue.400"} />
              Your educational background allows us to qualify you for your
              selected courses. Please provide all your relevant educational
              history, such as your high school and prior CXC (CSEC & CAPE)
              certifications, diplomas and universities.
            </Text>
          </Card>
        </Col>
      </>
    );
  };

  return (
    <>
      <Seo title={`Education Overview`} />
      <StudentStartLayout>
        <Col xs={12} md={8}>
          <Heading
            pt={2}
            as={"h3"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            Education Overview
          </Heading>

          {isMobile ? (
            <>
              <br />
              <InfoTab />
            </>
          ) : (
            <br />
          )}

          <Row>
            <Card>
              <Row>
                {/* Name os school / university */}
                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name" color={"gray.500"}>
                      Name of School / University
                    </FormLabel>

                    <Input
                      color={"gray.500"}
                      id="name"
                      name="name"
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                  <br />
                </Col>

                {/* Type of Degree / Qualification */}
                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name" color={"gray.500"}>
                      Certification / Degree
                    </FormLabel>

                    <Select
                      color={"gray.500"}
                      id="degree"
                      name="degree"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      {degrees.map((degrees, i) => {
                        return <option key={i}>{degrees.name}</option>;
                      })}
                    </Select>
                  </FormControl>
                  <br />
                </Col>

                {/* Start Date */}
                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name" color={"gray.500"}>
                      Start Date
                    </FormLabel>

                    <Row>
                      <Col xs={8} md={8}>
                        <Select
                          color={"gray.500"}
                          id="startMonth"
                          name="startMonth"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                          {months.map((month, i) => {
                            return <option key={i}>{month.name}</option>;
                          })}
                        </Select>
                      </Col>

                      <Col xs={4} md={4}>
                        <Select
                          color={"gray.500"}
                          id="startYear"
                          name="startYear"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                          {_.range(1950, 2023).map((i) => {
                            return <option key={i}>{i}</option>;
                          })}
                        </Select>
                      </Col>
                    </Row>
                  </FormControl>
                  <br />
                </Col>

                {/* Name os school / university */}
                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name" color={"gray.500"}>
                      End Date
                    </FormLabel>

                    <Row>
                      <Col xs={8} md={8}>
                        <Select
                          color={"gray.500"}
                          id="endMonth"
                          name="endMonth"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                          {months.map((month, i) => {
                            return (
                              <>
                                <option value={month.name} key={i}>
                                  {month.name}
                                </option>
                              </>
                            );
                          })}
                        </Select>
                      </Col>

                      <Col xs={4} md={4}>
                        <Select
                          color={"gray.500"}
                          id="endYear"
                          name="endYear"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                          {_.range(1950, 2023).map((i) => {
                            return <option key={i}>{i}</option>;
                          })}
                        </Select>
                      </Col>
                    </Row>
                  </FormControl>
                  <br />
                </Col>

                {/* Details */}
                <Col xs={12} md={12}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="details" color={"gray.500"}>
                      Details
                    </FormLabel>

                    <Textarea
                      color={"gray.500"}
                      id="details"
                      name="details"
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <FormHelperText>
                      Please share your subjects, courses, awards, GPA or any
                      extracurricular activities you were involved in.
                    </FormHelperText>
                  </FormControl>
                  <br />
                </Col>
              </Row>
              <br />
              <br />
              <br />
              <br />
              <Text>{JSON.stringify(state, null, 2)}</Text>
            </Card>
          </Row>
        </Col>

        {isBrowser ? (
          <>
            <Col xs={12} md={4}>
              <br />
              <br />
              <br />
              <Row>
                <InfoTab />

                <Card>
                  <List spacing={3}>
                    {/* Check if date of birth is set */}
                    {!state.name ? (
                      <>
                        <ListItem>
                          <ListIcon
                            as={InfoIcon}
                            color={useColorModeValue("red.400", "red.400")}
                          />
                          Your school or university name is required
                        </ListItem>
                      </>
                    ) : null}

                    {/* Check if degree is set */}
                    {!state.degree ? (
                      <>
                        <ListItem>
                          <ListIcon
                            as={InfoIcon}
                            color={useColorModeValue("red.400", "red.400")}
                          />
                          Select your certificate/ degree type from the dropdown
                        </ListItem>
                      </>
                    ) : null}

                    {/* Check if start year is set */}
                    {!state.startYear || !state.startMonth ? (
                      <>
                        <ListItem>
                          <ListIcon
                            as={InfoIcon}
                            color={useColorModeValue("red.400", "red.400")}
                          />
                          Please select your start date
                        </ListItem>
                      </>
                    ) : null}

                    {/* Check if end month or year is set */}
                    {!state.endMonth || !state.endYear ? (
                      <>
                        <ListItem>
                          <ListIcon
                            as={InfoIcon}
                            color={useColorModeValue("red.400", "red.400")}
                          />
                          Please select your end date
                        </ListItem>
                      </>
                    ) : null}

                    {/* Check if details is set */}
                    {!state.details ? (
                      <>
                        <ListItem>
                          <ListIcon
                            as={InfoIcon}
                            color={useColorModeValue(
                              "yellow.400",
                              "yellow.400"
                            )}
                          />
                          Adding more details is optional, but it helps us to
                          get a broader overview of your academia and
                          achievements.
                        </ListItem>
                      </>
                    ) : null}
                  </List>
                </Card>
              </Row>
            </Col>
          </>
        ) : null}
      </StudentStartLayout>
    </>
  );
};

EducationStartPage.restricted = true;

export default EducationStartPage;
