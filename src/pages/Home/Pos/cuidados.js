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
              <View style={styles.view11}>
                <Text style={styles.view1h1}>Umidificação dos lábios</Text>
                <Text style={styles.view1h2}>Os lábios podem ficar rachados e ressecados, isso ocorre pela manipulação durante a cirurgia. Procure hidratar os lábios com hidratante, manteiga de cacau, vaselina líquida ou pomada de assadura de neném oleosa. Faça aplicações várias vezes ao dia.</Text>
              </View>
              <Text style={styles.view1h1}>Exposição ao sol</Text>
              <Text style={styles.view1h3}>Evite o sol durante o pós-operatório, o calor pode aumentar o inchaço e se você tiver hematomas pode deixar a pele manchada. Procure usar filtro solar se tiver que ficar exposto ao sol ou a ambientes com luz fluorescente.</Text>
              <Text style={styles.view1h1}>Banhos e curativos</Text>
              <Text style={styles.view1h3}>Você pode lavar o rosto normalmente, mas evite água quente, pois o calor aumenta o inchaço. Em alguns casos o paciente vai para casa com um curativo de fita adesiva segurando o queixo, que será retirado no retorno ao médico após a cirurgia; mas você pode molhar e secar bem com toalha. Os pontos da cirurgia estão em sua gengiva sem curativos e o cuidado com este pontos e uma boa higiene oral após as refeições. Estes pontos são absorvidos pelo seu corpo conforme a cicatrização.</Text>
              <Text style={styles.view1h1}>Como dormir e respirar</Text>
              <Text style={styles.view1h3}>Ao deitar coloque 2 a 3 travesseiros para deixar a cabeça mais alta, isso facilita a respiração e a diminuir o inchaço. Você pode sentir seu nariz entupido ou dolorido; isso ocorre porque o inchaço comprime muitas estruturas da face e a sensação dolorida pode ser do tubo colocado durante a cirurgia para você respirar (isso melhora dentro de alguns dias).</Text>
            </View>

            <View style={styles.view2}>
              
            </View>

            <View style={styles.view3}>
              
            </View>

            <View style={styles.view4}>
              
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
    height: 450,
    alignItems: 'center',
  },
  view1h1:{
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
    textAlign: 'center'
  },  
  view1h2:{
    color: '#fff',
    fontFamily: "PoppinsRegular",
    textAlign: 'justify',
  },
  viewVideo:{
    width: '100%',
    height: '90%',
    marginTop: '10%',
    alignItems: 'center'
  },
  video:{
    width: 300,
    height: 220
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
  view2:{
    width: '100%',
    height: 450,
    alignItems: 'center',
  },
  view1h3:{
    color: '#fff',
    fontFamily: "PoppinsRegular",
    width: '100%',
    textAlign: 'justify'
  },
  view3:{
    width: '100%',
    height: 450,
    alignItems: 'center',
    bottom: 470
  },
  view4:{
    width: '100%',
    height: 450,
    alignItems: 'center',
    bottom: 580
  },
  view11:{
    width: '100%'
  }
});