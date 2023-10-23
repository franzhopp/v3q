import PagesNavbar from "../../Navigation/PagesNavbar/PagesNavbar";
import ImgText from "../../../assets/logo-5.png";
import Footer from "../../Footer/Footer";

const PageNotFound = () => {
  return (
    <section className="bg-FFF6E4">
      <PagesNavbar />
      <div className="flex justify-start pt-32 sm:pt-12 pl-3">
        <a
          className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
          href="/"
        >
          <svg
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_264_4)">
              <path
                d="M56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z"
                fill="#C22E2E"
              />
              <g clip-path="url(#clip1_264_4)">
                <path
                  d="M82 60C84.2091 60 86 58.2091 86 56C86 53.7909 84.2091 52 82 52V60ZM27.1716 53.1716C25.6095 54.7337 25.6095 57.2663 27.1716 58.8284L52.6274 84.2843C54.1895 85.8464 56.7222 85.8464 58.2843 84.2843C59.8464 82.7222 59.8464 80.1895 58.2843 78.6274L35.6569 56L58.2843 33.3726C59.8464 31.8105 59.8464 29.2779 58.2843 27.7158C56.7222 26.1537 54.1895 26.1537 52.6274 27.7158L27.1716 53.1716ZM82 52H30V60H82V52Z"
                  fill="#FFF6E4"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_264_4">
                <rect width="112" height="112" fill="white" />
              </clipPath>
              <clipPath id="clip1_264_4">
                <rect
                  width="60"
                  height="60"
                  fill="white"
                  transform="translate(26 26)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <div className="place-content-center pt-32 pb-40 px-4">
        <div className="animate-formbounce flex justify-center pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
          >
            <g clip-path="url(#clip0_942_91)">
              <path
                d="M79.9995 80L69.3745 90.625L59.3745 80.625L69.9995 70C70.9022 68.7964 71.3405 67.3076 71.2338 65.8069C71.1272 64.3063 70.4828 62.8944 69.419 61.8306C68.3551 60.7668 66.9433 60.1224 65.4426 60.0157C63.9419 59.9091 62.4531 60.3473 61.2495 61.25L50.6245 71.875L46.562 67.8125C46.0058 67.2063 45.3297 66.7223 44.5766 66.3912C43.8235 66.0601 43.0097 65.8891 42.187 65.8891C41.3643 65.8891 40.5506 66.0601 39.7975 66.3912C39.0443 66.7223 38.3682 67.2063 37.812 67.8125L28.437 77.1875C25.4937 80.0236 23.1478 83.4202 21.5377 87.1771C19.9276 90.934 19.0858 94.9752 19.062 99.0625C18.948 105.358 20.9264 111.513 24.687 116.563L14.3745 126.875C13.7683 127.431 13.2843 128.107 12.9532 128.86C12.6221 129.614 12.4512 130.427 12.4512 131.25C12.4512 132.073 12.6221 132.886 12.9532 133.64C13.2843 134.393 13.7683 135.069 14.3745 135.625C14.9307 136.231 15.6068 136.715 16.36 137.046C17.1131 137.377 17.9268 137.548 18.7495 137.548C19.5722 137.548 20.386 137.377 21.1391 137.046C21.8922 136.715 22.5683 136.231 23.1245 135.625L33.1245 125.625C38.4961 129.488 44.9458 131.565 51.562 131.563C59.8552 131.543 67.8142 128.292 73.7495 122.5L83.1245 113.125C84.3021 111.971 84.9761 110.399 84.9995 108.75C85.0488 107.925 84.9049 107.1 84.5794 106.341C84.2539 105.581 83.7558 104.908 83.1245 104.375L78.1245 99.375L88.7495 88.75C89.6522 87.5464 90.0905 86.0576 89.9838 84.557C89.8772 83.0563 89.2328 81.6444 88.169 80.5806C87.1051 79.5168 85.6933 78.8724 84.1926 78.7657C82.6919 78.6591 81.2031 79.0973 79.9995 80Z"
                fill="#C22E2E"
              />
              <path
                d="M135.625 14.375C135.068 13.7688 134.392 13.2848 133.639 12.9537C132.886 12.6226 132.072 12.4516 131.25 12.4516C130.427 12.4516 129.613 12.6226 128.86 12.9537C128.107 13.2848 127.431 13.7688 126.875 14.375L116.25 25C110.26 20.5355 102.869 18.3646 95.4162 18.8805C87.9634 19.3965 80.9421 22.5652 75.6247 27.8125L66.2497 37.1875C65.0721 38.3414 64.3982 39.9139 64.3747 41.5625C64.3254 42.3873 64.4693 43.2123 64.7948 43.9717C65.1203 44.7312 65.6184 45.4043 66.2497 45.9375L102.812 82.5C103.368 83.1062 104.044 83.5902 104.798 83.9213C105.551 84.2524 106.364 84.4234 107.187 84.4234C108.01 84.4234 108.824 84.2524 109.577 83.9213C110.33 83.5902 111.006 83.1062 111.562 82.5L120.937 73.4375C123.848 70.5278 126.148 67.0668 127.704 63.257C129.26 59.4471 130.041 55.3652 130 51.25C129.975 45.1657 128.242 39.2107 125 34.0625L135.625 23.125C136.231 22.5688 136.715 21.8927 137.046 21.1396C137.377 20.3864 137.548 19.5727 137.548 18.75C137.548 17.9273 137.377 17.1136 137.046 16.3604C136.715 15.6073 136.231 14.9312 135.625 14.375Z"
                fill="#C22E2E"
              />
            </g>
            <defs>
              <clipPath id="clip0_942_91">
                <rect width="150" height="150" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-center pb-28">
          <h1 className="text-C22E2E text-9xl font-extrabold">404</h1>
          <p className="text-C22E2E text-2xl sm:text-4xl font-extrabold tracking-tight ">
            Oups, mauvais chemin...
          </p>
          <div className="flex justify-center pt-1">
            <img
              src={ImgText}
              className="h-9 sm:h-10"
              alt="Icône navi studio."
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PageNotFound;
