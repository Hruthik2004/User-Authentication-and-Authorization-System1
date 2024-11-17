import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { Layout } from './components/Layout';
import { useAuth } from './context/AuthContext';

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Welcome, {user.username}!</h2>
        <p className="mt-2 text-gray-600">Your role is: {user.role}</p>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;