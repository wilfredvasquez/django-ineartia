import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import { InertiaProvider } from './context/InertiaContext';

export default function App() {
  return (
    <NavigationContainer>
      <InertiaProvider>
        <Navigation />
      </InertiaProvider>
    </NavigationContainer>
  );
}
