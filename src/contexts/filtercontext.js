import { createContext, useContext, useEffect, useReducer } from "react";
import { productContext } from "./productcontext";
import filterreducer from "../reducer/filterReducer"

export const Filtercontext = createContext();

const initialState = {
    filterProduct: [],
    allProducts: [],
    isGridview: true 
}


export const FiltercontextProvider = ({ children }) => {
    
    const productcontext = useContext(productContext)
    const { products } = productcontext;
        
    const [state, dispatch] = useReducer(filterreducer, initialState)

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCT", payload:products})
    
    }, [products])
    
    const gridView = () =>{
        dispatch({type: "GRID_VIEW"})
    }

    const listView = () =>{
        dispatch({type: "LIST_VIEW"})
    }

    return (
        <Filtercontext.Provider value={{...state, gridView, listView}}>
            {children}
        </Filtercontext.Provider>
        )}

