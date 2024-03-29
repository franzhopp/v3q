import AvatarLouisa from "../../../assets/Avatar/AvatarLouisa.png";

const Avatar = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`WireTitle`}>
        <div className={`bg-fff6e4 absolute rounded-full h-48 w-48 sm:h-56 sm:w-56 left-10 2xl:left-96 top-72 xl:top-64 sm:ml-4 mb-4`}>
          <img src={AvatarLouisa} className={`rounded-full p-3`} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
