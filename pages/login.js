import { SimpleGrid, Box } from "@chakra-ui/react";

// Components
import Layout from "../components/layout";
import AppLayout from "../components/appLayout.tsx";
import Seo from "../components/seo";

// TypeScript components
import LoginComponent from "../components/loginComponent.tsx";

const Login = () => {
  return (
    <>
      <Seo title="Log in" />
      <LoginComponent />
    </>
  );
};

export default Login;
