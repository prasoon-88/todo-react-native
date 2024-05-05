import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Color from './App/Utils/Color';
import { useState } from 'react';

export default function App() {
  const [todo,setTodo] = useState([])
  const [input,setInput]  = useState('')

  const addTodo = ()=>{
    if(input == ''){
      return 
    }
    setTodo([input,...todo])
    setInput('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <TextInput style={styles.input} value={input} onChangeText={(text)=>setInput(text)}/>
      <Button title='Add Todo' onPress={addTodo}/>
      <View style={styles.list}>
        {
          todo?.map((todo,index)=>
          <View>
              <Text style={styles.todo} key={index}>{`${index+1}  ` + todo} <Button color="#841584" title="Delete"/></Text>
          </View>
        )
        }
      </View>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    padding:24,
    marginTop:10
  },
  heading:{
    fontSize:20,
    marginBottom:6,
    fontWeight:'bold'
  },
  input:{
    fontSize:20,
    borderWidth:1,
    borderColor:Color.BLACK,
    height:50,
    width:'100%',
    borderRadius:6,
    padding:12,
    marginBottom:10
  },
  list:{
    marginTop:10,
  }
  ,
  todo:{
    fontSize:20,
    display:'flex',
    alignContent:'center',
    justifyContent:'center'
  },
  
})

