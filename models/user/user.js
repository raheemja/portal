export function UserModel() {
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
    gender: "",
    phoneNumber: "",
    dateOfBirth: "",
    streetAddress: "",
    community: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  };
}
