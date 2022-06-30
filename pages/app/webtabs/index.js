import {
  SimpleGrid,
  Box,
  AspectRatio,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

// Components
import AppLayout from "../../../components/appLayout.tsx";
import Card from "../../../common/card";
import Seo from "../../../components/seo";
import { Row, Col } from "react-bootstrap";

// Scripts
import { isMobile, isBrowser } from "react-device-detect";

const WebTabsPage = () => {
  return (
    <>
      <Seo title="Web Tabs" />
      <AppLayout>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Tabs variant="soft-rounded" colorScheme="blue" isFitted>
            <TabList>
              <Tab>Tickets</Tab>
              <Tab>Webmail</Tab>
              <Tab>TawkTo</Tab>
              <Tab>WhatsApp</Tab>
              <Tab>Zoho Forms</Tab>
              <Tab>WhatsApp</Tab>
              <Tab>WhatsApp</Tab>
              <Tab>Website</Tab>
            </TabList>

            <TabPanels>
              {/* Support Tickets */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://mycsglearn.freshdesk.com/support/home"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              {/* Webmail */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe
                    title="naruto"
                    src="http://webmail.dreamhost.com/"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              {/* TawkTo */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://dashboard.tawk.to/#/dashboard"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              {/* WhatsApp Web */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://web.whatsapp.com/"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              {/* Zoho Forms */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://forms.zoho.com/"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              {/* WhatsApp Web */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe title="naruto" src="" allowFullScreen />
                </AspectRatio>
              </TabPanel>

              {/* WhatsApp Web */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe title="naruto" src="" allowFullScreen />
                </AspectRatio>
              </TabPanel>

              {/* WhatsApp Web */}
              <TabPanel px={0}>
                <AspectRatio ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.csglearn.com/jm/"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>
            </TabPanels>
          </Tabs>
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

WebTabsPage.restricted = true;

export default WebTabsPage;
