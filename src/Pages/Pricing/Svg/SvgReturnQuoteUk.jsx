import { NavLink } from "react-router-dom";

const SvgReturnQuote = () => {
  return (
    <div className={`flex flex-col text-center justify-center py-10`}>
      <div className={`flex justify-center py-10`}>
        <NavLink to="/quote">
          <svg
            className={`rounded-full shadow-lg transform active:scale-75 transition-transform`}
            xmlns="http://www.w3.org/2000/svg"
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
          >
            <g clip-path="url(#clip0_15_2)">
              <path
                d="M47.5 95C73.7335 95 95 73.7335 95 47.5C95 21.2665 73.7335 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95Z"
                fill="#0c3e78"
              />
              <path
                d="M73.4749 50.4749C74.8417 49.108 74.8417 46.892 73.4749 45.5251L51.201 23.2513C49.8342 21.8844 47.6181 21.8844 46.2513 23.2513C44.8844 24.6181 44.8844 26.8342 46.2513 28.201L66.0503 48L46.2513 67.799C44.8844 69.1658 44.8844 71.3819 46.2513 72.7487C47.6181 74.1156 49.8342 74.1156 51.201 72.7487L73.4749 50.4749ZM25 51.5L71 51.5V44.5L25 44.5V51.5Z"
                fill="#fff6e4"
              />
            </g>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default SvgReturnQuote;
