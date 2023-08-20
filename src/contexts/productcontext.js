import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/ProductReducer'


const productContext = createContext();
const url = 'https://api.pujakaitem.com/api/products'

const InitialState = {
    isLoading: true,
    isError: false,
    products: [],
    featuredProducts: [],
    SingleProduct:{},
    isSingleError: true
}

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, InitialState)

    //API-1 for the get products

    const getproducts = async () => {

        dispatch({ type: "DATA_LOADING" })

        // const response = await fetch(url);
        // const product = await response.json()
        // console.log("🚀 ~ file: Product.js:13 ~ getproducts ~ product:", product)

        try {
            const response = await axios.get(url)
            const product = await response.data;
            dispatch({ type: "MY_API_DATA", payload: product })
        } catch (error) {
            dispatch({ type: "DATA_ERROR" })
        }
    }

  //API - 2 to get the single products

    const getSingleProduct = async(url) => {
        dispatch({ type: "DATA_LOADING" })
        try {
            const response = await axios.get(url)
            const Singleproduct = await response.data;
            dispatch({ type: "MY_SINGLEPRODUCT_DATA", payload: Singleproduct })
        } catch (error) {
            dispatch({ type: "SINGLEPRODUCT_ERROR" })
        }
    }

    useEffect(() => {
        getproducts(url);
    }, [])


    return (
        <productContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </productContext.Provider>
    )

}

export { ProductProvider, productContext }