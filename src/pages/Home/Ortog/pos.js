import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ScrollView, ImageBackground, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
function Link() {
  Linking.openURL('https://api.whatsapp.com/send?1=ptBR&phone=556133285806&text=Ol%C3%A1%2C%20Gostaria%20de%20marcar%20uma%20consulta!')
}

export default function Ortog() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#9fa75a'} />
      <ScrollView style={styles.scroll}>
        <View style={styles.divisaoPrincipal}>

          <Text style={styles.divisaoPrincipalh1}>Cuidados Pós-Operatórios em {'\n'} Cirurgia Ortognática</Text>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>1 - REPOUSO RIGOROSO, mantendo por 05 dias/noites a cabeça mais elevada que o restodo corpo (cabeceira a 45º)</Text>
            <View style={styles.viewImg}><Image source={require('./../../../../assets/Pos/cama.png')} style={styles.itemImg} /></View>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>2 . Aplique, IMEDIATAMENTE, compressas geladas na face sobre a região operada, utilizando vários sacos plásticos (um dentro do outro) com gelo picado, protegendo a pele com uma toalha fina, de algodão (pano de prato). As compressas de gelo deverão ser feitas da seguinte forma: 30 minutos de aplicação; seguidos obrigatoriamente de um período de descanso de 30 minutos; mais 30 minutos de aplicação... e assim por diante, durante 01 hora (01 ciclo). Estes ciclos devem ser repetidos pelo menos 06 vezes ao dia (06 horas de tratamento/dia), por 20 dias após a cirurgia. </Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>3 - Lubrifique os lábios (canto da boca) com VASELINA SÓLIDA durante as 24 horas do dia, até a completa cicatrização dos ferimentos provocados pelo afastamento durante a cirurgia.</Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>4 - CONVERSE O NECESSÁRIO; EVITE CUSPIR; NÃO FUME(!!!); NÃO TOME BEBIDAS ALCOÓLICAS e NÃO “ASSOE” O NARIZ (!!!) por, pelo menos, 30 (trinta) dias. A MASTIGAÇÃO, por mais leve que seja, está PROIBIDA durante, pelo menos, 60 (sessenta) dia</Text>
            <View style={styles.viewImg}><Image style={styles.itemImg} source={require('../../../../assets/Ortog/nao.png')} /></View>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>5 - Não fique “mordiscando” ou apertando os lábios ou a língua, pois poderá feri-los gravemente, sem se dar conta.</Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>6 - A ALIMENTAÇÃO deve ser LÍQUIDA ou PASTOSA por 60 dias (sorvetes, sucos não muito ácidos, água de côco, açaí, gelatinas, bananas amassadas, sopas, caldos, purês, vitaminas, leite, iogurtes, mingaus, alimentos batidos no liqüidificador, etc...) ; e FRIA ou GELADA por, pelo menos, 10 dias. Evite alimentos ácidos ou condimentados nos 04 primeiros meses. Evitar sucção forte com canudos, dando preferência ao uso das seringas descartáveis de 60ml. </Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>7 - HIGIENE ABSOLUTA e CUIDADOSA, sempre na frente do espelho, utilizando corretamente a escova de dentes, com as quantidades necessárias de gel dental MAXI-CONTROL (Bitufo) para uma boa escovação.</Text>
          </View>

          <View styles={styles.viewItem}>
            
            <Text style={styles.itemh1}>8 - Trinta minutos após a escovação dos dentes deve ser feito um SUAVE “bochecho” com PERIOGARD (sem álcool), utilizando 15 ml da solução pura, durante 01 minuto, pela manhã e principalmente À NOITE, por 15 dias. Não lavar a boca, não comer ou beber nada por quarenta minutos após esses “bochechos” (muito suaves!!!).</Text>
            <View style={styles.viewImg}><Image style={styles.itemImgColgate} source={require('../../../../assets/Ortog/peri.png')} /></View>
            
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>9 - Nenhum outro bochecho deve ser feito além daquele necessário para remover a espuma da pasta de dentes, o qual deve ser, também, extremamente suave. Bochechos fortes deslocam o coágulo sangüíneo dentro da cavidade cirúrgica, causando infecções. </Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>10 - Não se exponha prolongadamente ao sol ou a qualquer outra fonte de calor. Não tome banhos muito quentes por 15 dias. </Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>11 - NÃO DÊ OUVIDOS A QUALQUER CONSELHO DOMÉSTICO. O seu CIRURGIÃO-DENTISTA é o ÚNICO PROFISSIONAL capacitado a esclarecer suas dúvidas. Consulte-o!</Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>12 - É NORMAL um edema (inchaço) no pós-operatório, que irá começar a regredir a partir do 4° ou 5° dia.</Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>13 - Em caso de DOR FORTE ou FEBRE entre em contato com seu Cirurgião-Dentista o mais breve possível.</Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>14 - Em caso de HEMORRAGIA, pressione o local operado de forma ininterrupta por 40 minutos e procure o seu Cirurgião-Dentista ou o Hospital mais próximo. NÃO HÁ MOTIVO PARA PÂNICO, por mais assustador que seja o quadro apresentado. Porém, é importante um atendimento adequado tão logo quanto possível. </Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>15 - É NORMAL um sangramento pequeno nas primeiras noites do pós-operatório (principalmente pelo nariz) devido à posição horizontal assumida pelo paciente durante o sono. Nas narinas, pode-se instilar RINOSORO a 3% várias vezes ao dia. Manter a higiene nasal normalmente, MAS SEM ASSOAR O NARIZ, SOB NENHUMA HIPÓTESE. </Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>16 - A prescrição médica deve ser seguida à risca. Os horários das medicações devem ser rigorosamente respeitados. Disso depende a eficácia dos medicamentos. </Text>
          </View>

          <View styles={styles.viewItem}>
            <Text style={styles.itemh1}>17. NÃO INTERROMPA A MEDICAÇÃO sem antes falar com seu Cirurgião-Dentista. Exceção se faz nas situações de URGÊNCIA, como nas ALERGIAS. Nesse caso, suspenda a medicação por completo, dirija-se ao Hospital mais próximo e comunique imediatamente o Cirurgião-Dentista.</Text>
          </View>

          <View styles={styles.viewItem}>
            
            <Text style={styles.itemh1}>18. Lembre-se: o seu bem estar e o sucesso da cirurgia dependem muito dos seus cuidados.</Text>
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
  container: {
    backgroundColor: '#242834',
  },
  scroll: {
    width: '100%',
    
  },
  divisaoPrincipal: {
    width: '100%',
    
    height: 8000,
    padding: '5%',
  },
  divisaoPrincipalh1:{
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    color: '#9fa75a',
    textAlign: 'center'
  },
  itemImg:{
    width: 240,
    height: 180,
    alignItems: 'center',
  },
  itemImgColgate:{
    width: 220,
    height: 190,
    alignItems: 'center',
  },
  itemh1:{
    color: '#fff',
    fontFamily: "PoppinsRegular",
    textAlign: 'justify',
    fontSize: 17,

    paddingBottom: 40,
  },
  fotoButton: {
    width: 140,
    height: 140,
  },
  viewImg:{
    alignItems: 'center', 
    width: '100%',
    height: 200,
  },
  div9: {
    alignItems: 'center'
  },
  text: {
    right: '1.50%',
    top: '0%',
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
});