import TitleAgency from "../../UI/Title/TitleAgency";
import BlocAgency from "./Title.jsx";
import SubTextAgency from "./SubText.jsx";
import ButtonAgency from "../../UI/Button/BtnAgency";
import SectionTeam from "../TextTeam/MainBlocsTeam";

const SectionAgency = () => {
  return (
    <section className="bg-fff6e4">
      <TitleAgency />
      <BlocAgency />
      <ButtonAgency />
      <SubTextAgency />
      <SectionTeam />
    </section>
  );
};

export default SectionAgency;
