import Link from "next/link";

import { SimpleGrid, Box, Button } from "@chakra-ui/react";

import Layout from "../components/layout";
import AppLayout from "../components/appLayout.tsx";
import { LoginComponent } from "../components/loginComponent.tsx";
import Seo from "../components/seo";

import Card from "../common/card";

const Login = () => {
  return (
    <>
      <Seo title="Dashboard" />
      <AppLayout>
        <Card callToAction="Start">
          <Link href="/account/settings">
            <Button
              _hover={{
                bg: "cyan.400",
                color: "white",
              }}
              bg="cyan.400"
              color="white"
            >
              Hello there
            </Button>
          </Link>
        </Card>
      </AppLayout>
    </>
  );
};

export default Login;
