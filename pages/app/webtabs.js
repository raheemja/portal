import {
  SimpleGrid,
  Box,
  AspectRatio,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import Layout from "../../components/layout";
import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";

const WebTabsPage = () => {
  return (
    <>
      <Seo title="Web Tabs" />
      <AppLayout>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Website</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AspectRatio ratio={1}>
                <iframe
                  title="naruto"
                  src="https://www.csglearn.com/jm"
                  allowFullScreen
                />
              </AspectRatio>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <AspectRatio ratio={1}>
          <iframe title="naruto" src="" allowFullScreen />
        </AspectRatio>
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
