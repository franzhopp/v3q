const test = () => {
  return (
    <>
      {/* BgPatternPortfolio */}
      <div className="flex justify-start relative">
        <SvgLine />
      </div>
      <div className="flex justify-end relative">
        <SvgStarPink />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="flex justify-center px-3 py-6">
          <div className="bg-fff6e4 p-5 rounded-2xl shadow-2xl mr-5 ml-5">
            {/* IMAGE */}
            <div className="flex justify-center mt-3">
              <img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                className={`w-auto h-44 object-cover rounded-2xl animate-formbounce`}
              />
            </div>
            {/* LINK */}
            <p
              className={`mt-6 text-xl font-extrabold ${
                isDarkMode ? "text-black" : "text-fff6e4"
              }`}
            >
              <span className="font-bold number">{currentIndex + 1}.</span>{" "}
              <span className="FontNumber font-extrabold">
                {cards[currentIndex].title}
              </span>
              <div className="flex flex-col">
                <NavLink
                  to={cards[currentIndex].url}
                  className={`font-inter text-sm hover:text-0c3e78 transition duration-500 ${
                    isDarkMode ? "text-c22e2e" : "text-fff6e4"
                  }`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <RiBardLine className="h-3 w-3 inline" />{" "}
                  <span className="underline">Lien vers le site</span>
                </NavLink>
              </div>
            </p>
            {/* CONTENU */}
            <div
              className={`text-center ${
                isDarkMode ? "text-black" : "text-fff6e4"
              }`}
            >
              <p className="overflow-auto p-5 h-40">
                {cards[currentIndex].content}
              </p>
            </div>
            {/* BUTTON */}
            <div className="flex justify-center">
              <button
                className="bg-black text-fff6e4 h-16 w-16 px-4 py-2 mr-2 rounded-full shadow-lg transform active:scale-75 transition-transform"
                onClick={handlePrev}
              >
                <FaArrowLeft className="h-10 w-8" />
              </button>
              <button
                className="bg-black text-fff6e4 h-16 w-16 px-4 py-2 rounded-full shadow-lg transform active:scale-75 transition-transform"
                onClick={handleNext}
              >
                <FaArrowRight className="h-10 w-8" />
              </button>
            </div>
            {/* SVG HEART */}
            <div className="flex justify-center relative py-6">
              <SvgHeart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
