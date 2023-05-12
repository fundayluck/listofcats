import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as PaperProvider } from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <MainNavigation />
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
