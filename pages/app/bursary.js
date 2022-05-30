import { SimpleGrid, Box } from "@chakra-ui/react";

import Layout from "../../components/layout";
import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";

const Login = () => {
  return (
    <>
      <Seo title="Bursary" />
      <AppLayout></AppLayout>
    </>
  );
};

export default Login;
