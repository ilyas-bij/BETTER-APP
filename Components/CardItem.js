import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useContext, useEffect} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {ThemeContext} from '../Context/AppCon'



const CardItem = ({ item }) => {
  const context = useContext(ThemeContext);


  return (
    <View style={styles.item}>
      
      <Text  style={styles.itemtitel}>you have meeting with {item.name}  </Text>
      <Text style={styles.itemDate}>Date : {item.date}                  time : {item.time}   </Text> 

      <View style={styles.close}>
          <Pressable  onPress={()=>context.Remove(item.id)}>
      <MaterialCommunityIcons name="delete" size={32} color="#FFF"  style={styles.closeIcon} />
      </Pressable>
      </View>
    </View>
  )
}

export default CardItem

const styles = StyleSheet.create({

    item:{
        height:80,
        marginTop:5,
        borderRadius:10,
        
        backgroundColor:'#406486',

    },
    close:{
        height:'100%',
        width:50,
        position: 'absolute',
        right: 0,
        backgroundColor:'red',
        opacity:0.8,
        borderBottomRightRadius:10,
        borderTopRightRadius:10

    },
    closeIcon:{
       margin:10,
       marginTop:30,
       opacity:1
    },
    itemtitel:{
      marginTop: '3%',
      paddingLeft:'4%',
      paddingRight:'20%',
      fontSize:15,
      color:'#FFF',
      alignItems: 'center',
    },
    itemDate:{
      position:'absolute',
      bottom:10,
      paddingLeft:'4%',
      paddingRight:'20%',
      fontSize:14,
      color:'#FFF',
      alignItems: 'center',
    },

})