import React, { useReducer } from 'react'
import AppReducer from './AppReducer'
import db from '../../db.json'

export const DataContext = React.createContext()
const initialState=db
const ContextData = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

        const adduser=(user)=>{
            dispatch({
                type:"ADD_USER",
                payload:user
            })
        }
    
        const edituser=(user)=>{
            dispatch({
                type:"EDIT_USER",
                payload:user
            })
        }
        const remove=(id)=>{
            dispatch({
                type:"REMOVE_USER",
                payload:id
            })
        }

    return (
         <DataContext.Provider value={{users:state.users,adduser,edituser,remove}}>
             {children}
         </DataContext.Provider>
    )
}

export default ContextData

