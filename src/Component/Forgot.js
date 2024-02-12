import React from 'react'
import logo from '../Images/mainicon1.png'
import Nav from './Nav'
import Footer from './Footer'

function Forgot() {
  return (
    <div>
        <section class="container d-flex flex-column vh-100"><br/><br/><br/><br/><br/><br/>
                <div class="row align-items-center justify-content-center g-0 h-lg-100 py-8">
                    <div class="col-lg-5 col-md-8 py-8 py-xl-0">
                        <div class="card shadow">
                            <div class="card-body p-6">
                                <div class="mb-4">
                                    <a href="../index.html"><img src={logo} class="img-fluid" className='img'alt="logo-icon"/></a>
                                    <h1 class="mb-1 fw-bold">Forgot Password</h1>
                                    <p>Fill the form to reset your password.</p>
                                </div>
                                <form class="needs-validation" novalidate>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">New Password</label>
                                        <input type="password" id="password" class="form-control" name="password" placeholder="Enter Your New Password " required />
                                        
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Repeat Password</label>
                                        <input type="password" id="password" class="form-control" name="password" placeholder="Re-Enter Password " required />
                                       
                                    </div>
                                    <div class="mb-3 d-grid">
                                        <button type="submit" class="btn btn-primary" className='btt'>Submit</button>
                                    </div>
                                    <span>
                                        Return to
                                        <a href="">sign in</a>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Nav/><Footer/>
    </div>
  )
}

export default Forgot