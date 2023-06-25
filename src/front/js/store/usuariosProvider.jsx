import React, { useState, useContext, useEffect} from "react";

const usuariosContext = React.createContext();

export function useUsuariosContext() {
    return useContext(usuariosContext);
}

export function UsuariosProvider(props) {
    
    const [usuarios, setUsuarios] = useState();
    

    useEffect(() => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        fetch("http://186.67.10.116:3002/api/usuarios/", requestOptions)
          .then(response => response.json())
          .then((datos) => {
    
    
    
            return setUsuarios(datos);
    
    
    
    
    
          });
        
          
      }, [usuarios]);
    
    return (
        <usuariosContext.Provider value = {usuarios}>
            {props.children}
        </usuariosContext.Provider>
    );
}