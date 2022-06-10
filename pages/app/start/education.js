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

  const [state, setState] = useState();

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

                    <br />
                    <br />
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
