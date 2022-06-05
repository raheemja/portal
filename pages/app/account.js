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
} from "@chakra-ui/react";

// Components
import Seo from "../../components/seo";
import AppLayout from "../../components/appLayout.tsx";
import Card from "../../common/card";
import { Row, Col } from "react-bootstrap";
import SchoolPreview from "../../components/schoolPreview";

// Commmon Components
import BrowserView from "../../common/browserView";
import MobileView from "../../common/mobileView";

// User display Components
import UserAccountView from "../../components/account/userAccountView";
import UserEducationView from "../../components/account/userEducationView";

// Icons
import { FiSave, FiBook, FiUser, FiFile, FiMoreVertical } from "react-icons/fi";

// Scripts and libraries
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isMobile, isBrowser } from "react-device-detect";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import axios from "axios";

const AccountPage = () => {
  const activeUser = useSelector((state) => state.user);

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const router = useRouter();

  const DetailsTray = () => {
    return (
      <>
        <Row>
          <Col xs={3} md={3} lg={2}>
            <Avatar size={"lg"} src={activeUser.avatar} />
          </Col>
          <Col xs={9} md={9} lg={10}>
            <Heading as={"h5"}>{activeUser.displayName}</Heading>

            <BrowserView>
              <Text>
                <Badge status="green" colorScheme="green">
                  {activeUser.role}
                </Badge>{" "}
                • <SchoolPreview schoolCode={activeUser.activeSchoolCode} />
              </Text>
              <br />

              {activeUser.description ?? (
                <>
                  <br />
                  <Text>{activeUser.description} "browsers"</Text>
                </>
              )}
            </BrowserView>
          </Col>
        </Row>

        <MobileView>
          <Text>
            <Badge status="green" colorScheme="green">
              {activeUser.role}
            </Badge>{" "}
            • <SchoolPreview schoolCode={activeUser.activeSchoolCode} />
          </Text>
          <br />

          {activeUser.description ?? (
            <>
              <Box>
                <Text mt={4}>{activeUser.description} "mobile"</Text>
              </Box>
            </>
          )}
        </MobileView>
      </>
    );
  };

  return (
    <>
      <Seo title={`My Account - ${activeUser.displayName}`} />
      <AppLayout>
        <Col xs={12}>
          <Row>
            <Card xs={12} md={6}>
              <DetailsTray />
            </Card>

            <Card xs={0} md={6}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Card>

            <Col xs={12}>
              <Tabs
                variant="soft-rounded"
                colorScheme="blue"
                size="sm"
                isFitted
              >
                <TabList>
                  <Tab>
                    <FiUser style={{ marginRight: "10px" }} />
                    Profile
                  </Tab>
                  <Tab>
                    <FiBook style={{ marginRight: "10px" }} />
                    Education
                  </Tab>
                  <Tab>
                    <FiMoreVertical style={{ marginRight: "10px" }} />
                    Experience
                  </Tab>
                  {isBrowser ? (
                    <Tab>
                      <FiFile style={{ marginRight: "10px" }} />
                      Files & Documents
                    </Tab>
                  ) : null}
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <UserAccountView uid={activeUser.uid} self={true} />
                  </TabPanel>

                  <TabPanel>
                    <UserEducationView self={true} />
                  </TabPanel>

                  <TabPanel>
                    <Card>
                      <Text>This is the Experience tab</Text>
                      <br />
                    </Card>
                  </TabPanel>

                  {isBrowser ? (
                    <TabPanel>
                      <Card>
                        <Text>This is the Files & Documents tab</Text>
                        <br />
                      </Card>
                    </TabPanel>
                  ) : null}
                </TabPanels>
              </Tabs>
            </Col>
          </Row>
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

AccountPage.restricted = true;

export default AccountPage;
