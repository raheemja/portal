import { v4 as uuidv4 } from "uuid";

export function ApplicationModel(props) {
  const platform = require("platform");

  const { uid, course, options, ip } = props;

  return {
    id: uuidv4(),
    uid: uid || "",
    meta: { ipAddress: ip || "", submittedAt: new Date() },
    course: course || "",
    options: options || [],
    details: {
      registrationNumber: "100-",
      candidateNumber: "",
      classPreference: "",
      notes: "",
    },
    status: 0,
    policies: {
      studentPolicy: false,
      refundPolicy: false,
    },
    platform,
  };
}
