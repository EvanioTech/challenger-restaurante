import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


let clientes = 0;


export default function App() {
  const [numero,setNumero] = useState(0);
  const[cheio,setCheio] = useState('');

function Adicionar(){
  if(clientes <10){
    clientes++;  
    
  }
  if(clientes > 9){
    aviso()
  }
  
  
  
  setNumero(clientes)
  
  
};
function aviso(){
  
    
  setCheio('Restaurante está no seu limite de pessoas.')
  
 
};
function Remover(){
  if(clientes >=1){
    clientes--
  }
  if (clientes <10) {
    setCheio('')
  }
  
  else{console.log('aki')}
  
  setNumero(clientes)
}
  return (
    <View style={styles.container}>
      <Text style ={{fontSize:25}}>Pessoas no restaurante:</Text>

      <View style={{backgroundColor: 'black', margin:20, width:50, borderRadius:10,alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize:44}} >{numero}</Text>
      </View>
      <Text style={{backgroundColor: 'orange'}} onPress={aviso} >{cheio}</Text>
      <View style={styles.areaView}>
      <TouchableOpacity style={[styles.btnArea, { backgroundColor: numero >= 10 ? 'gray' : '#1c9ff9' }]} onPress={Adicionar} disabled={numero >= 10}>
          <Text style={styles.btnTexto}>Adicionar</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.btnArea , { backgroundColor: numero < 1 ? 'gray' : '#1c9ff9' }]} onPress={Remover} disabled={numero < 1}>
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
