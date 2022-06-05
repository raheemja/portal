import { SimpleGrid, Box } from "@chakra-ui/react";

import Layout from "../../components/layout";
import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";

const SupportPage = () => {
  return (
    <>
      <Seo title="Support" />
      <AppLayout></AppLayout>
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
