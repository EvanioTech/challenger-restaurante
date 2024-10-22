import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
  const [numero,setNumero] = useState(0)
function adicionar(){
  
  
}
  return (
    <View style={styles.container}>
      <Text>Pessoas no restaurante:</Text>
      <Text style >{numero}</Text>
      <View style={styles.areaView}>
      <TouchableOpacity style={styles.btnArea}>
        <Text style={styles.btnTexto} onPress={adicionar}>
          Adicionar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnArea}>
        <Text style={styles.btnTexto}>
          Remover
        </Text>
      </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaView:{
    flexDirection: 'row'
  },
  btnArea:{
    flex:1,
    backgroundColor: '#1c9ff9',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    borderRadius: 15
  },
  btnTexto:{
    
    color: '#fff',
    fontSize: 20,
    margin:5,
    
  }
});
