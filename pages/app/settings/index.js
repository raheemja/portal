import { SimpleGrid, Box } from "@chakra-ui/react";

import AppLayout from "../../../components/appLayout.tsx";

import Seo from "../../../components/seo";
import _ from "lodash";

const Login = () => {
  return (
    <>
      <Seo title="Settings" />
      <AppLayout></AppLayout>
    </>
  );
};

export default Login;
