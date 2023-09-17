
const filterReducer = (state, action) => {
    console.log("🚀 ~ file: filterReducer.js:3 ~ filterReducer ~ state:", state)
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return {
                ...state,
                filterProduct: [...action.payload],
                allProducts: [...action.payload]
            }

        case "GRID_VIEW":
            return {
                ...state,
                isGridview: true
            }

        case "LIST_VIEW":
            return {
                ...state,
                isGridview: false
            }

        case "SORT_PRODUCT_VALUE":
            // let sortData;
            // const sortProduct = document.getElementById('sort')
            // sortData = sortProduct.value;
            return {
                ...state,
                SortingValue: action.payload
            }

        case "SORTING_PRODUCTS":
            let tempFiltedata;
            const newData = [...state.filterProduct]

            switch (state.SortingValue) {
                case "a-z":
                    tempFiltedata = newData.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "z-a":
                    tempFiltedata = newData.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "lowest":
                    tempFiltedata = newData.sort((a, b) => a.price - b.price)
                    break;
                case "highest":
                    tempFiltedata = newData.sort((a, b) => b.price - a.price)
                    break;
                default:
                    tempFiltedata = newData;
                    break;
            }
            // if(state.SortingValue === "a-z"){
            //     tempFiltedata = newData.sort((a, b) => a.name.localeCompare(b.name))
            // }
            // if(state.SortingValue === "z-a"){
            //     tempFiltedata = newData.sort((a, b) => b.name.localeCompare(a.name))
            // }
            // if(state.SortingValue === "lowest"){
            //     tempFiltedata = newData.sort((a,b)=> a.price - b.price )
            // }
            // if(state.SortingValue === "highest"){
            //     tempFiltedata = newData.sort((a,b)=> b.price - a.price )
            // }

            return {
                ...state,
                filterProduct: tempFiltedata
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload
            console.log("🚀 ~ file: filterReducer.js:74 ~ filterReducer ~ value:", value)
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }

            }

        case "FILTER_PRODUCTS":

            const { allProducts } = state;
            let tempfilterProduct = [...allProducts]

            const { text, category, company } = state.filters
            
            if (text) {
                tempfilterProduct = tempfilterProduct.filter((element) => {
                    return element.name.toLowerCase().includes(text)
                })
            }

            if (category !== "all") {
                tempfilterProduct = tempfilterProduct.filter((element) => {
                    return element.category === category
                })
            }
            if (company !== "all") {
                tempfilterProduct = tempfilterProduct.filter((element) => {
                    return element.company === company
                })
            }
            return {
                ...state,
                filterProduct: tempfilterProduct
            }

        default:
            return { ...state }
    }
}

export default filterReducer;