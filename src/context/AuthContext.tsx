import React, { createContext, useContext, useState } from 'react';
import { User, Role } from '../types';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    // Simulate API call
    // In production, this would make a real API request
    if (password.length < 6) {
      throw new Error('Invalid credentials');
    }

    // Simulate different roles based on username prefix for demo
    let role: Role = 'Employee';
    if (username.startsWith('admin')) role = 'Admin';
    if (username.startsWith('manager')) role = 'Manager';

    setUser({
      id: '1',
      username,
      role,
    });
  };

  const signup = async (username: string, password: string) => {
    // Simulate API call
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    setUser({
      id: '1',
      username,
      role: 'Employee',
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}