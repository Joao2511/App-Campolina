import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Ortog() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}><StatusBar backgroundColor={'#9fa75a'} />


      <ScrollView style={styles.scroll}>

        <View style={styles.all}>
          <Text style={styles.h1}>O que é a cirurgia Ortognática?</Text>
          <Text style={styles.h2}>A Cirurgia Ortognática é o procedimento que visa corrigir anomalias dentofaciais. Essas alterações podem ser: de oclusão/mordida (mordida aberta, mordida cruzada), que não possam corrigidas apenas com tratamentos ortodônticos; assimetrias faciais; pouca projeção ou projeção excessiva do mento, da mandíbula e/ou da maxila; pouca altura ou altura excessiva do mento, da mandíbula e/ou da maxila.</Text>
          <Image source={require('../../../../assets/Ortog/moça.jpg')} style={styles.foto} />
          <Text style={styles.h23}>Nos pacientes com indicação para a realização desse tipo de cirurgia, as queixas são as mais diversas, desde falta de exposição dentária no sorriso, alterações no perfil por falta de projeção dos maxilares, dificuldade respiratória e para se alimentar, sorriso gengival, entre outras. A cirurgia visa corrigir alterações esqueléticas e está sempre associada ao tratamento ortodôntico, para que o produto final seja sempre o mais benéfico e satisfatório possível para o paciente. Temos ortodontistas em nossa equipe que já estão familiarizados e são experientes nos procedimentos pré, trans e pós-cirúrgicos.</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242834',
    height: height,
  },
  scroll: {
    width: '100%',
    height: '100%',
    bottom: '0%',
    position: 'absolute',
  },
  img: {
    width: '100%',
    height: 210,
    position: 'relative',
  },
  all: {

    backgroundColor: '#242834',
    width: '100%',
    alignItems: "center",
    height: 4900,
  },
  al2: {
    top: 20,
    backgroundColor: '#242834',
    width: '100%',
    height: '100%',
    alignItems: "center",
    height: 900,
    position: 'relative',
  },
  track: {
    backgroundColor: '#9fa75a',
    width: '20%',

    top: '0.5%',
    height: '0.3%',
    borderRadius: 20,
  },
  track2: {
    backgroundColor: '#9fa75a',
    width: '20%',
    left: '40%',
    top: '0.5%',
    height: '0.5%',
    borderRadius: 20,
  },
  track3: {
    backgroundColor: '#9fa75a',
    width: '20%',
    left: '40%',
    top: '2%',
    height: '0.5%',
    borderRadius: 20,
  },
  h1: {
    color: '#FFF',
    fontSize: 20,
    color: '#9fa75a',
    top: '1.4%',
    fontFamily: "PoppinsSemiBold",
    backgroundColor: '#242834',
    textAlign: 'center'
  },
  h12: {
    color: '#FFF',
    fontSize: 24,
    color: '#9fa75a',
    top: '1%',
    fontFamily: "PoppinsSemiBold",
    left: '27%',
  },

  h2: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '0%',
    width: '90%',
    top: '2%',
    fontFamily: "PoppinsRegular",
  },
  h23: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '0%',
    width: '90%',
    top: '3%',
    fontFamily: "PoppinsRegular",
  },
  h24: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '0%',
    width: '90%',
    top: '13%',
    fontFamily: "PoppinsRegular",
  },
  h3: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '0%',
    width: '90%',
    top: '4%',
    fontFamily: "PoppinsRegular",
  },
  h4: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '1%',
    fontFamily: "PoppinsRegular",
  },
  tecnica: {
    fontSize: 24,
    color: '#9fa75a',
    top: '12%',
    fontFamily: "PoppinsSemiBold",
    left: '24%',
  },
  tecnicah1: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '14%',
    fontFamily: "PoppinsRegular",
  },
  h5: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '1%',
    fontFamily: "PoppinsRegular",
  },
  duraçao: {
    fontSize: 22,
    color: '#9fa75a',
    top: '23%',
    fontFamily: "PoppinsSemiBold",
    left: '12%',
  },
  duraçaotrack: {
    backgroundColor: '#9fa75a',
    width: '20%',
    left: '40%',
    top: '3.2%',
    height: '0.5%',
    borderRadius: 20,
  },
  duraçaoh1: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '25%',
    fontFamily: "PoppinsRegular",
  },
  pos: {
    fontSize: 24,
    color: '#9fa75a',
    top: '9.5%',
    fontFamily: "PoppinsSemiBold",
    left: '27%',
  },
  postrack: {
    backgroundColor: '#9fa75a',
    width: '20%',
    left: '40%',
    top: '3%',
    height: '0.5%',
    borderRadius: 20,
  },
  posh1: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '10%',
    fontFamily: "PoppinsRegular",
  },
  foto: {
    height: 200,
    width: 370,
    top: 120,
  },
  foto2: {
    height: 120,
    width: 280,
    bottom: '-10%'
  },
  foto3: {
    height: 150,
    width: 90,
    bottom: '-12%',
  },
  bebida2: {
    width: 90,
    height: 90,
    left: '2%',
    top: '12.9%'
  },
  viewTabela:{
    //backgroundColor: 'red',
    width: '100%',
    height: 700,
    alignItems: 'center',
    marginTop: 710
  },
  tabela:{
    width: 300,
    height: 274,

},
});