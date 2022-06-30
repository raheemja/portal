import { useState, useEffect } from "react";

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
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

// Components
import CourseCard from "../course/courseCard";
import { Row, Col } from "react-bootstrap";
import Card from "../../common/card";

// Scripts
import _ from "lodash";

const CourseInfo = ({ course, courses, selectedCourses }) => {
  const [allCourses, setAllCourses] = useState(courses);
  const [selected, setSelected] = useState(selectedCourses);

  // Data
  const programmes = require("../../data/programmes.json");

  const data = _.find(programmes, { id: course }) || {};

  useEffect(() => {
    setAllCourses(courses);
    setSelected(selectedCourses);
  });

  const getCourseInfo = (name) => {
    return _.find(allCourses, { displayname: name });
  };

  return (
    <>
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
          <Image src={data.logo} alt={""} style={{ width: "100px" }} />

          <Heading
            pt={2}
            as={"h4"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            {data.name}
          </Heading>

          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
            {data.description}
          </Text>
        </Stack>
      </Box>

      <br />
      <Row>
        <Card xs={12} md={6} lg={6} xl={6} bg={"blue.400"} color={"white"}>
          <Stat>
            <StatLabel>Start Date</StatLabel>
            <StatNumber>{data.startDate}</StatNumber>
            <StatHelpText>{data.orientation}</StatHelpText>
          </Stat>
        </Card>
        <Card xs={12} md={6} lg={6} xl={6} bg={"pink.400"} color={"white"}>
          <Stat>
            <StatLabel>Duration</StatLabel>
            <StatNumber>{data.duration}</StatNumber>
            <StatHelpText>Full curriculumn and exams</StatHelpText>
          </Stat>
        </Card>
      </Row>

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
          <Heading
            pt={2}
            as={"h6"}
            size="md"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            My Selected Courses
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
            {selectedCourses.length > 0
              ? "Here'a breakdown of your selection, including your tuition fees and course outline. Chick on a subject to view the syllabus and course outline."
              : "No course selected..."}
          </Text>

          {selected ? null : null}

          <UnorderedList pl={5}>
            {selectedCourses.map((item, i) => {
              const data = getCourseInfo(item) || {};
              return (
                <>
                  <br />
                  <CourseCard
                    id={data.id}
                    shortname={data.shortname}
                    displayname={data.displayname}
                    summary={data.summary}
                    category={data.category}
                  />
                </>
              );
            })}
          </UnorderedList>
        </Stack>
      </Box>
    </>
  );
};

export default CourseInfo;
