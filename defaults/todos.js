import { uuid } from "uuidv4";
import moment from "moment";

export function DefaultTodo(props) {
  return [
    {
      id: uuid(),
      uid: uid || "",
      title: "",
      message: "",
      category: "",
      createdAt: Date(),
      completedAt: createdAt || "",
      createdBy: createdBy || "SYSTEM",
    },
  ];
}
