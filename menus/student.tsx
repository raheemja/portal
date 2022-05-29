import NavItem from "../components/sidebar/navItem.tsx";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiCalendar,
  FiCreditCard,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { useColorModeValue } from "@chakra-ui/react";
import CalendarIcon from "../fun/calendar";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome, href: "/dashboard" },
  { name: "Courses", icon: FiCompass, href: "/courses" },
  { name: "Calendar", icon: FiCalendar, href: "/calendar" },
  { name: "Bursary", icon: FiCreditCard, href: "/bursary" },
  { name: "Settings", icon: FiSettings, href: "/settings" },
];

export default function StudentMenu() {
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </>
  );
}
