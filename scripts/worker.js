import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { initialize } from "../features/user/userSlice";

function Worker() {
  //  const activeUser = useSelector((state) => state.user);
  const axios = require("axios").default;
  const uid = Cookies.get("sis-uid"); // => 'value'
  const dispatch = useDispatch();

  console.log(`uid is ${uid}`);

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

  return (
    <>
      <>
        <></>
      </>
    </>
  );
}

export default Worker;
