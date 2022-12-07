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
            <Text style={styles.view1h1}>Dieta</Text>
            <Text style={styles.view1h2}>Nos primeiros dias:{'\n'} - Dieta líquida fria (Sopa batida de legumes, verduras, cereais e carne pelo menos 2 vezes ao dia);{'\n'}- Procure beber bastante líquido (Água, sucos, água de coco) cerca de 1,5 litros/dia;{'\n'}-Preparações com leite (Achocolatado, leite com frutas, mingau ralo) ou suplementos de 2 a 3 vezes por dia.</Text>
            <View style={styles.viewVideo}><Image source={require('./../../../../assets/vector/bebida.png')} style={styles.video} /></View>
            <Text style={styles.view1h2}>{'\n'}{'\n'}Se você sentir dificuldade em utilizar o canudo, pode usar um copinho de café, uma colher ou uma seringa para auxiliar a colocar os líquidos dentro da boca para engolir.{'\n'}</Text>
            <View style={styles.viewVideo}><Image source={require('./../../../../assets/vector/bebida2.png')} style={styles.bebida} /></View>
            <View style={styles.view11}>
              <Text style={styles.view1h2}>Procure respeitar a aceitação do seu corpo com a quantidade de comida e lembre-se de comer em 3 em 3 horas.</Text>
            </View>
            <Text style={styles.view1h2}>Depois do período de dieta liquida, você deve passar para pastosa liquida (como a papinha de bebê) por 2 a 3 semanas; depois pastosa com mais consistência (alimentos amassados) por 2 a semanas; e dieta com alimentos sólidos macios (que não exigem força para morder) por 2 a 3 semanas; e em 90 dias Você estará comendo alimentos com a mesma consistência de antes da cirurgia.{'\n'}</Text>
            
            <View style={styles.viewTabela}><Image source={require('./../../../../assets/Pos/Tabela.png')} style={styles.tabela}/></View>
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
    width: 50,
    height: 110,
    bottom: -4
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
    bottom: 380
  },
  bebida: {
    width: 110,
    height: 100,
    bottom: 13
  },
  view3:{
    width: '100%',
    height: 1000,
    bottom: 1000
  },
  view4:{
    width: '100%',
    height: 1000,
    alignItems: 'center',
    bottom: 1900
  },
  view11:{
    width: '99%'
  },
  viewTabela:{
    //backgroundColor: 'red',
    width: '100%',
    height: 700,
    alignItems: 'center',
    marginTop: 10
  },
  tabela:{
    width: 300,
    height: 274,

},
});