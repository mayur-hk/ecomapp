

const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return {...state,
                filterProduct: [...action.payload],
                allProducts: [...action.payload]}
        
        case "GRID_VIEW" :
            return { ...state,
                isGridview : true
            } 
            
        case "LIST_VIEW" :
                return { ...state,
                    isGridview : false
                } 

        default:
            return {...state}
    }
}

export default filterReducer;