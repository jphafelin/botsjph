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
    
        fetch("http://186.67.10.116:3002/api/empresas/", requestOptions)
          .then(response => response.json())
          .then((datos) => {
    
    
    
            return setEmpresas(datos);
    
    
    
    
    
          });
        
          
      }, [empresas]);
    
    return (
        <empresasContext.Provider value = {empresas}>
            {props.children}
        </empresasContext.Provider>
    );
}