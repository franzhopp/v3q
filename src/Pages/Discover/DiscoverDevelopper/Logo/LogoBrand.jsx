import SvgMoon from "../Svg/SvgMoon";

const LogoBrand = () => {
  return (
    <>
      <div className={`flex justify-center pt-16`}>
        <SvgMoon />
      </div>
      <div className={`flex flex-col justify-center pt-10`}>
        <h2 className={`text-c22e2e font-emblema text-2xl text-center`}>
          Astres Lunaires
        </h2>
        <p className={`text-c22e2e text-center text-full-xs`}>DEVELOPER</p>
      </div>
    </>
  );
};

export default LogoBrand;
