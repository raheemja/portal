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
  { name: "Dashboard", icon: FiHome, href: "/app/admin-dashboard" },
  { name: "Admissions", icon: FiCompass, href: "/app/admissions" },
  { name: "Calendar", icon: FiCalendar, href: "/app/calendar" },
  { name: "Bursary", icon: FiCreditCard, href: "/app/bursary" },
  { name: "Support Tickets", icon: FiHelpCircle, href: "/app/tickets" },
  { name: "Administration", icon: FiSettings, href: "/app/admin" },
];

export default function AdminMenu() {
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