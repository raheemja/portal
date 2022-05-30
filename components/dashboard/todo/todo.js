import Card from "../../../common/card";

const Todo = (props) => {
  return (
    <>
      <Card>
        <p>This is todo</p>
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
