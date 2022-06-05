import Cookies from "js-cookie";

export default function getLoggedInUID() {
  try {
    return Cookies.get("sis-uid") || null;
  } catch (e) {
    alert(e);
  }
}
