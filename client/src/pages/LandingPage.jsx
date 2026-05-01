import { useState } from "react";
import { Link } from "react-router-dom";
import { useCrypto } from "../hooks/useCrypto";
import CryptoRow from "../components/crypto/CryptoRow";

// Assets
import heroImage from  "../assets/hero-1-image.avif";
import leftArrowIcon from "../assets/left-arrow.svg";
import heroImage2 from "../assets/hero-2.avif";
import heroImage3 from "../assets/hero-3.avif";
import heroImage4 from "../assets/hero-4.avif";
import heroImage5 from "../assets/hero-5.png";
import heroImage6 from "../assets/hero-6.png";
import heroImage7 from "../assets/hero-7.png";
import crytoImage from "../assets/cryto-image.avif";

// Tab Icons (kept for Gainers/New tabs)
import freyaIcon from "../assets/freysa-icon.png";
import boboIcon from "../assets/bobo-icon.png";
import vulcanIcon from "../assets/vulcan-icon.png";
import shapeshiftIcon from "../assets/shapeshift-icon.png";
import pirateIcon from "../assets/pirate-icon.png";
import hyperIcon from "../assets/hyper-icon.png";
import jupiterIcon from "../assets/jupiter-icon.png";
import lighterIcon from "../assets/lighter-icon.png";
import walrusIcon from "../assets/walrus-icon.png";
import raydiumIcon from "../assets/raydium-icon.png";
import sentientIcon from "../assets/sentient-icon.png";

function Home() {
  const [activeTab, setActiveTab] = useState("tradable");
  const { cryptos, loading, error } = useCrypto();
  return (
    <main className="bg-white mt-12">

      {/* HERO SECTION */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        
        {/* Mobile/Tablet: Text on top */}
        <div className="lg:hidden mb-8">
          <h1 className="text-6xl font-normal text-gray-900 leading-tight">
           The future of finance is here.
          </h1>
          <p className="mt-4 text-lg text-gray-800 font-semibold">Trade crypto and more on a platform you can trust.</p>

          {/* Search bar + Sign up button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="flex-1 border border-gray-500 px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-3xl font-semibold hover:bg-blue-700 transition whitespace-nowrap text-center">
              Sign up
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image - Left */}
          <div className="flex-[2]">
            <div className="rounded-[40px] overflow-hidden">
              <img 
                  src={heroImage} 
                  alt="Dashboard Image" 
                  className="w-full" 
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">Stocks and prediction markets not available in your jurisdiction.</p>
          </div>

          {/* Desktop: Text - Right */}
          <div className="hidden lg:block flex-[2]">
           <h1 className="text-5xl lg:text-6xl xl:text-8xl font-normal text-gray-900 leading-tight">
  The future of finance is here.
</h1>
            <p className="mt-4 text-lg text-gray-600">Trade crypto and more on a platform you can trust.</p>

            {/* Search bar + Sign up button */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 border border-gray-300 px-4 py-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link to="/signup" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition whitespace-nowrap text-lg text-center"
>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE CRYPTO SECTION */}
      <section className="bg-gray-300 py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-60">
          
          {/* Left - Text */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <div className="mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                See more assets
              </button>
            </div>
          </div>

          {/* Right - Table with black background */}
          <div className="w-full lg:w-2/5 bg-black text-white rounded-2xl p-6 sm:p-8 lg:p-10 lg:min-h-[550px]">

            {/* Tab headings with arrow navigation */}
            <div className="flex items-center gap-4 mb-6 pb-3">
              <button onClick={() => setActiveTab(prev => prev === "tradable" ? "new" : prev === "gainers" ? "tradable" : "gainers")} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:border-white cursor-pointer shrink-0 lg:hidden">
                <img src={leftArrowIcon} alt="Scroll" className="w-4 h-4 invert" />
              </button>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                <button onClick={() => setActiveTab("tradable")} className={`text-sm font-semibold uppercase tracking-wider whitespace-nowrap px-4 py-2 rounded-full cursor-pointer transition ${activeTab === "tradable" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800"}`}>Tradable</button>
                <button onClick={() => setActiveTab("gainers")} className={`text-sm font-semibold uppercase tracking-wider whitespace-nowrap px-4 py-2 rounded-full cursor-pointer transition ${activeTab === "gainers" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800"}`}>Top gainers</button>
                <button onClick={() => setActiveTab("new")} className={`text-sm font-semibold uppercase tracking-wider whitespace-nowrap px-4 py-2 rounded-full cursor-pointer transition ${activeTab === "new" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800"}`}>New on Coinbase</button>
              </div>
            </div>

            {/* Show active tab content only */}
            <div>
              {activeTab === "tradable" && (
                <ul className="space-y-6 sm:space-y-7 lg:space-y-10">
                  {loading ? (
                    <li className="text-gray-400 py-4">Loading assets...</li>
                  ) : error ? (
                    <li className="text-red-400 py-4">Error: {error}</li>
                  ) : cryptos.length === 0 ? (
                    <li className="text-gray-400 py-4">No assets found</li>
                  ) : (
                    cryptos.map((crypto) => (
                      <CryptoRow 
                        key={crypto._id || crypto.symbol}
                        name={crypto.name}
                        symbol={crypto.symbol}
                        price={crypto.price}
                        change24h={crypto.change24h}
                        image={crypto.image}
                      />
                    ))
                  )}
                </ul>
              )}
              {activeTab === "gainers" && (
                <ul className="space-y-6 sm:space-y-7 lg:space-y-10">
                  {loading ? (
                    <li className="text-gray-400 py-4">Loading gainers...</li>
                  ) : error ? (
                    <li className="text-red-400 py-4">Error: {error}</li>
                  ) : cryptos.filter(c => c.change24h > 0).length === 0 ? (
                    <li className="text-gray-400 py-4">No top gainers right now</li>
                  ) : (
                    cryptos
                      .filter(c => c.change24h > 0)
                      .sort((a, b) => b.change24h - a.change24h)
                      .map((crypto) => (
                        <CryptoRow 
                          key={crypto._id || crypto.symbol}
                          name={crypto.name}
                          symbol={crypto.symbol}
                          price={crypto.price}
                          change24h={crypto.change24h}
                          image={crypto.image}
                        />
                      ))
                  )}
                </ul>
              )}

              {activeTab === "new" && (
                <ul className="space-y-6 sm:space-y-7 lg:space-y-10">
                  <li className="flex items-center gap-3 sm:gap-4">
                    <img src={jupiterIcon} alt="JUPITER" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-lg sm:text-xl lg:text-lg hidden lg:block">Jupiter</p>
                      <p className="text-lg sm:text-xl text-white font-medium lg:hidden">JUPITER</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl lg:text-lg font-medium">$10.30</p>
                      <p className="text-base sm:text-lg lg:text-sm text-green-400 flex items-center justify-end gap-0.5"><span className="inline-block rotate-45">↑</span> 1.80%</p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3 sm:gap-4">
                    <img src={lighterIcon} alt="LIGHTER" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-lg sm:text-xl lg:text-lg hidden lg:block">Lighter</p>
                      <p className="text-lg sm:text-xl text-white font-medium lg:hidden">LIGHTER</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl lg:text-lg font-medium">$8.30</p>
                      <p className="text-base sm:text-lg lg:text-sm text-green-400 flex items-center justify-end gap-0.5"><span className="inline-block rotate-45">↑</span> 0.80%</p>
                    </div>
                  </li>

                   <li className="flex items-center gap-3 sm:gap-4">
                    <img src={walrusIcon} alt="WAL" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-lg sm:text-xl lg:text-lg hidden lg:block">Walrus</p>
                      <p className="text-lg sm:text-xl text-white font-medium lg:hidden">WAL</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl lg:text-lg font-medium">$9.30</p>
                      <p className="text-base sm:text-lg lg:text-sm text-green-400 flex items-center justify-end gap-0.5"><span className="inline-block rotate-45">↑</span> 6.80%</p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3 sm:gap-4">
                    <img src={raydiumIcon} alt="RAY" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-lg sm:text-xl lg:text-lg hidden lg:block">Raydium</p>
                      <p className="text-lg sm:text-xl text-white font-medium lg:hidden">RAY</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl lg:text-lg font-medium">$6.30</p>
                      <p className="text-base sm:text-lg lg:text-sm text-green-400 flex items-center justify-end gap-0.5"><span className="inline-block rotate-45">↑</span> 1.50%</p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3 sm:gap-4">
                    <img src={sentientIcon} alt="IRYS" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-lg sm:text-xl lg:text-lg hidden lg:block">Sentient</p>
                      <p className="text-lg sm:text-xl text-white font-medium lg:hidden">SENT</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl lg:text-lg font-medium">$9.20</p>
                      <p className="text-base sm:text-lg lg:text-sm text-green-400 flex items-center justify-end gap-0.5"><span className="inline-block rotate-45">↑</span> 2.90%</p>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ADVANCED TRADER SECTION */}
      <section className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
          {/* Left - Image */}
          <div className="w-full lg:w-2/5">
            <img src={heroImage2} alt="Advanced trading tools" className="w-full max-w-md h-auto rounded-[40px]" />
          </div>
          {/* Right - Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-normal text-gray-900 leading-tight">
              Powerful tools, designed <br />for the advanced trader.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. 
              Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>
            <div className="mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
                Start trading
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ZERO FEES SECTION */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left - Text */}
            <div className="w-full lg:w-1/2">
           <p className="inline-block border border-gray-300 px-3 py-1 rounded-md text-sm bg-white font-lg mb-6">
  <span className="font-bold text-lg mr-1">c</span> <span className="text-gray-600 font-medium">COINBASE ONE</span>
</p>
              <h2 className="text-3xl lg:text-5xl font-normal text-gray-900 leading-tight">
                Zero trading fees,<br /> more rewards.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
              </p>
              <div className="mt-8">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                  Claim free trial
                </button>
              </div>
            </div>
            {/* Right - Image */}
            <div className="w-full lg:w-1/3 bg-gray-100 rounded-2xl p-6">
              <img src={heroImage3} alt="Zero fees rewards" className="w-full max-w-lg h-auto rounded-[40px] lg:ml-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* BASE APP SECTION */}
      <section className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2">
            <img src={heroImage4} alt="Base App" className="w-full max-w-lg h-auto rounded-[40px]" />
          </div>
          {/* Right - Text */}
          <div className="w-full lg:w-1/2">
          <p className="inline-block border border-gray-300 px-3 py-1 rounded-md text-sm bg-white font-lg mb-6">
  <span className="font-bold text-lg mr-1">c</span> <span className="text-gray-600 font-medium">Base App</span>
</p>
            <h2 className="text-3xl lg:text-5xl font-normal text-gray-900 leading-tight">
              Countless ways to earn <br /> crypto  with the Base App.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              An everything app to trade, create, discover, and chat, all in one place.
            </p>
            <div className="mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold transition">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THREE COLUMNS SECTION */}
      <section className="bg-gray-100">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24 py-20">
        {/* Top row: heading left, paragraph + button right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-1 lg:gap-400 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-900 ml-">
           New to crypto? <br />Learn some <br />crypto basics
          </h2>
          <div className="flex flex-col lg:mt-0">
            <p className="text-base text-gray-600 mr-20">Beginner guides, practical tips, and market updates for <br />first-timers, experienced investors, and everyone in <br />between</p>
            <button className="mt-4 self-start px-6 py-3 bg-black text-white font-semibold rounded-full transition">
              Read more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Column 1 - USDC */}
          <div className="flex flex-col">
            <img src={heroImage5} alt="USDC" className="w-full h-auto rounded-2xl mb-6" />
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug hover:underline cursor-pointer">
              USDC: The digital dollar for the global crypto economy
            </h3>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable. We co-founded the Centre Consortium in 2018 to invest in the build of USDC, and since then it has been more efficient and more ...
            </p>
          </div>
          {/* Column 2 - Bank Account */}
          <div className="flex flex-col">
            <img src={heroImage6} alt="Crypto bank" className="w-full h-auto rounded-2xl mb-6" />
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug hover:underline cursor-pointer">
              Can crypto really replace your bank account?
            </h3>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              If you're a big enough fan of crypto, you've probably heard the phrase "be your own bank" or the term "bankless" — the idea being that crypto can offer more control over your financial future than traditional finance. But how much of your financial life really can be accomplished via crypto?
            </p>
          </div>
          {/* Column 3 - Best Time */}
          <div className="flex flex-col">
            <img src={heroImage7} alt="Best time to invest" className="w-full h-auto rounded-2xl mb-6" />
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug hover:underline cursor-pointer">
              When is the best time to invest in crypto?
            </h3>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty, fear of missing out, or fear of
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* TAKE CONTROL SECTION */}
      <section className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24 py-20 mt-32">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left - Text + Search */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-7xl -mt-32 font-semibold text-gray-900 leading-tight">
              Take control <br /> of your money
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start your portfolio today and discover crypto
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base outline-none focus:border-blue-500"
              />
              <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition text-center">
                Sign up
              </Link>
            </div>
          </div>
          {/* Right - Image */}
          {/* Example – very large version */}
<div className="w-full lg:w-3/5 -mt-10">
  <img 
    src={crytoImage} 
    alt="Crypto" 
    className="w-full h-auto mx-auto" 
  />
</div>
        </div>
      </section>

      {/* DISCLAIMER SECTION */}
      <section className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24 py-10 text-center">
        <p className="text-sm text-gray-500 font-semibold mb-4">
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.
        </p>
        <div className="text-sm text-gray-400 leading-relaxed text-center mx-auto space-y-0 mb-8">
          <p className="lg:whitespace-nowrap">Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or</p>
          <p className="lg:whitespace-nowrap">solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii)</p>
          <p className="lg:whitespace-nowrap">intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.</p>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Project Disclaimer</h3>
          <p className="text-sm text-gray-600 mb-4">
            This is a demo/student project designed for educational purposes only. It is not an official Coinbase product.
          </p>
          <p className="text-sm font-bold text-red-600">
            WARNING: DO NOT enter real personal information, credit card details, or sensitive passwords.
          </p>
        </div>
      </section>


    </main>
  );
}

export default Home;