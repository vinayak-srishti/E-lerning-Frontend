import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import logo from '../Images/mainicon1.png'

function Login_IS() {
  return (
    <div className='cl'>
        <section class="container d-flex flex-column vh-100"><br/><br/><br/><br/><br/><br/>
                <div class="row align-items-center justify-content-center g-0 h-lg-100 py-8">
                    <div class="col-lg-5 col-md-8 py-8 py-xl-0">
                        <div class="card shadow">
                            <div class="card-body p-6">
                                <div class="mb-4">
                                    <a href=""><img src={logo} class="img-fluid" className='img'alt="logo-icon"/></a>
                                    <h1 class="mb-1 fw-bold">Login</h1>
                                    <span>
                                        Don't have an account?
                                        <Link to="/regpage">  Signup</Link>
                                    </span>
                                </div>

                                <form class="needs-validation" novalidate>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Username or email</label>
                                        <input type="email" id="email" class="form-control" name="email" placeholder="Email address here" required/>
                                        <div class="invalid-feedback">Please enter valid username.</div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" id="password" class="form-control" name="password" placeholder="**************" required/>
                                        <div class="invalid-feedback">Please enter valid password.</div>
                                    </div>
                                    <div class="d-lg-flex justify-content-between align-items-center mb-4">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="rememberme" required/>
                                            <label class="form-check-label" for="rememberme">Remember me</label>
                                            <div class="invalid-feedback">You must agree before submitting.</div>
                                        </div>
                                        <div>
                                            <Link to="/forgotpassword">Forgot your password?</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <div >
                                        <div class="d-grid" >
                                            <button type="submit" class="btn btn-primary" className='btt'>Login</button>
                                        </div>
                                        </div>
                                    </div>
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

export default Login_IS