import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
