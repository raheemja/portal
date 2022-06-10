import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../../common/card";

import { isMobile, isBrowser } from "react-device-detect";
import axios from "axios";

import {
  SimpleGrid,
  Box,
  Button,
  Text,
  IconButton,
  Center,
  Spinner,
  useBreakpointValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// Todo Items
import TodoItem from "./todoItem";
import Loading from "../../../common/loading";
import getLoggedInUID from "../../../scripts/getLoggedInUID";

// Scripts
import toArray from "../../../scripts/toArray";

const items = {
  "0": {
    id: "1",
    title: "Start Applying",
    message: "Choose the subjects and/ or courses you'd like to enroll in.",
    action: "Get Started",
    category: "COURSE",
    href: "/app/courses",
  },
  "1": {
    id: "0",
    title: "Comlete your account",
    message:
      "Complete your sudent profile so you can starting applying for courses.",
    action: "Get Started",
    category: "PROFILE",
    href: "/app/account",
  },
};

const NewTodo = () => {
  return (
    <>
      <></>
    </>
  );
};

const Todo = () => {
  const activeUser = useSelector((state) => state.user);

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    setLoading(true);

    fetch(`/api/todo/${activeUser.uid || getLoggedInUID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setData(data);
        }
      });

    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Box position={"relative"} height={""} width={"full"} overflow={"hidden"}>
      {Object.values(items).map((item, i) => {
        return (
          <div key={i} style={{ background: "" }}>
            <TodoItem
              title={item.title}
              message={item.message}
              category={item.category}
              href={item.href}
              action={item.action}
            />
          </div>
        );
      })}
      <NewTodo />
    </Box>
  );
};

export default Todo;
