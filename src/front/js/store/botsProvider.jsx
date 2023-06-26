import React, { useState, useContext, useEffect} from "react";

const botsContext = React.createContext();

export function useBotsContext() {
    return useContext(botsContext);
}

export function BotsProvider(props) {
    
    const [bots, setBots] = useState();
    

    useEffect(() => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        fetch("http://186.67.10.116:3002/api/bots/", requestOptions)
          .then(response => response.json())
          .then((datos) => {
    
    
    
            return setBots(datos);
    
    
    
    
    
          });
        
          
      }, [bots]);
    
    return (
        <botsContext.Provider value = {bots}>
            {props.children}
        </botsContext.Provider>
    );
}