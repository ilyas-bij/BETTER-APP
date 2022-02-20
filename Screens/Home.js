    import React,{useContext, useEffect,useState} from 'react'
    import { StyleSheet, Text, View,TouchableOpacity,Pressable,
      SafeAreaView,  TextInput ,Keyboard ,FlatList,ScrollView} from 'react-native'

   import Item from '../Components/CardItem'
   import {ThemeContext} from '../Context/AppCon'
   import { AntDesign } from '@expo/vector-icons'; 
   import DateTimePicker from '@react-native-community/datetimepicker';




export default function Home() {
  const context = useContext(ThemeContext);
  const [fullname, onChangfullname] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [SelectedDate, setSelectedDate] = useState();
  const [SelectedTime, setSelectedTime] = useState();

  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  var Ndate =  currentDate.getDate(); //Current Date
  var month =  currentDate.getMonth() + 1; //Current Month
  var year =  currentDate.getFullYear(); //Current Year
  var hours = currentDate.getHours(); //Current Hours
  var min = currentDate.getMinutes(); //Current Minutes
  var selectDate = Ndate + '-' + month + '-' + year; 
  var selectestime = hours + ':' + min 
  setSelectedDate(selectDate)
  setSelectedTime(selectestime)
    //console.log(selectDate , selectestime);

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(()=>{
      //console.log(context.Dateobj);
      
      //console.log(now);

      
  },[context.Dateobj])

  //get date now
  var Ndate = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var nowdate = Ndate + '-' + month + '-' + year; 
  var timenow = hours + ':' + min 

 

  //hide footer when Keyboard open 
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardIsOpen(true);
    
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardIsOpen(false);
    
  });
  
  
 
 //add btn
  const handelClick =(name,Date,Time)=>{
    if (name !== '' ) {
    const meeting = {'id':name+Date+Time ,'name':name,"date":Date,"time":Time}
    context.AddItem(meeting)
    onChangfullname('')
    Keyboard.dismiss()
  }

  }



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
                                  onChangeText={onChangfullname}
                                  value={fullname}
                                  placeholder="full name"
                                  placeholderTextColor="#fff" 
                                />
                                 
                               <Pressable style={styles.input} onPress={ showDatepicker }>
                               {!SelectedDate ? <Text style={{color:'#fff'}}>pick date</Text>
                               :<Text style={{color:'#fff'}}>{SelectedDate}</Text>}
                              </Pressable>
                                   
                              <Pressable style={styles.input} onPress={ showTimepicker }>
                              {!SelectedTime ? <Text style={{color:'#fff'}}> picker Time</Text>
                               :<Text style={{color:'#fff'}}>{SelectedTime}</Text>}
                              </Pressable>
                                
                                <Pressable style={styles.button} onPress={()=>{ handelClick(fullname,SelectedDate,SelectedTime) }}>
                                <Text style={styles.text}>Add</Text>
                              </Pressable>
                      </SafeAreaView>
                      {show && (
                              <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                              />
                            )}

                </View>
                </View>
          { !keyboardIsOpen &&  <View style={styles.body}>
                  <SafeAreaView style={styles.container}>
                  {
                    
                    context.Dateobj.length > 0  ?
                    <FlatList
                    data={context.Dateobj}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator ={false}
                    showsHorizontalScrollIndicator={false}
                  />:
                  <View style={styles.homeicone}>
                        <AntDesign name="pluscircleo" size={65} color='#2d5173' />
                  </View>
                  }
                      
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
    },
    homeicone:{
        opacity:0.8,
        marginTop:'30%',
        justifyContent: 'center',
        alignItems: 'center',
        top:'20%'
    }
  
})
