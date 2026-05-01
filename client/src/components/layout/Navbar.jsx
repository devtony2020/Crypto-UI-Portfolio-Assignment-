import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/coinbase-logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import languageIcon from "../../assets/world-icon.svg";
import menuIcon from "../../assets/menu-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
import arrowIcon from "../../assets/arrow-icon.svg";
import navIcon from "../../assets/navigation-upsell-icon.png";
import letterIcon from "../../assets/letter-c-icon.svg";
import squareIcon from "../../assets/square-icon.svg";
import oneIcon from "../../assets/one-icon.svg";
import diamondIcon from "../../assets/diamond-icon.svg";
import chainIcon from "../../assets/chain-icon.svg";
import ideaIcon from "../../assets/idea-icon.svg";
import candleIcon from "../../assets/candle-icon.svg";
import percentageIcon from "../../assets/percentage-icon.svg"
import wealthIcon from "../../assets/diamond-icon.svg";
import cardIcon from "../../assets/card-1-icon.svg";
import debitIcon from "../../assets/debit-card-icon.svg";
import bagIcon  from "../../assets/bag-icon.svg";
import listIcon from "../../assets/list-icon.svg";
import tokenIcon from "../../assets/token-icon.svg";
import onchainImage from "../../assets/onchain-image.png";
import earthImage from "../../assets/world-image.png"
import dollarIcon from "../../assets/dollar-icon.svg";
import verifiedIcon from "../../assets/verified-icon.svg";
import developerImage from "../../assets/developers-image.jpg";
import companyImage from "../../assets/company-imag.png";




function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user } = useAuthContext();
  const { logout } = useAuth();

  const menuItems = [
    "Cryptocurrencies",
    "Individuals",
    "Businesses",
    "Institutions",
    "Developers",
    "Company",
  ];

  // Dropdown data for each nav item
  const dropdownData = {
    Individuals: {
      column1: [
        {
          title: "Buy and sell",
          desc: "Buy, sell, and use crypto",
          icon: (
            <img src={letterIcon} alt="Buy and sell" className="w-6 h-6" />
          ),
        },
        {
          title: "Base App",
          desc: "Post, earn, trade, and chat, all in one place",
          icon: (
            <img src={squareIcon} alt="Base App" className="w-6 h-6" />
          ),
        },
        {
          title: "Coinbase One",
          desc: "Get zero trading fees and more",
          icon: (
            <img src={oneIcon} alt="Coinbase One" className="w-6 h-6" />
          ),
        },
        {
          title: "Private Client",
          desc: "For trusts, family offices, UHNWIs",
          icon: (
            <img src={diamondIcon} alt="Private Client" className="w-6 h-6" />
          ),
        },
        {
          title: "Onchain",
          desc: "Dive into the world of onchain apps",
          icon: (
            <img src={chainIcon} alt="Onchain" className="w-6 h-6" />
          ),
        },
        {
          title: "Learn",
          desc: "Crypto tips and guides",
          icon: (
            <img src={ideaIcon} alt="Learn" className="w-6 h-6" />
          ),
        },
      ],
      column2: [
        {
          title: "Advanced",
          desc: "Professional-grade trading tools",
          icon: (
            <img src={candleIcon} alt="Advanced" className="w-6 h-6" />
          ),
        },
        {
          title: "Earn",
          desc: "Stake your crypto and earn rewards",
          icon: (
            <img src={percentageIcon} alt="Earn" className="w-6 h-6" />
          ),
        },
        {
          title: "Coinbase Wealth",
          desc: "Institutional-grade services for UHNW",
          icon: (
            <img src={wealthIcon} alt="Coinbase Wealth" className="w-6 h-6" />
          ),
        },
        {
          title: "Credit Card",
          desc: "Earn up to 4% bitcoin back",
          icon: (
            <img src={cardIcon} alt="Credit Card" className="w-6 h-6" />
          ),
        },
        {
          title: "Debit Card",
          desc: "Spend crypto, get crypto back",
          icon: (
            <img src={debitIcon} alt="Debit Card" className="w-6 h-6" />
          ),
        },
      ],
      column3: {
        image: navIcon,
        imageAlt: "System Update",
        title: "System Update 2025",
        desc: "The next chapter of Coinbase. Live on X 12/17.",
        linkText: "Learn more →",
      },
    },
    Businesses: {
      column1: [
        {
          title: "Business",
          desc: "Crypto trading and payments for startups and SMBs",
          icon: <img src={bagIcon} alt="Business" className="w-6 h-6" />,
        },
        {
          title: "Payments",
          desc: "The stablecoin payments stack for commerce platforms",
          icon: <img src={cardIcon} alt="Payments" className="w-6 h-6" />,
        },
      ],
      column2: [
        {
          title: "Asset Listings",
          desc: "List your asset on Coinbase",
          icon: <img src={listIcon} alt="Asset Listings" className="w-6 h-6" />,
        },
        {
          title: "Token Manager",
          desc: "The platform for token distributions, vesting, and lockups",
          icon: <img src={tokenIcon} alt="Token Manager" className="w-6 h-6" />,
        },
      ],
      column3: {
        image: onchainImage,
        imageAlt: "Coinbase for Business",
        title: "Commerce Payments Protocol A new standard for onchain payments",
        desc: "Crypto solutions built for businesses of all sizes.",
        linkText: "Go to Payments →",
      },
    },
    Institutions: {
      column1: [
        {
          title: "Trading and Financing",
          desc: "Professional prime brokerage services",
          icon: <img src={dollarIcon} alt="Trading and Financing" className="w-6 h-6" />,
        },
        {
          title: "Custody",
          desc: "Securely store all your digital assets",
          icon: <img src={verifiedIcon} alt="Custody" className="w-6 h-6" />,
        },
        {
          title: "Staking",
          desc: "Explore staking across our products",
          icon: <img src={percentageIcon} alt="Staking" className="w-6 h-6" />,
        },
        {
          title: "Onchain Wallet",
          desc: "Institutional-grade wallet to get onchain",
          icon: <img src={chainIcon} alt="Onchain Wallet" className="w-6 h-6" />,
        },
      ],
      column2: [
        { title: "Markets", isHeader: true },
        {
          title: "Exchange",
          desc: "Spot markets for high-frequency trading",
          icon: <img src={candleIcon} alt="Exchange" className="w-6 h-6" />,
        },
        {
          title: "International Exchange",
          desc: "Access perpetual futures markets",
          icon: <img src={squareIcon} alt="International Exchange" className="w-6 h-6" />,
        },
        {
          title: "Derivatives Exchange",
          desc: "Trade an accessible futures market",
          icon: <img src={candleIcon} alt="Derivatives Exchange" className="w-6 h-6" />,
        },
        {
          title: "Verified Pools",
          desc: "Transparent, verified liquidity pools",
          icon: <img src={chainIcon} alt="Verified Pools" className="w-6 h-6" />,
        },
      ],
      column3: {
        image: earthImage,
        imageAlt: "Institutional Services",
        title: "Institutional Services",
        desc: "Our client Trusted by institutions and government",
        linkText: "Learn more →",
      },
    },
    Developers: {
      column1: [
        {
          title: "Payments",
          desc: "Fast and global stablecoin payments with a single integration",
          icon: <img src={cardIcon} alt="Payments" className="w-6 h-6" />,
        },
        {
          title: "Trading",
          desc: "Launch crypto trading and custody for your users",
          icon: <img src={candleIcon} alt="Trading" className="w-6 h-6" />,
        },
        {
          title: "Wallets",
          desc: "Deploy customizable and scalable wallets for your business",
          icon: <img src={chainIcon} alt="Wallets" className="w-6 h-6" />,
        },
        {
          title: "Stablecoins",
          desc: "Access USDC and Coinbase Custom Stablecoins",
          icon: <img src={letterIcon} alt="Stablecoins" className="w-6 h-6" />,
        },
      ],
      column2: [
        {
          title: "Banks & Brokerages",
          desc: "Secure, regulated offerings for retail, private banking, & institutional clients",
          icon: <img src={diamondIcon} alt="Banks & Brokerages" className="w-6 h-6" />,
        },
        {
          title: "Payment Firms",
          desc: "Near-instant, low-cost, global payment rails for modern providers",
          icon: <img src={debitIcon} alt="Payment Firms" className="w-6 h-6" />,
        },
        {
          title: "Startups",
          desc: "Launch your business with the world's leader in crypto",
          icon: <img src={ideaIcon} alt="Startups" className="w-6 h-6" />,
        },
      ],
      column3: {
        image: developerImage,
        imageAlt: "Developer Platform",
        title: "World class crypto infrastructure. Discover Coinbase's complete crypto-as-a-service platform",
        desc: "",
        linkText: "Start building →",
      },
    },
    Company: {
      column1: [
        {
          title: "About",
          desc: "Powering the crypto economy",
          icon: <img src={letterIcon} alt="About" className="w-6 h-6" />,
        },
        {
          title: "Careers",
          desc: "Work with us",
          icon: <img src={squareIcon} alt="Careers" className="w-6 h-6" />,
        },
        {
          title: "Affiliates",
          desc: "Help introduce the world to crypto",
          icon: <img src={chainIcon} alt="Affiliates" className="w-6 h-6" />,
        },
      ],
      column2: [
        {
          title: "Support",
          desc: "Find answers to your questions",
          icon: <img src={ideaIcon} alt="Support" className="w-6 h-6" />,
        },
        {
          title: "Blog",
          desc: "Read the latest from Coinbase",
          icon: <img src={squareIcon} alt="Blog" className="w-6 h-6" />,
        },
        {
          title: "Security",
          desc: "The most trusted & secure",
          icon: <img src={diamondIcon} alt="Security" className="w-6 h-6" />,
        },
      ],
      column3: {
        image: companyImage,
        imageAlt: "About Coinbase",
        title: "About Coinbase",
        desc: "Learn all about Coinbase: We're building the open financial system.",
        linkText: "Create your account →",
      },
    },
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm border-b z-50">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <img src={logo} alt="coinbase logo" className="h-11 w-11 flex-shrink-0" />

          {/* Nav menu — ONLY large screens */}
          <nav className="hidden lg:flex gap-2 xl:gap-4 font-semibold text-lg">
            {menuItems.map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => dropdownData[item] && setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="px-5 py-2.5 text-gray-900 hover:bg-gray-100 hover:rounded-[40px] whitespace-nowrap transition-all duration-200 inline-block"
                >
                  {item}
                </a>

                {/* Dropdown + Blur overlay */}
                {activeDropdown === item && dropdownData[item] && (
                  <>
                    {/* Blur overlay on bottom portion */}
                    <div className="fixed inset-0 top-[65vh] bg-black/30 backdrop-blur-sm z-40" />
                    {/* Full-width dropdown */}
                    <div className="fixed left-0 right-0 top-[72px] z-50 bg-white shadow-2xl border-t border-gray-100" style={{ height: 'calc(65vh - 72px)' }}>
                      <div className="max-w-screen-2xl mx-auto px-12 py-10 grid grid-cols-3 gap-x-12 gap-y-1 h-full overflow-y-auto">
                        {/* Column 1 */}
                        <div className="space-y-1">
                          {dropdownData[item].column1.map((entry) =>
                            entry.isHeader ? (
                              <p key={entry.title} className="font-bold text-gray-400 text-xs uppercase tracking-wider px-3 pt-4 pb-1">{entry.title}</p>
                            ) : (
                              <a
                                key={entry.title}
                                href="#"
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
                              >
                                <div className="mt-0.5 flex-shrink-0">{entry.icon}</div>
                                <div>
                                  <p className="font-semibold text-gray-900 text-base group-hover:text-gray-600 transition">{entry.title}</p>
                                  <p className="text-sm text-gray-500 mt-0.5">{entry.desc}</p>
                                </div>
                              </a>
                            )
                          )}
                        </div>
                        {/* Column 2 */}
                        <div className="space-y-1">
                          {dropdownData[item].column2.map((entry) =>
                            entry.isHeader ? (
                              <p key={entry.title} className="font-bold text-gray-400 text-xs uppercase tracking-wider px-3 pt-4 pb-1">{entry.title}</p>
                            ) : (
                              <a
                                key={entry.title}
                                href="#"
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
                              >
                                <div className="mt-0.5 flex-shrink-0">{entry.icon}</div>
                                <div>
                                  <p className="font-semibold text-gray-900 text-base group-hover:text-gray-600 transition">{entry.title}</p>
                                  <p className="text-sm text-gray-500 mt-0.5">{entry.desc}</p>
                                </div>
                              </a>
                            )
                          )}
                        </div>
                        {/* Column 3 */}
                        {dropdownData[item].column3 && (
                          <div className="rounded-2xl p-6 flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                              <img src={dropdownData[item].column3.image} alt={dropdownData[item].column3.imageAlt} className="w-20 h-20 rounded-lg flex-shrink-0" />
                              <div>
                                <a href="#" className="font-semibold text-gray-900 text-xl hover:underline">{dropdownData[item].column3.title}</a>
                                <p className="text-base text-gray-500 mt-1">{dropdownData[item].column3.desc}</p>
                                <a href="#" className="text-blue-600 font-semibold text-base hover:underline mt-3 inline-block">{dropdownData[item].column3.linkText}</a>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">
          {/* Search — always visible */}
          <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
            <img src={searchIcon} alt="Search Icon" className="h-6 w-6" />
          </div>

          {/* Language — tablet and up */}
          <div className="hidden md:flex bg-gray-100 p-2 rounded-full cursor-pointer">
            <img src={languageIcon} alt="Language Icon" className="h-6 w-6" />
          </div>

          {!user ? (
            <>
              {/* Sign in — tablet and up */}
              <Link
                to="/signin-splash"
                className="hidden md:block px-5 py-2 bg-gray-100 font-semibold rounded-full hover:bg-gray-200 hover:text-blue-600 whitespace-nowrap text-lg transition"
              >
                Sign in
              </Link>

              {/* Sign up — always visible */}
              <Link
                to="/signup-splash"
                className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition whitespace-nowrap text-lg"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-gray-700 font-medium">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="px-5 py-2 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition whitespace-nowrap text-lg"
              >
                Sign out
              </button>
            </div>
          )}

          {/* Menu — mobile + tablet only */}
          <button
            className="lg:hidden bg-gray-100 p-2 rounded-full cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuOpen ? closeIcon : menuIcon} alt="Menu Icon" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU — ONLY for mobile/tablet */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[64px] left-0 w-full h-[calc(100%-64px)] bg-white z-40 flex flex-col items-start p-8 space-y-6 overflow-auto">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="flex justify-between w-full text-gray-900 font-bold hover:bg-gray-100 rounded-sm text-2xl py-4 border-gray-200"
            >
              {item}
              <img src={arrowIcon} alt="Arrow Icon" className="h-6 w-6" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;