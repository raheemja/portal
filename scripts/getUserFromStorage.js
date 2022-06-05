export const getUserFromStorage = () => {
  return localStorage.getItem("sis-user") || false;
};
