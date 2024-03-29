const ButtonClose = () => {
  return (
    <svg
      className={`transform active:scale-75 transition-transform`}
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#c22e2e" />
      <path
        d="M12 27H41"
        stroke="#fff6e4"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M18 36L35 36"
        stroke="#fff6e4"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M18 18L35 18"
        stroke="#fff6e4"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ButtonClose;
