// UI Components
import { SimpleGrid, Box } from "@chakra-ui/react";

// Components
import Seo from "../../components/seo";
import AppLayout from "../../components/appLayout.tsx";

// Scripts and libraries
import _ from "lodash";

const AccountPage = () => {
  return (
    <>
      <Seo title="Account" />
      <AppLayout></AppLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default AccountPage;
