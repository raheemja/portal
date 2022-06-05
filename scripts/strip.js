import _ from "lodash";

export const strip = (user) => {
  return _.omit(_.omit(_.omit(user, "isLoggedIn"), "uid"), "activeSchoolCode");
};
