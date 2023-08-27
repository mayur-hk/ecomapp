import React from 'react'
import FeatureP from './FeatureP'

const Productlist = ({ products }) => {
    return (
        <div>
            <div className="row text-center ">
                {
                    products.map((currele) => {
                        return <FeatureP key={currele.id} {...currele} />
                    })
                }

            </div>
        </div>
    )
}

export default Productlist