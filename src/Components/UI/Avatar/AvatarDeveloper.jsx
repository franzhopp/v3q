import ImageShoto from "../../../assets/photo-shoto.png";

const Avatar = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-FFF6E4 absolute rounded-full h-48 w-48 sm:h-56 sm:w-56 left-10 2xl:left-96 top-72 xl:top-64 sm:ml-4 mb-4">
        <img src={ImageShoto} className="rounded-full p-3" alt="Avatar" />
      </div>
    </div>
  );
};

export default Avatar;
