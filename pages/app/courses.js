import { SimpleGrid, Box } from "@chakra-ui/react";

import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";

const CoursesPage = () => {
  return (
    <>
      <Seo title="Courses" />
      <AppLayout></AppLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default CoursesPage;
