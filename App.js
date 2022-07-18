import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SRadd from './Pantallas/SRadd';
import SRread from './Pantallas/SRread';
import SRupdate from './Pantallas/SRupdate';
import SRdelete from './Pantallas/SRdelete';

const styles = StyleSheet.create({
  Boton: {
    margin: 10,
    minWidth: "80%",
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function HomeScreen({ navigation }) {
  return (
    <View
    style={styles.container} >

      <View  style={styles.Boton}>
      <Button
        title="Agregar Información"
        color="#0114F0"
        onPress={() => navigation.navigate('Agregar')}
      />
      </View>

      <View  style={styles.Boton}>
      <Button
        title="Leer Información"
        color="#0114F0"
        onPress={() => navigation.navigate('Leer')}
      />
      </View>

      <View  style={styles.Boton}>
      <Button
        title="Actualizar Información"
        color="#0114F0"
        onPress={() => navigation.navigate('Actualizar')}
      />
      </View>

      <View  style={styles.Boton}>
      <Button
        title="Eliminar Información"
        color="#0114F0"
        onPress={() => navigation.navigate('Eliminar')}
      />
      </View>

    </View>
  );
}


function AddScreen({ navigation }) {
  return (
    <SRadd/>
  );
}

function ReadScreen({ navigation }) {
  return (
    <SRread/>
  );
}

function UpdateScreen({ navigation }) {
  return (
    <SRupdate/>
  );
}

function DeleteScreen({ navigation }) {
  return (
    <SRdelete/>
  );
}

const Stack = createNativeStackNavigator();

function SRMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agregar" component={AddScreen} />
        <Stack.Screen name="Leer" component={ReadScreen} />
        <Stack.Screen name="Actualizar" component={UpdateScreen} />
        <Stack.Screen name="Eliminar" component={DeleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SRMain;

