import React from 'react';
import {useState} from 'react'
import {ScrollView, Button, View, StyleSheet, Text } from 'react-native';
import { db } from '../Server/Conexion';
import { collection, getDocs } from "firebase/firestore";

const SRread = () => {

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
      });


    const [elementos, setelementos]=useState([])

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
        <Text  style={styles.Titulo} >Leer información</Text>
        <Button title="Leer"  onPress={() =>leer()}>Leer Productos</Button>
        {
        elementos.map(elemento=>{
            return(
                <View style={styles.Contenedor} key={elemento.Id}>
                <Text style={styles.Titulo}>{elemento.Producto}</Text>
                <Text style={styles.Subtitulo}>Precio:${elemento.Precio}</Text>
                <Text style={styles.Subtitulo}>Existencia:{elemento.Existencia} piezas</Text>
                <Text style={styles.Subtitulo}>Categoria:{elemento.Categoria}</Text>
                </View>
            );
        })
        }
        </ScrollView>
    )
}

export default SRread


