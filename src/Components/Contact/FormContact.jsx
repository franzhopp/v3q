import Title from "../UI/Title/TitleFormContact";
import ImgText from "../../assets/logo-4.png";
import ButtonSend from "../UI/Button/ButtonSend";

const Form = () => {
  return (
    <section className="bg-contact-blur pb-56">
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
                  <div>
                    <input
                      className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                      placeholder="Prénom"
                      type="name"
                    />
                  </div>

                  <div>
                    <input
                      className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                      placeholder="Nom"
                      type="name"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="E-mail"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="Numéro de téléphone"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="Le meilleur moyen de vous contacter ?"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-4"
                    placeholder="Le meilleur moment de vous contacter ?"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <textarea
                  className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mt-20"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
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
