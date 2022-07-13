import React from 'react';
import {useState} from 'react'
import {ScrollView, Button, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { db } from '../Server/Conexion';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const SRupdate = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            margin: 10,
            backgroundColor: '#7AFF0D',
        },
        Sec:{
            textAlign: 'center', // <-- the magic
            fontWeight: 'bold',
        },
        Titulo: {
            fontWeight: 'bold',
            fontSize: 30,
            
        },
        Subtitulo:{
            fontSize: 25,
        },
        CajasT:{
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


    const [elementos, setelementos]=useState([])
    const [productos, setproductos]=useState({
        producto:'',
        precio:'',
        existencia:'',
        categoria:''
      })

    const capturar =(atrib,valor) =>{
        setproductos({...productos,[atrib]:valor})
    }  


    async function leer(){
        const querySnapshot = await getDocs(collection(db, "Productos"));
        const articulos=[];
            querySnapshot.forEach((doc) => {
            const {Producto, Precio, Existencia, Categoria}=doc.data()
    
            articulos.push({
                Id:doc.id,
                Producto,
                Precio,
                Existencia,
                Categoria
            })
    })
        setelementos(articulos)
    }



    return (
        <ScrollView style={styles.Sec}>
        <Text  style={styles.Titulo} >Actualizar información</Text>

        <View style={styles.CajasT}>

        <TextInput
        style={styles.input}
        placeholder="Producto"
        value={productos.producto}
        onChangeText={(value)=>capturar('producto',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Precio"
        value={productos.precio}
        onChangeText={(value)=>capturar('precio',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Existencia"
        value={productos.existencia}
        onChangeText={(value)=>capturar('existencia',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={productos.categoria}
        onChangeText={(value)=>capturar('categoria',value)}
        />
        
        </View>

        <Button title="Leer"  onPress={() =>leer()}>Cargar Productos</Button>
        {
        elementos.map(elemento=>{
            return(
                <TouchableOpacity key={elemento.Id}>
                <View style={styles.Contenedor} >
                <Text style={styles.Titulo}>{elemento.Producto}</Text>
                <Text style={styles.Subtitulo}>Precio:${elemento.Precio}</Text>
                <Text style={styles.Subtitulo}>Existencia:{elemento.Existencia} piezas</Text>
                <Text style={styles.Subtitulo}>Categoria:{elemento.Categoria}</Text>
                </View>
                
                </TouchableOpacity  >
            );
        })
        }
        </ScrollView>
    )
}

export default SRupdate


