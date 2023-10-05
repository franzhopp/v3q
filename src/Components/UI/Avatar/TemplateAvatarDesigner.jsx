import { useEffect, useState } from "react";
import AvatarMelissa from "../../../assets/avatar-melissa.png";
import LoaderAvatar from "../Loader/LoaderAvatar";

const AvatarDesigner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 2000);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderAvatar />
      ) : (
        <div className="flex justify-center">
          <div className="bg-FFF6E4 absolute rounded-full h-48 w-48 sm:h-56 sm:w-56 left-10 sm:left-52 top-52 sm:top-56 sm:ml-4 mb-4">
            <img
              src={AvatarMelissa}
              className="rounded-full p-3"
              alt="Avatar"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AvatarDesigner;
