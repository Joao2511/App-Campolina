import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import 'localstorage-polyfill';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'
import { useState } from 'react';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const [nome, setNome] = useState("");
  const navigation = useNavigation();
  async function getData() {

    const response = await AsyncStorage.getItem("@App1")
    if (response) {
      setNome(response)
    }
    if (nome == "") {

    } else {
      navigation.navigate('Home')
    }
  }
  useEffect(() => {
    getData()
  }, [])


  return (

    <SafeAreaView style={styles.fundo}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      <ImageBackground
        source={require('../../../assets/TelaLogin/Doutor.jpg')}
        style={styles.imgBack}
        resizeMode='cover'
      >


        <Animatable.View style={styles.logo2}
          animation="fadeInUp">
          <Image
            source={require('./../../../assets/TelaLogin/Logo.png')}
            style={styles.logo}
          />
        </Animatable.View>

        <View style={styles.view1}>
          <Animatable.Text animation="fadeInUp" style={styles.texto}>Seja Bem Vindo</Animatable.Text>
        </View>

        <View style={styles.view2}>
          <Animatable.Text animation="fadeInUp" style={styles.texto2}>Vamos começar?</Animatable.Text>
        </View>

        <View style={styles.view3}>
          <Animatable.Text animation="fadeInUp" style={styles.texto3}>    O especialista em bucomaxilo{'\n'} mais qualificado para te atender</Animatable.Text>
        </View>




        <Animatable.View style={styles.pad}
          animation="fadeInUp">

        </Animatable.View>

        <Animatable.View
          animation="fadeInUp">

        </Animatable.View>




        <Animatable.View animation="fadeInUp" style={styles.view4}>
          <TouchableOpacity
            style={styles.proxBotao}
            onPress={() => navigation.navigate('Login2')}>
            <Text style={styles.texto4}>Próximo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAcao}
            onPress={() => navigation.navigate('Login2')
            }>
            <Image
              source={require('./../../../assets/TelaLogin/Botao.png')}
              style={styles.botao}
            />
          </TouchableOpacity>



          <Image
            source={require('./../../../assets/TelaLogin/formas.png')}
            style={styles.formas}
          />
        </Animatable.View>


      </ImageBackground>
    </SafeAreaView>
  )



}

const styles = StyleSheet.create({
  imgBack: {
    height: '100%',
    width: '100%',
  },
  fundo: {
    backgroundColor: '#242834',
    height: '100%',
  },
  texto: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: "PoppinsSemiBold",

  },
  texto2: {
    color: '#9fa75a',
    fontSize: 22,
    fontWeight: '500',
    fontFamily: "PoppinsMedium",
  },
  texto3: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '300',
    fontFamily: "PoppinsLight",
    textAlign: 'justify',
  },
  texto4: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: "PoppinsRegular",
  },
  botao: {
    height: 50,
    width: 50,

  },
  botaoAcao: {
    height: 50,
    width: 50,
    left: 110,
    top: 40,
  },
  formas: {
    width: 55,
    height: 7,
    left: 5,
    top: 10
  },
  pad: {
    left: 180,
  },
  logo: {
    height: 53,
    width: 230,
  },
  logo2: {
    left: 20,
    top: 20
  },
  proxBotao: {
    height: 30,
    width: 100,
    alignItems: 'center',
    top: 80,
    right: 100
  },
  img: {
    position: "relative",
    width: '100%',
    height: '100%',

  },
  image: {
    width: '100%',
    height: '100%',
  },
  view1: {
    alignItems: 'center',
    top: '60%'
  },
  view2: {
    top: '60%',
    alignItems: 'center',
  },
  view3: {
    alignItems: 'center',
    top: '60%',
  },
  view4: {
    alignItems: 'center',
    top: '55%'
  }
})