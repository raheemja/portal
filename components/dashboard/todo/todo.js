import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../../common/card";

const Todo = (props) => {
  const activeUser = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/user/${activeUser.uid}/todos`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Card>
        <p>{data}</p>
      </Card>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Todo;
