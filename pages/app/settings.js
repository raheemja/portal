import { SimpleGrid, Box } from "@chakra-ui/react";

import AppLayout from "../../components/appLayout.tsx";

import Seo from "../../components/seo";
import _ from "lodash";

const subjects = "English A,English B,Mathematics,Social Studies";

const Login = () => {
  return (
    <>
      <Seo title="Settings" />
      <AppLayout></AppLayout>
    </>
  );
};

export default Login;
