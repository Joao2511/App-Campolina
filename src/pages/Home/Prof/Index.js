import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Prof() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#9fa75a'} />
      <ScrollView style={styles.scroll}>
        <View style={styles.divisoria1}>
          <Image style={styles.imgDoutor} source={require('../../../../assets/Doutor.jpg')} />
          <View style={styles.divisoria2}>

            <Text style={styles.nome}>Dr. Gustavo Campolina</Text>
            <Text style={styles.codigo}>CRO-DF 8305</Text>
            <Text style={styles.info}>Formação Graduado em Odontologia pela Universidade Paulista - Unidade Brasilia Especialista em Cirurgia e Traumatologia Bucomaxilofacial, ABO-DF 2012. Especialista em Implantodontia UNIP-DF 2010 Especialista em Ortodontia - HODOS - DF 2016 Mestre em Cirurgia e Traumatologia BucomaxiloFacial, Leopoldo Mandic- Campinas - SP Aperfeiçoamento de Tratamento da DTM - ARTROSCOPIA Aperfeiçoamento em Planejamento Virtual em Cor. Ortognatica Atuação Profissional INSTITUTO CAMPOLINA; CLINICA ESPECIALIZADA EM ODONTOLOGIA CIRURGICA. Cirurgião Bucomaxilofacial Hospital DAHER - LAGO SUL Participação como Monitor de pós-graduação do curso de Cirurgia Oral no Instituto Aria.</Text>

          </View>
        </View>
        <View style={styles.divisoria}>
          <Image style={styles.imgEsquerda} source={require('../../../../assets/Prof/douglas.jpg')} />
          <View style={styles.divisoria2}>

            <Text style={styles.nome}>Dr. Douglas Rangel Goulart</Text>
            <Text style={styles.codigo}>CRO-DF 9672</Text>
            <Text style={styles.info}>Graduação em odontologia -UNB Especialista em Cirurgia e traumatologia bucomaxilofacial Mestre e Doutor em Clínica Odontológica - Área de Cirurgia bucomaxilofacial FOP-UNICAMP Habilitado em sedação consciente com óxido nitroso Professor coordenador do curso de cirurgia bucal e sedação consciente do Instituto Aria Cirurgião dentista da fundação hemocentro de Brasília </Text>

          </View>
        </View>
        <View style={styles.divisoria}>
          <Image style={styles.imgElisa} source={require('../../../../assets/Prof/elisa.jpg')} />
          <View style={styles.divisoria2}>

            <Text style={styles.nome}>Dra. Elisa Candida Braga</Text>
            <Text style={styles.codigo}>CRO-DF 9672</Text>
            <Text style={styles.info}>Graduada Universidade Católica de Brasília em 2011.
              Residência em Cirurgia e Traumatologia Bucomaxilofaciaal Santa Casa de Valinhos em 2015.
              Especialização em Implantodontia IBPG em 2017.
              Habilitação em Laserterapia ABO-DF em 2021.
              Habilitação em sedação consciente com óxido nitroso em 2022.
              Capacitação de cirurgia de Remoção de Corpo adiposo da bochecha em 2012.
              Mestranda em Cirurgia Bucomaxilofacial São Leopoldo Mandic - SP.</Text>

          </View>
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
    height: height,
    width: '100%',
  },
  divisoria: {
    width: '100%',
    height: '33.3333333333333%',
    alignItems: 'center',
    backgroundColor: '#242834',
  },
  divisoria1: {
    width: '100%',
    height: '33%',
    alignItems: 'center',
    top: '1%',
    backgroundColor: '#242834',
  },
  divisoria2: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#242834',
    top: '-25%',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  imgEsquerda: {
    width: 350,
    height: 600,
    top: '-7%',
    borderRadius: 20,
  },
  imgElisa: {
    width: 350,
    height: 600,
    top: '-22%',
    borderRadius: 20,
  },
  imgDoutor: {
    width: 350,
    height: 600,
    top: '1%',
    borderRadius: 20,
  },
  nome: {
    color: '#9fa75a',
    top: '1%',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
  },
  codigo: {
    color: '#9fa75a',
    bottom: '0%',
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
  },
  info: {
    textAlign: 'justify',
    bottom: '0%',
    width: '85%',
    color: '#FFF',
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
  },
});