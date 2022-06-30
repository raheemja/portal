// UI Components
import {
  Heading,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

// Essential app components
import StudentStartLayout from "../../../../components/studentStartLayout.tsx";
import Seo from "../../../../components/seo";

// Custom components
import Card from "../../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";

// Start page components

// Icons
import { FiSave } from "react-icons/fi";
import { InfoIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Scripts and libraries
import getLoggedInUID from "../../../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import _ from "lodash";
import Swal from "sweetalert2";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

const ProfileStartPage = () => {
  const activeUser = useSelector((state) => state.user);
  const [user, setUser] = useState(activeUser);

  // Router object
  const router = useRouter();

  // Axios object
  const axios = require("axios").default;

  // Countries
  const countries = require("../../../../data/countries.json");

  const saveChanges = () => {
    if (
      user.firstName &&
      user.lastName &&
      user.gender &&
      user.dateOfBirth &&
      user.phoneNumber &&
      user.email &&
      user.streetAddress &&
      user.state &&
      user.country
    ) {
      axios({
        method: "PATCH",
        url: `/api/user/${user.uid || getLoggedInUID()}`,
        params: user,
      }).then(function (response) {
        if (response.data.error) {
        } else {
          router.push("/app/start/contacts");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch(`/api/user/${activeUser.uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      <Seo title={`Profile Overview`} />
      <StudentStartLayout>
        <Col xs={12} md={8}>
          <Heading
            pt={2}
            as={"h3"}
            size="lg"
            color={useColorModeValue("gray.600", "gray.600")}
          >
            Student Profile
          </Heading>

          <Breadcrumb
            pt={1}
            spacing="6px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink color="blue.500">App</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={(e) => {
                  router.push("/app/start");
                }}
                color="blue.500"
              >
                Getting Started
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="blue.500">Profile</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <br />
          <Row>
            <Card>
              <Row>
                {/* First Name */}
                <Col xs={8} sm={8} md={5}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="firstName" color={"gray.500"}>
                      First Name
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={user.firstName}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      disabled={true}
                    />
                  </FormControl>
                </Col>

                {/* Middle Name */}
                <Col xs={4} sm={4} md={2}>
                  <FormControl>
                    <br />
                    <FormLabel htmlFor="middleName" color={"gray.500"}>
                      Middle
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="middleName"
                      name="middleName"
                      type="text"
                      value={user.middleName}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                </Col>

                {/* Last Name */}
                <Col xs={12} sm={12} md={5}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="lastName" color={"gray.500"}>
                      Last Name
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={user.lastName}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      disabled={true}
                    />
                  </FormControl>
                </Col>

                {/* Gender */}
                <Col xs={12} sm={12} md={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="gender" color={"gray.500"}>
                      Gender
                    </FormLabel>

                    <RadioGroup
                      onChange={(e) => {
                        setUser((prevState) => ({
                          ...prevState,
                          gender: e,
                        }));
                      }}
                      value={user.gender}
                    >
                      <Stack direction="row" spacing={5}>
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </Col>

                {/* Date of Birth */}
                <Col xs={12} sm={12} md={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="dateOfBirth" color={"gray.500"}>
                      Date of Birth
                    </FormLabel>

                    <Input
                      color={"gray.500"}
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="text"
                      value={user.dateOfBirth}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <FormHelperText>Eg. January 1, 1990</FormHelperText>
                  </FormControl>
                </Col>

                {/* Phone Number */}
                <Col xs={12} sm={12} md={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="phoneNumber" color={"gray.500"}>
                      Phone Number
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      value={user.phoneNumber}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                </Col>

                {/* Email */}
                <Col xs={12} sm={12} md={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="email" color={"gray.500"}>
                      Email{" "}
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="email"
                      name="email"
                      type="email"
                      value={user.email}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      disabled={true}
                    />
                  </FormControl>
                </Col>

                {/* Street Address */}
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <br />
                  <FormControl isRequired>
                    <FormLabel htmlFor="streetAddress" color={"gray.500"}>
                      Street Address
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="streetAddress"
                      name="streetAddress"
                      type="text"
                      value={user.streetAddress}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                </Col>

                {/* Town / Community / Province */}
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="town" color={"gray.500"}>
                      Community
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="town"
                      name="town"
                      type="text"
                      value={user.town}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                </Col>

                {/* City */}
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="city" color={"gray.500"}>
                      City
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="city"
                      name="city"
                      type="text"
                      value={user.city}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                </Col>

                {/* State / Parish */}
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="state" color={"gray.500"}>
                      State / Parish
                    </FormLabel>
                    <Input
                      color={"gray.500"}
                      id="state"
                      name="state"
                      type="text"
                      value={user.state}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </FormControl>
                </Col>

                {/* Country */}
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <FormControl isRequired>
                    <br />
                    <FormLabel htmlFor="country" color={"gray.500"}>
                      Country
                    </FormLabel>
                    <Select
                      name="country"
                      id="country"
                      placeholder="Select your country"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={user.country}
                      disabled
                    >
                      {countries.map((country, i) => (
                        <option key={country.name} value={country.countryName}>
                          {country.countryName}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
              </Row>

              <br />
              <br />
            </Card>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          {/* Adds extra spacing at the top so they're better align */}
          {isBrowser ? (
            <>
              <br />
              <br />
              <br />
            </>
          ) : null}

          <Card>
            <List spacing={3}>
              {/* Check if first name is set */}
              {!user.firstName ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Please enter your first Name
                  </ListItem>
                </>
              ) : null}

              {/* Check if last name is set */}
              {!user.lastName ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Please enter your last name
                  </ListItem>
                </>
              ) : null}

              {/* Check if date of birth is set */}
              {!user.dateOfBirth ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Your date of birth is required
                  </ListItem>
                </>
              ) : null}

              {/* Check if phone number is set */}
              {!user.phoneNumber ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Your phone number is required
                  </ListItem>
                </>
              ) : null}

              {/* Check if email is set */}
              {!user.email ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Your email is required
                  </ListItem>
                </>
              ) : null}

              {/* Check if street address is set */}
              {!user.streetAddress ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Your street address is required
                  </ListItem>
                </>
              ) : null}

              {/* Check if city is set */}
              {!user.city ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Please enter your city
                  </ListItem>
                </>
              ) : null}

              {/* Check if state/ parish is set */}
              {!user.state ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("red.400", "red.400")}
                    />
                    Your state / parish is required
                  </ListItem>
                </>
              ) : null}

              {/* Check if country is set */}
              {!user.country ? (
                <>
                  <ListItem>
                    <ListIcon
                      as={InfoIcon}
                      color={useColorModeValue("yellow.400", "yellow.400")}
                    />
                    Please select your country from the dropdown menu
                  </ListItem>
                </>
              ) : null}
            </List>
          </Card>

          <br />
          <Button
            leftIcon={<FiSave />}
            bg={useColorModeValue("blue.400", "blue.400")}
            color={useColorModeValue("white", "white")}
            onClick={(e) => {
              e.preventDefault();
              saveChanges();
            }}
          >
            Save & Continue
          </Button>

          {isMobile ? (
            <>
              <br />
              <br />
              <br />
            </>
          ) : null}
        </Col>
      </StudentStartLayout>
    </>
  );
};

ProfileStartPage.restricted = true;

export default ProfileStartPage;
