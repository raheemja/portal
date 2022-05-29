// Components
import Seo from "../components/seo";
import LoginComponent from "../components/loginComponent.tsx";

const Home = () => {
  return (
    <div>
      <Seo title="Home" description="" />
      <LoginComponent />
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
