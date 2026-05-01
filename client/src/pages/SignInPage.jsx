import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import passkey from "../assets/passkey.svg";
import googleIcon from "../assets/google-icon.svg";
import coinbaseImage from "../assets/coinbase-v2.svg";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/"); // Redirect to home on success
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar */}
      <div>
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/signin-splash" className="flex items-center gap-2">
            <img src={coinbaseImage} alt="Coinbase" className="h-10 w-10" />
            <span className="text-xl font-semibold text-gray-900"></span>
          </Link>
          <div className="flex items-center gap-4">
           
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold text-gray-50 text-left mb-2">
            Sign in (Project Demo)
          </h1>
          <p className="text-yellow-400 font-medium mb-10 text-left">
            Demo app – do not use your real password
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full border bg-black border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 text-white focus:ring-blue-500 focus:border-transparent"
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
                placeholder="Your password"
                className="w-full border bg-black border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 text-white focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full font-semibold text-base transition ${
                loading ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {loading ? 'Signing in...' : 'Continue'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-600">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social sign in buttons */}
          <div className="space-y-3">
             <button className="w-full flex items-center justify-center gap-3 border border-gray-600 rounded-full py-3 px-4 font-semibold text-white bg-gray-700 hover:bg-gray-700 transition">
              <img 
                src={passkey} 
                alt="Passkey" 
                className="w-5 h-5"  
              />
              Continue with Passkey
            </button>


           <button className="w-full flex items-center justify-center gap-3 border border-gray-600 rounded-full py-3 px-4 font-semibold text-white bg-gray-700 hover:bg-gray-700 transition">
              <img 
                src={googleIcon} 
                alt="Passkey" 
                className="w-5 h-5"  
              />
              Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-600 rounded-full py-3 px-4 font-semibold text-white bg-gray-700 hover:bg-gray-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06.02-.17.04-.36.04-.55 0-1.12.535-2.22 1.235-3.02C13.66 1.57 15.03.84 16.065.75c.06.22.1.45.1.68h.2zM21.78 17.1c-.04.1-.06.2-.1.28-.6 1.38-1.23 2.73-2.22 3.83-.87.97-1.78 1.93-3.18 1.93-1.23 0-1.83-.78-3.42-.78-1.63 0-2.28.78-3.42.82-1.35.06-2.38-1.05-3.26-2.03-1.8-2.03-3.18-5.73-1.33-8.23.9-1.23 2.55-2.02 4.14-2.04 1.2-.02 2.34.82 3.07.82.74 0 2.13-1.01 3.59-.86.6.02 2.34.25 3.44 1.86-.09.06-2.05 1.2-2.03 3.57.02 2.84 2.48 3.78 2.52 3.8zM16.365 1.43z"/>
                  </svg>
                  Continue with Apple
            </button>
          </div>

    

          {/* Bottom link */}
          <p className="text-center  font-normal text-lg text-gray-500 mt-8">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-500 font-semibold ">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="py-6 border-t border-gray-800">
          <div className="w-full max-w-md mx-auto"> 
            <p className="text-xs text-gray-400 text-center mb-4">
             Not your device? Use a private window. See <br />our Privacy Policy <a 
                href="/privacy" 
                className="text-gray-400 underline">
             Privacy Policy </a> 
             for more info.
            </p>
            <div className="text-center">
              <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-widest">Student Project Disclaimer</p>
              <p className="text-xs text-gray-500 mb-1">Educational purposes only. Not affiliated with Coinbase.</p>
              <p className="text-sm text-red-500 font-bold">WARNING: DO NOT USE REAL PASSWORDS.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SignInPage;

