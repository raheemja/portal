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

// Models
import { UserEducationModel } from "../../../models/user/userEducation";

// Icons
import { FiSave } from "react-icons/fi";
import {
  MdCheckCircle,
  MdSettings,
  WarningIcon,
  InfoIcon,
} from "@chakra-ui/icons";

// Scripts and libraries
import getLoggedInUID from "../../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Swal from "sweetalert2";

const EducationStartPage = () => {
  const activeUser = useSelector((state) => state.user);
  const [state, setState] = useState(
    UserEducationModel(activeUser.uid || getLoggedInUID())
  );

  // Router object
  const router = useRouter();
  const axios = require("axios").default;

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

  const saveEntry = () => {
    axios({
      url: `/api/education/${activeUser.uid || getLoggedInUID()}`,
      method: "POST",
      params: state,
    }).then(function (response) {
      if (response.data.error) {
      } else {
        Swal.fire({
          icon: "success",
          title: "Your entry has been saved",
          messaage: `Education added successfully`,
        });
        router.reload(window.location.pathname);
      }
    });
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

  const Checklist = () => {
    return (
      <>
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
                    color={useColorModeValue("yellow.400", "yellow.400")}
                  />
                  Adding more details is optional, but it helps us to get a
                  broader overview of your academia and achievements.
                </ListItem>
              </>
            ) : null}
          </List>
        </Card>

        <br />
        <Stack align={"right"}>
          <ButtonGroup>
            <Button
              leftIcon={<FiSave />}
              w={"50%"}
              bg={useColorModeValue("blue.400", "blue.400")}
              color={useColorModeValue("white", "white")}
              onClick={(e) => {
                e.preventDefault();
                saveEntry();
              }}
            >
              Save Entry
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault();
                router.push("/app/start/experience");
              }}
            >
              Skip
            </Button>
          </ButtonGroup>
        </Stack>
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
                      id="institution"
                      name="institution"
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

                {/* Programme */}
                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name" color={"gray.500"}>
                      Programme
                    </FormLabel>

                    <Input
                      color={"gray.500"}
                      id="programme"
                      name="programme"
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                  <br />
                </Col>

                {/* GPA */}
                <Col xs={12} md={6}>
                  <FormControl>
                    <FormLabel htmlFor="name" color={"gray.500"}>
                      GPA
                    </FormLabel>

                    <Input
                      color={"gray.500"}
                      id="gpa"
                      name="gpa"
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
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
                      <Col xs={7}>
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

                      <Col xs={5}>
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
                      <Col xs={7}>
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

                      <Col xs={5}>
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
                <Checklist />
              </Row>
            </Col>
          </>
        ) : (
          <Checklist />
        )}
        <br />
        <br />
        <br />
      </StudentStartLayout>
    </>
  );
};

EducationStartPage.restricted = true;

export default EducationStartPage;
