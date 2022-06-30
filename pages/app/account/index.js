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
} from "@chakra-ui/react";

// Components
import Seo from "../../../components/seo";
import AppLayout from "../../../components/appLayout.tsx";
import Card from "../../../common/card";
import { Row, Col } from "react-bootstrap";
import SchoolPreview from "../../../components/schoolPreview";

// Commmon Components
import BrowserView from "../../../common/browserView";
import MobileView from "../../../common/mobileView";

// User display Components
import UserAccountView from "../../../components/account/userAccountView";
import UserEducationView from "../../../components/account/userEducationView";
import UserFilesAndDocumentsView from "../../../components/account/filesAndDocumentsView";
import UserExperienceView from "../../../components/account/userExperienceView";
import AccountUserCard from "../../../components/account/accountUserCard";

// Icons
import {
  FiSave,
  FiBook,
  FiUser,
  FiFile,
  FiLayers,
  FiMoreVertical,
} from "react-icons/fi";

// Scripts and libraries
import getLoggedInUID from "../../../scripts/getLoggedInUID";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isMobile, isBrowser } from "react-device-detect";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import axios from "axios";

const AccountPage = () => {
  const activeUser = useSelector((state) => state.user);

  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const router = useRouter();

  const sx = isMobile
    ? {
        width: "110%",
        position: "relative",
        left: "calc(-1 * (100vw - 100%) / 2)",
      }
    : null;

  return (
    <>
      <Seo title={`My Account - ${activeUser.displayName}`} />
      <AppLayout>
        <AccountUserCard />
        <Col xs={12} md={12} lg={6} xl={6}></Col>
        <UserAccountView uid={activeUser.uid || getLoggedInUID()} self={true} />
      </AppLayout>
    </>
  );
};

AccountPage.restricted = true;

export default AccountPage;
