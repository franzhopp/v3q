const SvgBtnQuote = () => {
  return (
    <svg
      className="transform active:scale-75 transition-transform"
      width="95"
      height="95"
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
  );
};

export default SvgBtnQuote;
