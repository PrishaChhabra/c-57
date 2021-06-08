import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component{
  goToBuzzerScreen=(buzzerColor)=>{
    this.props.navigation.navigate('Buzzer',{color:buzzerColor});
  }
  render(){
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity style={[styles.button, {backgroundColor:"red"}]} 
        onPress={()=>{this.goToBuzzerScreen('red')}} > 
          <Text style={styles.buttonText}>Team-A</Text>
        </TouchableOpacity>

         <TouchableOpacity style={[styles.button, {backgroundColor:"green"}]} 
        onPress={()=>{this.goToBuzzerScreen('green')}}> 
          <Text style={styles.buttonText}>Team-B</Text>
        </TouchableOpacity>

         <TouchableOpacity style={[styles.button, {backgroundColor:"blue"}]} 
       onPress={()=>{this.goToBuzzerScreen('blue')}}> 
          <Text style={styles.buttonText}>Team-C</Text>
        </TouchableOpacity>

         <TouchableOpacity style={[styles.button, {backgroundColor:"yellow"}]} 
       onPress={()=>{this.goToBuzzerScreen('yellow')}}>
          <Text style={styles.buttonText}>Team-D</Text>
        </TouchableOpacity>

      </View>
      
    );
  }
}

const styles= StyleSheet.create({
  button:{
     marginTop: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
   borderRadius: 20
  },
   buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
  
})