import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../Login/Index'
import Login2 from '../Login2/Index'
import Home from '../Home/Index'
import Clinica from '../Home/Clinica/Index'
import Dr from '../Home/Dr/Index'
import DTM from '../Home/DTM/Index'
import Implante from '../Home/Implante/Index'
import Ortog from '../Home/Ortog/Index'
import Pos from '../Home/Pos/Index'
import Prof from '../Home/Prof/Index'
import Siso from '../Home/Siso/Index'

import oque from '../Home/Ortog/oque'
import duracao from '../Home/Ortog/duracao'
import pre from '../Home/Ortog/pre'
import pos from '../Home/Ortog/pos'
import tecnica from '../Home/Ortog/tecnica'
import principal from '../Home/Ortog/principal'

import principalDTM from '../Home/DTM/principalDTM'
import tecnicaDTM from '../Home/DTM/tecnicaDTM'
import preDTM from '../Home/DTM/preDTM'
import oqueDTM from '../Home/DTM/oqueDTM'

import abertura from '../Home/Pos/abertura'
import cuidados from '../Home/Pos/cuidados'
import dieta from '../Home/Pos/dieta'
import dor from '../Home/Pos/dor'
import higiene from '../Home/Pos/higiene'
import repouso from '../Home/Pos/repouso'
import orientacoes from '../Home/Pos/orientacoes'

import cirurgiaSiso from '../Home/Siso/cirurgiaSiso'
import oqueSiso from '../Home/Siso/oqueSiso'
import tecnicaSiso from '../Home/Siso/tecnicaSiso'
import preSiso from '../Home/Siso/preSiso'

const Stack = createNativeStackNavigator();


export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal"
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login2"
        component={Login2}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Clinica"
        component={Clinica}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Dr"
        component={Dr}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DTM"
        component={DTM}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Implante"
        component={Implante}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Ortog"
        component={Ortog}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Pos"
        component={Pos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Prof"
        component={Prof}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Siso"
        component={Siso}
        options={{ headerShown: false }}
      />





      <Stack.Screen
        name="oque"
        component={oque}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="duracao"
        component={duracao}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="pos"
        component={pos}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="pre"
        component={pre}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="principal"
        component={principal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tecnica"
        component={tecnica}
        options={{ headerShown: false }}
      />





      <Stack.Screen
        name="oqueDTM"
        component={oqueDTM}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="preDTM"
        component={preDTM}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="principalDTM"
        component={principalDTM}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="tecnicaDTM"
        component={tecnicaDTM}
        options={{ headerShown: false }}
      />






      <Stack.Screen
        name="abertura"
        component={abertura}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="cuidados"
        component={cuidados}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="dieta"
        component={dieta}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="dor"
        component={dor}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="higiene"
        component={higiene}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="repouso"
        component={repouso}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="orientacoes"
        component={orientacoes}
        options={{ headerShown: false }}
      />






      <Stack.Screen
        name="oqueSiso"
        component={oqueSiso}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="preSiso"
        component={preSiso}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="tecnicaSiso"
        component={tecnicaSiso}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="cirurgiaSiso"
        component={cirurgiaSiso}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}