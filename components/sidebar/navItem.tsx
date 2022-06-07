import { Flex, Icon, useColorModeValue, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import { ReactText } from "react";

// Router
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href: ReactText;
}

export default function NavItem({
  href,
  icon,
  children,
  ...rest
}: NavItemProps) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          bg={router.pathname.includes(href) ? "blue.400" : ""}
          color={router.pathname.includes(href) ? "white" : ""}
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.600",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </a>
    </Link>
  );
}
