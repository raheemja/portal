import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  Select,
} from "@chakra-ui/react";

import AppLayout from "../../../components/appLayout.tsx";

import Seo from "../../../components/seo";

// Components
import Card from "../../../common/card";
import CourseCard from "../../../components/course/courseCard";

// Scripts
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

const CoursesPage = (props) => {
  // States
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const axios = require("axios").default;

  function getCategoryName(id) {
    let name;
    categories.forEach((category, i) => {
      if (category.id === id) {
        name = category.name;
      }
    });

    return name;
  }

  useEffect(() => {
    axios({
      url: "https://www.classroom.csglearn.com/webservice/rest/server.php",
      method: "GET",
      params: {
        wstoken: "e83fa37c9b7494d452cc44e62c109770",
        wsfunction: "core_course_get_categories",
        moodlewsrestformat: "json",
      },
    }).then(function (response) {
      setCategories(response.data);
    });

    axios({
      url: "https://www.classroom.csglearn.com/webservice/rest/server.php",
      method: "GET",
      params: {
        wstoken: "e83fa37c9b7494d452cc44e62c109770",
        wsfunction: "core_course_get_courses",
        moodlewsrestformat: "json",
      },
    }).then(function (response) {
      if (response.data.error) {
      } else {
        console.log(response.data);
        setCourses(response.data);
      }
    });
  }, []);

  return (
    <>
      <Seo title="Courses" />

      <AppLayout></AppLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

CoursesPage.restricted = true;

export default CoursesPage;
