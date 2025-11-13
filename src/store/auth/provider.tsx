// src/context/AuthProvider.tsx
import React, { useState, useEffect } from 'react';
import type { AuthContextType, User } from '../../types/global';
import { AuthContext } from './context';

interface AuthProviderProps {
  children: React.ReactNode;
}

const USER_KEY = 'ticketflow_user';
const USERS_DB_KEY = 'ticketflow_users';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const stored = localStorage.getItem(USER_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem(USER_KEY);
      }
    }
    setLoading(false);
  }, []);

  const saveUsers = (users: User[]) => {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
  };

  const getUsers = (): User[] => {
    const raw = localStorage.getItem(USERS_DB_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));

    const users = getUsers();
    const exists = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (exists) {
      setLoading(false);
      throw new Error('Email already registered.');
    }

    const newUser: User = {
      id: `${Date.now()}`,
      name,
      email,
      password,
      token: 'token-' + Math.random().toString(36).slice(2, 8),
    };

    const updated = [...users, newUser];
    saveUsers(updated);
    setUser(newUser);
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    setLoading(false);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));

    const users = getUsers();
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      setLoading(false);
      throw new Error('Invalid email or password.');
    }

    setUser(found);
    localStorage.setItem(USER_KEY, JSON.stringify(found));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
