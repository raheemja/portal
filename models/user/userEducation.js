import { v4 as uuidv4 } from "uuid";

export function UserEducationModel(uid) {
  return {
    id: uuidv4(),
    uid: uid || "",
    degree: "",
    programme: "",
    institution: "",
    startMonth: "",
    startYear: "",
    endYear: "",
    endMonth: "",
    gpa: "", // stores the gpa, grade or score
    details: "",
  };
}
