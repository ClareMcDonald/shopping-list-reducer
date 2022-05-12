import { createContext, useContext, useReducer } from "react";

const initialToGets = [{ id: Date.now(), text: 'pickles', done: false }];

const toGetReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOGET':
            return [...state, { id: Date.now(), text: action.payload.text, done: false }];
        case 'UPDATE_TOGET':
            return state.map((toget) => {
                if (toget.id === action.payload.toget.id) {
                    const { done, text } = action.payload.toget;
                    return { ...toget, text, done };
                }
                return toget;
            });
        case 'DELETE_TOGET':
            return state.filter((toget) => toget.id !== action.payload.id);
        default:
            throw new Error(`Action type ${action.type} is not supported.`);
    }
};

const ToGetContext = createContext();

export const ToGetProvider = ({ children }) => {
    const [togets, dispatch] = useReducer(toGetReducer, initialToGets);

    const handleAddToGet = (text) => {
        dispatch({ type: 'ADD_TOGET', payload: { text } });
    };

    const handleUpdateToGet = (toget) => {
        dispatch({ type: 'UPDATE_TOGET', payload: { toget } });
    };

    const handleDeleteToGet = (id) => {
        dispatch({ type: 'DELETE_TOGET', payload: { id } });
    };

    return (
        <ToGetContext.Provider value={{ togets, handleAddToGet, handleUpdateToGet, handleDeleteToGet }}>{children}</ToGetContext.Provider>
    )
};