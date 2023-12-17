// import { useEffect, useState } from "react";
import AvatarMelissa from "../../../assets/avatar-melissa.png";
// import LoaderAvatar from "../Loader/LoaderAvatar";
// import Skeleton from "react-loading-skeleton";

const AvatarDesigner = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const hasLoaded = localStorage.getItem("hasLoaded");

  //   if (hasLoaded) {
  //     setIsLoading(false);
  //   } else {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       localStorage.setItem("hasLoaded", "true");
  //     }, 2000);
  //   }
  // }, []);
  return (
    <>
      {/* {isLoading ? (
        <LoaderAvatar />
      ) : ( */}
      <div className="flex justify-center">
        <div className="flex justify-end relative">
          <svg
            className="absolute bottom-20 left-96"
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
          >
            <path
              d="M39.5 0L50.1686 28.8314L79 39.5L50.1686 50.1686L39.5 79L28.8314 50.1686L0 39.5L28.8314 28.8314L39.5 0Z"
              fill="#FFF6E4"
            />
          </svg>
        </div>
        <div className="bg-1E1E20 absolute rounded-full h-48 w-48 sm:h-56 sm:w-56 left-10 sm:left-96 top-52 sm:top-56 sm:ml-4 mb-4">
          <img src={AvatarMelissa} className="rounded-full" alt="Avatar" />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default AvatarDesigner;
