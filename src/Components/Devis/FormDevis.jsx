import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import translations from "./translate.jsx";
import emailjs from "emailjs-com";
import NavbarDevis from "../Navigation/PagesNavbar/PagesNavbar.jsx";
import TitleDevis from "../UI/Title/TitleFormDevis.jsx";
import ImgText from "../../assets/logo-5.png";
import ButtonSend from "../UI/Button/ButtonSend.jsx";
import Footer from "../Footer/Footer.jsx";

const DevisFree = ({ label, type, value }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { language } = useLanguage();
  const handleFocus = () => {
    setIsFocused(true);
  };
  // const offFocusClick = () => {
  //   setIsFocused(false);
  // };
  const handleBlur = () => {
    if (!value) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    codepostal: "",
    info1: "",
    info2: "",
    info3: "",
    info4: "",
    message: "",
    privacy: "",
    conditions: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    codepostal: "",
    info1: "",
    info2: "",
    info3: "",
    info4: "",
    message: "",
    privacy: "",
    conditions: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexNumber = /^\d+$/;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "Veuillez entrer un prénom.";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Veuillez entrer un nom.";
    }

    if (!formData.email || !regexEmail.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse E-mail* valide.";
    }

    if (!formData.tel) {
      newErrors.tel = "Veuillez entrer un numéro de téléphone.";
    } else if (!regexNumber.test(formData.tel)) {
      newErrors.tel =
        "Le numéro de téléphone doit contenir uniquement des chiffres.";
    }

    if (!formData.codepostal) {
      newErrors.codepostal = "Veuillez entrer un code postal.";
    } else if (!regexNumber.test(formData.codepostal)) {
      newErrors.codepostal =
        "Le code postal doit contenir uniquement des chiffres.";
    }

    if (!formData.info1) {
      newErrors.info1 = "Veuillez entrer une information.";
    }

    if (!formData.info2) {
      newErrors.info2 = "Veuillez entrer une information.";
    }

    if (!formData.info3) {
      newErrors.info3 = "Veuillez entrer une information.";
    }

    if (!formData.info4) {
      newErrors.info4 = "Veuillez entrer une information.";
    }

    if (!formData.message) {
      newErrors.message = "Veuillez entrer un message.";
    }

    if (!formData.privacy) {
      newErrors.privacy =
        "Vous devez accepter la politique de confidentialité pour continuer.";
    }

    if (!formData.conditions) {
      newErrors.conditions = "Vous devez accepter la condition d'utilisation.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    const emailParams = {
      to_name: "Mélissa & Louisa",
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      tel: formData.tel,
      codepostal: formData.codepostal,
      info1: formData.info1,
      info2: formData.info2,
      info3: formData.info3,
      info4: formData.info4,
      message: formData.message,
      privacy: formData.privacy,
      conditions: formData.conditions,
    };
    try {
      const response = await emailjs.send(
        "service_564zhfb6",
        "template_m6iriey",
        emailParams
      );
      setStatus("Votre devis est enregistré. Merci !");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setStatus("Une erreur s'est produite.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);
  return (
    <section className="bg-FFF6E4 bg-contact-blur">
      <NavbarDevis />
      <TitleDevis />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p
              data-aos="fade-right"
              className="text-FFF6E4 text-2xl sm:text-3xl font-extrabold max-w-xl ml-6 sm:ml-0"
            >
              {translations[language].titleInfoFreeFr}
              {translations[language].titleInfoFreeEn}
            </p>
            <div className="mt-8">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-FFF6E4 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                <span>
                  › {translations[language].describeInfoFree1Fr}
                  {translations[language].describeInfoFree1En}{" "}
                </span>
              </p>
              <br />
              <p
                // data-aos="fade-left"
                className="text-FFF6E4 mb-1 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                <span className="font-extrabold underline">
                  {translations[language].describleInfoFree2Fr}
                  {translations[language].describleInfoFree2En}
                </span>
              </p>

              <p className="text-FFF6E4 mb-5 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0">
                <ul>
                  <br />
                  <li data-aos="fade-right">
                    <span className="font-extrabold">1</span>.{" "}
                    {translations[language].bloc1FreeFr}
                    {translations[language].bloc1FreeEn}
                  </li>
                  <br />
                  <li data-aos="fade-left">
                    <span className="font-extrabold">2</span>.{" "}
                    {translations[language].bloc2FreeFr}
                    {translations[language].bloc2FreeEn}{" "}
                    <NavLink
                      to="/services"
                      className="underline font-extrabold tracking-wide text-C22E2E"
                    >
                      {" "}
                      {translations[language].linkBlocFreeFr}
                      {translations[language].linkBlocFreeEn}
                    </NavLink>{" "}
                    {translations[language].bloc2dFreeFr}
                    {translations[language].bloc2dFreeEn}
                  </li>
                  <br />
                  <li data-aos="fade-right">
                    <span className="font-extrabold">3</span>.{" "}
                    {translations[language].bloc3FreeFr}
                    {translations[language].bloc3FreeEn}{" "}
                    <NavLink
                      to="/rate"
                      className="underline font-extrabold tracking-wide text-C22E2E"
                    >
                      {" "}
                      {translations[language].linkBlocFreeFr}
                      {translations[language].linkBlocFreeEn}
                    </NavLink>
                    .
                  </li>
                  <br />
                  <li data-aos="fade-left">
                    <span className="font-extrabold">4</span>.{" "}
                    {translations[language].bloc4FreeFr}
                    {translations[language].bloc4FreeEn}
                    <span className="absolute h-72 w-1 bg-C22E2E -left-7 bottom-20 hidden sm:block"></span>
                    <span className="absolute h-64 w-1 bg-C22E2E -left-10 bottom-2 hidden sm:block"></span>
                  </li>
                </ul>
              </p>
              <div className="flex flex-col text-left mx-6">
                <NavLink
                  className="text-C22E2E shadow-full mt-5 mb-6 font-extrabold underline transition hover:text-0C3E78"
                  to="/"
                >
                  <svg
                    width="95"
                    height="95"
                    viewBox="0 0 112 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_264_4)">
                      <path
                        d="M56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z"
                        fill="#C22E2E"
                      />
                      <g clip-path="url(#clip1_264_4)">
                        <path
                          d="M82 60C84.2091 60 86 58.2091 86 56C86 53.7909 84.2091 52 82 52V60ZM27.1716 53.1716C25.6095 54.7337 25.6095 57.2663 27.1716 58.8284L52.6274 84.2843C54.1895 85.8464 56.7222 85.8464 58.2843 84.2843C59.8464 82.7222 59.8464 80.1895 58.2843 78.6274L35.6569 56L58.2843 33.3726C59.8464 31.8105 59.8464 29.2779 58.2843 27.7158C56.7222 26.1537 54.1895 26.1537 52.6274 27.7158L27.1716 53.1716ZM82 52H30V60H82V52Z"
                          fill="#FFF6E4"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_264_4">
                        <rect width="112" height="112" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_264_4">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(26 26)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:p-12">
            <div className="flex justify-end relative">
              <svg
                // data-aos="fade-up-right"
                className="absolute top-20 -right-20"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 202 202"
                fill="none"
              >
                <path
                  d="M101 0L107.22 45.7993L123.475 2.53228L119.347 48.5673L144.822 10.0021L130.554 53.9645L163.972 22.035L140.28 61.7202L179.965 38.0275L148.036 71.4456L191.998 57.1777L153.433 82.653L199.468 78.5254L156.201 94.7804L202 101L156.201 107.22L199.468 123.475L153.433 119.347L191.998 144.822L148.036 130.554L179.965 163.972L140.28 140.28L163.972 179.965L130.554 148.036L144.822 191.998L119.347 153.433L123.475 199.468L107.22 156.201L101 202L94.7804 156.201L78.5254 199.468L82.653 153.433L57.1777 191.998L71.4456 148.036L38.0275 179.965L61.7202 140.28L22.035 163.972L53.9645 130.554L10.0021 144.822L48.5673 119.347L2.53228 123.475L45.7993 107.22L0 101L45.7993 94.7804L2.53228 78.5254L48.5673 82.653L10.0021 57.1777L53.9645 71.4456L22.035 38.0275L61.7202 61.7202L38.0275 22.035L71.4456 53.9645L57.1777 10.0021L82.653 48.5673L78.5254 2.53228L94.7804 45.7993L101 0Z"
                  fill="#E18AB0"
                />
              </svg>
            </div>
            <div className="flex justify-start relative">
              <svg
                // data-aos="fade-up-left"
                className="absolute top-2/3 -left-8"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 215 219"
                fill="none"
              >
                <path
                  d="M107.09 0.25H107.48C107.48 1.22656 109.434 19.1953 113.34 54.1562H113.73L130.918 2.98438H131.309V3.375C127.402 38.2708 125.319 56.2396 125.059 57.2812H125.449C143.418 27.5938 152.923 12.2292 153.965 11.1875V11.5781C152.923 14.2474 147.064 31.1745 136.387 62.3594L173.887 24.4688V24.8594C155.397 54.6771 146.152 69.7812 146.152 70.1719L190.684 41.6562H191.074C167.702 65.5495 155.202 78.3099 153.574 79.9375H153.965C185.671 68.4792 202.207 62.6198 203.574 62.3594L159.043 91.2656H159.434C192.702 87.3594 209.759 85.4062 210.605 85.4062H211.387V85.7969L161.777 102.984V103.375C182.871 105.979 200.319 107.932 214.121 109.234C214.121 109.951 209.434 110.602 200.059 111.188C191.335 112.49 178.704 113.922 162.168 115.484V116.266L211.777 133.453V133.844H210.996L159.434 127.984H159.043V128.375C183.197 143.414 198.04 152.919 203.574 156.891H203.184C170.632 145.172 154.095 139.312 153.574 139.312C161.908 147.646 174.408 160.406 191.074 177.594H190.684L146.152 149.078V149.469L174.277 194.781V195.172L136.387 156.891V157.281C137.168 159.104 143.027 176.031 153.965 208.062L125.059 161.969C125.84 167.503 127.923 185.471 131.309 215.875V216.266H130.918L113.73 165.094H113.34C109.434 200.055 107.48 218.023 107.48 219H107.09C107.09 218.023 105.137 200.055 101.23 165.094H100.84L83.6523 216.266H83.2617V215.875C86.6471 185.471 88.7305 167.503 89.5117 161.969H89.1211C71.8685 190.419 62.3633 205.784 60.6055 208.062V207.672L78.1836 156.891L40.293 195.172V194.781L68.418 149.469V149.078L23.8867 177.594H23.4961C40.1628 160.406 52.6628 147.646 60.9961 139.312H60.2148C45.4362 144.781 29.0299 150.641 10.9961 156.891C16.5299 152.919 31.3737 143.414 55.5273 128.375V127.984H55.1367L3.18359 133.844H2.79297V133.453L52.4023 116.266V115.484H52.0117C22.3242 112.359 5.13672 110.406 0.449219 109.625V109.234C14.2513 107.932 31.6992 105.979 52.793 103.375V102.984L3.18359 85.7969V85.4062H4.35547L55.5273 91.2656L10.9961 62.3594H11.3867L60.9961 79.9375C59.3685 78.3099 46.8685 65.5495 23.4961 41.6562H23.8867L68.418 70.1719V69.7812C49.9284 40.0286 40.6836 24.9245 40.6836 24.4688L78.1836 62.3594V61.9688C77.1419 59.3646 71.2826 42.4375 60.6055 11.1875C61.6471 12.2292 71.1523 27.5938 89.1211 57.2812H89.5117C89.2513 56.2396 87.168 38.2708 83.2617 3.375V2.98438H83.6523L100.84 54.1562H101.23C105.137 19.1953 107.09 1.22656 107.09 0.25ZM107.09 38.1406C106.374 51.9427 104.941 58.8438 102.793 58.8438C102.337 59.1042 101.816 59.2344 101.23 59.2344C98.4961 59.2344 96.543 56.1094 95.3711 49.8594C94.9154 49.8594 93.8737 46.8646 92.2461 40.875H91.8555V42.0469C92.8971 50.3151 93.418 55.9141 93.418 58.8438C92.7018 60.9271 91.3997 61.9688 89.5117 61.9688C87.2331 61.9688 84.7591 59.1042 82.0898 53.375L76.6211 45.1719C80.5273 55.5234 82.4805 61.3828 82.4805 62.75V63.1406C82.1549 65.7448 80.8529 67.0469 78.5742 67.0469H78.1836C76.6211 67.0469 73.8867 64.7031 69.9805 60.0156L63.7305 54.1562C69.9805 63.9219 73.1055 69.3906 73.1055 70.5625V70.9531C72.7799 73.5573 71.4779 74.8594 69.1992 74.8594C68.0273 74.8594 62.6888 71.7344 53.1836 65.4844V65.875C61.5169 74.013 65.6836 78.7005 65.6836 79.9375V80.3281C65.3581 82.9323 64.056 84.2344 61.7773 84.2344H61.3867C60.4102 84.2344 54.8112 82.4115 44.5898 78.7656C54.2904 85.0807 59.4987 88.7266 60.2148 89.7031L60.6055 91.6562C59.8242 94.2604 58.5221 95.5625 56.6992 95.5625C55.8529 95.5625 49.9935 94.9115 39.1211 93.6094H38.7305V94C51.2305 97.7109 57.4805 100.315 57.4805 101.812C57.7409 102.268 57.8711 102.789 57.8711 103.375C57.8711 106.5 54.6159 108.062 48.1055 108.062C44.0039 108.844 40.4883 109.234 37.5586 109.234V109.625C50.5794 110.992 57.0898 112.164 57.0898 113.141L57.8711 115.875C57.8711 118.479 53.9648 120.693 46.1523 122.516C46.1523 122.906 43.6784 123.818 38.7305 125.25V125.641H39.1211C48.9518 124.339 54.9414 123.688 57.0898 123.688C58.9779 123.688 60.1497 124.99 60.6055 127.594C60.6055 129.872 56.8294 132.997 49.2773 136.969C45.6315 139.378 43.8086 140.68 43.8086 140.875C54.8112 136.708 60.931 134.625 62.168 134.625C64.5117 135.471 65.6836 136.904 65.6836 138.922C65.6836 140.745 62.6888 144.26 56.6992 149.469L52.4023 154.156C62.2982 147.646 67.8971 144.391 69.1992 144.391H69.9805C72.0638 145.107 73.1055 146.409 73.1055 148.297V148.688C73.1055 149.729 69.9805 155.198 63.7305 165.094H64.1211C71.8034 156.5 76.3607 152.203 77.793 152.203H78.5742C81.1784 152.529 82.4805 153.831 82.4805 156.109V156.5C82.4805 157.346 80.6576 162.945 77.0117 173.297C77.6628 172.711 80.918 167.633 86.7773 158.062L89.5117 157.281C92.1159 157.607 93.418 158.909 93.418 161.188L91.8555 177.984V178.375H92.2461C95.5664 166.396 98.0404 160.406 99.668 160.406C100.124 160.146 100.645 160.016 101.23 160.016C104.355 160.016 105.918 163.661 105.918 170.953C106.243 170.953 106.634 174.339 107.09 181.109H107.48C108.262 167.307 109.564 160.406 111.387 160.406L113.34 160.016C116.009 160.016 117.962 163.01 119.199 169C119.525 169 120.566 172.125 122.324 178.375H122.715V177.594C121.673 168.87 121.152 163.141 121.152 160.406C121.868 158.323 123.171 157.281 125.059 157.281C127.402 157.281 130.267 160.797 133.652 167.828C134.173 167.828 135.345 169.781 137.168 173.688H137.559V173.297C133.913 163.141 132.09 157.542 132.09 156.5V155.719C132.09 153.375 133.262 152.203 135.605 152.203H136.387C138.079 152.203 141.725 155.458 147.324 161.969L150.84 165.094C144.59 155.263 141.465 149.794 141.465 148.688V148.297C141.79 145.693 143.092 144.391 145.371 144.391C146.738 144.391 152.077 147.516 161.387 153.766H161.777C153.184 145.172 148.887 140.484 148.887 139.703V138.531C149.212 135.927 150.514 134.625 152.793 134.625C153.704 134.625 159.694 136.708 170.762 140.875V140.484C159.564 133.974 153.965 129.938 153.965 128.375V127.594C153.965 125.51 155.397 124.208 158.262 123.688C159.694 123.688 165.423 124.339 175.449 125.641H175.84V125.25C163.34 121.409 157.09 118.805 157.09 117.438L156.699 115.484C156.699 112.359 160.996 110.797 169.59 110.797C169.59 110.602 172.064 110.211 177.012 109.625V109.234C163.991 108.453 157.48 107.281 157.48 105.719C156.96 104.872 156.699 104.091 156.699 103.375C156.699 100.641 160.475 98.4271 168.027 96.7344C172.129 94.9115 174.733 94 175.84 94V93.6094H175.449C164.577 94.9115 158.587 95.5625 157.48 95.5625C155.137 94.7161 153.965 93.2839 153.965 91.2656C153.965 89.3125 157.871 86.1875 165.684 81.8906C168.548 80.0026 169.98 78.9609 169.98 78.7656H169.59C159.694 82.4115 154.486 84.2344 153.965 84.2344H152.793C150.189 83.9089 148.887 82.6068 148.887 80.3281C148.887 78.5052 151.882 74.9896 157.871 69.7812C157.871 69.2604 159.173 67.6979 161.777 65.0938H161.387C152.272 71.6042 146.934 74.8594 145.371 74.8594C142.767 74.5339 141.465 73.2318 141.465 70.9531C141.465 69.3255 143.678 65.1589 148.105 58.4531L150.84 54.1562H150.449C142.507 62.75 137.819 67.0469 136.387 67.0469H135.996C133.392 66.7214 132.09 65.4193 132.09 63.1406V62.75C132.09 61.6432 133.913 56.0443 137.559 45.9531V45.5625H137.168C131.243 56.5 127.467 61.9688 125.84 61.9688H125.059C122.454 61.6432 121.152 60.3411 121.152 58.0625C121.152 56.3047 121.673 50.7057 122.715 41.2656V40.875H122.324C118.874 52.8542 116.4 58.8438 114.902 58.8438C114.447 59.1042 113.926 59.2344 113.34 59.2344C110.215 59.2344 108.522 55.5885 108.262 48.2969C108.262 47.5156 108.001 44.1302 107.48 38.1406H107.09ZM2.40234 85.0156H3.18359V85.4062H2.40234V85.0156ZM211.387 85.0156H212.168V85.4062H211.387V85.0156Z"
                  fill="#E18AB0"
                />
              </svg>
            </div>
            <form
              action=""
              className="bg-contact p-9 pb-12 shadow-lg space-y-4"
            >
              <div onSubmit={handleSubmit} class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative pb-5">
                    <label
                      // onClick={offFocusClick}
                      className={`mt-1 absolute left-2 transition-all duration-200 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-700"
                      }`}
                      htmlFor={label}
                    >
                      {translations[language].nameFr}
                      {translations[language].nameEn}
                    </label>
                    <input
                      type={type}
                      className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                        errors.firstname ? "input-error border-red-700" : ""
                      }`}
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {errors.firstname && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.firstname}
                      </p>
                    )}
                  </div>

                  <div className="relative pb-5">
                    <label
                      // onClick={offFocusClick}
                      className={`mt-1 absolute left-2 transition-all duration-200 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-700"
                      }`}
                      htmlFor={label}
                    >
                      {translations[language].surnameFr}
                      {translations[language].surnameEn}
                    </label>
                    <input
                      type={type}
                      className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                        errors.lastname ? "input-error border-red-700" : ""
                      }`}
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {errors.lastname && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.lastname}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative pb-5">
                  <label
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {"E-mail*"}
                  </label>
                  <input
                    type={type}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.email ? "input-error border-red-700" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
                  <label
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].phoneFr}
                    {translations[language].phoneEn}
                  </label>
                  <input
                    type={"tel"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.tel ? "input-error border-red-700" : ""
                    }`}
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.tel && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.tel}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
                  <label
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].info1DevisFr}
                    {translations[language].info1DevisEn}
                  </label>
                  <input
                    type={"tel"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.codepostal ? "input-error border-red-700" : ""
                    }`}
                    id="codepostal"
                    name="codepostal"
                    value={formData.codepostal}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.codepostal && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.codepostal}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
                  <label
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].info2DevisFr}
                    {translations[language].info2DevisEn}
                  </label>
                  <input
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info1 ? "input-error border-red-700" : ""
                    }`}
                    id="info1"
                    name="info1"
                    value={formData.info1}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info1 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info1}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
                  <label
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].info3DevisFr}
                    {translations[language].info3DevisEn}
                  </label>
                  <input
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info2 ? "input-error border-red-700" : ""
                    }`}
                    id="info2"
                    name="info2"
                    value={formData.info2}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info2 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info2}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
                  <label
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].info4DevisFr}
                    {translations[language].info4DevisEn}
                  </label>
                  <input
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info3 ? "input-error border-red-700" : ""
                    }`}
                    id="info3"
                    name="info3"
                    value={formData.info3}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info3 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info3}
                    </p>
                  )}
                </div>
                <div className="relative pb-28">
                  <label
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].info5DevisFr}
                    {translations[language].info5DevisEn}
                  </label>
                  <input
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info4 ? "input-error border-red-700" : ""
                    }`}
                    id="info4"
                    name="info4"
                    value={formData.info4}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info4 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info4}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <label
                  // onClick={offFocusClick}
                  className={`mt-1 absolute left-2 transition-all duration-200 ${
                    isFocused || value
                      ? "ml-2 mt-1 text-xs text-0C3E78"
                      : "ml-2 top-3 text-gray-700"
                  }`}
                  htmlFor={label}
                >
                  {translations[language].info6DevisFr}
                  {translations[language].info6DevisEn}
                </label>
                <textarea
                  className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                    errors.firstname ? "input-error border-red-700" : ""
                  }`}
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                ></textarea>
                {errors.message && (
                  <p className="text-left font-sans-serif text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleCheckboxChange}
                />
                <span className="text-FFF6E4 font-extrabold">
                  {" "}
                  {translations[language].conditions1Fr}
                  {translations[language].conditions1En}
                </span>
                {errors.privacy && (
                  <p className="text-left font-sans-serif text-red-700">
                    {errors.privacy}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                  name="conditions"
                  checked={formData.conditions}
                  onChange={handleCheckboxChange}
                />
                <span className="text-FFF6E4 font-extrabold">
                  {" "}
                  {translations[language].conditions2Fr}
                  {translations[language].conditions2En}{" "}
                  <span>
                    <img
                      src={ImgText}
                      className="h-10 mr-2 inline"
                      alt="Icône navi studio."
                    />
                  </span>
                  {translations[language].conditions3Fr}
                  {translations[language].conditions3En}{" "}
                  <NavLink
                    to="/privacy"
                    className="underline font-extrabold text-FFF6E4"
                  >
                    {translations[language].linkConditions1Fr}
                    {translations[language].linkConditions1En}
                  </NavLink>
                  ,{" "}
                  <NavLink
                    to="/mentions"
                    className="underline font-extrabold text-FFF6E4"
                  >
                    {translations[language].linkConditions2Fr}
                    {translations[language].linkConditions2En}
                  </NavLink>
                  , &{" "}
                  <NavLink
                    to="/terms"
                    className="underline font-extrabold text-FFF6E4"
                  >
                    {translations[language].linkConditions3Fr}
                    {translations[language].linkConditions3En}
                  </NavLink>
                  .
                </span>
                {errors.conditions && (
                  <p className="text-left font-sans-serif text-red-700">
                    {errors.conditions}
                  </p>
                )}
              </div>

              <div className="flex justify-center pt-5">
                <button type="submit" onClick={handleSubmit}>
                  {isLoading ? (
                    <div
                      className="animate-spin inline-block w-6 h-6 mt-2 border-[3px] border-current border-t-transparent text-white rounded-full"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <ButtonSend />
                  )}
                </button>
              </div>
            </form>
            <div className="text-00E189 text-center pt-8">
              {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DevisFree;
