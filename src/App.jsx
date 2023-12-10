import Body from "./components/Body";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-[1312px] min-h-screen mx-auto flex ">
        <LeftSideBar />
        <Body />
        <RightSideBar />
      </div>
    </div>
  );
};

export default App;
