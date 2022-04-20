import "./styles.scss";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
    </div>
  );
}

export default HomeScreen;
