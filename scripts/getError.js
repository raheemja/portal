import _ from "lodash";
import Swal from "sweetalert2";

export default function getError(code) {
  const errors = require("../data/errors.json");
  const error = _.find(errors, { code }) || {};

  Swal.fire({
    title: error.title,
    text: error.message,
    icon: error.icon || "error",
    confirmButtonText: "Ok",
  });
}
