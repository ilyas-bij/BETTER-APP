
import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Pressable,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
export default function Welcome() {
    const navigation = useNavigation();
  return (
    <View style={styles.carContainer}>
    <ImageBackground
      source={{uri:'https://i.pinimg.com/474x/ec/1f/71/ec1f713f49cc6d6556184969ac9d2efd.jpg'}}
      style={styles.image}
    />

    <View style={styles.titles}>
      <Text style={styles.title}>BETTER APPS</Text>
      <Text style={styles.subtitleCTA}>meeting reminder notification </Text>
         
    </View>

    <View style={styles.buttonsContainer}>
    <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        
        <Text style={styles.text}>
        <AntDesign name="upcircleo" size={46} color="black" />
        </Text>
      </Pressable>
     
      
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  
  carContainer: {
    width: '100%',
    height:'100%',
   
  },
  titles: {
    marginTop: '27%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textTransform:'capitalize',
    color:'#FFF',
    fontFamily: ""
    
  },
  subtitleCTA: {
    
    fontSize: 16,
    color: '#FFF',
    opacity: 0.8,

  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    backgroundColor:'black',
    opacity: 0.7
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '12%',
    backgroundColor:'#FFF',
    opacity: 0.8,
    borderRadius:30,
    marginLeft:'2.5%',
  left:'39%'
  },
  button: {
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textTransform:'capitalize',
    color:'black',
    
  }
});
