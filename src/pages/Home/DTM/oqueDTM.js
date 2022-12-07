import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, StatusBar, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
const { height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable'
import reactDom from 'react-dom';


export default function Dr() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}><StatusBar backgroundColor={'#9fa75a'} />
      <ImageBackground style={styles.img} source={require('../../../../assets/ImagemBase.jpg')} />

      <ScrollView style={styles.scroll}>
        <View style={styles.divisao}>

          <View style={styles.view1}>
            <Text style={styles.view1h1}>O que é DTM?</Text>
            <Text style={styles.view1h2}>Existem diversos tipos de tratamentos para as Disfunções Temporomandibulares (DTM). Antes de instituir um determinado tratamento é preciso diagnosticar a causa para que os resultados não sejam imprevisíveis.</Text>
            <View style={styles.viewFoto}>
              <Image source={require('./../../../../assets/dtm/veia.jpeg')} style={styles.foto} />
            </View>
          </View>
          <View style={styles.view2}>
            <View style={styles.viewt}><Text style={styles.view2h2}>Os exames clínicos e de imagem, tais como as radiografias panorâmicas, tomografias e ressonância magnéticas, são de extrema importância.</Text></View>
            <View style={styles.viewFoto}>
              <Image source={require('./../../../../assets/dtm/raiox.jpg')} style={styles.foto2} />
            </View>
          </View>
        </View>


      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242834',
    flex: 1,
  },
  scroll: {
    height: 900,
    width:'100%',
  },
  divisao:{
    
    padding: '5%',
  },
  viewFoto: {
    height: 400,
    alignItems: 'center',
    width: '100%',
    paddingTop: '10%'
  },
  foto:{
    height: 200,
    width: 340,
  },

  foto2:{
    height: 200,
    width: 340,
    
  },
  view1:{
    width: '100%',
    height: 419,
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
    fontFamily: "PoppinsLight",
    textAlign: 'justify',
    
  },
  view2:{
    width: '100%',
    height: 450,
    //backgroundColor: 'red',
   
    alignItems: 'center',
    
  },
  view2h2:{
    color: '#fff',
    fontFamily: "PoppinsLight",
    textAlign: 'justify',
    width: '100%',
    height: '100%',
    marginTop: '10%',
    
  },
  viewt:{
    width: '100%',
    height: 120,
    //backgroundColor: 'red',

    alignItems: 'center',
    
  },
})