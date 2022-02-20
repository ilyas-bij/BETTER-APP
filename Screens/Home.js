    import React,{useContext, useEffect,useState} from 'react'
    import { StyleSheet, Text, View,TouchableOpacity,Pressable,
      SafeAreaView,  TextInput ,Keyboard ,FlatList,ScrollView} from 'react-native'

   import Item from '../Components/CardItem'
   import {ThemeContext} from '../Context/AppCon'



export default function Home() {
  const context = useContext(ThemeContext);

  useEffect(()=>{
      console.log(context.Dateobj);
  },[context.Dateobj])

  const x = {'id':'001','name':'Anass',"date":'feb/12/22',"time":'22:10'}
  
 

  //hide footer when Keyboard open 
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardIsOpen(true);
    
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardIsOpen(false);
    
  });
  const [text, onChangeText] = React.useState("");
  

  //Flat list 
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
    return (
       <View style={styles.contener}>
            
           <View style={styles.Header}>
                    <Text  style={styles.hometitel}>BETTER APPS</Text>
                    <Text  style={styles.homeds}>When you schedule a meeting, we will remind you 1H before </Text>
                <View style={styles.homeinput}>
                    <SafeAreaView>
                                <TextInput
                                  style={styles.input}
                                  onChangeText={onChangeText}
                                  value={text}
                                  placeholder="useless placeholder"
                                  placeholderTextColor="#fff" 
                                />
                                 <TextInput
                                  style={styles.input}
                                  onChangeText={onChangeText}
                                  value={text}
                                  placeholder="useless placeholder"
                                  placeholderTextColor="#fff" 
                                />
                                  <TextInput
                                  style={styles.input}
                                  onChangeText={onChangeText}
                                  value={text}
                                  placeholder="useless placeholder"
                                  placeholderTextColor="#fff" 
                                />
                                
                                <Pressable style={styles.button} onPress={()=>{context.AddItem(x)}}>
                                <Text style={styles.text}>Add</Text>
                              </Pressable>
                      </SafeAreaView>
                </View>
                </View>
          { !keyboardIsOpen &&  <View style={styles.body}>
                  <SafeAreaView style={styles.container}>
                        <FlatList
                          data={context.DATA}
                          renderItem={renderItem}
                          keyExtractor={item => item.id}
                          showsVerticalScrollIndicator ={false}
                          showsHorizontalScrollIndicator={false}
                        />
                      </SafeAreaView>
              </View>}
            
       </View>
    )
}






















const styles = StyleSheet.create({
 
  contener:{
    height:'100%',
    backgroundColor:'#000',

  },
   
    Header:{
      height:'100%',  
      width:'100%',
      backgroundColor:'#2d5173',
    },
    
   
    body:{
      marginTop:'-97%',
      height:'60%',  
      width:'100%',
      backgroundColor:'#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    },
    hometitel:{
      marginTop: '10%',
      paddingLeft:'8%',
      fontSize:28,
      color:'#FFF',
      alignItems: 'center',
        },
        homeds:{
          marginTop: '2%',
          paddingLeft:'8%',
          paddingRight:'8%',
          fontSize:16,
          color:'#FFF',
          alignItems: 'center',
        },
    homeinput:{
      height:'100%',
    },
    input: {
      height: 40,
      marginLeft:20,
      marginRight:20,
      marginTop:12,
      borderWidth: 1,
      padding: 10,
      color:'#FFF',
      borderColor:'#fff',
      borderRadius:8

    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#fff',
      marginLeft:20,
      marginTop:10,
      marginRight:20,
      opacity:0.9
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#000',
    },
    
    title: {
      fontSize: 32,
    },
    container: {
      marginLeft:12,
      marginTop:30,
      marginRight:12,
      
      paddingBottom:70
    }
  
})
