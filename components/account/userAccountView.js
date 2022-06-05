// React Components
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

// UI Components
import {
  Text,
  Alert,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Stack,
  Button,
  Select,
} from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";

// Appication Components
import Card from "../../common/card";
import Loading from "../../common/card";
import CountrySelector from "../../common/countrySelector";
import Contacts from "./contacts";

// Icons
import { FiSave, FiBook } from "react-icons/fi";

// Scripts
import getLoggedInUID from "../../scripts/getLoggedInUID";
import ShowSuccessMessage from "../../scripts/success";
import getError from "../../scripts/getError";

const FormGroup = (props) => {
  const { xs, sm, md, lg, xl } = props;
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      {props.children}
      <br />
    </Col>
  );
};

const UserAccountView = (props) => {
  const { self, uid } = props;

  const router = useRouter();

  const activeUser = useSelector((state) => state.user);

  const [editable, setEditable] = useState(true || false);
  const [editModeOn, setEditMode] = useState(false);
  const [data, setData] = useState();
  const [user, setUser] = useState(self ? activeUser : null);
  const [isLoading, setLoading] = useState(true);
  const axios = require("axios").default;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    axios({
      method: "PATCH",
      url: `/api/user/${user.uid}`,
      params: user,
    }).then(function (response) {
      if (response.data.error) {
        getError(response.data.error.code);
      } else {
        ShowSuccessMessage(response.data.message);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/user/${uid || getLoggedInUID()}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  const SaveButton = () => {
    return (
      <Button
        leftIcon={<FiSave />}
        colorScheme="whatsapp"
        onClick={(e) => {
          e.preventDefault();
          saveChanges();
        }}
      >
        Save Changes
      </Button>
    );
  };

  const CancelButton = () => {
    return (
      <Button
        colorScheme="red"
        onClick={(e) => {
          setEditMode(!editModeOn);
        }}
      >
        Cancel
      </Button>
    );
  };

  return (
    <Row>
      <Card xs={12} md={8} bc={isMobile}>
        <form>
          <Row>
            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? (
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                ) : null}
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={user.firstName}
                  disabled={!editModeOn}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
            </FormGroup>

            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? (
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                ) : null}
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={user.lastName}
                  disabled={!editModeOn}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
            </FormGroup>

            {/* Phone Number */}
            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? (
                  <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                ) : null}
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={user.phoneNumber}
                  disabled={!editModeOn}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
            </FormGroup>

            {/* Email */}
            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? (
                  <FormLabel htmlFor="email">Email</FormLabel>
                ) : null}
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={user.email}
                  disabled={!editModeOn}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
            </FormGroup>

            <FormGroup xs={12} md={12}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? (
                  <FormLabel htmlFor="streetAddress">Street Address</FormLabel>
                ) : null}

                <Input
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={user.streetAddress}
                  disabled={!editModeOn}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
            </FormGroup>

            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? (
                  <FormLabel htmlFor="community">Town / Community</FormLabel>
                ) : null}
                <Input
                  id="community"
                  name="community"
                  placeholder="Town / Community"
                  value={user.community}
                  disabled={!editModeOn}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
            </FormGroup>

            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? <FormLabel htmlFor="city">City</FormLabel> : null}

                <Input
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  value={user.city}
                  disabled={!editModeOn}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
            </FormGroup>

            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                {editModeOn ? (
                  <FormLabel htmlFor="state">Parish / State</FormLabel>
                ) : null}

                <Input
                  id="state"
                  name="state"
                  placeholder="Enter your parish/ state"
                  value={user.state}
                  disabled={!editModeOn}
                />
              </FormControl>
            </FormGroup>

            <FormGroup xs={12} md={6}>
              <FormControl isRequired={editModeOn}>
                <CountrySelector
                  isReadOnly={editModeOn}
                  selected={user.country}
                />
              </FormControl>
            </FormGroup>

            <Row>
              <Col xs={3} md={7}>
                <br />
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Edit {isMobile ? "" : "Profile"}
                  </FormLabel>
                  <Switch
                    id="email-alerts"
                    onChange={(e) => {
                      setEditMode(!editModeOn);
                    }}
                  />
                  <br />
                  <br />
                </FormControl>
              </Col>

              {isMobile && editModeOn ? (
                <>
                  <Row>
                    <Col xs={4}>
                      <CancelButton />
                    </Col>
                    <Col xs={8}>
                      <SaveButton />
                    </Col>
                  </Row>
                </>
              ) : (
                <Col xs={9} md={5}>
                  <br />
                  <br />
                  <br />
                  {editModeOn ? (
                    <Stack spacing={4} direction="row" align="center">
                      <CancelButton />
                      <SaveButton />
                    </Stack>
                  ) : null}
                </Col>
              )}
            </Row>
          </Row>

          <Text>{JSON.stringify(data, null, 2)}</Text>
        </form>
      </Card>

      {/* Here we want to display the user contacts */}
      <Col xs={12} md={4}>
        <Contacts uid={getLoggedInUID()} />
      </Col>
    </Row>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default UserAccountView;
