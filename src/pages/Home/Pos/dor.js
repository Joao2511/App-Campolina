import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, StatusBar, ImageBackground, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Link() {
  Linking.openURL('https://api.whatsapp.com/send?1=ptBR&phone=556133285806&text=Ol%C3%A1%2C%20Gostaria%20de%20marcar%20uma%20consulta!')
}


export default function Ortog() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}><StatusBar backgroundColor={'#9fa75a'} />
      <ImageBackground style={styles.img} source={require('../../../../assets/ImagemBase.jpg')} />

      <ScrollView style={styles.scroll}>

        <View style={styles.all}>
          <View style={styles.track}></View>
          <Text style={styles.h1}>Dor</Text>
          <Text style={styles.h2}>Um desconfotro é esperado. Alguns pacientes sentem mais dor e devem utilizar a medicação recomendada pelo cirurgião. Em caso de dor que não melhora com a medicação, entre em contato com o seu cirurgião.</Text>
          <TouchableOpacity style={styles.div9} onPress={Link}>
            <Image source={require('../../../../assets/Home/wpp.png')} style={styles.fotoButton} />
            <Text style={styles.text}>  Marcar consulta!</Text>
          </TouchableOpacity>
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
  },
  fotoButton: {
    width: 140,
    height: 140,
  },
  div9: {
    top: '7%',
    left: '0%',
    alignItems: 'center'
  },
  text: {
    right: '1.50%',
    top: '0%',
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
});