import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Button, TextInput } from 'react-native-paper';


function Formulario() {

  const[name, setName] = useState("");
  const[idade, setIdade] = useState("");
  const[gender, setGender] = useState("");

  const login = () => {

  }

  const [selectedGender, setselectedGender] = useState();

  return (

    <View>
      <Text style={styles.message}> Bem vindo(a) !</Text>
      <TextInput style={styles.nome}
      placeholder='Nome'
      value={name}
      onChangeText={setName}
      >
      </TextInput>
      <TextInput style={styles.idade}
      placeholder='Idade'
      value={idade}
      onChangeText={setIdade}
      ></TextInput>
      <TextInput style={styles.gender}
      placeholder='Gênero'
      value={gender}
      onChangeText={setGender}
      >
      </TextInput>
      <Button style={styles.button}
      onPress={login}>
        Confirmar
      </Button>
    </View>
    
  )
}

const styles = StyleSheet.create({
  nome: {
    marginBottom: 14,
    marginTop: 14
  },
  idade: {
    marginBottom: 14
  },
  gender: {
    
  },
  button: {
    backgroundColor: '#FE71C6',
    width: '100%',
    marginTop: 14,
    fontSize: 14,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 14
  },
  image: {
    
  }
  },
);



export default Formulario;