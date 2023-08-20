import React, { useContext } from 'react'
import { productContext } from '../contexts/productcontext'
import FeatureP from './FeatureP'

const Featuredproduct = () => {
    const fproduct = useContext(productContext)
    const { isLoading, featuredProducts } = fproduct


    if (isLoading) {
        return <>
            Data Loading.....
        </>
    }

    return (
        <>
            
            <div className="container-fluid py-3" style={{backgroundColor : 'lightgray', borderRadius: 10}}>
                <div className="container">
                    <div className='pl-4 mb-4'>
                        <p>CHECK NOW</p>
                        <h3>Our featured services !!</h3>
                    </div>
                    <div className="row text-center">
                        {
                            featuredProducts.map((currele) => {
                                return <FeatureP key={currele.id} {...currele} />
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Featuredproduct