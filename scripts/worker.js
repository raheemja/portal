import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { initialize } from "../features/user/userSlice";
import { useRouter } from "next/router";

function Worker() {
  const platform = require("platform");
  const router = useRouter();
  const activeUser = useSelector((state) => state.user);
  const axios = require("axios").default;
  const dispatch = useDispatch();

  useEffect(() => {
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
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <>
        <></>
      </>
    </>
  );
}

export default Worker;
