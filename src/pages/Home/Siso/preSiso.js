import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Ortog() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}><StatusBar backgroundColor={'#9fa75a'} />


      <ScrollView style={styles.scroll}>

        <View style={styles.all}>

          <Text style={styles.h1}>Pós Operatório</Text>
          <Text style={styles.h2}>Após extrair seus sisos é importante que você fique em repouso (não faça atividades físicas/não faça força/não pegue peso). Isso evitará que seu rosto fique inchado. Além disso, manter o local bem higienizado é fundamental para evitar que infeccione, por isso, escove os dentes e o local dos pontos.</Text>
          <Image source={require('./../../../../assets/siso/descanço.png')} style={styles.foto} />
          <Text style={styles.h23}>Escovar os dentes será trabalhoso nas primeiras semanas, mas é necessario uma higiene oral bem rigorosa para prevenir infecções. Você vai sentir dificuldade para usar sua escova de dente, então use uma escova menor com cerdas muito macias. Por causa do inchaço você pode sentir dificuldade de colocar a escova dentro da boca, então, com o dedo, afaste a bochecha e coloque a escova dentro da boca; durante o vai e vem com a escova faça o movimento bem devagar, sem força, mas é importante que alcance os dentes do fundo. Enxague bem com água e após, faça bochechos com antisséptico bucal várias vezes ao dia.</Text>
          <Image source={require('../../../../assets/Pos/Dentes.png')} style={styles.foto2} />
          <Text style={styles.h24}>Nos primeiros dias:{'\n'} - Dieta líquida fria (Sopa batida de legumes, verduras, cereais e carne pelo menos 2 vezes ao dia);{'\n'}- Procure beber bastante líquido (Água, sucos, água de coco) cerca de 1,5 litros/dia;{'\n'} -Preparações com leite (Achocolatado, leite com frutas, mingau ralo) ou suplementos de 2 a 3 vezes por dia.{'\n'}{'\n'}</Text>
          <Image source={require('./../../../../assets/vector/bebida.png')} style={styles.foto3} />
          <Text style={styles.h24}>Se você sentir dificuldade em utilizar o canudo, pode usar um copinho de café, uma colher ou uma seringa para auxiliar a colocar os líquidos dentro da boca para engolir.</Text>
          <Image source={require('./../../../../assets/vector/bebida2.png')} style={styles.bebida2} />
          <Text style={styles.h24}>Procure respeitar a aceitação do seu corpo com a quantidade de comida e lembre-se de comer em 3 em 3 horas.</Text>
          <Text style={styles.h24}>Depois do período de dieta liquida, você deve passar para pastosa liquida (como a papinha de bebê) por 2 a 3 semanas; depois pastosa com mais consistência (alimentos amassados) por 2 a semanas; e dieta com alimentos sólidos macios (que não exigem força para morder) por 2 a 3 semanas; e em 90 dias Você estará comendo alimentos com a mesma consistência de antes da cirurgia.</Text>
          <View style={styles.viewTabela}><Image source={require('./../../../../assets/Pos/Tabela.png')} style={styles.tabela} /></View>


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

    backgroundColor: '#242834',
    width: '100%',
    alignItems: "center",
    height: 4900,
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
    height: '0.3%',
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
    top: '2%',
    fontFamily: "PoppinsRegular",
  },
  h23: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '0%',
    width: '90%',
    top: '4%',
    fontFamily: "PoppinsRegular",
  },
  h24: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 17,
    left: '0%',
    width: '90%',
    top: '13%',
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
  foto: {
    height: 200,
    width: 370,
    top: '2%'
  },
  foto2: {
    height: 120,
    width: 280,
    bottom: '-8%'
  },
  foto3: {
    height: 150,
    width: 90,
    bottom: '-12.3%',
  },
  bebida2: {
    width: 90,
    height: 90,
    left: '2%',
    top: '12.9%'
  },
  viewTabela: {
    //backgroundColor: 'red',
    width: '100%',
    height: 700,
    alignItems: 'center',
    marginTop: 710
  },
  tabela: {
    width: 300,
    height: 274,

  },
});