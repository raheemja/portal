import { SimpleGrid, Box } from "@chakra-ui/react";

import Layout from "../components/layout";
import AppLayout from "../components/appLayout.tsx";
import { LoginComponent } from "../components/loginComponent.tsx";
import Seo from "../components/seo";

const Login = () => {
  return (
    <>
      <Seo title="Calendar" />
      <AppLayout></AppLayout>
    </>
  );
};

export default Login;
