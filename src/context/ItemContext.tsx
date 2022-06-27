import React, { createContext, useContext, useState} from "react";

type ItemProps = {
    idService: string;
    setIdService: React.Dispatch<React.SetStateAction<string>>;
    idEmployee: string;
    setIdEmployee: React.Dispatch<React.SetStateAction<string>>;
    runSearchEmployee: boolean;
    setRunSearchEmployee: React.Dispatch<React.SetStateAction<boolean>>;
}


const ItemContext = createContext<ItemProps>({} as ItemProps)

export const ItemProvider: React.FC = ({children}) => {
    const [idEmployee, setIdEmployee] = useState('')
    const [idService, setIdService] = useState('')
    const [runSearchEmployee, setRunSearchEmployee] = useState(false)
    
    return (
        <ItemContext.Provider value={{idService, setIdService, idEmployee, setIdEmployee, runSearchEmployee, setRunSearchEmployee}}>
            {children}
        </ItemContext.Provider>
    )
}

export function useItem(){
    const context = useContext(ItemContext)

    return context
}