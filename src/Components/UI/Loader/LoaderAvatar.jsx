const LoaderAvatar = () => {
  return (
    <>
      <div className="flex justify-center animate-pulse">
        <div className="bg-slate-400 absolute rounded-full h-48 w-48 sm:h-56 sm:w-56 left-10 sm:left-52 top-52 sm:top-56 sm:ml-4 mb-4">
          <div className="rounded-full p-3" alt="Avatar"></div>
        </div>
      </div>
    </>
  );
};

export default LoaderAvatar;
