import { uuid } from "uuidv4";
import moment from "moment";

export const TodoModel = (props) => {
  const {
    id,
    uid,
    title,
    message,
    category,
    createdAt,
    createdBy,
    completedAt,
  } = props;
  return {
    id: uuid(),
    uid: uid || "SYSTEM",
    status: "",
    title: title || "",
    message: message || "",
    category: category || "",
    createdAt: createdAt || Date(),
    completedAt: completedAt || "",
    createdBy: createdBy || "SYSTEM",
  };
};
