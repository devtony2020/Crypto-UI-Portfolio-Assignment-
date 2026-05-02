import { useState } from 'react';
import API_URL from '../config/api';
import { useAuthContext } from '../context/AuthContext';

const apiErrorMap = (error) => {
  const msg = error.message || error.toString();
  
  if (msg.includes('Failed to fetch')) {
    return 'Cannot connect to server. Please check your internet or try again later.';
  }
  if (msg.includes('secretOrPrivateKey must have a value')) {
    return 'Server configuration error (JWT Secret missing). Please contact support.';
  }
  if (msg.includes('Invalid credentials') || msg.includes('401')) {
    return 'Incorrect email or password. Please try again.';
  }
  if (msg.includes('already exists') || msg.includes('400')) {
    return 'An account with this email already exists.';
  }
  
  return msg;
};

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login: contextLogin, logout: contextLogout } = useAuthContext();

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (response.ok) {
        contextLogin(data.user, data.token);
        return { success: true };
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (err) {
      const friendlyError = apiErrorMap(err);
      setError(friendlyError);
      return { success: false, error: friendlyError };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      
      if (response.ok) {
        contextLogin(data.user, data.token);
        return { success: true };
      } else {
        throw new Error(data.message || 'Registration failed');
      }
    } catch (err) {
      const friendlyError = apiErrorMap(err);
      setError(friendlyError);
      return { success: false, error: friendlyError };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    contextLogout();
  };

  return { login, register, logout, loading, error, setError };
};
