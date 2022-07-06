import React from 'react';
import {useState} from 'react'
import {ScrollView, Button, View, StyleSheet, TextInput, Text } from 'react-native';
import { db } from '../Server/Conexion';
import { collection, addDoc } from "firebase/firestore";

const SRadd = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });


      const [elementos, setelement]=useState({
        producto:'',
        precio:'',
        existencia:'',
        categoria:''
      })

      const capturar =(atrib,valor) =>{
        setelement({...elementos,[atrib]:valor})
        console.log(elementos)
        }


      async function agregar(){
          if(elementos.producto === '' | elementos.precio === ''
             | elementos.existencia === '' | elementos.categoria === ''){
          alert('Llena todos los datos antes de agregar un producto')
          }else{
          
            try {

              const precio = parseFloat(elementos.precio)
              const existencia= parseInt(elementos.existencia)

              await addDoc(collection(db, "Productos"), {
                Producto:elementos.producto,
                Precio:precio,
                Existencia:existencia,
                Categoria:elementos.categoria
              });
              alert('Se agrego correctamente el producto')
            } catch (e) {
              alert("Error agregando el producto: ", e);
            }
            
          }
       
        }

    return (
        <View style={styles.Contenedor}>

        <TextInput
        style={styles.input}
        placeholder="Producto"
        onChangeText={(value)=>capturar('producto',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Precio"
        onChangeText={(value)=>capturar('precio',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Existencia"
        onChangeText={(value)=>capturar('existencia',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Categoria"
        onChangeText={(value)=>capturar('categoria',value)}
        />


        <Button title="Agregar" onPress={()=>agregar()}>Agregar</Button>

        </View>
      )
}

export default SRadd


