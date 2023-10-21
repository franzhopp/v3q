// import { useEffect } from "react";
// import { useTheme } from "../context/ThemeProvider";
// import { IoMdSunny, IoMdMoon } from "react-icons/io";

// const DarkLightThemes = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   useEffect(() => {
//     const sections = document.querySelectorAll(".bg-black, .bg-FFF6E4");

//     sections.forEach((section) => {
//       if (isDarkMode) {
//         section.classList.remove("bg-black");
//         section.classList.add("bg-FFF6E4");
//       } else {
//         section.classList.remove("bg-FFF6E4");
//         section.classList.add("bg-black");
//       }
//     });
//   }, [isDarkMode]);

//   return (
//     <div className={isDarkMode ? "" : ""}>
//       <button
//         onClick={toggleTheme}
//         className={`py-2 px-4 bg-transparent rounded-full ${
//           isDarkMode ? "text-black" : "text-white"
//         }`}
//       >
//         {isDarkMode ? "" : ""}
//         <div className="icons text-gray border border-white rounded-full p-2">
//           {isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
//         </div>
//       </button>
//     </div>
//   );
// };

// export default DarkLightThemes;
