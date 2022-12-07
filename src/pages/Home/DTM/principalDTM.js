import React from 'react';

import { View, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Video } from 'expo-av';

export default function Ortog() {

  const video = React.useRef('../../../../assets/video.mp4');

  const [status, setStatus] = React.useState({});
  const { height } = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    
    <SafeAreaView >
      <StatusBar backgroundColor={'#9fa75a'} />
      <ScrollView style={styles.scroll}>
        <View style={styles.principalView}>

            <View style={styles.view1}>
              <Text style={styles.view1h1}>Principais Sintomas</Text>
              <Text style={styles.view1h2}>• Som de cliques ou estalos ao abrir e fechar a boca;{'\n'}• Edema facial;{'\n'}• Dificuldade para abrir a boca;{'\n'}• Enxaquecas fortes e recorrentes;{'\n'}• Dores intensas próximo aos músculos da mastigação e da articulação temporomandibular;</Text>
              <View style={styles.viewVideo}><Image source={require('./../../../../assets/dtm/sintomas.png')} style={styles.video} /></View>
              
            </View>
            <View style={styles.view2}>
              

            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
    backgroundColor: '#242834',
  },
  principalView:{
    //backgroundColor: 'red',
    width: '100%',
    padding: '5%',
  },
  view1:{
    width: '100%',
    height: 450,
    //backgroundColor: 'blue',
    alignItems: 'center',
  },
  view1h1:{
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
  },  
  view1h2:{
    color: '#fff',
    fontFamily: "PoppinsRegular",
    textAlign: 'justify',
  },
  viewVideo:{
    width: '100%',
    //backgroundColor: 'red',
    height: '90%',
    marginTop: '10%',
    alignItems: 'center'
  },
  video:{
    width: 300,
    height: 375
  },
  view2:{
    //backgroundColor: 'red',
    paddingBottom: 20,
    width: '100%',
    top: '10%',
    height: 1500,
    
  },
  viewDepoimentos:{
    //backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',

  },
  viewDepoimentosh1:{
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
  },
  dep:{
    //backgroundColor: 'red',
    marginTop: 30,
  },
  imgFtPerfil1:{
    borderRadius: 6,

  },
  h4:{
    bottom: 45, 
    left: 90,
    color: '#fff',
    fontFamily: "PoppinsMedium",
    fontSize: 18,
  },
  viewTop:{
   
    width: '100%',
    height: 90,
  },
  h5: {
    textAlign: 'justify',
    color: '#fff',
    fontFamily: "PoppinsLight",


  },

});