import { NavLink } from "react-router-dom";

const ButtonSend = () => {
  return (
    <>
      <div className="flex justify-center sm:justify-end px-48 relative top-20 left-0 sm:left-44">
        <NavLink
          to="/"
          href="about"
          data-aos="fade-right"
          className="inline-flex items-center gap-2 border rounded-full bg-black px-8 py-3 text-FFF6E4 text-3xl"
        >
          <span className="text-3xl font-extrabold heading-responsive">
            Envoyer{" "}
          </span>

          <svg
            width="86"
            height="60"
            viewBox="0 0 86 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 26C1.79086 26 -1.93129e-07 27.7909 0 30C1.93129e-07 32.2091 1.79086 34 4 34L4 26ZM84.8284 32.8284C86.3905 31.2663 86.3905 28.7337 84.8284 27.1716L59.3726 1.71572C57.8105 0.153627 55.2778 0.153627 53.7157 1.71572C52.1536 3.27782 52.1536 5.81048 53.7157 7.37258L76.3431 30L53.7157 52.6274C52.1536 54.1895 52.1536 56.7222 53.7157 58.2843C55.2778 59.8464 57.8105 59.8464 59.3726 58.2843L84.8284 32.8284ZM4 34L82 34L82 26L4 26L4 34Z"
              fill="#FFF6E4"
            />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export default ButtonSend;
