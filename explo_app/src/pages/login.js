import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'



function LoginPage() {

    function handleSubmit(event) {
        event.preventDefault();
        window.location.href = '/home';
    }

    return (
        <section class="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style={{ borderRadius: "15px" }}>
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Login</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example1cg" class="form-control form-control-lg" required/>
                                            <label class="form-label" for="form3Example1cg">Email</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example3cg" class="form-control form-control-lg" required/>
                                            <label class="form-label" for="form3Example3cg">Password</label>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button type="submit"
                                                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                        </div>
                                        <p class="text-center text-muted mt-5 mb-0">
                                            Need to register? <Link to="/register" class="fw-bold text-body"><u>Register here</u></Link>
                                        </p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default LoginPage;