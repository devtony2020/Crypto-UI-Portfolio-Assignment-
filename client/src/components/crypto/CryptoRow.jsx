import React from 'react';

const CryptoRow = ({ name, symbol, price, change24h, image }) => {
  const isPositive = change24h >= 0;

  return (
    <li className="flex items-center gap-3 sm:gap-4">
      <img src={image} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain bg-white p-1" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-lg sm:text-xl lg:text-lg hidden lg:block text-white">{name}</p>
        <p className="text-lg sm:text-xl text-white font-medium lg:hidden">{symbol}</p>
      </div>
      <div className="text-right">
        <p className="text-lg sm:text-xl lg:text-lg font-medium text-white">
          ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className={`text-base sm:text-lg lg:text-sm flex items-center justify-end gap-0.5 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          <span className={`inline-block ${isPositive ? 'rotate-45' : 'rotate-[225deg]'}`}>↑</span> 
          {Math.abs(change24h)}%
        </p>
      </div>
    </li>
  );
};

export default CryptoRow;
