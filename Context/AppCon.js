
import React, { useState,useEffect } from 'react';


const AppCon = ( {children}) => {
  const [Dateobj, setDateobj] = React.useState([]);


  const AddItem = params =>{
    //setDateobj(params)
    let filtereData = Dateobj.filter(item => item.name !== params.name);
    setDateobj([...filtereData, params])
}
    
  
  const Remove = params => {
    setDateobj(Dateobj.filter(item => item.name !== params))
}

    
    const data = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '3ac68afc-c605-dddd48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '3ac68ddddafc-c605-dddd48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '3ac68afc-c605-dddd48d3-a4f8-fbd91aa97ddddf63',
          title: 'Second Item',
        },
        {
          id: '3ac68afc-c605-dddddddd48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '3ac68dddafc-c605-dddd48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bddddd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-47sss1f-bddddd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: '5869sss4a0f-3da1-471f-bddddd96-145571e29d72',
          title: 'Third Item',
        },
      ];

    useEffect(() => {
    console.log();
    }, []);


         return (
                <ThemeContext.Provider  value={{DATA :data,Dateobj:Dateobj,
                  AddItem,Remove
                }}>
                    {children}
                </ThemeContext.Provider>
            )
            }

    export default AppCon


    export const ThemeContext = React.createContext();