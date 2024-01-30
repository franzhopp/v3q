import TitleAgency from "../../UI/Title/TitleAgency";
import BlocAgency from "./Title.jsx";
import SubTextAgency from "./SubText.jsx";
import ButtonAgency from "../../UI/Button/ButtonAgency";
import SectionTeam from "../TextTeam/MainBlocsTeam";

const SectionAgency = () => {
  return (
    <section className="bg-FFF6E4 h-1/2">
      <TitleAgency />
      {/* <div className="relative">
        <div className="absolute w-1 htee bg-C22E2E left-56 2xl:flex hidden"></div>
      </div>
      <div className="relative">
        <div className="absolute w-1 htee bg-C22E2E right-56 2xl:flex hidden"></div>
      </div> */}
      <BlocAgency />
      <ButtonAgency />
      <SubTextAgency />
      <SectionTeam />
    </section>
  );
};

export default SectionAgency;
