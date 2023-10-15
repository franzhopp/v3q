import { useState, useEffect } from "react";
import CookieModal from "./Cookie.jsx";
import Cookies from "js-cookie";

const Homepage = () => {
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedCookie = Cookies.get("accept_cookie");
    if (!hasAcceptedCookie) {
      setCookieModalOpen(true);
    }
  }, []);

  const handleAcceptCookie = () => {
    Cookies.set("accept_cookie", "true", { expires: 365 });
    setCookieModalOpen(false);
  };

  return (
    <div>
      <CookieModal
        isOpen={isCookieModalOpen}
        onRequestClose={() => setCookieModalOpen(false)}
        onAccept={handleAcceptCookie}
      />
    </div>
  );
};

export default Homepage;
