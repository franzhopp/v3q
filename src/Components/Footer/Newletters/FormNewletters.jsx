import { useEffect, useState } from "react";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import emailjs from "emailjs-com";

const FormNewletters = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.email || !regexEmail.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailParams = {
      to_name: "Mélissa & Louisa",
      email: formData.email,
    };

    try {
      const response = await emailjs.send(
        "service_564zhfb6",
        "template_m6iriey",
        emailParams
      );
      setStatus("Merci, vous êtes inscrit à la newletter.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setStatus("Une erreur s'est produite.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="E-mail*"
          className={`italic rounded-tl-2xl rounded-bl-2xl rounded-tr-none rounded-br-none w-50 p-2 pb-2 outline-none border-gray-200 text-sm ${
            errors.email ? "border-red-700" : ""
          }`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className={`bg-fff6e4 rounded-tl-none rounded-bl-none rounded-tr-2xl rounded-br-2xl p-2 font-extrabold transform active:scale-75 transition-transform ${
            isDarkMode ? "text-c22e2e" : "text-fff6e4"
          }`}
        >
          <span className="font-inter text-sm transition hover:opacity-30">
            {translations[language].sendFooterFr}
            {translations[language].sendFooterEn}
          </span>
        </button>
      </div>
      <div className="flex justify-center pt-1">
        {errors.email && <p className="text-fff6e4 text-sm">{errors.email}</p>}
      </div>
      <div className="text-center text-sm text-fff6e4">
        {status && <p>{status}</p>}
      </div>
    </form>
  );
};

export default FormNewletters;
