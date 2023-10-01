import ImageShoto from "../../../assets/picture-shoto.png";

const Avatar = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white absolute rounded-full h-64 w-64 left-10 sm:left-20 top-44 sm:top-52 sm:ml-4 mb-4">
        <img src={ImageShoto} className="rounded-full p-4" alt="Avatar" />
      </div>
    </div>
  );
};

export default Avatar;
