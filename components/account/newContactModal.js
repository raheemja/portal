import { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Select,
  Stack,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";

// View Components
import { Row, Col } from "react-bootstrap";
import ShowSuccessMessage from "../../scripts/success";

// Models
import { ContactModel } from "../../models/user/contact";

// Icons
import { FiSave } from "react-icons/fi";
import { AddIcon } from "@chakra-ui/icons";

const NewContactModal = (props) => {
  const [contact, setContact] = useState(new ContactModel({ uid: props.uid }));
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Data
  const relationships = require("../../data/relationships.json");
  const titles = require("../../data/titles.json");

  const axios = require("axios").default;
  const { uid } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveContact = () => {
    axios({
      url: `/api/contacts/${uid || getLoggedInUID()}`,
      method: "POST",
      params: contact,
    }).then(function (response) {
      if (response.data.error) {
        alert(JSON.stringify(response.data.error.code));
      } else {
        ShowSuccessMessage(response.data.message);
        onClose();
      }
    });
  };

  return (
    <>
      <Stack align={""}>
        <Button
          color={"white"}
          bg={"blue.200"}
          _hover={{ bg: "blue.400" }}
          align={"right"}
          w={"30px"}
          variant={"solid"}
          onClick={onOpen}
          size={"sm"}
        >
          <AddIcon />
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Row>
                <Col xs={12} md={4}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="title">Title</FormLabel>

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

                <Col xs={12} md={8}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="displayName">Full name</FormLabel>
                    <Input
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

                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
                    <Input
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

                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
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

                <Col xs={12} md={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Relationship</FormLabel>

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
                    <ButtonGroup pt={[0, 0, 2]}>
                      <Button
                        leftIcon={<FiSave />}
                        w={"50%"}
                        bg={useColorModeValue("blue.400", "blue.400")}
                        color={useColorModeValue("white", "white")}
                        onClick={(e) => {
                          e.preventDefault();
                          saveContact();
                          onClose();
                        }}
                      >
                        Save
                      </Button>

                      <Button colorScheme="red" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Col>
              </Row>
            </form>
          </ModalBody>
        </ModalContent>
        <br />
      </Modal>
    </>
  );
};

export default NewContactModal;
