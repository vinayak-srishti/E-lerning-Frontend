import React from 'react'

function Model() {
  return (
    <div>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <ul class="nav nav-tabs card-header-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" href="#signin" data-bs-toggle="tab" role="tab" aria-selected="true">
              <i class="ci-unlocked me-2 mt-n1"></i>
              Sign in
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#signup"data-bs-toggle="tab" role="tab" aria-selected="false">
              <i class="ci-user me-2 mt-n1"></i>
              Sign up
            </a>
          </li>
        </ul>
        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body tab-content py-4">
        <form class="tab-pane fade show active" id="signin" autocomplete="off">
          <div class="mb-3">
            <label for="email1" class="form-label">Email address</label>
            <input class="form-control" type="email" id="email1" placeholder="johndoe@example.com"/>
          </div>
          <div class="mb-3">
            <label for="pass1" class="form-label">Password</label>
            <div class="password-toggle">
              <input class="form-control" type="password" id="pass1"/>
              <label class="password-toggle-btn">
                <input class="password-toggle-check" type="checkbox"/>
                <span class="password-toggle-indicator"></span>
              </label>
            </div>
          </div>
          <div class="mb-3 d-flex flex-wrap justify-content-between">
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" id="remember"/>
              <label class="form-check-label" for="remember">Remember me</label>
            </div>
            <a class="fs-sm" href="#">Forgot password?</a>
          </div>
          <button class="btn btn-primary d-block btn-shadow" type="submit">Sign in</button>
        </form>
        <form class="tab-pane fade" id="signup" autocomplete="off">
          <div class="mb-3">
            <label for="name" class="form-label">Full name</label>
            <input class="form-control" type="text" id="name" placeholder="John Doe"/>
          </div>
          <div class="mb-3">
            <label for="email2" class="form-label">Email address</label>
            <input class="form-control" type="email" id="email2" placeholder="johndoe@example.com"/>
          </div>
          <div class="mb-3">
            <label for="pass2" class="form-label">Password</label>
            <div class="password-toggle">
              <input class="form-control" type="password" id="pass2"/>
              <label class="password-toggle-btn">
                <input class="password-toggle-check" type="checkbox"/>
                <span class="password-toggle-indicator"></span>
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label for="pass3" class="form-label">Confirm password</label>
            <div class="password-toggle">
              <input class="form-control" type="password" id="pass3"/>
              <label class="password-toggle-btn">
                <input class="password-toggle-check" type="checkbox"/>
                <span class="password-toggle-indicator"></span>
              </label>
            </div>
          </div>
          <button class="btn btn-primary d-block btn-shadow" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Model