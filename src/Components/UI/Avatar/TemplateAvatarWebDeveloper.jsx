// import { useEffect, useState } from "react";
import ImageShoto from "../../../assets/photo-shoto.png";
// import LoaderAvatar from "../Loader/LoaderAvatar";

const Avatar = () => {
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
        <div className="bg-FFF6E4 absolute rounded-full h-48 w-48 sm:h-56 sm:w-56 left-10 2xl:left-96 top-72 xl:top-64 sm:ml-4 mb-4">
          <img src={ImageShoto} className="rounded-full p-3" alt="Avatar" />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Avatar;
