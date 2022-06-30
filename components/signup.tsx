import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  FormControl,
  FormLabel,
  Icon,
  Select,
  HStack,
  VStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { UserModel } from "../models/user/user";

import { initialize } from "../features/user/userSlice";

// Scripts and functions
import _ from "lodash";
import getError from "../scripts/getError";
import CryptoJS from "crypto-js";

const avatars = require("../data/homeAvatars.json");
const countries = require("../data/countries.json");
const { parse, stringify, toJSON, fromJSON } = require("flatted");

export default function SignupComponent() {
  const [user, setUser] = useState(UserModel());

  const activeUser = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const axios = require("axios").default;

  // AES encryption
  const { encrypt } = require("ethereum-cryptography/aes");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    //    alert(user[name]);

    if (
      _.isEqual(name, "firstName") ||
      _.isEqual(name, "lastName") ||
      _.isEqual(name, "lastName")
    ) {
      setUser((prevState) => ({
        ...prevState,
        displayName:
          prevState.firstName +
          " " +
          prevState.middleName +
          " " +
          prevState.lastName,
      }));
    }
  };

  function signUp(e) {
    if (!user.firstName) {
      getError("app/missing-first-name");
    } else if (!user.lastName) {
      getError("app/missing-last-name");
    } else if (!user.password) {
      getError("app/missing-password");
    } else {
      axios({
        url: "/api/auth/new",
        method: "POST",
        params: user,
      }).then(function (response) {
        if (response.data.error) {
          alert(JSON.stringify(response.data, null, 2));
        } else {
          Cookies.set("sis-uid", response.data.uid);
          dispatch(initialize(response.data));
          router.push("/app/start");
        }
      });
    }
  }

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Global{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              Student
            </Text>{" "}
            Information System
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              width={useBreakpointValue({ base: "44px", md: "60px" })}
              height={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Create your account
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Create your account to begin the start choosing your subjects,
              courses and degree.
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <FormControl>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last name"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>

              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>

              <FormControl>
                <Select
                  name="country"
                  id="country"
                  placeholder="Select your country"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  {countries.map((country, i) => {
                    return (
                      <>
                        <option key={country.name} value={country.countryName}>
                          {country.countryName}
                        </option>
                      </>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl as="fieldset">
                <RadioGroup
                  id="role"
                  isRequired
                  onChange={(role) => {
                    setUser((prevState) => ({
                      ...prevState,
                      role: role,
                    }));
                  }}
                >
                  <HStack direction="row" spacing="30px">
                    <Radio
                      value="Student"
                      defaultChecked={true}
                      isChecked={true}
                    >
                      I am a student
                    </Radio>
                    <Radio value="Parent">I am a parent</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              onClick={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
