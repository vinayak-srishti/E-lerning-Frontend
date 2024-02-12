import React from 'react'
import img from '../Images/logo.jpg'
import logo from '../Images/mainicon1.png'
import elearn from '../Images/E-learning.png'
import lette from '../Images/letter.png'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='cl'>
        <section class="container d-flex flex-column vh-100"><br/><br/><br/><br/><br/><br/>
                <div class="row align-items-center justify-content-center g-0 h-lg-100 py-8">
                    <div class="col-lg-5 col-md-8 py-8 py-xl-0">
                        <div class="card shadow">
                            <div class="card-body p-6"><br/><br/>
                                <div class="mb-4">
                                    <h1 class="mb-1 fw-bold" style={{textAlign:"center"}}>LOGIN-ADMIN</h1>
                                </div>

                                <form class="needs-validation" novalidate>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Username</label>
                                        <input type="email" id="email" class="form-control" name="email" placeholder="User Name" required/>
                                        <div class="invalid-feedback">Please enter valid username.</div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" id="password" class="form-control" name="password" placeholder="**************" required/>
                                        <div class="invalid-feedback">Please enter valid password.</div>
                                    </div>
                                    <div><br/>
                                        <div>
                                        <div class="d-grid">
                                            <button type="submit" class="btn btn-primary" className='btt'>Login</button>
                                        </div>
                                        </div>
                                    </div>
                                </form>
                            </div><br/><br/>
                        </div>
                    </div>
                </div>
            </section>
            <Nav/><Footer/>
    </div>
  )
}

export default Login