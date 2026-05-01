// Validation helper functions

const validateEmail = (email) => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 6;
};

const validateCryptoSymbol = (symbol) => {
  return symbol && /^[A-Za-z0-9]{1,10}$/.test(symbol.trim());
};

const validatePrice = (price) => {
  const numPrice = parseFloat(price);
  return !isNaN(numPrice) && numPrice >= 0;
};

const validatePercentage = (percentage) => {
  const numPercentage = parseFloat(percentage);
  return !isNaN(numPercentage);
};

const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  validateEmail,
  validatePassword,
  validateCryptoSymbol,
  validatePrice,
  validatePercentage,
  validateUrl,
};
