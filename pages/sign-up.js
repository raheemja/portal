import { SimpleGrid, Box } from "@chakra-ui/react";

// Components
import Layout from "../components/layout";
import AppLayout from "../components/appLayout.tsx";
import Seo from "../components/seo";

// TypeScript components
import SignupComponent from "../components/signup.tsx";

const Login = () => {
  return (
    <>
      <Seo
        title="Sign Up"
        description="Applying online at CSG Learning is pretty easy. An interactive guide will stay with you every step of the way, and before you know it, you'll be on your way to earning your qualifications."
      />
      <SignupComponent href="/app/dashboard" />
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Login;
