import _ from "lodash";

export default function getSchoolInfo(schoolCode) {
  return _.find(require("../data/schools.json"), { code: schoolCode });
}
