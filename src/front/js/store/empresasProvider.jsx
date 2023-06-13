import React, { useState, useContext, useEffect} from "react";

const empresasContext = React.createContext();

export function useEmpresasContext() {
    return useContext(empresasContext);
}

export function EmpresasProvider(props) {
    
    const [empresas, setEmpresas] = useState();
    

    useEffect(() => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        fetch("http://localhost/api/empresas/", requestOptions)
          .then(response => response.json())
          .then((datos) => {
    
    
    
            return setEmpresas(datos);
    
    
    
    
    
          });
        
          
      }, []);
    
    return (
        <empresasContext.Provider value = {empresas}>
            {props.children}
        </empresasContext.Provider>
    );
}