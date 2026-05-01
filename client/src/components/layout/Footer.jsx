import logo from "../../assets/coinbase-logo.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import linkedInIcon from "../../assets/linkedin-icon.svg";
import tiktokIcon from "../../assets/tiktok-icon.svg";
import xIcon from "../../assets/x-icon.svg";
import countryIcon from "../../assets/country-icon.svg"

function Footer() {
  return (
    <footer className="bg-gray-100 text-base lg:text-lg">

      {/* TOP SECTION: full-width with edge-to-edge border */}
      <div className="w-full ">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">

          {/* Columns */}
          <div className="flex flex-col lg:flex-row gap-12">

          {/* Logo Column */}
          <div className="lg:w-auto shrink-0 lg:mr-12">
            <img src={logo} alt="Coinbase Logo" className="w-16 h-16 object-contain " />
          </div>

          {/* Column 1: Company + Learn */}
          <div className="flex-1 flex flex-col gap-8 ">
            <div>
              <h3 className="text-gray-900 font-bold mb-4 ">Company</h3>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="transition">About</a></li>
                <li><a href="#" className="transition">Careers</a></li>
                <li><a href="#" className="transition">Affiliates</a></li>
                <li><a href="#" className="transition">Blog</a></li>
                <li><a href="#" className="transition">Press</a></li>
                <li><a href="#" className="transition">Security</a></li>
                <li><a href="#" className="transition">Investors</a></li>
                <li><a href="#" className="transition">Vendors</a></li>
                <li><a href="#" className="transition">Legal & privacy</a></li>
                <li><a href="#" className="transition">Cookie policy</a></li>
                <li><a href="#" className="transition">Cookie preferences</a></li>
                <li><a href="#" className="transition">Digital Asset Disclosures</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Learn</h3>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="transition">Explore</a></li>
                <li><a href="#" className="transition">Market statistics</a></li>
                <li><a href="#" className="transition">Coinbase Bytes newsletter</a></li>
                <li><a href="#" className="transition">Crypto basics</a></li>
                <li><a href="#" className="transition">Tips & tutorials</a></li>
                <li><a href="#" className="transition">Crypto glossary</a></li>
                <li><a href="#" className="transition">Market updates</a></li>
                <li><a href="#" className="transition">What is Bitcoin?</a></li>
                <li><a href="#" className="transition">What is crypto?</a></li>
                <li><a href="#" className="transition">What is a blockchain?</a></li>
                <li><a href="#" className="transition">How to set up a crypto wallet?</a></li>
                <li><a href="#" className="transition">How to send crypto?</a></li>
                <li><a href="#" className="transition">Taxes</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Individuals + Businesses + Institutions */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Individuals</h3>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="transition">Buy & sell</a></li>
                <li><a href="#" className="transition">Earn free crypto</a></li>
                <li><a href="#" className="transition">Base App</a></li>
                <li><a href="#" className="transition">Coinbase One</a></li>
                <li><a href="#" className="transition">Debit Card</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Businesses</h3>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="transition">Asset Listings</a></li>
                <li><a href="#" className="transition">Coinbase Business</a></li>
                <li><a href="#" className="transition">Payments</a></li>
                <li><a href="#" className="transition">Commerce</a></li>
                <li><a href="#" className="transition">Token Manager</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Institutions</h3>
              <ul className="space-y-2 text-gray-600 font-medium">
                <li><a href="#" className="transition">Prime</a></li>
                <li><a href="#" className="transition">Staking</a></li>
                <li><a href="#" className="transition">Exchange</a></li>
                <li><a href="#" className="transition">International Exchange</a></li>
                <li><a href="#" className="transition">Derivatives Exchange</a></li>
                <li><a href="#" className="transition">Verified Pools</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Developers */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Developers</h3>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="transition">Developer Platform</a></li>
                <li><a href="#" className="transition">Base</a></li>
                <li><a href="#" className="transition">Server Wallets</a></li>
                <li><a href="#" className="transition">Embedded Wallets</a></li>
                <li><a href="#" className="transition">Base Accounts (Smart Wallets)</a></li>
                <li><a href="#" className="transition">Onramp & Offramp</a></li>
                <li><a href="#" className="transition">Trade API</a></li>
                <li><a href="#" className="transition">Paymaster</a></li>
                <li><a href="#" className="transition">OnchainKit</a></li>
                <li><a href="#" className="transition">Data API</a></li>
                <li><a href="#" className="transition">Verifications</a></li>
                <li><a href="#" className="transition">Node</a></li>
                <li><a href="#" className="transition">AgentKit</a></li>
                <li><a href="#" className="transition">Staking</a></li>
                <li><a href="#" className="transition">Faucet</a></li>
                <li><a href="#" className="transition">Exchange API</a></li>
                <li><a href="#" className="transition">International Exchange API</a></li>
                <li><a href="#" className="transition">Prime API</a></li>
                <li><a href="#" className="transition">Derivatives API</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Support + Asset Prices + Stock Prices */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="transition">Help center</a></li>
                <li><a href="#" className="transition">Contact us</a></li>
                <li><a href="#" className="transition">Create account</a></li>
                <li><a href="#" className="transition">ID verification</a></li>
                <li><a href="#" className="transition">Account information</a></li>
                <li><a href="#" className="transition">Payment methods</a></li>
                <li><a href="#" className="transition">Account access</a></li>
                <li><a href="#" className="transition">Supported crypto</a></li>
                <li><a href="#" className="transition">Status</a></li>
              </ul>
            </div>

        {/*Assets*/}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Asset Prices</h3>
              <ul className="space-y-2 text-gray-500 font-medium">
                <li><a href="#" className="transition">Bitcoin price</a></li>
                <li><a href="#" className="transition">Ethereum price</a></li>
                <li><a href="#" className="transition">Solana price</a></li>
                <li><a href="#" className="transition">XRP price</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold mb-4">Stock Prices</h3>
              <ul className="space-y-2 text-gray-500 font-semibold">
                <li><a href="#" className="transition">NVIDIA price</a></li>
                <li><a href="#" className="transition">Apple price</a></li>
                <li><a href="#" className="transition">Microsoft price</a></li>
                <li><a href="#" className="transition">Amazon price</a></li>
              </ul>
            </div>
          </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-12 mt-8">
            <a href="#" className="hover:text-blue-600 transition">
              <img src={xIcon} alt="X Icon" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <img src={linkedInIcon} alt="LinkedIn Icon" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <img src={instagramIcon} alt="Instagram Icon" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <img src={tiktokIcon} alt="TikTok Icon" className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: full-width edge-to-edge border */}
    <div className="w-full border-t bg-gray-50 pb-10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between 
             items-start md:items-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0 text-lg font-normal">
            <span className="font-bold text-gray-800">&copy; 2026 Coinbase</span>
            <span className="hidden md:inline mx-2">•</span>
            <span>Privacy</span>
            <span className="hidden md:inline mx-2">•</span>
            <span>Terms & Conditions</span>
          </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0 text-base self-start md:self-auto md:ml-auto">
            <img 
                src={countryIcon} 
                alt="Country Icon" 
                className="w-5 h-6 object-contain" 
            />
                <a href="#" className="">Global</a>
                <a href="#" className="">• English</a>
            </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;