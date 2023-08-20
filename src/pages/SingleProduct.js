import React, { useContext, useEffect } from 'react'
import { productContext } from '../contexts/productcontext'
import { useParams } from 'react-router-dom'
import Images from '../Component/Images'
import PageNavigate from '../Component/PageNavigate'
import FormatPrice from '../helper/FormatPrice'
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { CgArrangeBack } from 'react-icons/cg';


const API = 'https://api.pujakaitem.com/api/products'

const SingleProduct = () => {
  const { id } = useParams();

  const productcontext = useContext(productContext);
  const { getSingleProduct, SingleProduct, isLoading, isSingleError } = productcontext;

  const { id: alice, name, price, description, image, stock, reviews, stars, company, color } = SingleProduct;


  
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  if (isLoading) {
    return <h2>Loading.....</h2>
  }

  return (
    <>
      <PageNavigate title={name} />
      <div className="container my-6" style={{ marginBottom: 60 }}>
        <div className="row ">
          <div className='col'>
            <Images img={image} />
          </div>
          <div className='col'>
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>Reviews : {reviews}</p>
            <p>
              MRP : <del> <FormatPrice Price={price + 250000} /> </del>
            </p>
            <h5> Deal of the day : <FormatPrice Price = {price} /></h5>
            <p>
              {description}
            </p>
            <div className="d-flex flex-row text-center justify-content-between">
              <div>
                <TbTruckDelivery />
                <p> Free delivery </p>
              </div>
              <div>
                <TbReplace />
                <p> 30 days replacement </p>
              </div>
              <div>
                <TbTruckDelivery />
                <p> Assured delivered </p>
              </div>
              <div>
                <CgArrangeBack />
                <p> 2 year warranty </p>
              </div>
            </div>
            <hr/>
            <p>Available : <span className='fw-medium'> {(stock > 0) ? "In Stock" : "Not Available"} </span></p>
            <p>Id : <span className='fw-medium'>{id} </span></p>
            <p>Brand : <span className='fw-medium'> {company}</span></p>
            <hr />


          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct