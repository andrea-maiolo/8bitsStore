import CatFilter from "../CatFilter/CatFilter";
import MyFooter from "../MyFooter/MyFooter";
import MyNav from "../MyNav/MyNav";

const MainPage = function () {
  return (
    <>
      <MyNav />
      <CatFilter />
      {/* cards with product */}
      <MyFooter />
    </>
  );
};

export default MainPage;
