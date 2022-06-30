import { SimpleGrid, Box, AspectRatio } from "@chakra-ui/react";

import AppLayout from "../../../components/appLayout.tsx";

import Seo from "../../../components/seo";

// Scripts
import { isMobile, isBrowser } from "react-device-detect";

const Login = () => {
  return (
    <>
      <Seo title="Support Tickets" />
      <AppLayout>
        <AspectRatio ratio={1} objectFit="cover">
          <iframe
            title="naruto"
            src="https://mycsglearn.freshdesk.com/support/signup"
            allowFullScreen
          />
        </AspectRatio>
      </AppLayout>
    </>
  );
};

export default Login;
