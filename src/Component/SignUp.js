import React from 'react'
import logo from '../Images/mainicon1.png'
import Nav from './Nav'
import Footer from './Footer'

function SignUp() {
  return (
    <div>
        <section class="container d-flex flex-column vh-100"><br/><br/><br/><br/>
                <div class="row align-items-center justify-content-center g-0 h-lg-100 py-8">
                    <div class="col-lg-15 col-md-8 py-8 py-xl-0">
                        <div class="card shadow">
                            <div class="card-body p-6">
                                <div class="mb-4">
                                    <a href=""><img src={logo} class="img-fluid" className='img'alt="logo-icon"/></a>
                                    <h1 class="mb-1 fw-bold">Sign up</h1>
                                    <span>
                                        Already have an account? 
                                        <a href="" class="ms-1">Sign in</a>
                                    </span>
                                </div>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" id="floatingInput" placeholder="First Name"/>
                                                <label for="floatingInput">First Name</label>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                        <div class="form-floating mb-3">
                                                <input type="text" class="form-control" id="floatingInput" placeholder="Last Name"/>
                                                <label for="floatingInput">Last Name</label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4 d-flex align-items-center">
                                        <div class="form-outline datepicker w-100">
                                        <div class="form-floating mb-3">
                                            <input type="date" class="form-control" id="birthdayDate" placeholder='Date of Birth' />
                                            <label for="birthdayDate"> Date of Birth</label>
                                        </div>
                                        </div>

                                        </div>
                                        <div class="col-md-6 mb-4">
                                        <h6 class="mb-2 pb-1">Gender: </h6>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                            value="option2" />
                                            <label class="form-check-label" for="maleGender">Male</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                            value="option2" />
                                            <label class="form-check-label" for="maleGender">Female</label>
                                        </div>

                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                            value="option3" />
                                            <label class="form-check-label" for="otherGender">Other</label>
                                        </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4 pb-2">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Mobile Number"/>
                                            <label for="floatingInput">Mobile Number</label>
                                        </div>
                                        </div>
                                        <div class="col-md-6 mb-4 pb-2">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="name@example.com"/>
                                            <label for="floatingPassword">Email Address</label>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4 pb-2">
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="password"/>
                                            <label for="floatingInput">Password</label>
                                        </div>
                                        </div>
                                        <div class="col-md-6 mb-4 pb-2">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="ConformPassword"/>
                                            <label for="floatingPassword">Conform Password</label>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="agreeCheck" required />
                                            <label class="form-check-label" for="agreeCheck">
                                                <span>
                                                    I agree to the Terms of Service 
                                                    and Privacy Policy.
                                                </span>
                                            </label>
                                            <div class="invalid-feedback">You must agree before submitting.</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="d-grid">
                                            <button type="submit" class="btn btn-primary" className='btt'>Create Free Account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
            </section><br/><br/>
            <Nav/><Footer/>
    </div>
  )
}

export default SignUp