import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import DisclaimerBanner from "./components/common/DisclaimerBanner.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SplashPage from "./pages/SplashPage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";



function App() {
  return (
    <Router>
      <DisclaimerBanner />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route path="/signin-splash" element={<SplashPage redirectTo="/signin" />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup-splash" element={<SplashPage redirectTo="/signup" />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
