Paleta de cores:
Verde pirncipal: #9fa75a
Azul escuro: #242834
Bege: #5e5c5a
Branco: #ffffff
vermelho: #c23234
Pos operatorio : cuidados V, dieta V  repouso V
cirurgia ortognatica :  home V ; o que é V ; pré operatorio V ; pos operatorio V
implante: V
siso incluso: home V  ; pos operatorio V  ;
profissionais

copiar Tecnica cirurgica e arrumar a cirurgia







import React from 'react';
import { View, SafeAreaView, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Ortog() {
const navigation = useNavigation();  
 return (
   <SafeAreaView style={styles.container}><StatusBar backgroundColor={'#9fa75a'}/>
    

      <ScrollView style={styles.scroll}>
      
      <View style={styles.all}>
        <View style={styles.track}></View>
        <Text style={styles.h1}>Cirurgia</Text>
        <Text style={styles.h2}>A cirurgia pode ter duração entre 60 e 90 minutos, dependendo da complexidade e da quantidade de dentes a serem removidos. É realizada com auxílio de equipamentos modernos, anestesia com drogas anestésicas de longa duração e com técnicas operatórias precisas, onde o trauma cirúrgico é o menor possível e a recuperação pós operatória é bastante tranquila.</Text>
        <View>
          <Image source={require('./../../../../assets/siso/doutor1.jpg')} style={styles.foto}/>
        </View>
        <Text style={styles.h3}>Dependendo do posicionamento dos seus sisos e do nível de complexidade, a extração desses dentes pode ser feita tanto no nosso consultório quanto no centro cirúrgico. É importante avaliar junto ao Doutor alguns fatores para que a melhor decisão seja tomada.</Text>
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
  scroll:{
    width: '100%',
    height: '100%',
    bottom: '0%',
    position: 'absolute',
  },
  img:{
    width: '100%',
    height: 210,
    position: 'relative',
  },
  all:{
    top: '5.5%',
    borderTopRightRadius: 21,
    borderTopLeftRadius: 21,
    backgroundColor: '#242834',
    width: '100%',
    alignItems:"center",
    height: 1150,
    position: 'relative',
  },
  al2:{
    top: 20,
    backgroundColor: '#242834',
    width: '100%',
    height: '100%',
    alignItems:"center",
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
    top: '10%',
    fontFamily: "PoppinsRegular", 
  },
  h4:{
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
  h5:{
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '1%',
    fontFamily: "PoppinsRegular", 
  },
  duraçao:{
    fontSize: 22,
    color: '#9fa75a',
    top: '23%',
    fontFamily: "PoppinsSemiBold",
    left: '12%',
  },
  duraçaotrack:{
    backgroundColor: '#9fa75a',
    width: '20%',
    left: '40%',
    top: '3.2%',
    height: '0.5%',
    borderRadius: 20,
  },
  duraçaoh1:{
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '25%',
    fontFamily: "PoppinsRegular", 
  },
  pos:{
    fontSize: 24,
    color: '#9fa75a',
    top: '9.5%',
    fontFamily: "PoppinsSemiBold",
    left: '27%',
  },
  postrack:{
    backgroundColor: '#9fa75a',
    width: '20%',
    left: '40%',
    top: '3%',
    height: '0.5%',
    borderRadius: 20,
  },
  posh1:{
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '5%',
    width: '90%',
    top: '10%',
    fontFamily: "PoppinsRegular", 
  },
  foto:{
    height: 350,
    width: '90%',
  },
  view1:{

  }
});