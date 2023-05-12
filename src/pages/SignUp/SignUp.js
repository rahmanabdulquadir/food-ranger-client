import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import img from "../../assets/images/undraw_sign_up_n6im.svg";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
    handleUpdateUserProfile(name, photoURL);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex">
        <div>
          <img style={{width: '500px'}} src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center pt-10">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
          </div>
          <form onSubmit={handleSignUp} className="card-body w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
                  <Link to={"/login"}>
                    Already jave an account? Please login here.
                  </Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <div onClick={handleGoogleSignIn} className="form-control mt-6">
              <button className="btn btn-primary">Sign In With Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
