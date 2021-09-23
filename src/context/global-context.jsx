import { createContext, useReducer } from "react";
import addReducer from "./app-reducer";
import { v4 as uuidv4, v4 } from 'uuid';

const initialState = {
    tasks: [
        {
            id: '1',
            title: 'title 1',
            description: 'description 1',
            donde: false,
        },

        {
            id: '2',
            title: 'title 2',
            description: 'description 2',
            donde: false,
        },
    ],
}

export const GlobalContext = createContext(initialState);


export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(addReducer, initialState)

    const addTask = (task) => {
        //console.log(task); 
        dispatch({type:"ADD_TASK", payload: {...task, id:v4()}});  
    };

    const deleteTask = () => {
        dispatch({type: "DELETE_TASK"})
    }

    return (
        <GlobalContext.Provider value={{...state, addTask, deleteTask}}>
            {children}
        </GlobalContext.Provider>
    )
}