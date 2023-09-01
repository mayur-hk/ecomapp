import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice';

const Listview = (currele) => {
    
    const { name, description, category, company, image, id, price } = currele;


    return (
        <div className="row border my-2">
            <div className="col">
                <figure className='m-2 text-center'>
                    <img src={image} alt="product" style={{ width: '18rem' }} />
                </figure>
            </div>
            <div className="col">
                <h3>{name}</h3>
                <h5> Price : <FormatPrice Price={price} /></h5>
                <p>{description.slice(0, 99)}... </p>
                <NavLink to={`/singleProduct/${id}`} style={{ textDecoration: 'none' }}>
                    <button className="btn btn-primary">See More</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Listview