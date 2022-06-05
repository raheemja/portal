import { SimpleGrid, Box } from "@chakra-ui/react";

import Layout from "../../components/layout";
import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";

const BursaryPage = () => {
  return (
    <>
      <Seo title="Bursary" />
      <AppLayout></AppLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

BursaryPage.restricted = true;

export default BursaryPage;
