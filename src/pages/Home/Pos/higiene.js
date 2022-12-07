import React from 'react';
import { View, SafeAreaView, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Ortog() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}><StatusBar backgroundColor={'#9fa75a'} />
      <ImageBackground style={styles.img} source={require('../../../../assets/ImagemBase.jpg')} />

      <ScrollView style={styles.scroll}>

        <View style={styles.all}>
          <View style={styles.track}></View>
          <Text style={styles.h1}>Higiene Oral</Text>
          <Text style={styles.h2}>Escovar os dentes será trabalhoso nas primeiras semanas, mas é necessario uma higiene oral bem rigorosa para prevenir infecções. Você vai sentir dificuldade para usar sua escova de dente, então use uma escova menor com cerdas muito macias. Por causa do inchaço você pode sentir dificuldade de colocar a escova dentro da boca, então, com o dedo, afaste a bochecha e coloque a escova dentro da boca; durante o vai e vem com a escova faça o movimento bem devagar, sem força, mas é importante que alcance os dentes do fundo. Enxague bem com água e após, faça bochechos com antisséptico bucal várias vezes ao dia.</Text>
          <Image style={styles.images} source={require('../../../../assets/Pos/Dentes.png')} />
          
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
  images: {
    width: 320,
    height: 140,
    top: '5%'
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
    top: '5.5%',
    borderTopRightRadius: 21,
    borderTopLeftRadius: 21,
    backgroundColor: '#242834',
    width: '100%',
    alignItems: "center",
    height: 1150,
    position: 'relative',
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
    height: '0.7%',
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
    top: '4%',
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
  }
});