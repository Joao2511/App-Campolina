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
              <Text style={styles.view1h1}>Técnica Cirúrgica</Text>
              <Text style={styles.view1h2}>Utilizamos uma Técnica Minimamente Invasiva que consiste em realizar acessos cirúrgicos menores, com o descolamento cuidadoso dos tecidos e uso de instrumentais específicos que promovem um trauma cirúrgico menor. Todos os acessos são realizados por dentro da boca, portanto, não há cicatrizes. Essas abordagens fazem com que os pacientes tenham pós-operatórios melhores, com menos inchaço, menores chances de parestesia e uma recuperação mais rápida.{'\n'}</Text>
              <View style={styles.viewVideo}><Image source={require('./../../../../assets/Ortog/tecnica2.jpeg')} style={styles.video} /></View>
              
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
});