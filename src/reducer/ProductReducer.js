

const productreducer = (state,action) => {

    switch (action.type) {
        case "DATA_LOADING":{
            return {...state,
                isLoading:true
            }
        }
        case "MY_API_DATA":{
            const feturedproduct = action.payload.filter((currele)=>{return currele.featured === true})

            return {...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: feturedproduct    
            }
        }    
        case "DATA_ERROR":{
            return {...state,
                isLoading: false,
                isError: true
            }
        }
        case "MY_SINGLEPRODUCT_DATA":{
            
            return {...state,
                isLoading: false,
                SingleProduct: action.payload    
            }
        }    
        case "SINGLEPRODUCT_ERROR":{
            return {...state,
                isLoading: false,
                isSingleError: true
            }
        }
    
        default:
            return state;
    }

}

export default productreducer