import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
const { height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable'
import reactDom from 'react-dom';


export default function Dr() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <StatusBar backgroundColor={'#9fa75a'} />

        <Animatable.View animation='bounceInLeft' style={styles.viewFoto}>
          <Image
            style={styles.fotoDoutor}
            source={require('../../../../assets/Dr/Doutor2.png')}
          />
          <Animatable.Text animation="fadeInUp" style={styles.textDr}> Dr.{'\n'}Gustavo{'\n'}Campolina</Animatable.Text>
          
        </Animatable.View>
        <View style={styles.view4}>
          <Animatable.Text animation="fadeInUp" style={styles.textCertificacao}>Certificações</Animatable.Text>
        </View>

        <View style={styles.view5}>
          <Animatable.Text animation="fadeInUp" style={styles.textCro}>CRO-DF Formação Graduado em Odontologia pela Universidade Paulista - Unidade Brasilia Especialista em Cirurgia e Traumatologia Bucomaxilofacial, ABO-DF 2012. Especialista em Implantodontia UNIP-DF 2010 Especialista em Ortodontia - HODOS - DF 2016 Mestre em Cirurgia e Traumatologia BucomaxiloFacial, Leopoldo Mandic- Campinas - SP Aperfeiçoamento de Tratamento da DTM - ARTROSCOPIA Aperfeiçoamento em Planejamento Virtual em Cor. Ortognatica Atuação Profissional INSTITUTO CAMPOLINA; CLINICA ESPECIALIZADA EM ODONTOLOGIA CIRURGICA. Cirurgião Bucomaxilofacial Hospital DAHER - LAGO SUL Participação como Monitor de pós-graduação do curso de Cirurgia Oral no Instituto Aria.</Animatable.Text>
        </View>

        <View >
          <Animatable.Text animation="fadeInUp" style={styles.textSobre}>Sobre Mim</Animatable.Text>
        </View>

        <View>
          <Animatable.Text animation="fadeInUp" style={styles.subTextSobre}>Me chamo Gustavo Campolina, tenho 37 anos e nasci em Brasília. Sou filho de pais dentistas e eles me incentivaram a seguir a profissão. Formei na UNIP e desde então tenho me aperfeiçoado cada vez mais na área de cirurgia. Hoje em dia faço muitos casos de cirurgia ortognática, extração de sisos e cirurgia em ATM, e graças aos cursos que fiz pelo Brasil afora, tenho tido resultados incríveis e pós operatórios cada vez melhores. Ser cirurgião é muito mais do que realizar a cirurgia em si... é dar conforto, atenção e zelo ao paciente. É devolver estética e função. É melhorar a qualidade de vida da pessoa que confiou no meu serviço. É dar o meu melhor todos os dias na minha profissão.</Animatable.Text>
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
    height: '100%',
    width: '100%',
  },
  view: {
    height: height,
    width: '100%',
    top: '2%',
  },
  textDr: {
    fontFamily: "PoppinsSemiBold",
    color: '#fff',
    fontSize: 24,
    left: 217,
    textAlign: 'center',
    position: 'absolute',
    top: 12
  },
  textGustavo: {
    fontFamily: "PoppinsSemiBold",
    color: '#fff',
    fontSize: 24,
    bottom: 210,
    left: 240,
    position: 'absolute',
  },
  textCampolina: {
    fontFamily: "PoppinsSemiBold",
    color: '#fff',
    fontSize: 24,
    position: 'absolute',
    top: '25%',
    left: 220
  },
  textCertificacao: {
    fontFamily: "PoppinsSemiBold",
    color: '#b3bc67',
    fontSize: 24,
    top: 20
  },
  textCro: {
    fontFamily: "PoppinsLight",
    color: '#fff',
    textAlign: 'justify',
  },
  textSobre: {
    fontFamily: "PoppinsSemiBold",
    color: '#b3bc67',
    fontSize: 24,
    textAlign: 'center',
  },
  subTextSobre: {
    fontFamily: "PoppinsLight",
    color: '#fff',
    textAlign: 'justify',
    padding: '5%',
    textAlign: 'justify',
    
  },
  fotoDoutor: {
    height: 300,
    width: 200,
  },
  viewFoto: {
    top: '0%',
    textAlign: 'center',
  },
  view1: {
    left: '0%',
    bottom: '0%',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  view2: {
    left: '25%',
    bottom: '63%',
    alignItems: 'center'
  },
  view3: {
    left: '25%',
    alignItems: 'center',
    bottom: '63%',
  },
  view4: {

    width: '100%',
    alignItems: 'center'
  },
  view5:{
    padding: '5%',
    alignItems: 'center'
  },
})