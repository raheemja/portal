import _ from "lodash";
import Swal from "sweetalert2";
import axios from "axios";
import getError from "./getError";

let error;

export const login = (props) => {
  if (_.isEmpty(props.email) && _.isEmpty(props.password)) {
    getError("app/missing-credentials");
  } else if (_.isEmpty(props.email)) {
    getError("app/missing-email");
  } else if (_.isEmpty(props.password)) {
    getError("app/missing-password");
  } else {
    axios({
      url: "/api/auth/login",
      method: "POST",
      params: props,
    }).then(function (response) {
      if (response.data.error) {
        getError(response.data.error.code);
      } else {
        //  alert(JSON.stringify(response.data, null, 2));
        //      Cookies.set("sis-uid", response.data.uid, { expires: 7 });
        //      dispatch(initialize(response.data));
        //    router.push("/dashboard");
        alert(JSON.stringify(response.data, null, 2));
      }
    });
  }
};
