import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  ButtonGroup,
} from "@chakra-ui/react";

import AppLayout from "../../../components/appLayout.tsx";

import Seo from "../../../components/seo";

// Components
import Card from "../../../common/card";
import CourseCard from "../../../components/course/courseCard";
import { Row, Col } from "react-bootstrap";
import CourseInfo from "../../../components/apply/courseInfo";

// Policies
import RefundPolicy from "../../../policies/refund";

// Scripts
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { isBrowser, isMobile, isTablet } from "react-device-detect";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

// Modles
import { ApplicationModel } from "../../../models/user/application";

const CoursesPage = (props) => {
  const ip = require("ip");

  const activeUser = useSelector((state) => state.user);

  // States
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [courseCount, setCourseCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryCount, setCategoryCount] = useState(0);
  const [selected, setSelected] = useState("");
  const [application, setAppplication] = useState(
    ApplicationModel({ uid: activeUser.uid })
  );
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [refundPolicy, setRefundPolicy] = useState(false);
  const [ipAddress, setIPAddress] = useState(ip.address());
  const [details, setDetails] = useState({
    registrationNumber: "100-",
    candidateNumber: "",
    classPreference: "",
    notes: "",
  });

  const axios = require("axios").default;
  const router = useRouter();
  const platform = require("platform");

  function getCategoryName(id) {
    let name;

    categories.forEach((category, i) => {
      if (category.id === id) {
        name = category.name;
      }
    });

    return name;
  }

  useEffect(() => {
    axios({
      url: "https://www.classroom.csglearn.com/webservice/rest/server.php",
      method: "GET",
      params: {
        wstoken: "e83fa37c9b7494d452cc44e62c109770",
        wsfunction: "core_course_get_categories",
        moodlewsrestformat: "json",
      },
    }).then(function (response) {
      setCategories(response.data);
      setCategoryCount(response.data.length);
    });

    axios({
      url: "https://www.classroom.csglearn.com/webservice/rest/server.php",
      method: "GET",
      params: {
        wstoken: "e83fa37c9b7494d452cc44e62c109770",
        wsfunction: "core_course_get_courses",
        moodlewsrestformat: "json",
      },
    }).then(function (response) {
      if (response.data.error) {
      } else {
        setAllCourses(response.data);
        setCourseCount(response.data.length);
      }
    });
  }, []);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = () => {
    const apl = {
      meta: { uid: activeUser.uid },
      course: { course: selected, courses: selectedCourses },
    };

    axios({
      url: `/api/application`,
      method: "POST",
      params: apl,
    });
  };

  const ButtonActions = () => {
    return (
      <Row>
        <Col xs={6}>
          <Button
            variant={"outline"}
            colorScheme="red"
            size="md"
            onClick={(e) => {
              e.preventDefault();

              router.push("/app/dashboard");
            }}
          >
            Cancel
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            size="md"
            w={"full"}
            onClick={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    );
  };

  const EmptyCol = () => {
    return (
      <>
        <Col xs={12} md={12} lg={6} xl={6}></Col>
      </>
    );
  };

  const AcademicInfo = () => {
    return (
      <Card xs={12} md={12} lg={12} xl={12}>
        <Box px={0}>
          <Row>
            {/*  */}
            <Col xs={12} md={6}>
              <FormControl>
                <FormLabel htmlFor="role" color={"gray.500"}>
                  Previous Registration Number
                </FormLabel>

                <Input
                  color={"gray.500"}
                  id="registrationNumber"
                  defaultValue={details.registrationNumber}
                  name="registrationNumber"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <FormHelperText>
                  Applicable only to students who are resitting
                </FormHelperText>
              </FormControl>

              <br />
            </Col>

            {/*  */}
            <Col xs={12} md={6}>
              <FormControl>
                <FormLabel htmlFor="role" color={"gray.500"}>
                  Previous Unique Candidate Number (UCN)
                </FormLabel>

                <Input
                  color={"gray.500"}
                  id="candidateNumber"
                  name="candidateNumber"
                  defaultValue={details.candidateNumber}
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <FormHelperText>
                  Applicable only to students who are resitting
                </FormHelperText>
              </FormControl>

              <br />
            </Col>

            {/*  */}
            <Col xs={12} md={6}>
              <FormControl isRequired>
                <FormLabel htmlFor="role" color={"gray.500"}>
                  Class Preference
                </FormLabel>

                <Select
                  color={"gray.500"}
                  id="classPreference"
                  name="classPreference"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value={"Morning"}>Morning</option>
                  <option value={"Evening"}>Evening</option>
                </Select>
              </FormControl>
              <br />
            </Col>

            {/*  */}
            <Col xs={12} md={12}>
              <FormControl isRequired>
                <FormLabel htmlFor="role" color={"gray.500"}>
                  Notes
                </FormLabel>

                <Textarea
                  color={"gray.500"}
                  id="notes"
                  name="notes"
                  type="text"
                  defaultValue={details.notes}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <FormHelperText>
                  Please include any additional informaation that will help us
                  process your application.
                </FormHelperText>
              </FormControl>
              <br />
            </Col>
          </Row>
        </Box>
      </Card>
    );
  };

  const AgreementTab = () => {
    return (
      <Card xs={12} md={12} lg={12} xl={12}>
        <FormControl>
          <Stack spacing={5}>
            <RefundPolicy />
            <Checkbox
              isChecked={refundPolicy}
              onChange={(event) => {
                if (refundPolicy) {
                  setRefundPolicy(false);
                } else {
                  setRefundPolicy(true);
                }
              }}
              color={"gray.500"}
            >
              I agree to the Refund Policy
            </Checkbox>
          </Stack>
        </FormControl>
      </Card>
    );
  };

  const CourseOptionsDiplay = () => {
    if (courses.length === 0) {
      return (
        <>
          <br />
          <Card>
            <Heading as={"h5"} size={"md"} color={"gray.600"}>
              Choose your subjects
            </Heading>
            <br />

            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
              Please select your course so you can start choosing your subjects.
            </Text>
          </Card>
        </>
      );
    }

    return (
      <>
        {isMobile || isTablet ? (
          <>
            <br />
            <CourseInfoTab />
          </>
        ) : null}

        <br />
        <Card>
          <Heading as={"h5"} size={"md"} color={"gray.600"}>
            Choose your subjects
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
            Next, select the subjects or programmes you wish to enroll in.
            Please select all subjects that apply. Click the checkbox to add the
            subject to your selection, and clic the title of the course/
            subjects to learn more about the course and syllabus.
          </Text>

          <br />
          <Stack spacing={5}>
            {courses.map((course, i) => {
              if (course.visible)
                return (
                  <Checkbox
                    colorScheme="blue"
                    spacing={[1, 4]}
                    direction={["column", "row"]}
                    value={course.displayname}
                    isChecked={_.includes(selectedCourses, course.displayname)}
                    onChange={(event) => {
                      const val = event.target.value;

                      if (_.includes(selectedCourses, val)) {
                        setSelectedCourses(
                          selectedCourses.filter((item) => item !== val)
                        );
                      } else {
                        setSelectedCourses((oldArray) => [...oldArray, val]);
                      }
                    }}
                  >
                    <Text
                      size="sm"
                      color={useColorModeValue("gray.600", "gray.600")}
                      dangerouslySetInnerHTML={{ __html: course.displayname }}
                    />
                  </Checkbox>
                );
            })}
          </Stack>
        </Card>
      </>
    );
  };

  const MainCourseSelector = () => {
    return (
      <>
        <Col xs={12} md={12} lg={6} xl={6}>
          <Stack textAlign={"left"} p={6} align={"left"} px={0}>
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              isFitted
              index={tabIndex}
              onChange={handleTabsChange}
            >
              <TabList>
                <Tab>
                  {isMobile || isTablet ? "Course" : "Course Selection"}
                </Tab>
                <Tab>
                  {isMobile || isTablet ? "Academics" : "Academic Selection"}
                </Tab>
                <Tab>{isMobile || isTablet ? "Review" : "Review & Submit"}</Tab>
              </TabList>

              <TabPanels>
                {/* Course Selection */}
                <TabPanel px={0}>
                  <Box
                    w={"full"}
                    h={"auto"}
                    color={""}
                    bg={useColorModeValue("white", "white")}
                    boxShadow={"1xl"}
                    rounded={"md"}
                    overflow={"hidden"}
                  >
                    <Stack textAlign={"left"} p={6} align={"left"}>
                      <Heading as={"h5"} size={"md"} color={"gray.600"}>
                        Choose your programme
                      </Heading>
                      <Text
                        color={"gray.600"}
                        fontSize={{ base: "sm", sm: "md" }}
                      >
                        Below is a complete list of programmes offered for the
                        2022/ 2023 academic year. Please select from the list
                        the programmes.
                      </Text>
                      <br />

                      <RadioGroup spacing={5}>
                        {categories.map((category, i) => {
                          if (category.parent === 0)
                            return (
                              <>
                                <Radio
                                  key={i}
                                  pb={4}
                                  colorScheme="blue"
                                  value={category.id}
                                  isChecked={selected === category.id}
                                  onChange={(e) => {
                                    const { id, name } = category;

                                    let items = [];

                                    allCourses.forEach((item, i) => {
                                      if (item.categoryid === id) {
                                        items.push(item);
                                      }
                                    });

                                    setCourses(items);
                                    setSelected(name);
                                  }}
                                >
                                  <Text>{category.name}</Text>
                                </Radio>
                                <br />
                              </>
                            );
                        })}
                      </RadioGroup>
                    </Stack>
                  </Box>

                  <CourseOptionsDiplay />
                </TabPanel>

                {/* Student Profile */}
                <TabPanel px={0}>
                  <Row>
                    <AcademicInfo />
                  </Row>
                </TabPanel>

                {/* Review & Submit */}
                <TabPanel px={0}>
                  <AgreementTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Col>
      </>
    );
  };

  const CourseInfoTab = () => {
    if (selected)
      return (
        <>
          <Col xs={12} md={12} lg={6} xl={6}>
            {isMobile || isTablet ? null : (
              <>
                <br />
                <br />
                <br />
              </>
            )}
            <CourseInfo
              course={selected}
              courses={allCourses}
              selectedCourses={selectedCourses}
            />
          </Col>
        </>
      );
  };

  return (
    <>
      <Seo title="New Application" />

      <AppLayout>
        <Heading
          pt={2}
          pb={5}
          as={"h1"}
          size="lg"
          color={useColorModeValue("gray.600", "gray.600")}
        >
          Submit a New Application
        </Heading>

        {/* Upper column with introduction */}
        <br />
        <Col xs={12} md={12} lg={6} xl={6}>
          <Box
            w={"full"}
            h={"auto"}
            color={""}
            bg={useColorModeValue("white", "white")}
            boxShadow={"1xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Stack textAlign={"left"} p={6} align={"left"}>
              <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                Hi, {activeUser.firstName}. Thank you for your interest in{" "}
                {process.env.NEXT_PUBLIC_SCHOOL_NAME}. Now that you have
                completed your student profile, it's time to select your courses
                and subjects.
              </Text>
            </Stack>
          </Box>
        </Col>

        {isMobile || isTablet ? null : <EmptyCol />}

        <MainCourseSelector />

        {isMobile || isTablet ? null : <CourseInfoTab />}

        <Col xs={12} md={12} lg={12} xl={12}></Col>

        <Col xs={6} md={6} lg={6} xl={6}>
          <ButtonActions />
          <br />
          <br />
        </Col>
      </AppLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

CoursesPage.restricted = true;

export default CoursesPage;
