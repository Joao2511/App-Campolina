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
              <Text style={styles.view1h1}>Quem Somos</Text>
              <Text style={styles.view1h2}>O Instituto Campolina de Cirurgia BucoMaxiloFacial, em Brasilia, conta com uma equipe multidisciplinar para atendimento de casos de alta complexidade. Com profissionais especializados e sob a direção clínica do Dr. Gustavo Campolina, contamos ainda com tecnologia de ponta, que permite refinamento nos resultados pós-cirúrgicos com melhor recuperação de nossos pacientes.</Text>
              <Video
                  ref={video}
                  style={styles.video}
                  source={{ uri: "https://video.wixstatic.com/video/164f35_a9758c975bd0476a8a74179b4b21198b/720p/mp4/file.mp4" }}
                  resizeMode="contain"
                  isLooping
                  shouldPlay/>
            </View>
            <View style={styles.view2}>
              <View style={styles.viewDepoimentos}>
                <Text style={styles.viewDepoimentosh1}>Depoimentos</Text>
              </View>

              <View style={styles.dep}>

                <View style={styles.viewTop}>
                  <Image style={styles.imgFtPerfil1} source={require('../../../../assets/Clínica/moça1.jpg')}/>
                  <Text style={styles.h4}>Juliana Paiva Oliveira</Text>
                </View>

                <Text style={styles.h5}>Gostaria de deixar registrado aqui, o quanto o Dr Gustavo mudou a minha vida antes da ortognatica, eu tinha vergonha de sorrir tirar fotos nunca quis…mal conversa com as pessoas tímida! Até isso a ortognatica mudou eu fiquei menos tímida tirando mil Fotos por dia, hoje eu sou muito mais feliz! A Ortognatica é uma cirurgia difícil com recuperação lenta, mais eu faria tudo de novo, o Dr Gustavo foi peça fundamental pq ele transmite segurança, atencioso um profissional que vc pode confiar de olhos fechados q tenho certeza que ele vai dar o melhor dele, muito transparente com tratamento não enrola! Resumindo rsrs o melhor cirurgião dentista.{'\n'}Obrigada por tudo Dr Gustavo! Abraço, Ju</Text>
              
              </View>

              <View style={styles.dep}>


                <View style={styles.viewTop}>
                  <Image style={styles.imgFtPerfil1} source={require('../../../../assets/Clínica/lainy.jpg')}/>
                  <Text style={styles.h4}>Lainy Bembem</Text>
                </View>
                

                <Text style={styles.h5}>Me chamo Lainy Bembem, fiz a cirurgia Ortognática com o Dr. Gustavo Campolina, quero compartilhar com você minha experiência, sentia fortes dores de cabeça, estalos no maxilar, fala prejudicada, problemas com a respiração e não era satisfeita com meu sorriso, após as cirurgias estou muito satisfeita com o resultado, tive uma boa recuperação e a escolha do profissional é algo muito importante, por isso recomendo o Dr. Gustavo Campolina pois ele é um excelente profissional, humano, competente, prestativo e além disso ele é ético e bastante cauteloso. Após as cirurgias tive resultados funcionais e estético, não sinto mais dores de cabeças, não existe mais o estalo, tenho uma respiração melhor e o sorriso que sempre sonhei. Obrigada Dr. por todo o acompanhamento pré e pós-cirúrgico!Os dentes mudam o sorriso, o sorriso muda a face. A face muda a expressão e a expressão muda a vida!</Text>
              
              </View>

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
  principalView:{
    //backgroundColor: 'red',
    width: '100%',
    padding: '5%',
  },
  view1:{
    width: '100%',
    height: 450,
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
  video:{
    width: '100%',
    height: '60%',
  },
  view2:{
    //backgroundColor: 'red',
    paddingBottom: 20,
    width: '100%',
    top: '10%',
    height: 1500,
    
  },
  viewDepoimentos:{
    //backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',

  },
  viewDepoimentosh1:{
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
  },
  dep:{
    //backgroundColor: 'red',
    marginTop: 30,
  },
  imgFtPerfil1:{
    borderRadius: 6,

  },
  h4:{
    bottom: 45, 
    left: 90,
    color: '#fff',
    fontFamily: "PoppinsMedium",
    fontSize: 18,
  },
  viewTop:{
   
    width: '100%',
    height: 90,
  },
  h5: {
    textAlign: 'justify',
    color: '#fff',
    fontFamily: "PoppinsLight",


  },

});
/*
          <View style={styles.depoimentos}>

            <View style={styles.juView}>
              
            </View>

          </View>

          <View style={styles.depoimentos}>
            <Image style={styles.imgFtPerfil1} source={require('../../../../assets/Clínica/lainy.jpg')}/>
            <View style={styles.juView}>
              <Text style={styles.h4}>Lainy Bembem</Text>
            </View>
            <Text style={styles.h5}>Me chamo Lainy Bembem, fiz a cirurgia Ortognática com o Dr. Gustavo Campolina, quero compartilhar com você minha experiência, sentia fortes dores de cabeça, estalos no maxilar, fala prejudicada, problemas com a respiração e não era satisfeita com meu sorriso, após as cirurgias estou muito satisfeita com o resultado, tive uma boa recuperação e a escolha do profissional é algo muito importante, por isso recomendo o Dr. Gustavo Campolina pois ele é um excelente profissional, humano, competente, prestativo e além disso ele é ético e bastante cauteloso. Após as cirurgias tive resultados funcionais e estético, não sinto mais dores de cabeças, não existe mais o estalo, tenho uma respiração melhor e o sorriso que sempre sonhei. Obrigada Dr. por todo o acompanhamento pré e pós-cirúrgico!Os dentes mudam o sorriso, o sorriso muda a face. A face muda a expressão e a expressão muda a vida! </Text>
          </View>


  h1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
    color: '#9fa75a',
  },
  h3: {
    fontFamily: 'PoppinsSemiBold',

    fontSize: 24,
    color: '#9fa75a',

  },
  h4: {
    color: '#fff',
    fontFamily: "PoppinsMedium",
    fontSize: 22,
  },
  h5: {

    color: '#fff',
    fontFamily: "PoppinsLight",


  },
*/         