
const FormatPrice = (props) => {
        
    const {Price} = props
      

    return (
        Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }, { maximumSignificantDigits: 2 }).format(Price/100)
    )
}

export default FormatPrice