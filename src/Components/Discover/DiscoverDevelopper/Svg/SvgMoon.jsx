import { useTheme } from "../../../../context/ThemeProvider";
import SvgMoonSun from "../../../../assets/Svg/SvgMoonSun.svg";
import SvgMoonDark from "../../../../assets/Svg/SvgMoonDark.svg";

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
