import uniqid from "uniqid";

export function UserEducationModel() {
  return {
    key: uniqid(),
    uid: "",
    programme: "",
    institution: "",
    startYear: "",
    endYear: "",
    gpa: "", // stores the gpa, grade or score
    description: "",
    activities: "",
  };
}
