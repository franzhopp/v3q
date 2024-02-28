import AvatarMelissa from "../../../assets/Avatar/AvatarMelissa.png";

const AvatarDesigner = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`flex justify-end relative`}>
        <svg
          className={`absolute bottom-24 left-20 md:left-96`}
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="79"
          viewBox="0 0 79 79"
          fill="none"
        >
          <path
            d="M39.5 0L50.1686 28.8314L79 39.5L50.1686 50.1686L39.5 79L28.8314 50.1686L0 39.5L28.8314 28.8314L39.5 0Z"
            fill="#fff6e4"
          />
        </svg>
      </div>
      <div
        className={`bg-1e1e20 absolute rounded-full h-48 w-48 sm:h-56 sm:w-56 left-10 2xl:left-96 top-72 xl:top-64 sm:ml-4 mb-4`}
      >
        <img src={AvatarMelissa} className="rounded-full p-3" alt="Avatar" />
      </div>
    </div>
  );
};

export default AvatarDesigner;
