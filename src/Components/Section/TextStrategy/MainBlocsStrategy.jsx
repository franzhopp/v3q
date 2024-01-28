import SubTextStrategy from "../TextStrategy/SubText.jsx";
import TitleStrategy from "../TextStrategy/Title.jsx";

const MainBlocsStrategy = () => {
  return (
    <section className="bg-C22E2E h-1/2">
      <div className="pt-32 pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleStrategy />
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <SubTextStrategy />
        </div>
      </div>
    </section>
  );
};

export default MainBlocsStrategy;
