import NavbarDiscoverDesigner from "../../Navigation/NavbarDiscover/DiscoverDesignerNavbar";
import AvatarDesigner from "../../UI/Avatar/TemplateAvatarDesigner";
import ImgText from "../../../assets/logo-4.png";
import ImageMelissa from "../../../assets/picture-melissa.png";
import LogoMelissa from "../../../assets/logo-melissa.png";
import LogoInsta from "../../../assets/instagram2.png";
import LogoLinkedin from "../../../assets/linkedin.png";
import LogoSnap from "../../../assets/snapchat.png";
import Footer from "../../Footer/Footer";

const DiscoverDesigner = () => {
  return (
    <div>
      <NavbarDiscoverDesigner />
      <AvatarDesigner />
      <div class="bg-FFF6E4 flex justify-center pt-10 pb-20">
        <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-20">
          <div class="p-6">
            <div className="w-72">
              <div className="flex justify-center mt-10 mb-10">
                {" "}
                <svg
                  className="button-design-formbounce animate-bounce-bounce"
                  width="95"
                  height="64"
                  viewBox="0 0 95 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="39.7079"
                    cy="41.7079"
                    r="9.70786"
                    fill="#C22E2E"
                  />
                  <circle
                    cx="55.5282"
                    cy="41.7079"
                    r="9.70786"
                    fill="#C22E2E"
                  />
                  <path
                    d="M46.8989 64C34.818 57.9596 30.5993 47.3408 30 42.7865L47.618 40.9888L65.236 42.7865C62.6472 55.4427 51.8127 62.442 46.8989 64Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M14.0733 40.0439L6.9791 36.9115L7.79097 35.0728L8.75151 35.4969L8.76363 35.4695C8.23351 34.5904 8.16839 33.6981 8.56827 32.7925C9.0247 31.7587 9.72302 31.2418 10.6632 31.2415C10.1148 30.3544 10.0365 29.4672 10.4283 28.5798C10.7838 27.7748 11.2683 27.2345 11.8819 26.9588C12.4904 26.67 13.2338 26.7195 14.112 27.1073L18.8598 29.2036L17.9994 31.1521L13.9789 29.3769C13.7593 29.2799 13.5744 29.2037 13.424 29.1483C13.2736 29.0928 13.1059 29.0516 12.9211 29.0246C12.7362 28.9976 12.5799 29.0051 12.452 29.047C12.3242 29.089 12.1939 29.1736 12.0612 29.3008C11.9326 29.4189 11.8198 29.5877 11.7228 29.8073C11.3391 30.6763 11.7464 31.3754 12.9448 31.9046L16.8967 33.6495L16.0364 35.598L12.057 33.841C11.81 33.7319 11.625 33.6557 11.5021 33.6123C11.374 33.5558 11.2084 33.51 11.0052 33.4749C10.8061 33.4308 10.6427 33.4296 10.5148 33.4716C10.391 33.5044 10.2628 33.5844 10.1301 33.7116C9.98823 33.8348 9.86682 34.0108 9.76584 34.2395C9.71333 34.3584 9.68167 34.492 9.67086 34.6403C9.66005 34.7885 9.6752 34.9646 9.71631 35.1686C9.74827 35.3686 9.86096 35.5714 10.0544 35.777C10.2427 35.9695 10.4969 36.1364 10.8171 36.2778L14.9337 38.0954L14.0733 40.0439Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M18.593 22.1023L17.0968 23.6183C16.4912 22.9364 16.2849 22.2059 16.4777 21.4268C16.6706 20.6477 17.1147 19.9058 17.8101 19.2012C19.4046 17.5855 20.725 17.2939 21.7713 18.3265L24.6433 21.1608C25.2554 21.7648 25.7278 22.1047 26.0607 22.1803L24.5435 23.7177C24.2809 23.585 24.0679 23.445 23.9043 23.2976C23.9313 24.1813 23.548 25.0253 22.7542 25.8296C22.2063 26.3848 21.6215 26.6998 20.9997 26.7746C20.3709 26.8424 19.7859 26.6094 19.245 26.0755C18.9745 25.8086 18.7853 25.5305 18.6773 25.2413C18.5693 24.938 18.5215 24.6661 18.5341 24.4256C18.5536 24.1779 18.6367 23.9016 18.7831 23.5966C18.9225 23.2845 19.0587 23.0326 19.1918 22.8408C19.3319 22.6419 19.5177 22.3967 19.7491 22.1052C20.226 21.5081 20.5237 21.0713 20.6421 20.7947C20.7533 20.5111 20.6951 20.257 20.4673 20.0322C20.1755 19.7442 19.8955 19.6364 19.6272 19.7089C19.3519 19.7744 19.0597 19.9637 18.7506 20.2769C18.1395 20.8961 18.087 21.5046 18.593 22.1023ZM22.2396 21.7812L21.6737 21.2228C21.6682 21.4562 21.4551 21.85 21.0345 22.4044C20.8663 22.6318 20.7403 22.8164 20.6563 22.9584C20.5653 23.0934 20.4851 23.2601 20.4157 23.4585C20.3392 23.65 20.3227 23.8304 20.3662 23.9998C20.4098 24.1692 20.5134 24.3347 20.6771 24.4963C21.1469 24.9599 21.6873 24.8821 22.2984 24.2628C23.1062 23.4443 23.0866 22.6171 22.2396 21.7812Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M33.7752 17.7878L33.3242 16.9065L33.2975 16.9201C33.2435 17.8464 32.7269 18.5601 31.7477 19.0612C30.7596 19.5669 29.8118 19.6026 28.9043 19.1683C28.0012 18.7206 27.2854 17.9804 26.757 16.9477C26.2467 15.9507 26.081 14.9684 26.2598 14.0007C26.4475 13.0284 27.022 12.2963 27.9835 11.8043C28.4019 11.5902 28.8391 11.4787 29.2952 11.47C29.7602 11.4567 30.1794 11.5624 30.5527 11.787L30.5794 11.7733L28.8027 8.30149L30.6988 7.33115L35.5779 16.8653L33.7752 17.7878ZM31.9718 14.3296C31.6484 13.6976 31.2528 13.2429 30.7851 12.9655C30.3128 12.6792 29.7918 12.6818 29.2221 12.9734C28.6434 13.2695 28.3276 13.6951 28.2747 14.2502C28.2217 14.8052 28.357 15.3988 28.6804 16.0308C28.9902 16.6362 29.3947 17.0863 29.8939 17.3813C30.402 17.6717 30.932 17.6757 31.4839 17.3933C32.0625 17.0971 32.3694 16.6761 32.4046 16.1302C32.4441 15.5708 32.2998 14.9706 31.9718 14.3296Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M46.054 11.4097L40.5252 12.268C40.7854 13.5533 41.5134 14.1031 42.7091 13.9175C43.1142 13.8546 43.4596 13.6998 43.7451 13.4531C44.0291 13.1965 44.1857 12.9344 44.215 12.6667L46.0678 12.3791C45.7715 14.1859 44.7093 15.2312 42.8812 15.515C41.6855 15.7006 40.6744 15.4781 39.8479 14.8474C39.0297 14.2053 38.5278 13.2864 38.3422 12.0907C38.1612 10.9247 38.3723 9.90525 38.9756 9.03239C39.5871 8.14811 40.471 7.61623 41.6272 7.43677C42.8723 7.24349 43.8949 7.54014 44.695 8.32672C45.4951 9.1133 45.9481 10.141 46.054 11.4097ZM40.3181 10.934L43.7421 10.4024C43.5574 9.86441 43.3109 9.4827 43.0027 9.25731C42.7044 9.03039 42.3082 8.95528 41.8141 9.03197C41.2113 9.12554 40.8034 9.36596 40.5902 9.75324C40.3756 10.1306 40.2849 10.5242 40.3181 10.934Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M70.6809 13.569L65.2984 19.6638L63.297 18.7748L64.1487 13.4577L64.1213 13.4456L60.802 17.6666L58.7869 16.7715L59.6867 8.68559L61.743 9.59894L60.908 14.9891L60.9354 15.0013L64.2516 10.7132L66.1434 11.5535L65.2186 16.8873L65.246 16.8995L68.6795 12.68L70.6809 13.569Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M78.0367 16.1837L76.8861 17.5089L75.2777 16.1125L76.4283 14.7873L78.0367 16.1837ZM69.4067 22.8743L74.491 17.0186L76.0993 18.415L71.015 24.2708L69.4067 22.8743Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M83.8317 23.754L81.961 25.1347L82.8874 26.3898L81.7408 27.236L80.8145 25.9808L77.7248 28.2611C77.4352 28.4749 77.2777 28.6657 77.2524 28.8335C77.2271 29.0013 77.3213 29.23 77.5351 29.5197C77.6955 29.7369 77.8422 29.9021 77.9753 30.0151L76.6357 31.0038C76.4173 30.7921 76.1507 30.4731 75.836 30.0466C75.6222 29.757 75.4553 29.4887 75.3352 29.2417C75.2151 28.9948 75.1321 28.7391 75.0861 28.4748C75.0482 28.2045 75.0912 27.9428 75.2152 27.6898C75.345 27.4448 75.5629 27.2094 75.8686 26.9838L79.5497 24.2671L78.7836 23.2291L79.9302 22.3829L80.6962 23.4209L82.5669 22.0402L83.8317 23.754Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M78.5837 34.433L88.6042 30.6522L89.3561 32.645L85.5809 34.0695L85.5968 34.1116C86.0815 34.2066 86.4992 34.407 86.8498 34.713C87.2003 35.0189 87.4515 35.373 87.6033 35.7754C87.9811 36.7765 87.9897 37.5641 87.6292 38.1384C87.2687 38.7126 86.5972 39.1851 85.6148 39.5557L81.152 41.2396L80.4 39.2468L84.498 37.7005C85.1062 37.4711 85.5182 37.2034 85.7341 36.8975C85.95 36.5916 85.9715 36.2094 85.7985 35.7509C85.5937 35.2083 85.2817 34.8771 84.8625 34.7574C84.4432 34.6377 83.8687 34.7155 83.1389 34.9909L79.3357 36.4259L78.5837 34.433Z"
                    fill="#C22E2E"
                  />
                </svg>
              </div>
              <p
                data-aos="fade-left"
                className="text-center text-C22E2E font-extrabold"
              >
                Je vous souhaite la bienvenue sur la page « Designer ». Jeune
                passionnée de design et d'art j'ai commencé mon voyage dans le
                monde du digital en 2015, j'ai exploré l'univers du graphisme,
                du design web, et de l'illustration. J'ai étudié en France le
                Design Graphique & le Marketing, à la fin de cela j'ai commencé
                ma carrière au Royaume-Uni en tant que UX/UI Designer puis,
                Product Designer.
                <br />
              </p>
              <br />
              <p
                data-aos="fade-left"
                className="text-center text-C22E2E font-extrabold"
              >
                Aujourd'hui je vis de ma passion et je m'épanouis à travers mon
                art, mes créations & mes designs.
                <br />
              </p>
              <p
                data-aos="fade-left"
                className="text-center text-C22E2E font-extrabold"
              >
                Je puise mon inspiration dans tout ce qui m'entoure ; des
                voyages, des lectures, des images, des sons. Ce projet et cette
                collaboration me tenait à cœur,{" "}
                <img
                  src={ImgText}
                  className="h-6 inline"
                  alt="Icône Navi Studio"
                />{" "}
                c'est un peu comme un enfant né de l'amour du design et du
                developpement web. ♥
                <br />
              </p>
            </div>
            <div className="flex justify-center">
              <a
                className="mt-7 text-C22E2E text-center font-extrabold underline transition hover:text-0C3E78"
                href="/webdev"
              >
                Découvrir Web Developer ➔
              </a>
            </div>
            <div className="flex justify-center">
              <a
                className=" text-C22E2E font-extrabold underline transition hover:text-0C3E78"
                href="/"
              >
                Retourner à la page d'Accueil ➔
              </a>
            </div>
          </div>

          <div className="mt-10 sm:mt-56">
            <img
              data-aos="fade-right"
              src={ImageMelissa}
              alt="Picture Mélissa"
              className="h-80 w-80 sm:h-96 sm:w-96 transition-opacity duration-500 hover:opacity-50"
            />
            <p className="flex text-black text-xs">
              📸 : Mélissa.{" "}
              <span className="ml-1">
                {" "}
                Musée d'Art Contemporain, 69006 Lyon.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="bg-FFF6E4 flex justify-center">
        <p class="text-center text-black font-extrabold sm:text-xl md:text-2xl lg:text-3xl px-8">
          UX/UI DESIGNER | GRAPHIC DESIGNER | ILLUSTRATOR | FASHION DESIGNER
        </p>
      </div>
      <div className="bg-FFF6E4 flex justify-center pt-20">
        <img
          data-aos="fade-in"
          src={LogoMelissa}
          alt="Picture Louisa"
          className="h-80 w-80 transition-opacity duration-500 hover:opacity-50"
        />
      </div>

      <div class="bg-FFF6E4 pt-10 flex flex-wrap justify-center pb-20 space-x-0 sm:space-x-10">
        <div class="p-6">
          <div className="flex flex-row space-x-10 list-none mt-20">
            <li>
              <a
                href="https://www.instagram.com/navistudio.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {" "}
                <img
                  src={LogoInsta}
                  alt="Icône Instagram"
                  className="flex-shrink-0 h-20 w-20"
                />
              </a>
            </li>
            <li>
              <a href="" rel="noreferrer" target="_blank">
                {" "}
                <img
                  src={LogoLinkedin}
                  alt="Icône Linkedin"
                  className="flex-shrink-0 h-20 w-20"
                />
              </a>
            </li>
            <li>
              <a href="">
                <a
                  href="https://t.snapchat.com/BYKwKD2r"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={LogoSnap}
                    alt="Icône Snapchat"
                    className="flex-shrink-0 h-20 w-20"
                  />
                </a>
              </a>
            </li>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiscoverDesigner;
