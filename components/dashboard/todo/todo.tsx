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
  Heading,
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
    href: "/app/apply",
  },
  "1": {
    id: "0",
    title: "Complete your account",
    message:
      "Complete your sudent profile so you can starting applying for courses.",
    action: "Get Started",
    category: "PROFILE",
    href: "/app/start",
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

  const [todos, setTodos] = useState({
    "0": {
      id: "1",
      title: "Start Applying",
      message: "Choose the subjects and/ or courses you'd like to enroll in.",
      action: "Get Started",
      category: "COURSE",
      href: "/app/apply",
    },
  });

  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/todo/${activeUser.uid || getLoggedInUID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
          setCount(Object.values(items).length);
        } else {
          setTodos(data);
          setCount(Object.values(data).length);
        }
      });

    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Card xs={12} md={12} lg={12} xl={12}>
        <Heading as={"h5"} size={"md"} color={"gray.600"}>
          My Todo List
        </Heading>
        <br />

        <Loading />
      </Card>
    );
  }

  return (
    <>
      <Card
        position={"relative"}
        height={""}
        width={"full"}
        overflow={"hidden"}
        xs={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Heading as={"h5"} size={"md"} color={"gray.600"}>
          My Todo List
        </Heading>
        <br />

        {Object.values(todos).map((item, i) => {
          return (
            <div key={i} style={{ background: "" }}>
              {count > 1 && i !== 0 ? (
                <>
                  <hr style={{ margin: "30px" }} />
                </>
              ) : null}

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
      </Card>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Todo;
