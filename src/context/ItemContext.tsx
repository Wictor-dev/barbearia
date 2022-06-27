import React, { createContext, useContext, useState} from "react";

type ItemProps = {
    idService: string;
    setIdService: React.Dispatch<React.SetStateAction<string>>;
    idEmployee: string;
    setIdEmployee: React.Dispatch<React.SetStateAction<string>>;
}


const ItemContext = createContext<ItemProps>({} as ItemProps)

export const ItemProvider: React.FC = ({children}) => {
    const [idEmployee, setIdEmployee] = useState('')
    const [idService, setIdService] = useState('')
    
    return (
        <ItemContext.Provider value={{idService, setIdService, idEmployee, setIdEmployee}}>
            {children}
        </ItemContext.Provider>
    )
}

export function useItem(){
    const context = useContext(ItemContext)

    return context
}