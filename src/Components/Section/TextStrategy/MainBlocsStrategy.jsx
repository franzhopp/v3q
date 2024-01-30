import SubTextStrategy from "../TextStrategy/SubText.jsx";
import TitleStrategy from "../TextStrategy/Title.jsx";

const MainBlocsStrategy = () => {
  return (
    <section className="bg-c22e2e h-1/2">
      {/* <div className="relative">
        <div className="absolute w-1 hteeest bg-fff6e4 left-56 2xl:flex hidden"></div>
      </div>
      <div className="relative">
        <div className="absolute w-1 hteeest bg-fff6e4 right-56 2xl:flex hidden"></div>
      </div> */}
      <div className="pt-36 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleStrategy />
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <SubTextStrategy />
        </div>
      </div>
      <div id="team" className="pt-3"></div>
    </section>
  );
};

export default MainBlocsStrategy;
