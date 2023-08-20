import React from 'react'
import { Link } from 'react-router-dom';

const PageNavigate = ({title}) => {
  
  return (
    <div className='bg-secondary-subtle py-3 pl-3'>
      <Link to= '/'>Home</Link> / {title}
    </div>
  )
}

export default PageNavigate