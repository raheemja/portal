import { v4 as uuidv4 } from "uuid";

export function CourseModel() {
  return {
    cid: uuidv4(),
    img: "",
    category: "",
    name: "",
    shortName: "",
    description: "",
    participants: [],
    comments: [],
    credits: 0,
  };
}
