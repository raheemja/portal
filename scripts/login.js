import ErrorDialogue from "../components/errorDialogue";
import axios from "axios";

export const login = (props) => {
  axios({
    url: "/api/auth/login",
    method: "POST",
    params: props,
  }).then(function (response) {
    if (response.data.error) {
      //      setError(showError(response.data.error.code));
      //  alert(JSON.stringify(response.data, null, 2));
      <ErrorDialogue />;
    } else {
      //  alert(JSON.stringify(response.data, null, 2));
      //      Cookies.set("sis-uid", response.data.uid, { expires: 7 });
      //      dispatch(initialize(response.data));
      //    router.push("/dashboard");
      alert(JSON.stringify(response.data, null, 2));
    }
  });
};
