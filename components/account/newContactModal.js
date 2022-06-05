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
} from "@chakra-ui/react";

// View Components
import { Row, Col } from "react-bootstrap";
import ShowSuccessMessage from "../../scripts/success";

// Models
import { ContactModel } from "../../models/user/contact";

// Icons
import { FiSave } from "react-icons/fi";

const NewContactModal = (props) => {
  const [contact, setContact] = useState(new ContactModel({ uid: props.uid }));
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      url: `/api/contacts/${uid}`,
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
      <Button colorScheme="blue" onClick={onOpen}>
        Add Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Row>
                <Col xs={12} md={12}>
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
              </Row>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              leftIcon={<FiSave />}
              colorScheme="whatsapp"
              onClick={(e) => {
                e.preventDefault();
                saveContact();
                onClose();
              }}
            >
              Create Contact
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewContactModal;
