import React from 'react'
import img from '../Images/carousel/educate.jpg'
import img1 from '../Images/carousel/g1.jpg'
import img2 from '../Images/carousel/language.jpg'
import gra from '../Images/PNG/graduate.png'
import glo from '../Images/PNG/globe.png'
import book from '../Images/PNG/book.png'
import Nav from './Nav'
import About from './About'
import { Link } from 'react-router-dom'


function Body() {
  return (
    <div ><br/><br/><br/>
      <div  className='carousal-margin'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" >
          <div class="carousel-item active" data-bs-interval="10000" >
            <img src={img} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 className='abc'>BEST ONLINE COURSES</h5>
              <h1 className='abc'>Best Online Learning <br/>Platform</h1>
              <p className='abc'>Welcome to E-Learning Unlock your potential with our interactive E-Learning platform.</p>
              <div class="slider-btn">
                <button class="btn btn-1">Read More</button>
                <button class="btn btn-2">Join Now</button>
              </div>
            </div>
            
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h5 className='abc'>EMPOWER LEARNING</h5>
              <h1 className='abc'>Empower Your Learning Journey <br/>Platform</h1>
              <p className='abc'>"Unlock Your Potential with Interactive E-Learning! Explore the Best Online Learning Platform Today."</p>
              <div class="slider-btn">
                <button class="btn btn-1">Read More</button>
                <button class="btn btn-2">Join Now</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h5 className='abc'>BEST ONLINE COURSES</h5>
              <h1 className='abc'>Best Online Learning <br/>Platform</h1>
              <p className='abc'>Welcome to E-Learning Unlock your potential with our interactive E-Learning platform.</p>
              <div class="slider-btn">
                <button class="btn btn-1">Read More</button>
                <button class="btn btn-2">Join Now</button>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 
        
      </div>
        
      <br/><br/>
    <div>
      <div class="container content-space-1 content-space-lg-3 ">
        <div class="row">
          <div class="col-md-4 mb-5 mb-md-0 zoom_effect">
            <div className='con-bg'>
            <div class="text-center px-lg-3">
              <div class="svg-icon text-primary mb-4">
              <img src={gra} class="img-fluid" className='img1'alt="logo-icon"/>
              </div>
              <h3>Meet your<br/> Skilled Instructors</h3>
              <p>Learn from the best! Our online classes are led by expert instructor with years of experiance in their respective fields.
                Get ready for an engaging and enlightening learning experiance.
              </p>
            </div>
            </div>
          </div>


          <div class="col-md-4 mb-5 mb-md-0 zoom_effect">
            <div className='con-bg'>
            <div class="text-center px-lg-3">
              <div class="svg-icon text-primary mb-4">
              <img src={glo} class="img-fluid" className='img1'alt="logo-icon"/>
              </div>
              <h3>Online Classes</h3>
              <p>Join our live and interactive online classes from their comfort of your home. Participate in discussions, ask questions, and collaborate with fellow learners.
                Embrace the conveniance of learning of your schedule.
              </p>
            </div>
            </div>
          </div>
         

          <div class="col-md-4 zoom_effect" >
          <div className='con-bg'>
            <div class="text-center px-lg-3">
              <div class="svg-icon text-primary mb-4">
              <img src={book} class="img-fluid" className='img1'alt="logo-icon"/>
              </div>
              <h3>24/7 Access<br/>to Course Materials</h3>
              <p>Access our extensive library of course materials 24/7.
                Download leature, presentations, additional resources, and study guides to reinforce your learning.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
  </div>
<br/><Nav/><About/>
    </div>
  )
}

export default Body