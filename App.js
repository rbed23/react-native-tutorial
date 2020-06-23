import React from 'react';
import { AppLoading } from 'expo';
import {
  useFonts,
  Nunito_400Regular as nunitoRegular,
  Nunito_700Bold as nunitoBold
} from '@expo-google-fonts/nunito';

import Navigator from './routing/drawer';


export default function App() {

  let [fontsLoaded] = useFonts({
    nunitoRegular,
    nunitoBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigator />
    );
  }
}
