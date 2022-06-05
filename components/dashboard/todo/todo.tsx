import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../../common/card";

// import TodoItem from "../../../components/todo/todoItem";
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

export function getServerSideProps(context) {
  return {
    props: {},
  };
}

const Todo = () => {
  const activeUser = useSelector((state) => state.user);

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

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

  if (message) {
    return (
      <Card>
        <Alert status="info">
          <AlertIcon />
          {message}
        </Alert>
      </Card>
    );
  }

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {Object.values(data).map((value, i) => {
          return (
            <div key={i} style={{ background: "" }}>
              <TodoItem
                title={value.title}
                message={value.message}
                category={value.category}
              />
            </div>
          );
        })}
      </Slider>
    </Box>
  );
};

export default Todo;
