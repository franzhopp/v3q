import TitleStrategy from "../TextStrategy/Title.jsx";
import SubTextStrategy from "../TextStrategy/SubText.jsx";

const MainBlocsStrategy = () => {
  return (
    <section className="bg-c22e2e">
      <div className="max-w-6xl mx-auto py-36 px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <TitleStrategy />
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <SubTextStrategy />
        </div>
      </div>
    </section>
  );
};

export default MainBlocsStrategy;
