import React from 'react';
import { View, StatusBar } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/pages/Routes/Index';
import 'localstorage-polyfill'; 

import { useFonts, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular, Poppins_300Light  } from '@expo-google-fonts/poppins';

export default function App() {  
  const [ fonteCarregada ] = useFonts({
    "PoppinsSemiBold": Poppins_600SemiBold,
    "PoppinsMedium": Poppins_500Medium,
    "PoppinsRegular": Poppins_400Regular,
    "PoppinsLight": Poppins_300Light,
  });
  
  if (!fonteCarregada) {
    return <View/>
  }

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    

  )
}



