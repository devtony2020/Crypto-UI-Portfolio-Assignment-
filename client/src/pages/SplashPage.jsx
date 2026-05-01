import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coinbaseImage from "../assets/coinbase-v2.svg";

function SplashPage({ redirectTo = "/signin" }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate(redirectTo);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, redirectTo]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="animate-fade-in">
          <img
            src={coinbaseImage}
            alt="Coinbase"
            className="h-20 w-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
