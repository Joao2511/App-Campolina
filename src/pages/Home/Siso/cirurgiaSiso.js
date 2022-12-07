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
              <Text style={styles.view1h1}>Cirurgia</Text>
              <View style={styles.view23}>
                <Text style={styles.view1h2}>A cirurgia pode ter duração entre 60 e 90 minutos, dependendo da complexidade e da quantidade de dentes a serem removidos. É realizada com auxílio de equipamentos modernos, anestesia com drogas anestésicas de longa duração e com técnicas operatórias precisas, onde o trauma cirúrgico é o menor possível e a recuperação pós operatória é bastante tranquila.</Text>
              </View>
              <View style={styles.view23}>
                <Text style={styles.view1h2}>Dependendo do posicionamento dos seus sisos e do nível de complexidade, a extração desses dentes pode ser feita tanto no nosso consultório quanto no centro cirúrgico. É importante avaliar junto ao Doutor alguns fatores para que a melhor decisão seja tomada.{'\n'}</Text>
              </View>
              <View style={styles.viewVideo}><Image source={require('./../../../../assets/siso/doutor1.jpg')} style={styles.video} /></View>
              
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
    width: '100%',
    padding: '5%',
  },
  view1:{
    width: '100%',
    height: 1000,
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
  video:{
    width: 370,
    height: 500,
  },
  view2:{
    paddingBottom: 20,
    width: '100%',
    top: '10%',
    height: 1500,
  },
  viewDepoimentos:{
    width: '100%',
    alignItems: 'center',
  },
  viewDepoimentosh1:{
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
  },
  dep:{
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
  viewVideo:{
    height: 100,
  },
  view23:{
    width: '100%'
  }
});