import { createContext, useContext, useEffect, useReducer } from "react";
import { productContext } from "./productcontext";
import filterreducer from "../reducer/filterReducer"

export const Filtercontext = createContext();

const initialState = {
    filterProduct: [],
    allProducts: [],
    isGridview: true,
    SortingValue: 'lowest',
    filters: {
        text: "",
        category: "all",
        company: "all"
    }
}


export const FiltercontextProvider = ({ children }) => {

    const productcontext = useContext(productContext)
    const { products } = productcontext;
    
    const [state, dispatch] = useReducer(filterreducer, initialState)


    const gridView = () => {
        dispatch({ type: "GRID_VIEW" })
    }

    const listView = () => {
        dispatch({ type: "LIST_VIEW" })
    }

    const sorting = (e) => {
        dispatch({ type: "SORT_PRODUCT_VALUE", payload: e.target.value })
    }

    const updateFilterproduct = (e) => {

        let name = e.target.name;
        let value = e.target.value

        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name, value}})
    }

    //For load the products
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })

    }, [products])

    //For sorting the products
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.SortingValue, state.filters])


    return (
        <Filtercontext.Provider value={{ ...state, gridView, listView, sorting, updateFilterproduct }}>
            {children}
        </Filtercontext.Provider>
    )
}

