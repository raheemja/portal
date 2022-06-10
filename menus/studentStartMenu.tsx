import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiCalendar,
  FiCreditCard,
  FiSettings,
  FiMenu,
  FiBell,
  FiHelpCircle,
  FiChevronDown,
} from "react-icons/fi";

import { IconType } from "react-icons";
import { useColorModeValue, Text } from "@chakra-ui/react";

import NavItem from "../components/sidebar/navItem.tsx";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Welcome", icon: FiHome, href: "/app/start" },
  { name: "Profile", icon: FiCompass, href: "/app/start/profile" },
  { name: "Contacts", icon: FiCalendar, href: "/app/start/contacts" },
  { name: "Education", icon: FiCreditCard, href: "/app/start/education" },
  {
    name: "Work Experience",
    icon: FiHelpCircle,
    href: "/app/start/experience",
  },
  { name: "Files & Documents", icon: FiSettings, href: "/app/start/files" },
];

export default function StudentStartMenu() {
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          <Text>{link.name}</Text>
        </NavItem>
      ))}
    </>
  );
}
