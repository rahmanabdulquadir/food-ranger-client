import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import  img  from "../../assets/images/signIn.svg";
import { toast } from "react-toastify";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        toast.success('User signed in successfully')
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex">
        <div>
          <img style={{width:'500px'}} src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="text-center pt-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  <Link to={"/signup"}>
                    Don't have an account? Sign up here
                  </Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In With Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
