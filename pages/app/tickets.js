import { SimpleGrid, Box, AspectRatio } from "@chakra-ui/react";

import Layout from "../../components/layout";
import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";

const SupportPage = () => {
  return (
    <>
      <Seo title="Support" />
      <AppLayout>
        <AspectRatio ratio={1}>
          <iframe
            title="naruto"
            src="https://www.support.csglearn.com/"
            allowFullScreen
          />
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

SupportPage.restricted = true;

export default SupportPage;
