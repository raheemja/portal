import _ from "lodash";
import errors from "../data/errors.json";

export default function getError(code) {
  return (
    _.find(errors, { code }) || {
      title: "Hmmm...",
      message: "Something went wrong",
    }
  );
}
