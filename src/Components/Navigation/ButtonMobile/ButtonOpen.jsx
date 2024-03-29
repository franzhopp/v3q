const ButtonOpen = () => {
  return (
    <svg
      className={`transform active:scale-75 transition-transform`}
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
    >
      <circle
        cx="26.5"
        cy="26.5"
        r="26.5"
        transform="rotate(90 26.5 26.5)"
        fill="#c22e2e"
      />
      <path
        d="M26 12L26 41"
        stroke="#fff6e4"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M17 18L17 35"
        stroke="#fff6e4"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M35 18L35 35"
        stroke="#fff6e4"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ButtonOpen;
