import 'localstorage-polyfill';

import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image, TextInput, StatusBar, KeyboardAvoidingView, Dimensions, Button, Platform, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import date from 'date-and-time';

export default function Login2() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  var [data, setData] = useState("");

  async function irNome() {
    if (nome == "" || nome == null) {
      alert('Por favor insira o nome e data de nascimento')

    } else {
      await AsyncStorage.setItem("@App1", nome)

      getData()

    }

  };
  async function getData() {
    const response = await AsyncStorage.getItem("@App1")
    if (response) {
      setNome(response)
    }
    if (response == "" || response == null) {


    } else {
      navigation.navigate('Home')



    }
  }
  useEffect(() => {
    getData()
  }, [])



  const [cell, setCell] = useState('');
  

  return (
    <SafeAreaView>



      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground
        source={require('./../../../assets/TelaLogin/Login2/Mateus.jpg')}
        style={styles.imgBack}
        resizeMode='cover'>
        <KeyboardAvoidingView behavior='padding' style={{ height: '100%' }}>


          <View style={styles.logo2}>
            <Image
              source={require('./../../../assets/TelaLogin/Logo.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.view1}>
            <Text style={styles.estiloText}>Insira seus dados{'\n'}para darmos continuidade {'\n'}ao seu tratamento</Text>
          </View>

          <View style={styles.view2}>
            <TextInput placeholderTextColor={'#fff'}
             placeholder="         Nome" value={nome} onChangeText={nome => setNome(nome)}
             style={styles.input}
            />
          </View>

          <View style={styles.view3}>
            <TextInputMask
              style={styles.input}
              type='datetime'
              options={{
               format: 'DD/MM/YYYY'
             }}
              value={cell}
              onChangeText={text => setCell(text)}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"#fff"} 
            />
          </View>

          <View style={styles.view4}>
           <TouchableOpacity style={styles.botao}
              onPress={irNome}>
              <Text style={styles.botaoTxt}>Começar</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

      </ImageBackground>

    </SafeAreaView>


  )
}
const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  imgBack: {
    height: '100%',
    width: '100%',

  },
  logo: {
    height: 53,
    width: 230,
  },
  logo2: {
    left: 20,
    top: 50
  },
  estiloText: {
    color: '#fff',
    fontFamily: "PoppinsMedium",
    fontSize: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#9fa75a',
    width: 280,
    marginBottom: '5%',
    fontSize: 24,
    fontFamily: "PoppinsLight",
    borderRadius: 50,
    height: 70,
    bottom: '-46.7%',
    paddingLeft: 30,
    alignSelf: 'center',
    color: '#fff'
  },
  input2: {
    backgroundColor: '#9fa75a',
    width: 280,
    marginBottom: '5%',
    fontSize: 20,
    fontFamily: "PoppinsLight",
    borderRadius: 50,
    height: 70,
    bottom: '-46.7%',
    paddingLeft: 27,
    alignSelf: 'center',
    color: '#fff'
  },
  botao: {
    backgroundColor: '#9fa75a',
    width: 280,
    marginBottom: '5%',
    borderRadius: 50,
    height: 70,
    bottom: '-47%',
    paddingLeft: 27,
    alignSelf: 'center',
  },
  botaoTxt: {
    color: '#FFF',
    fontSize: 25,
    fontFamily: "PoppinsMedium",
    paddingLeft: 45,
    bottom: '-20%',
  },
  dateComponente: {
    width: 280,
  },
  view1:{
    top: 350,
  },
  view2:{
    alignItems: 'center',
    top: 330
  },
  view3:{
    alignItems: 'center',
    top: 340
  },
  view4:{
    alignItems: 'center',
    top: 350,
  }
})