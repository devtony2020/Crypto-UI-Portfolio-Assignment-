import { useState, useEffect } from 'react';
import API_URL from '../config/api';

export const useCrypto = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCryptos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/crypto`);
      const data = await response.json();
      
      if (response.ok) {
        // The backend returns { success: true, data: [...] }
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
  }, []);

  return { cryptos, loading, error, refresh: fetchCryptos };
};
