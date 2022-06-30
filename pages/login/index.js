import { SimpleGrid, Box } from "@chakra-ui/react";

// Components
import Layout from "../../components/layout";
import AppLayout from "../../components/appLayout.tsx";
import Seo from "../../components/seo";

// TypeScript components
import LoginComponent from "../../components/loginComponent.tsx";

const Login = () => {
  return (
    <>
      <Seo title="Log in" description="Log into your Global SIS account." />
      <LoginComponent href="/app/dashboard" />
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Login;
