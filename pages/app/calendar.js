import { SimpleGrid, Box } from "@chakra-ui/react";

import Layout from "../../components/layout";
import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";

const CalendarPage = () => {
  return (
    <>
      <Seo title="Calendar" />
      <AppLayout></AppLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

CalendarPage.restricted = true;

export default CalendarPage;
