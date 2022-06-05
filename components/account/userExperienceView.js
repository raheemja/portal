// React Components
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

// UI Components
import { Text } from "@chakra-ui/react";

// Appication Components
import Card from "../../common/card";

const UserExperienceView = ({ uid, self, ...rest }) => {
  const router = useRouter();

  const activeUser = useSelector((state) => state.user);

  const [editable, setEditable] = useState(self);
  const [user, setUser] = useState(self ? activeUser : null);

  return (
    <>
      <Card></Card>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default UserExperienceView;
