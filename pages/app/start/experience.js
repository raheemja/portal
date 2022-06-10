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

// Custome components
import Card from "../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";

// Models
import { UserExperienceModel } from "../../../models/user/userExperience";

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

// Data
const occupations = require("../../../data/occupations.json");

const ExperienceStartPage = () => {
  const activeUser = useSelector((state) => state.user);
  const [state, setState] = useState(
    UserExperienceModel(activeUser.uid || getLoggedInUID())
  );

  // Axios and router objects
  const axios = require("axios").default;
  const router = useRouter();

  // Data
  const months = require("../../../data/months-detailed.json");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const titleCase = (str) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  };

  const saveEntry = () => {
    if (state.company && state.role && state.startMonth && state.startYear) {
      axios({
        url: `/api/experience/${activeUser.uid || getLoggedInUID()}`,
        method: "POST",
        params: state,
      }).then(function (response) {
        if (response.data.error) {
        } else {
          Swal.fire({
            icon: "success",
            title: "Your entry has been saved",
            messaage: `Employment histroy added successfully`,
          });
          router.reload(window.location.pathname);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Hmmm...",
        text: "Please complete all the relevant fields",
      });
    }
  };

  const InfoTab = () => {
    return (
      <>
        <Col xs={12} md={12}>
          <Card>
            <Text color={"gray.500"}>
              <InfoIcon mr={3} color={"blue.400"} />
            </Text>
          </Card>
        </Col>
      </>
    );
  };

  return (
    <>
      <Seo title={`Experience Overview`} />
      <StudentStartLayout>
        <Col xs={12} md={8}>
          <Heading
            pt={2}
            as={"h3"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            Employment Experience
          </Heading>

          {isMobile ? (
            <>
              <br />
              <InfoTab />
            </>
          ) : (
            <>
              <br />
            </>
          )}

          <Card xs={12} md={12}>
            <Row>
              {/* Name of company */}
              <Col xs={12} md={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="company" color={"gray.500"}>
                    Company Name
                  </FormLabel>

                  <Input
                    color={"gray.500"}
                    id="company"
                    name="company"
                    type="text"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormControl>
                <br />
              </Col>

              {/* Role or occupation */}
              <Col xs={12} md={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="role" color={"gray.500"}>
                    Role / Occupation
                  </FormLabel>

                  <Select
                    color={"gray.500"}
                    id="role"
                    name="role"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    {occupations.map((item, i) => {
                      return (
                        <>
                          <option value={titleCase(item)} key={i}>
                            {titleCase(item)}
                          </option>
                          ;
                        </>
                      );
                    })}
                  </Select>
                </FormControl>
                <br />
              </Col>

              {/* Start Date */}
              <Col xs={12} md={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="company" color={"gray.500"}>
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

              {/* End date */}
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
                        {_.range(1950, 2031).map((i) => {
                          return <option key={i}>{i}</option>;
                        })}
                      </Select>
                    </Col>
                  </Row>
                </FormControl>
                <br />
              </Col>

              {/* Description */}
              <Col xs={12}>
                <FormControl>
                  <FormLabel htmlFor="company" color={"gray.500"}>
                    Description
                  </FormLabel>

                  <Textarea
                    color={"gray.500"}
                    id="description"
                    name="description"
                    type="text"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <FormHelperText>
                    Please share more details about your responsibilities and
                    achievements.
                  </FormHelperText>
                </FormControl>
                <br />
              </Col>
            </Row>

            <br />
            <Stack align={"right"}>
              <ButtonGroup>
                <Button
                  leftIcon={<FiSave />}
                  bg={useColorModeValue("blue.400", "blue.400")}
                  color={useColorModeValue("white", "white")}
                  onClick={(e) => {
                    e.preventDefault();
                    saveEntry();
                  }}
                >
                  Save & Add More
                </Button>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/app/courses");
                  }}
                >
                  Skip
                </Button>
              </ButtonGroup>
            </Stack>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          {isBrowser ? (
            <>
              <br />
              <br />
              <br />
              <InfoTab />
            </>
          ) : (
            <></>
          )}
        </Col>
      </StudentStartLayout>
    </>
  );
};

ExperienceStartPage.restricted = true;

export default ExperienceStartPage;
