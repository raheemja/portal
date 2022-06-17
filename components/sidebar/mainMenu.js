// All General Menus
import StudentMenu from "../../menus/student.tsx";
import AdminMenu from "../../menus/admin.tsx";

// Scripts and redux
import { useSelector, userDispatch } from "react-redux";
import getUserFromStorage from "../../scripts/getUserFromStorage";

const MainMenu = (props) => {
  const activeUser = useSelector((state) => state.user) || getUserFromStorage();

  return (
    <>
      <>
        {activeUser.role === "Student" ? (
          <StudentMenu />
        ) : activeUser.role === "Admin" || "Super Admin" ? (
          <AdminMenu />
        ) : null}
      </>
    </>
  );
};

export default MainMenu;
