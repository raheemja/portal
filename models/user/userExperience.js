import uniqid from "uniqid";
import { AddressModel } from "../address";

export function UserExperienceModel() {
  return {
    key: uniqid(),
    uid: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };
}
