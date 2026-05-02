import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import coinbaseImage from "../assets/coinbase-v2.svg";
import googleIcon from "../assets/google-icon.svg";
import Notification from "../components/common/Notification";

function CreateAccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const { register, loading, error, setError } = useAuth();
  const navigate = useNavigate();
  const accountType = searchParams.get("type") || "personal";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
    if (result.success) {
      navigate("/"); // Redirect to home on success
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar */}
      <div>
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/signup-splash" className="flex items-center gap-2">
            <img src={coinbaseImage} alt="Coinbase" className="h-10 w-10" />
            <span className="text-xl font-semibold text-gray-900"></span>
          </Link>
          <div className="flex items-center gap-4"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold text-gray-50 text-left mb-2">
            Create account (Project Demo)
          </h1>
          <p className="text-yellow-400 font-medium mb-4 text-left">
            Demo app – do not use your real password
          </p>
          <p className="font-semibold text-gray-500 text-left mb-4 text-2sm">
            Access all that Coinbase has to offer with a single <br />account.
          </p>

          <Notification 
            message={error} 
            type="error" 
            onClose={() => setError(null)} 
          />

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-50 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full border bg-black border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 text-white focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-50 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border bg-black border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 text-white focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" id="password-label" className="block text-sm font-medium text-gray-50 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full border bg-black border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 text-white focus:ring-blue-500 focus:border-transparent mb-5"
                required
              />
            </div>

            {/* Email Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 font-semibold rounded-3xl transition ${
                loading ? 'bg-blue-500/50 cursor-not-allowed' : 'bg-blue-500 text-black hover:bg-blue-400'
              }`}
            >
              {loading ? 'Creating account...' : 'Continue'}
            </button>
          </form>
        <div className="flex items-center justify-center gap-2 my-6">
        <div className="w-full  border-t border-gray-700"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="w-full border-t border-gray-700"></div>
        </div>

          {/* Google Sign Up */}
       <button className="w-full relative flex items-center justify-center border border-gray-600 rounded-full py-3 px-4 font-semibold text-white bg-gray-700 hover:bg-gray-700 transition mb-2">

                <img 
                    src={googleIcon} 
                    alt="Google Icon" 
                    className="w-5 h-5 absolute left-10" 
                />

             <span>Sign up with Google</span>

        </button>

          {/* Apple Sign Up */}
       <button className="w-full relative flex items-center justify-center gap-3 border border-gray-600 rounded-full py-3 px-4 font-semibold text-white bg-gray-700 hover:bg-gray-700 transition">
  
            {/* Left icon */}
            <svg className="w-5 h-5 absolute left-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06.02-.17.04-.36.04-.55 0-1.12.535-2.22 1.235-3.02C13.66 1.57 15.03.84 16.065.75c.06.22.1.45.1.68h.2zM21.78 17.1c-.04.1-.06.2-.1.28-.6 1.38-1.23 2.73-2.22 3.83-.87.97-1.78 1.93-3.18 1.93-1.23 0-1.83-.78-3.42-.78-1.63 0-2.28.78-3.42.82-1.35.06-2.38-1.05-3.26-2.03-1.8-2.03-3.18-5.73-1.33-8.23.9-1.23 2.55-2.02 4.14-2.04 1.2-.02 2.34.82 3.07.82.74 0 2.13-1.01 3.59-.86.6.02 2.34.25 3.44 1.86-.09.06-2.05 1.2-2.03 3.57.02 2.84 2.48 3.78 2.52 3.8zM16.365 1.43z"/>
            </svg>

            <span>Sign up with Apple</span>

        </button>

          {/* Sign In Link */}
          <p className="text-center text-gray-300 mt-6 text-md font-semibold">
            Already have an account?{" "}
            <Link to="/signin-splash" className="text-blue-500 hover:text-blue-400 font-semibold">
              Sign in
            </Link>
          </p>

          {/* Footer */}
          <p className="text-center text-gray-500 text-xs mt-8 leading-relaxed font-medium mb-8">
            By creating an account you certify that you are over the <br /> age of 18 and agree to our <a href="#" className="text-gray-500 underline hover:cursor-pointer">
               Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-500 underline hover:cursor-pointer font-normal">
              Cookie Policy
            </a>
            .
          </p>

          <div className="border-t border-gray-800 pt-6 text-center">
              <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-widest">Student Project Disclaimer</p>
              <p className="text-xs text-gray-500 mb-1">Educational purposes only. Not affiliated with Coinbase.</p>
              <p className="text-sm text-red-500 font-bold">WARNING: DO NOT USE REAL PASSWORDS OR DATA.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;

