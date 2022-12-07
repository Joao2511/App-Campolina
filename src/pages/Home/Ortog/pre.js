import React from 'react';

import { View, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
function Link() {
  Linking.openURL('https://api.whatsapp.com/send?1=ptBR&phone=556133285806&text=Ol%C3%A1%2C%20Gostaria%20de%20marcar%20uma%20consulta!')
}

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
            <Text style={styles.view1h1}>Orientações Pré-Operatórias importantes para o dia da cirurgia</Text>
            <Text style={styles.view1h2}>{'\n'}1 - No dia da cirurgia, tome banho antes de ir ao hospital. Nesse banho, deve-se LAVAR e ESFREGAR MUITO BEM a CABEÇA (cabelo), o ROSTO e o PESCOÇO com xampú/sabonete e água em abundância.</Text>
            <View style={styles.viewVideo}><Image source={require('../../../../assets/Pos/banho.jpg')} style={styles.video} /></View>
          </View>

          <View style={styles.view2}>
            <Text style={styles.view1h2}>2 - Usar o fio dental e escovar muito bem os dentes. Fazer um bochecho com PERIOGARD em solução, sem diluir, por 01 (um) minuto. Cuspir o excesso. Não lavar a boca (por dentro) depois do bochecho.</Text>
            <View style={styles.viewVideo}><Image source={require('../../../../assets/Ortog/peri.png')} style={styles.image2} /></View>
          </View>

          <View style={styles.view3}>
            <Text style={styles.view1h2}>3 - Fazer 02 (duas) instilações profundas em cada narina (0,5 mg de cloridrato de oximetazolina) AFRIN/ ATURGYL nasal ADULTO, que, à semelhança do PERIOGARD, deve ser adquirido previamente na farmácia.</Text>
          </View>

          <View style={styles.view4}>
            <Text style={styles.view1h2}>4 - Retirar TODA a roupa, anéis, aliança, brincos, colares, piercings, etc. e colocar APENAS o avental cirúrgico fornecido pela equipe de enfermagem, antes de ir ao Centro Cirúrgico.</Text>
          </View>

          <View style={styles.view5}>
            <Text style={styles.view1h2}>5 - Informar o cirurgião e o/a anestesista do uso de quaisquer medicamentos que esteja fazendo uso atualmente, prescritos ou não pelo seu médico, descrevendo detalhadamente cada um desses remédios e suas respectivas dosagens.</Text>
          </View>

          <View style={styles.view6}>
            <Text style={styles.view1h2}>6 - NÃO COMER NEM BEBER NADA POR 08 (oito) HORAS ANTES DA CIRURGIA.</Text>
          </View>

          <View style={styles.view7}>
            <Text style={styles.view1h2}>7 - LEVAR TODOS OS EXAMES PRÉ OPERATÓRIOS.</Text>
          </View>

          <TouchableOpacity style={styles.div9} onPress={Link}>
            <Image source={require('../../../../assets/Home/wpp.png')} style={styles.fotoButton} />
            <Text style={styles.text}>  Dúvidas? Fale Conosco</Text>
          </TouchableOpacity>

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
    height: 450,
    alignItems: 'center',
  },
  view1h1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    color: '#9fa75a',
    textAlign: 'center'
  },
  view1h2: {
    color: '#fff',
    fontFamily: "PoppinsRegular",
    textAlign: 'justify',
    fontSize: 17,
  },
  viewVideo: {
    width: '100%',
    height: '90%',
    marginTop: '10%',
    alignItems: 'center'
  },
  video: {
    width: 260,
    height: 160,
    bottom: 20
  },
  view2: {
    top: 150,
    width: '100%',
    height: 1500,
  },
  image2: {
    height: 270,
    width: 130,
    bottom: 40
  },
  view3: {
    bottom: 850,
    width: '100%',
  },
  view4: {
    bottom: 820,
    width: '100%',
  },
  view5: {
    bottom: 800,
    width: '100%',
  },
  view6: {
    bottom: 780,
    width: '100%',
  },
  view7: {
    bottom: 760,
    width: '100%',
  },
  text:{
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  }, 
  div9: {
    alignItems: 'center',
    bottom: 700
  },
  fotoButton: {
    width: 140,
    height: 140,
  },
});