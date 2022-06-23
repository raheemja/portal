import React, { Component, useEffect, useState } from "react";

import {
  Heading,
  Text,
  Avatar,
  useColorModeValue,
  Stack,
  HStack,
  Center,
  Alert,
  ButtonGroup,
  Link,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormHelperText,
} from "@chakra-ui/react";

import { Row, Col } from "react-bootstrap";

import Card from "../../common/card";

// Icons
import { FiPhone, FiMail, FiSave } from "react-icons/fi";
import {
  EditIcon,
  DeleteIcon,
  ViewIcon,
  ViewOffIcon,
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/icons";

// Scripts and libraries
import { phoneFormat } from "../../scripts/phoneFormat";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ContactCard = (props) => {
  const [contact, setContact] = useState(props);
  const [temp, setTemp] = useState(contact);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Data
  const relationships = require("../../data/relationships.json");
  const titles = require("../../data/titles.json");

  // Router object
  const router = useRouter();
  const axios = require("axios").default;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function getBadgeColor() {
    let badgeColor = "";

    switch (contact.relationship) {
      case "Mother":
        badgeColor = "pink.400";
        break;

      case "Father":
        badgeColor = "blue.400";
        break;

      case "Brother":
        badgeColor = "blue.600";
        break;

      case "Sister":
        badgeColor = "pink.600";
        break;

      case "Son":
        badgeColor = "blue.500";
        break;

      case "Uncle":
        badgeColor = "blue.900";
        break;

      case "Aunt":
        badgeColor = "pink.700";
        break;

      case "Partner":
        badgeColor = "green.500";
        break;

      case "Spouse":
        badgeColor = "orange.400";
        break;

      case "Friend":
        badgeColor = "orange.400";
        break;

      case "Family Member":
        badgeColor = "green.400";
        break;

      case "Emergency":
        badgeColor = "red.500";
        break;

      case "Teacher":
        badgeColor = "teal.400";
        break;

      default:
        badgeColor = "blue.400";
    }

    return badgeColor;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modify {contact.displayName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Row>
              {/* Title */}
              <Col xs={4}>
                <FormControl isRequired>
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
                    defaultValue={contact.title}
                  >
                    {titles.map((item, i) => {
                      return (
                        <option
                          key={i}
                          value={item.name}
                          selected={item.name === contact.title}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
                <br />
              </Col>

              {/* Display Name */}
              <Col xs={8}>
                <FormControl isRequired>
                  <FormLabel htmlFor="displayName" color={"gray.500"}>
                    Full Name
                  </FormLabel>
                  <Input
                    color={"gray.500"}
                    id="displayName"
                    name="displayName"
                    type="text"
                    value={contact.displayName}
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
                    value={contact.email}
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
                    value={contact.phoneNumber}
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
                        <option
                          key={i}
                          value={item.name}
                          selected={item.name === contact.relationship}
                        >
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
                <Stack align={"right"} pt={2}>
                  <ButtonGroup>
                    <Button
                      w={"50%"}
                      bg={useColorModeValue("blue.400", "blue.400")}
                      color={useColorModeValue("white", "white")}
                      onClick={(e) => {
                        e.preventDefault();
                        setTemp(contact);

                        //      saveContact();
                        onClose();
                      }}
                    >
                      Update
                    </Button>

                    <Button
                      bg={"red.400"}
                      color={"white"}
                      onClick={() => {
                        setContact(temp);
                        onClose();
                      }}
                    >
                      Cancel
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Col>
            </Row>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Col xs={12} md={12} lg={12} w={"100%"}>
        <Row>
          <Col xs={10}>
            <Heading
              as={"h6"}
              size="sm"
              color={useColorModeValue("gray.500", "gray.600")}
            >
              {contact.title ? `${contact.title} ` : null}

              {contact.displayName}

              {contact.relationship ? (
                <Badge ml={2} variant="solid" bg={getBadgeColor()}>
                  {contact.relationship}
                </Badge>
              ) : null}
            </Heading>

            <Row>
              <Col xs={12} md={12} lg={12} xl={12}>
                <HStack pt={2}>
                  <EmailIcon color={"gray.400"} />

                  <Text fontSize="sm" mb={1}>
                    <Link color={"blue.400"} href={`mailto:${contact.email}`}>
                      {contact.email}
                    </Link>
                  </Text>
                </HStack>
              </Col>

              <Col xs={12} md={12} lg={12} xl={12}>
                <HStack pt={1}>
                  <PhoneIcon color={"green.400"} />
                  <Text fontSize="sm" color={"gray.500"}>
                    +1 {phoneFormat(contact.phoneNumber)}
                  </Text>
                </HStack>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <EditIcon
              color={"gray.300"}
              onClick={onOpen}
              _hover={{
                color: "gray.600",
                cursor: "pointer",
              }}
            />
          </Col>
        </Row>
      </Col>

      <hr style={{ width: "70%", margin: "30px" }} />
    </>
  );
};

export default ContactCard;
