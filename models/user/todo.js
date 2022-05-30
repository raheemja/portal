import { uuid } from "uuidv4";
import moment from "moment";

export function Todo(props) {
  const { id, createdAt } = pageProps;

  return {
    id: id || uuid(),
    uid: "",
    title: "",
    message: "",
    category: "",
    createdAt: "",
    completedAt: createdAt || "",
    createdBy: "",
  };
}
