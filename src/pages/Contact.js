import React from 'react'

const Contact = () => {
  return (
    <div >

      <h2 className='text-center p-3 '>Feel free to contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.5682197808846!2d72.89002439569461!3d21.23063520895591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5dbb1b8f77%3A0xcfe7158e797e57f9!2sGirnar%20Society%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1691504500084!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="d-flex justify-content-center my-5 ">
        <form action="https://formspree.io/f/mzblezrj"
          method="POST" className='fs-4' style={{ display: 'inline-block', width: 421 }}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fs-4">Username</label>
            <input type="text" className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
      </div>
    </div >
  )
}

export default Contact