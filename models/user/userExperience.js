import { v4 as uuidv4 } from "uuid";

export function UserExperienceModel(uid) {
  return {
    id: uuidv4(),
    uid: uid || "",
    company: "",
    role: "",
    startMonth: "January",
    startYear: "",
    endYear: "",
    endMonth: "December",
    description: "",
    status: "Active",
  };
}
