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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { Row, Col } from "react-bootstrap";
import { isMobile, isBrowser } from "react-device-detect";

// Appication Components
import Card from "../../common/card";
import Loading from "../../common/card";
import CountrySelector from "../../common/countrySelector";
import Contacts from "./contacts";
import SavedCards from "./savedCards";
import MyCourses from "./myCourses";

// Tabs Componentsm
import Profile from "./profile";

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
  const activeUser = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("Profile");

  const { self, uid } = props;

  const router = useRouter();

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
    <Col xs={12}>
      <Row>
        <Col xs={12} md={12} lg={8}>
          <Tabs isFitted variant={"soft-rounded"} colorScheme="blue">
            <TabList>
              <Tab
                onClick={() => {
                  setActiveTab("Profile");
                }}
              >
                Profile
              </Tab>
              <Tab
                onClick={() => {
                  setActiveTab("Grades");
                }}
              >
                Grades
              </Tab>
              <Tab
                onClick={() => {
                  setActiveTab("Cards");
                }}
              >
                Billing
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel px={0}>
                <Row>
                  <Profile />
                </Row>
              </TabPanel>
              <TabPanel px={0}>
                <Card xs={12} md={12} lg={12} xl={12} bc={isMobile}>
                  <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                    This is grades tab
                  </Text>
                </Card>
              </TabPanel>
              <TabPanel px={0}>
                <Card xs={12} md={12} lg={12} xl={12} bc={isMobile}>
                  <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                    This is payments tab
                  </Text>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Col>

        {/* Here we want to display the user contacts */}
        <Col xs={12} md={12} lg={4} xl={4}>
          {activeTab === "Profile" ? (
            <Contacts uid={activeUser.uid || getLoggedInUID()} />
          ) : activeTab === "Grades" ? (
            <MyCourses uid={activeUser.uid || getLoggedInUID()} />
          ) : activeTab === "Profile" ? (
            <Contacts uid={activeUser.uid || getLoggedInUID()} />
          ) : activeTab === "Cards" ? (
            <SavedCards uid={activeUser.uid || getLoggedInUID()} />
          ) : activeTab === "Tickets" ? (
            <Contacts uid={activeUser.uid || getLoggedInUID()} />
          ) : (
            <Contacts uid={activeUser.uid || getLoggedInUID()} />
          )}
        </Col>
      </Row>
    </Col>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default UserAccountView;
