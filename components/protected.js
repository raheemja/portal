import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { initialize } from "../features/user/userSlice";
import { getUserFromStorage } from "../scripts/getUserFromStorage";

import Cookies from "js-cookie";

const Protected = () => {
  const activeUser = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const axios = require("axios").default;

  useEffect(() => {
    const user = getUserFromStorage();

    if (user) {
      dispatch(initialize());
    }
    const uid = Cookies.get("sis-uid"); // => 'value'

    /*
    const uid = Cookies.get("sis-uid"); // => 'value'

    if (uid) {
      axios({
        url: "/api/auth/loginwithuid",
        method: "POST",
        params: { uid: uid },
      }).then(function (response) {
        if (response.data.error) {
          alert(JSON.stringify(response.data, null, 2));
        } else {
          Cookies.set("sis-uid", response.data.uid);
          dispatch(initialize(response.data));
        }
      });
    }
    */

    if (!activeUser.isLoggedIn && !user && !uid) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <></>
    </>
  );
};

export default Protected;
