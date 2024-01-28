import TitleAgency from "../../UI/Title/TitleAgency";
import SectionTeam from "../SectionTeam";
import BlocAgency from "./Title.jsx";
import SubTextAgency from "./SubText.jsx";
import ButtonAgency from "../../UI/Button/ButtonAgency";

const SectionAgency = () => {
  return (
    <section className="bg-FFF6E4 h-1/2">
      <TitleAgency />
      <BlocAgency />
      <ButtonAgency />
      <SubTextAgency />
      <SectionTeam />
    </section>
  );
};

export default SectionAgency;
