import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

function Landing() {
  return (
    <>      
      <div className="container-fluid mb-5 d-flex align-items-center" style={{height:"80vh"}}>
    <Row className="w-100 d-flex align-items-center">
      <Col className='p-5 d-flex flex-column justify-content-center' sm={12} md={6}>
        <h2>
        <i className="fa-solid fa-users fa-xl" style={{color: "#9d0238",}} />
        <span className='ms-2'>Employee Management</span>
        </h2>
        <p style={{textAlign:"justify"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis labore alias laboriosam nemo ipsa placeat, reiciendis, minima praesentium debitis maxime. Unde labore quo reprehenderit, laborum tempore cum facere eum.
        </p>
        <div className="d-grid">
          <Link to={'/home'} className="btn btn-outline-info">Lets Go</Link>
        </div>
      </Col>
      <Col className='py-4 d-flex justify-content-center align-items-center' sm={12} md={6}>
        <img src="https://www.lystloc.com/blog/wp-content/uploads/2022/12/Lystloc4.webp" alt="no image found" className='img-fluid' style={{width:"400px", objectFit: 'contain'}} />
      </Col>
    </Row>
  </div>
  
      
  </>
  )
}

export default Landing