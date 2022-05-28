/* This function is used to generate student IDs */
import moment from "moment";

export const generateStudentID = () => {
  const MIN = 100000;
  const MAX = 999999;
  return (
    /* First we want to document the year the student is registering*/
    moment().format("YYYY") +
    "-" /* Separate the year with a hyphen */ +
    Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
  );
};
