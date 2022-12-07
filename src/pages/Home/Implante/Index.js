import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Ortog() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#9fa75a'} />
      <ScrollView style={styles.scroll}>
        <View style={styles.divisaoPrincipal}>
          <View style={styles.view1}>
            <Text style={styles.view1h1}>O que é Implante?</Text>
            <Text style={styles.view1h2}>O implante dentário é fabricado a partir de titânio comercialmente puro, apresentando formato cilíndrico ou cônico. Tem sua aplicação clínica na substituição de elementos dentários perdidos devido a cárie, doença periodontal, trauma ou tumores.</Text>
            <View style={styles.viewFoto}> 
              <Image source={require('./../../../../assets/implante/implante1.jpg')} style={styles.foto} />
            </View>
          </View>
          <View style={{marginTop: 60}}>
            <View style={styles.view2}><Text style={styles.view2h2}>Cirurgia</Text></View>
            <View>
              <Text style={styles.view1h2}>{'\n'}A cirurgia consiste em introduzir o implante no interior do osso na região onde houve a perda dentária. O implante irá fazer o papel da raiz dentária e a prótese será parafusada no interior do mesmo. O objetivo é devolver a capacidade de mastigação, buscando melhorar a estética, confiança e a qualidade de vida dos pacientes.</Text>
              <Text style={styles.view1h2}>{'\n'}Para que haja a determinação do melhor implante a ser realizado, bem como a necessidade ou não de enxertia, o paciente deve realizar uma tomografia da região onde se deseja instalá-lo.</Text>
              <View style={styles.viewFoto2}><Image source={require('../../../../assets/implante/implante.jpg')} style={styles.foto} /></View>
            </View>
          </View>
          <View>
            <Text style={styles.view1h2}>Seguimos os protocolos que apresentam os melhores índices de sucesso baseado sempre no que existe de mais moderno no mundo. As cirurgias são realizadas em ambiente ambulatorial, com anestesia local e duração de, aproximadamente, 40 a 50 minutos.{'\n'}{'\n'}No pós-operatório, o paciente deve tomar analgésicos em caso de dor, manter a região bem higienizada e evitar alimentos muito quentes e/ou duros na região nos dias iniciais.{'\n'}</Text>
          </View>
          <View>
            <Text style={styles.viewAlerta}>AS TAXAS DE SUCESSO SÃO DE MAIS DE 98% NAS INSTALAÇÕES DOS IMPLANTES!</Text>
          </View>
          <View>
            <Text style={styles.view1h2}>{'\n'}O Instituto Campolina oferece um tratamento diferenciado baseado nas condições clínicas de cada paciente, com o objetivo de maximizar os resultados. Existe grande oferta de tratamentos na atualidade que não proporcionam resultados ótimos aos pacientes.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242834',
  },
  scroll: {
    width: '100%',
  },
  divisaoPrincipal:{
    padding: '5%',
    width: '100%',
    height: 2500,
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

    fontFamily: "PoppinsSemiBold",

  },
  h2: {
    color: '#FFF',

    fontSize: 17,

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
    top: '4%',
    fontFamily: "PoppinsRegular",
  },
  tecnicah1: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '8%',
    fontFamily: "PoppinsRegular",
  },
  h5: {
    color: '#9af75a',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '9.5%',
    fontFamily: "PoppinsSemiBold",
  },
  duraçao: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '12%',
    fontFamily: "PoppinsRegular",
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
  bebida2: {
    height: 200,
    width: '90%',
    top: '6%'
  },
  viewFoto: {
    height: 400,
    alignItems: 'center',
    width: '100%',
    paddingTop: '3.5%'
  },
  viewFoto2: {
    height: 300,
    alignItems: 'center',
    width: '100%',
    paddingTop: '10%'
  },
  foto:{
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
    height: 45,
    alignItems: 'center',
    bottom: 10
  },
  view2h2:{
    color: '#FFF',
    fontSize: 24,
    color: '#9fa75a',
    fontFamily: "PoppinsSemiBold",
  },
  viewAlerta:{
    color: 'green',
    fontFamily: "PoppinsLight",
    textAlign: 'justify',
    fontSize: 18,
  },
});