// All General Menus
import StudentSidebarMenu from "../../menus/studentSidebarMenu.tsx";
import AdminMenu from "../../menus/admin.tsx";

// Scripts and redux
import { useSelector } from "react-redux";
import getUserFromStorage from "../../scripts/getUserFromStorage";

const MainMenu = (props) => {
  const activeUser = useSelector((state) => state.user) || getUserFromStorage();

  // Check if the user is a student, and return the studnet meny if so
  if (activeUser.role === "Student") {
    return <StudentSidebarMenu />;
  }

  // We want to render the admin menu last
  if (activeUser.role === "Admin" || "Super Admin") {
    return <AdminMenu />;
  }

  // TODO: Add a default return menu
  return (
    <>
      <></>
    </>
  );
};

export default MainMenu;
