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
            <Text style={styles.view1h1}>Repouso</Text>
            <Text style={styles.view1h2}>Toda a cirurgia exige nos primeiros dias um repouso; procure realizar poucas atividades durante este período.{'\n'}Sempre que estiver em repouso procure manter a cabeça mais alta que o corpo ou fique sentado e a cada 40 a 60 minutos movimente as pernas e os pés para melhorar a circulação. Procure caminhar a cada duas a três horas para manter boa circulação. {'\n'}{'\n'}<Text style={styles.aviso}>Evite levantar bruscamente. </Text>  {'\n'}{'\n'}Você poderá realizar atividades simples, como ficar no computador, ver filmes, jogar com amigos, ver televisão, ler, passear por períodos curtos, de preferência próximo a sua casa, para descansar após o passeio.</Text>
            <View style={styles.viewVideo}><Image source={require('./../../../../assets/Pos/cama.png')} style={styles.video} /></View>
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
  principalView: {
    width: '100%',
    padding: '5%',
  },
  view1: {
    width: '100%',
    height: 1000,
    alignItems: 'center',
  },
  view1h1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
  },
  view1h2: {
    color: '#fff',
    fontFamily: "PoppinsRegular",
    textAlign: 'justify',
    fontSize: 17,
  },
  video: {
    width: 340,
    height: 250,
    top: 10
  },
  view2: {
    paddingBottom: 20,
    width: '100%',
    top: 300,
    height: 1500,
  },
  viewDepoimentos: {
    width: '100%',
    alignItems: 'center',
  },
  viewDepoimentosh1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
  },
  dep: {
    marginTop: 30,
  },
  imgFtPerfil1: {
    borderRadius: 6,
  },
  h4: {
    bottom: 45,
    left: 90,
    color: '#fff',
    fontFamily: "PoppinsMedium",
    fontSize: 18,
  },
  viewTop: {
    width: '100%',
    height: 90,
  },
  h5: {
    textAlign: 'justify',
    color: '#fff',
    fontFamily: "PoppinsLight",
  },
  viewVideo: {
    height: 100
  },
  view2:{
    width: '100%',
    height: 1000,
    alignItems: 'center',
    bottom: 480
  },
  bebida: {
    width: 110,
    height: 100,
    bottom: 5
  },
  view3:{
    width: '100%',
    height: 1000,
    bottom: 1200
  },
  view4:{
    width: '100%',
    height: 1000,
    alignItems: 'center',
    bottom: 2100
  },
  tabela: {
    width: 383,
    height: 350,
  },
  aviso:{
    color: 'red',
    fontFamily: "PoppinsRegular",
    textAlign: 'justify',
    fontSize: 17,
  }
});