import TitleStrategy from "../TextStrategy/Title.jsx";
import SubTextStrategy from "../TextStrategy/SubText.jsx";

const MainBlocsStrategy = () => {
  return (
    <section x-comp={`Main`} className="bg-c22e2e flex justify-center py-36">
      <div>
        <TitleStrategy />
        <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-6">
          <SubTextStrategy />
        </div>
      </div>
    </section>
  );
};

export default MainBlocsStrategy;
