import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice';

const FeatureP = (currele) => {
    const { category, company, image, id, price } = currele;

    return (
        <>
            <div className="col d-flex justify-content-around">
                <NavLink to={`/singleProduct/${id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="position-relative">
                    <img src={image} className="card-img-top" alt="product"/>
                    <span className="badge position-absolute top-0 end-0 text-bg-light mr-2 mt-1">{category}</span>
                    </div> 
                    <div className="d-flex justify-content-between card-body">
                        <h5 className="card-title">{company}</h5>
                        <p className="card-text"> <FormatPrice Price = {price} /></p>
                    </div>
                </div>
                </NavLink>
            </div>

        </>
    )
}

export default FeatureP