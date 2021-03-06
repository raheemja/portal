// UI Components
import {
  Text,
  Heading,
  Stack,
  useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

// Essential app components
import StudentStartLayout from "../../../../components/studentStartLayout.tsx";
import Seo from "../../../../components/seo";

// Custome components
import Card from "../../../../common/card";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";
import Contacts from "../../../../components/account/contacts";

// Icons
import { FiSave } from "react-icons/fi";
import { InfoIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Scripts and libraries
import getLoggedInUID from "../../../../scripts/getLoggedInUID";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import _ from "lodash";
import Swal from "sweetalert2";

// Models
import { ContactModel } from "../../../../models/user/contact";

const ContactsStartPage = () => {
  const activeUser = useSelector((state) => state.user);
  const [contact, setContact] = useState(
    new ContactModel({ uid: activeUser.uid || getLoggedInUID() })
  );

  // Router object
  const router = useRouter();
  const axios = require("axios").default;

  // Data
  const relationships = require("../../../../data/relationships.json");
  const titles = require("../../../../data/titles.json");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveContact = () => {
    if (contact.displayName && contact.phoneNumber && contact.relationship) {
      axios({
        url: `/api/contacts/${activeUser.uid || getLoggedInUID()}`,
        method: "POST",
        params: contact,
      }).then(function (response) {
        if (response.data.error) {
        } else {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            messaage: `${contact.displayName} has been added successfully`,
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
      <Col xs={12} md={12}>
        <Card>
          <Text color={"gray.500"}>
            <InfoIcon mr={3} color={"blue.400"} />
            Adding contacts is optional, but it allows us to reach out to
            another person on your behalf to provide important imformation and/
            or updates, including welcome packages, assignment changes, etc.
          </Text>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Seo title={`Contacts Overview`} />
      <StudentStartLayout>
        <Heading
          pt={2}
          as={"h3"}
          size="lg"
          color={useColorModeValue("gray.600", "gray.600")}
        >
          Contacts Overview
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
            <BreadcrumbLink color="blue.500">Contacts</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <br />
        <br />

        {isMobile ? <InfoTab /> : null}

        <Col xs={12} md={8}>
          <Card>
            <Row>
              {/* Title */}
              <Col xs={12} md={6}>
                <FormControl>
                  <FormLabel htmlFor="title" color={"gray.500"}>
                    Title
                  </FormLabel>

                  <Select
                    color={"gray.500"}
                    id="title"
                    name="title"
                    placeholder="Select option"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    {titles.map((item, i) => {
                      return (
                        <option key={i} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <br />
              </Col>

              {/* Display Name */}
              <Col xs={12} md={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="displayName" color={"gray.500"}>
                    Full Name
                  </FormLabel>
                  <Input
                    color={"gray.500"}
                    id="displayName"
                    name="displayName"
                    type="text"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormControl>
                <br />
              </Col>

              {/* Phone Number */}
              <Col xs={12} md={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="phoneNumber" color={"gray.500"}>
                    Phone Number
                  </FormLabel>
                  <Input
                    color={"gray.500"}
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormControl>
                <br />
              </Col>

              {/* Email */}
              <Col xs={12} md={6}>
                <FormControl>
                  <FormLabel htmlFor="email" color={"gray.500"}>
                    Email
                  </FormLabel>
                  <Input
                    color={"gray.500"}
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormControl>
                <br />
              </Col>

              {/* Relationship */}
              <Col xs={12} md={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="relationship" color={"gray.500"}>
                    Relationship
                  </FormLabel>

                  <Select
                    placeholder="Select option"
                    id="relationship"
                    name="relationship"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    color={"gray.500"}
                  >
                    {relationships.map((item, i) => {
                      return (
                        <option key={i} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <br />
              </Col>

              <Col xs={12} md={6}>
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
                        saveContact();
                      }}
                    >
                      Save Contact
                    </Button>

                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/app/start/education");
                      }}
                    >
                      Skip
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Col>
            </Row>
          </Card>
        </Col>

        {isBrowser ? (
          <Col md={4} xs={12}>
            <Row>
              <InfoTab />
              <Contacts
                uid={activeUser.uid || getLoggedInUID()}
                hideNew={true}
              />
            </Row>
          </Col>
        ) : (
          <Contacts uid={activeUser.uid || getLoggedInUID()} hideNew={true} />
        )}
      </StudentStartLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

ContactsStartPage.restricted = true;

export default ContactsStartPage;
