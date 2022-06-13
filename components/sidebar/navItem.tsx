import { Flex, Icon, useColorModeValue, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import { ReactText } from "react";

// Router
import { useRouter } from "next/router";

// Scripts
import _ from "lodash";

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
  const route = router.pathname.split("/").pop();
  const p = href.split("/").pop();

  return (
    <Link href={href}>
      <a style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          bg={
            route === href.split("/").pop() && router.pathname.includes(route)
              ? "blue.400"
              : "transparent"
          }
          color={router.pathname.includes(href) ? "white" : "black"}
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "blue.400",
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
