// UI Components
import {
  SimpleGrid,
  Badge,
  Box,
  Text,
  Avatar,
  Alert,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  AlertIcon,
  TabPanel,
  Heading,
  Show,
  Hide,
  Stack,
  HStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

// Components
import Card from "../../common/card";
import { Row, Col } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";

// Icons
import {
  FiSave,
  FiBook,
  FiUser,
  FiFile,
  FiLayers,
  FiMoreVertical,
  FiPhone,
  FiMail,
} from "react-icons/fi";

// Scripts and libraries
import getLoggedInUID from "../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import axios from "axios";
import { phoneFormat } from "../../scripts/phoneFormat";
import { isMobile, isBrowser } from "react-device-detect";

const AccountUserCard = (props) => {
  const activeUser = useSelector((state) => state.user);

  function getBadgeColor() {
    let badgeColor = "";

    switch (activeUser.role) {
      case "Guest":
        badgeColor = "red";
        break;

      case "Student":
        badgeColor = "purple.400";
        break;

      case "Parent":
        badgeColor = "orange";
        break;

      case "Teacher":
        badgeColor = "blue";
        break;

      case "Staff":
        badgeColor = "yellow";
        break;

      case "Administrator":
        badgeColor = "telegram";
        break;

      case "Super Admin":
        badgeColor = "pink";
        break;

      default:
        badgeColor = "whatsapp";
    }

    return badgeColor;
  }

  const ContactDetails = () => {
    return (
      <Row>
        <Col xs={12} md={6}>
          <HStack pt={2}>
            <FiMail color={"gray.300"} />

            <Text fontSize="md" pb={1} color={"blue.400"}>
              <Link href={`mailto:${activeUser.email}`}>
                {activeUser.email}
              </Link>
            </Text>
          </HStack>
        </Col>
        <Col xs={12} md={6}>
          <HStack pt={1}>
            <FiPhone color="green" />
            <Text fontSize={{ base: "md", sm: "md" }} color={"gray.500"}>
              +1 {phoneFormat(activeUser.phoneNumber)}
            </Text>
          </HStack>
        </Col>
      </Row>
    );
  };

  return (
    <Card xs={12} md={12} lg={6} xl={6}>
      {/*  */}
      <Row>
        <Col xs={3} md={2}>
          <Avatar
            size={"lg"}
            src={activeUser.avatar}
            alt="User profile picture"
          />
        </Col>

        {/*  */}
        <Col xs={9} md={10}>
          <Heading as={"h5"} size={"lg"}>
            {activeUser.displayName}
          </Heading>

          {/*  */}
          <Text color={"blue.400"} fontSize={{ base: "sm", sm: "md" }}>
            <Badge color={"white"} bg={getBadgeColor()}>
              {activeUser.role}
            </Badge>{" "}
            • {process.env.NEXT_PUBLIC_SCHOOL_NAME}
          </Text>

          {isBrowser ? <ContactDetails /> : null}
        </Col>
      </Row>

      {isBrowser ? null : (
        <Stack align={"center"}>
          <ContactDetails />
        </Stack>
      )}

      {/*  */}
      {activeUser.description ? (
        <Text fontSize={{ base: "md", sm: "md" }}>
          {activeUser.description}
        </Text>
      ) : null}
    </Card>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default AccountUserCard;
