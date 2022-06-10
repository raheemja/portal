import moment from "moment";

export function UserModel(props) {
  return {
    uid: "" /* Unique ID */,
    isStudent: true,
    studentID: "",
    activeSchoolCode: process.env.NEXT_PUBLIC_SCHOOL_CODE,
    photoUrl: "",
    isActive: true,
    avatar: "",
    email: "",
    username: "",
    firstName: "",
    middleName: "",
    lastName: "",
    displayName: "",
    description: "",
    gender: "",
    phoneNumber: "",
    dateOfBirth: "",
    streetAddress: "",
    community: "",
    city: "",
    state: "",
    country: "Jamaica",
    postalCode: "",
    role: "Student",
  };
}
