import { NavLink } from "react-router-dom";
import Title from "../../Title/TitleContact.jsx";
import TextStrategy from "./TextContact/TextStrategy.jsx";
import SvgBtnContact from "./Svg/SvgBtnContact.jsx";
import SvgFontRight from "./Svg/SvgFontRight.jsx";
import SvgFontLeft from "./Svg/SvgFontLeft.jsx";
import FormEmailJs from "./Email/FormContact.jsx";
import "../../../Navigation/MainNavbarDesktop.jsx";

const MainPageContact = () => {
  return (
    <div className="WireBannier">
      <section className="BgContactBlur bg-cover bg-no-repeat">
        <Title />
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-5">
            <div className="mr-10 lg:col-span-2 lg:py-12">
              <TextStrategy />
              <div className="flex justify-start sm:justify-center mt-10 mb-10 w-80 sm:w-96 ml-6 sm:ml-0">
                <NavLink to="/quote">
                  <SvgBtnContact />
                </NavLink>
              </div>
            </div>
            <div className="lg:col-span-3 lg:p-12">
              <div className="flex justify-end relative">
                <SvgFontRight />
              </div>
              <div className="flex justify-start relative">
                <SvgFontLeft />
              </div>
              <FormEmailJs />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPageContact;
