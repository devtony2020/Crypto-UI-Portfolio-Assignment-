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
import bitcoinIcon from "../../assets/bitcoin-icon.png";
import ethIcon from "../../assets/eth-icon.png";
import tetherIcon from "../../assets/tether-icon.png";
import xrpIcon from "../../assets/xrp-icon.png";
import bnbIcon from "../../assets/bnb-icon.png";
import usdcIcon from "../../assets/usdc-icon.png";
import solanaIcon from "../../assets/bobo-icon.png"; // Fallback for Solana
import tronIcon from "../../assets/raydium-icon.png"; // Fallback for TRON
import figrIcon from "../../assets/irys-icon.png"; // Fallback for FIGR
import dogeIcon from "../../assets/sentient-icon.png"; // Fallback for DOGE
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTab, setSearchTab] = useState("Top");
  const [isLangOpen, setIsLangOpen] = useState(false);
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

              </div>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">
          {/* Search — Icon that expands into a bar */}
          <div className="relative flex items-center group">
            <div 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full cursor-pointer transition-colors z-20 ${isSearchOpen ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <img src={searchIcon} alt="Search Icon" className="h-6 w-6" />
            </div>

            <input 
              type="text" 
              autoFocus={isSearchOpen}
              placeholder="Search"
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              className={`absolute right-0 bg-gray-100 border border-transparent rounded-full py-2.5 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white transition-all duration-500 ease-in-out ${isSearchOpen ? 'w-[450px] opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
            />
          </div>

          {/* Hide these when search is open */}
          {!isSearchOpen && (
            <div className="flex items-center space-x-4 animate-in fade-in duration-300">
              {/* Language — tablet and up */}
              <div className="hidden md:block relative">
                <div 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <img src={languageIcon} alt="Language Icon" className="h-6 w-6" />
                </div>
                
                {isLangOpen && (
                  <div className="absolute right-0 mt-4 w-80 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-6 border-b border-gray-50">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Language and region</h3>
                      <div className="relative">
                        <img src={searchIcon} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" alt="search" />
                        <input 
                          type="text" 
                          placeholder="Search language or region"
                          className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="max-h-[400px] overflow-y-auto py-2 custom-scrollbar">
                      {[
                        { lang: "English", region: "Global" },
                        { lang: "English", region: "United States" },
                        { lang: "Español", region: "España" },
                        { lang: "Español", region: "México" },
                        { lang: "Deutsch", region: "Deutschland" },
                        { lang: "Français", region: "France" },
                        { lang: "Italiano", region: "Italia" },
                        { lang: "Português", region: "Brasil" },
                        { lang: "日本語", region: "日本" },
                        { lang: "한국어", region: "대한민국" },
                        { lang: "简体中文", region: "中国" }
                      ].map((item, idx) => (
                        <button 
                          key={idx}
                          className="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors group flex items-center justify-between"
                        >
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.lang}</p>
                            <p className="text-xs text-gray-500">{item.region}</p>
                          </div>
                          {idx === 0 && <span className="text-blue-600 text-lg">✓</span>}
                        </button>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                      <p className="text-xs text-gray-400">Settings will be saved for your next visit.</p>
                    </div>
                  </div>
                )}
              </div>

              {!user ? (
                <>
                  <Link
                    to="/signin-splash"
                    className="hidden md:block px-5 py-2 bg-gray-100 font-semibold rounded-full hover:bg-gray-200 hover:text-blue-600 whitespace-nowrap text-lg transition"
                  >
                    Sign in
                  </Link>

                  <Link
                    to="/signup-splash"
                    className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition whitespace-nowrap text-lg"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/profile" className="hidden md:block text-gray-700 font-medium hover:text-blue-600 transition">
                    Hi, {user.name}
                  </Link>
                  <button
                    onClick={logout}
                    className="px-5 py-2 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition whitespace-nowrap text-lg"
                  >
                    Sign out
                  </button>
                </div>
              )}
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
      
      {/* Full-width Dropdown (outside the loop to prevent covering header) */}
      {activeDropdown && dropdownData[activeDropdown] && (
        <div 
          className="absolute left-0 right-0 top-full z-30 bg-white shadow-2xl border-t border-gray-100" 
          style={{ height: 'calc(65vh - 76px)' }}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {/* Blur overlay */}
          <div className="fixed inset-0 top-[65vh] bg-black/30 backdrop-blur-sm -z-10 pointer-events-none" />
          
          <div className="max-w-screen-2xl mx-auto px-12 py-10 grid grid-cols-3 gap-x-12 gap-y-1 h-full overflow-y-auto">
            {/* Column 1 */}
            <div className="space-y-1">
              {dropdownData[activeDropdown].column1.map((entry) =>
                entry.isHeader ? (
                  <p key={entry.title} className="font-bold text-gray-400 text-xs uppercase tracking-wider px-3 pt-4 pb-1">{entry.title}</p>
                ) : (
                  <a key={entry.title} href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition group">
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
              {dropdownData[activeDropdown].column2.map((entry) =>
                entry.isHeader ? (
                  <p key={entry.title} className="font-bold text-gray-400 text-xs uppercase tracking-wider px-3 pt-4 pb-1">{entry.title}</p>
                ) : (
                  <a key={entry.title} href="#" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition group">
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
            {dropdownData[activeDropdown].column3 && (
              <div className="rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <img src={dropdownData[activeDropdown].column3.image} alt={dropdownData[activeDropdown].column3.imageAlt} className="w-20 h-20 rounded-lg flex-shrink-0" />
                  <div>
                    <a href="#" className="font-semibold text-gray-900 text-xl hover:underline">{dropdownData[activeDropdown].column3.title}</a>
                    <p className="text-base text-gray-500 mt-1">{dropdownData[activeDropdown].column3.desc}</p>
                    <a href="#" className="text-blue-600 font-semibold text-base hover:underline mt-3 inline-block">{dropdownData[activeDropdown].column3.linkText}</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
      {isSearchOpen && (
        <div className="fixed right-4 md:right-12 top-[100px] w-[850px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden z-40 animate-in fade-in slide-in-from-top-4 duration-200 origin-top-right">
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {["Top", "Crypto", "Stocks", "Predictions", "Perpetuals", "Future"].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setSearchTab(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${searchTab === cat ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button 
              onClick={() => { setIsSearchOpen(false); /* Navigate logic could go here */ }}
              className="text-sm font-bold text-blue-600 hover:underline"
            >
              View all assets
            </button>
          </div>

          <div className="p-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-6">
              {searchTab === "Top" ? "Trending Assets" : `${searchTab} Assets`}
            </span>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-1">
              {(() => {
                let assets = [];
                if (searchTab === "Top" || searchTab === "Crypto") {
                  assets = [
                    { name: "Bitcoin", symbol: "BTC", price: "$79,178.00", change: "+0.69%", icon: bitcoinIcon },
                    { name: "Ethereum", symbol: "ETH", price: "$2,344.09", change: "+0.92%", icon: ethIcon },
                    { name: "Tether", symbol: "USDT", price: "$0.9998", change: "+0.00%", icon: tetherIcon },
                    { name: "XRP", symbol: "XRP", price: "$1.40", change: "+0.20%", icon: xrpIcon },
                    { name: "BNB", symbol: "BNB", price: "$624.10", change: "+0.81%", icon: bnbIcon },
                    { name: "USDC", symbol: "USDC", price: "$0.9998", change: "-0.01%", icon: usdcIcon },
                    { name: "Solana", symbol: "SOL", price: "$84.33", change: "+0.15%", icon: solanaIcon },
                    { name: "TRON", symbol: "TRX", price: "$0.3390", change: "+0.29%", icon: tronIcon },
                    { name: "Figure Heloc", symbol: "FIGR_HELOC", price: "$1.04", change: "+0.00%", icon: figrIcon },
                    { name: "Dogecoin", symbol: "DOGE", price: "$0.1114", change: "+2.61%", icon: dogeIcon }
                  ];
                } else if (searchTab === "Stocks") {
                  assets = [
                    { name: "NVIDIA Corp", symbol: "NVDA", price: "$145.20", change: "+2.45%", icon: null },
                    { name: "Tesla Inc", symbol: "TSLA", price: "$238.40", change: "-1.10%", icon: null },
                    { name: "Apple Inc", symbol: "AAPL", price: "$226.15", change: "+0.35%", icon: null },
                    { name: "Microsoft", symbol: "MSFT", price: "$415.80", change: "+0.78%", icon: null }
                  ];
                } else if (searchTab === "Predictions") {
                  assets = [
                    { name: "BTC > $100k EOY", symbol: "PRED", price: "Yes: 64%", change: "+2%", icon: null },
                    { name: "Fed Rate Cut Sept", symbol: "ECON", price: "Yes: 82%", change: "+5%", icon: null },
                    { name: "Solana ETF Approval", symbol: "SOL_ETF", price: "Yes: 15%", change: "-3%", icon: null }
                  ];
                } else if (searchTab === "Perpetuals") {
                  assets = [
                    { name: "BTC Perpetual", symbol: "BTC-PERP", price: "$79,210", change: "100x", icon: null },
                    { name: "ETH Perpetual", symbol: "ETH-PERP", price: "$2,348", change: "50x", icon: null },
                    { name: "SOL Perpetual", symbol: "SOL-PERP", price: "$84.50", change: "20x", icon: null }
                  ];
                } else if (searchTab === "Future") {
                  assets = [
                    { name: "Gold Futures", symbol: "GC1!", price: "$2,450.00", change: "+1.20%", icon: null },
                    { name: "Crude Oil WTI", symbol: "CL1!", price: "$78.45", change: "-0.45%", icon: null },
                    { name: "S&P 500 Futures", symbol: "ES1!", price: "$5,420", change: "+0.15%", icon: null }
                  ];
                }

                if (assets.length === 0) {
                  return (
                    <div className="col-span-2 py-10 text-center text-gray-400">
                      No {searchTab.toLowerCase()} assets found matching your criteria.
                    </div>
                  );
                }

                return assets.map((asset) => (
                  <button key={asset.symbol} className="flex items-center justify-between py-3 hover:bg-gray-50 rounded-xl px-4 -mx-4 transition-colors group">
                    <div className="flex items-center gap-4">
                      {asset.icon ? (
                        <img src={asset.icon} alt={asset.name} className="w-10 h-10 rounded-full object-contain bg-gray-50 p-1" />
                      ) : (
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-[10px]">
                          {asset.symbol.substring(0, 3)}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{asset.name}</p>
                        <p className="text-xs text-gray-400">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{asset.price}</p>
                      <p className={`text-xs font-medium ${asset.change.startsWith('+') || asset.change.includes('x') ? 'text-green-500' : 'text-red-500'}`}>{asset.change}</p>
                    </div>
                  </button>
                ));
              })()}
            </div>
          </div>

          <div className="bg-gray-50 p-4 text-center">
            <button className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">
              See all results for "Top"
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;