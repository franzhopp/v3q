import { useTheme } from "../../../../context/ThemeProvider";
import SvgMoonSun from "../../../../assets/SvgMoonSun.svg";
import SvgMoonDark from "../../../../assets/SvgMoonDark.svg";

const SvgMoon = () => {
  const { isDarkMode } = useTheme();
  return (
    <img
      className="animate-formbounce"
      src={isDarkMode ? SvgMoonSun : SvgMoonDark}
    />
  );
};

export default SvgMoon;
