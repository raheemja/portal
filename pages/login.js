import { SimpleGrid, Box } from "@chakra-ui/react";

import Layout from "../components/layout";
import AppLayout from "../components/appLayout.tsx";
import { LoginComponent } from "../components/loginComponent.tsx";

const Login = () => {
  return (
    <>
      <Layout>
        <LoginComponent />
      </Layout>
    </>
  );
};

export default Login;
