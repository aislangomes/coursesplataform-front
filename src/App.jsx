import React from 'react';
import { AuthProvider } from './context/auth';
import { AppRouter } from './router';


const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};


export default App