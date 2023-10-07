import Title from "../UI/Title/TitleFormContact";
import ImgText from "../../assets/logo-4.png";
import ButtonSend from "../UI/Button/ButtonSend";
import { useState } from "react";

const Form = ({ label, type, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  return (
    <section className="bg-FFF6E4 bg-contact-blur">
      <div>
        <Title />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p className="text-black font-extrabold text-2xl sm:text-4xl max-w-xl ml-6 sm:ml-0">
              Si vous recherchez une agence digitale qui peut donner vie à votre
              projet numérique, qui excelle dans le design et le développement
              web, ne cherchez pas plus loin.
            </p>

            <div className="mt-8">
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="text-black text-lg sm:text-2xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                {`Contactez-nous aujourd'hui pour discuter de
          votre projet et découvrir comment nous pouvons vous aider à briller
          sur le web. Votre succès numérique est notre mission.`}
              </p>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div action="" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative pb-5">
                    <label
                      className={`mt-1 absolute left-2 transition-all duration-300 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-500"
                      }`}
                      htmlFor={label}
                    >
                      {"Prénom"}
                    </label>
                    <input
                      type={type}
                      id={label}
                      className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                      value={value}
                      onChange={onChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="relative pb-5">
                    <label
                      className={`mt-1 absolute left-2 transition-all duration-300 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-500"
                      }`}
                      htmlFor={label}
                    >
                      {"Nom"}
                    </label>
                    <input
                      type={type}
                      id={label}
                      className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                      value={value}
                      onChange={onChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="relative pb-5">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Adresse mail"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative pb-5">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Numéro de téléphone"}
                  </label>
                  <input
                    type={"tel"}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative pb-5">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Le meilleur moyen de vous contacter ?"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative pb-20">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Le meilleur moment de vous contacter ?"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Écrivez-nous"}
                  </label>
                  <textarea
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm "
                    rows="8"
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                />
                <span className="text-black">
                  {" "}
                  En cochant cette case, je certifie avoir pris connaissance et
                  accepté les Conditions d'Utilisation et la Politique de
                  Confidentialité.
                </span>
              </div>

              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                />
                <span className="text-black">
                  {" "}
                  En fournissant vos informations personnelles, vous consentez à
                  ce que{" "}
                  <span>
                    <img
                      src={ImgText}
                      className="h-10 mr-1 inline"
                      alt="Icône Navi Studio"
                    />
                  </span>
                  collecte et traite ces données conformément à sa Politique de
                  Confidentialité.{" "}
                  <a
                    href="/privacy"
                    className="underline font-extrabold text-0C3E78"
                  >
                    Lire la Politique de Confidentialité
                  </a>{" "}
                  et{" "}
                  <a
                    href="/privacy"
                    className="underline font-extrabold text-0C3E78"
                  >
                    Conditions d'Utilisation
                  </a>
                  .
                </span>
              </div>

              <button
                type="submit"
                className="inline-block w-full px-5 sm:w-auto"
              >
                <ButtonSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
