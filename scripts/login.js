import Swal from "sweetalert2";
import axios from "axios";
import getError from "./getError";

export const login = (props) => {
  axios({
    url: "/api/auth/login",
    method: "POST",
    params: props,
  }).then(function (response) {
    if (response.data.error) {
      alert(JSON.stringify(response.data, null, 2));
      const error = getError(response.data.error.code);
      Swal.fire({
        title: error.title,
        text: error.message,
        icon: error.icon || "error",
        confirmButtonText: "Ok",
      });
    } else {
      //  alert(JSON.stringify(response.data, null, 2));
      //      Cookies.set("sis-uid", response.data.uid, { expires: 7 });
      //      dispatch(initialize(response.data));
      //    router.push("/dashboard");
      alert(JSON.stringify(response.data, null, 2));
    }
  });
};
