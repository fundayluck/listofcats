import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <PaperProvider>
      <MainNavigation />
    </PaperProvider>
  );
};

export default App;
