import {
  FiHome,
  FiCompass,
  FiCalendar,
  FiCreditCard,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

import { IconType } from "react-icons";
import { useColorModeValue, Text } from "@chakra-ui/react";

import NavItem from "../components/sidebar/navItem.tsx";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

// List of menu items that will be rendered for the student's side menu
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome, href: "/app/dashboard" },
  { name: "Courses", icon: FiCompass, href: "/app/courses" },
  { name: "Calendar", icon: FiCalendar, href: "/app/calendar" },
  { name: "Bursary", icon: FiCreditCard, href: "/app/bursary" },
  { name: "Tickets & Support", icon: FiHelpCircle, href: "/app/tickets" },
  { name: "Settings", icon: FiSettings, href: "/app/settings" },
];

function StudentSidebarMenu() {
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

export default StudentSidebarMenu;
