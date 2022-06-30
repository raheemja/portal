import { v4 as uuidv4 } from "uuid";

export function ContactModel(props) {
  const { uid, isActive } = props;
  return {
    imgSrc: "",
    uid: uid || "",
    title: "",
    displayName: "",
    phoneNumber: "",
    email: "",
    relationship: "",
    active: true,
  };
}
