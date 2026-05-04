import { useState, useEffect } from 'react';
import API_URL from '../config/api';

export const useCrypto = (endpoint = '') => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCryptos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/crypto${endpoint ? `/${endpoint}` : ''}`);
      const data = await response.json();
      
      if (response.ok) {
        setCryptos(data.data || []);
      } else {
        throw new Error(data.message || 'Failed to fetch cryptocurrencies');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptos();
  }, [endpoint]);

  return { cryptos, loading, error, refresh: fetchCryptos };
};
