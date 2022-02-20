
import React, { useState,useEffect } from 'react';


const AppCon = ( {children}) => {
  const [Dateobj, setDateobj] = React.useState([]);


  const AddItem = params =>{
    //setDateobj(params)
    let filtereData = Dateobj.filter(item => item.name !== params.name);
    setDateobj([...filtereData, params])
}
    
  
  const Remove = params => {
    setDateobj(Dateobj.filter(item => item.id !== params))
}

  

    useEffect(() => {
    console.log();
    }, []);


         return (
                <ThemeContext.Provider  value={{Dateobj:Dateobj,
                  AddItem,Remove
                }}>
                    {children}
                </ThemeContext.Provider>
            )
            }

    export default AppCon


    export const ThemeContext = React.createContext();