import NavbarDiscoverDesigner from "../../Navigation/NavbarDiscover/DiscoverDesignerNavbar.jsx";
import AvatarDesigner from "../../UI/Avatar/TemplateAvatarDesigner.jsx";
import TitleJob from "./Title/TitleJob.jsx";
import TitleGallery from "./Title/TitleGallery.jsx";
import Logo from "./Logo/Logo.jsx";
import SubTitle from "./Title/SubTitle.jsx";
import SubDescTitle from "./Title/SubDescTitle.jsx";
import ImageProfile from "./Image/ImageProfile.jsx";
import ImageGallery from "./Image/ImageGallery.jsx";
import Copyright from "./Copyright/Copyright.jsx";
import SvgMexico from "./Svg/SvgMexico.jsx";
import SvgMadeWithLove from "./Svg/SvgMadeWithLove.jsx";
import SvgStates from "./Svg/SvgStates.jsx";
import SvgPolygone from "./Svg/SvgPolygone.jsx";
import SvgIllustration from "./Svg/SvgIllustration.jsx";
import SvgItemLeft from "./Svg/SvgItemLeft.jsx";
import SvgItemRight from "./Svg/SvgItemRight.jsx";
import BackToTopButton from "../../UI/ScrollToTop/BackToTopButton.jsx";
import LinksNetwork from "./Network/LinksNetwork.jsx";
import Footer from "../../Footer/MainFooter.jsx";

const DiscoverDesigner = () => {
  return (
    <section className="bg-FFF6E4">
      <NavbarDiscoverDesigner />
      <AvatarDesigner />
      <div class="bg-1E1E20 flex justify-center pt-10 pb-48">
        <div class="mt-6 flex flex-wrap justify-center space-x-0 sm:space-x-20">
          <div className="flex justify-start relative">
            <SvgMexico />
          </div>
          <div class="p-6">
            <div className="w-80">
              <div className="flex justify-center mt-16 mb-10">
                <SvgMadeWithLove />
              </div>
              <SubDescTitle />
            </div>
          </div>
          <div className="pt-16 sm:pt-32">
            <div className="flex justify-end relative">
              <SvgStates />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              class="flex justify-start flex-col mb-5"
            >
              <TitleJob />
            </div>
            <ImageProfile />
            <Copyright />
          </div>
        </div>
        <BackToTopButton />
      </div>
      {/* <div className="bg-C22E2E flex justify-center pt-3 sm:h-5"></div> */}
      <div className="flex justify-center relative">
        <SvgPolygone />
      </div>
      <div className="bg-1E1E20 flex justify-center pt-36 pb-16">
        <div className="flex flex-col text-center">
          <TitleGallery />
        </div>
      </div>
      <div className="bg-1E1E20 flex justify-center">
        <div class="grid grid-cols sm:grid-cols md:grid-cols lg:grid-cols-3 gap-2">
          <ImageGallery />
        </div>
      </div>
      <div className="bg-1E1E20 flex justify-center pt-16 pb-16">
        <SubTitle />
      </div>
      <div className="bg-1E1E20 flex justify-center pb-16">
        <SvgIllustration />
      </div>
      <div className="flex justify-start relative">
        <SvgItemLeft />
      </div>
      <div className="flex justify-end relative">
        <SvgItemRight />
      </div>
      <div className="bg-FFF6E4 flex justify-center pt-56">
        <Logo />
      </div>
      <div class="bg-FFF6E4 pt-10 flex flex-wrap justify-center pb-20 space-x-0 sm:space-x-10">
        <div className="flex flex-row space-x-10 list-none mt-20 p-6">
          <LinksNetwork />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DiscoverDesigner;
