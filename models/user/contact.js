import { v4 as uuidv4 } from "uuid";

export function ContactModel(props) {
  const { uid, isActive } = props;
  return {
    id: "",
    imgSrc: "",
    uid: uid || "",
    title: "",
    displayName: "",
    phoneNumber: "",
    email: "",
    relationship: "",
    isActive: isActive || true,
  };
}
