import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  // console.log(createUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    // get for data

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const photo = e.target.photo.value;
    // console.log(name, email, password, photo);

    //another way
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be 5 characters or longer" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => console.log(error.code));
  };

  return (
    <div className="card bg-base-100 w-full max-w-lg rounded-none p-8">
      <h2 className="text-xl text-center font-bold p-4">
        Register Your Account
      </h2>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
          <p className="text-sm text-red-500 font-bold">
            {error.name && error.name}
          </p>
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo Url"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white rounded-none">
            Register
          </button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Already Have An Account?{" "}
        <Link to="/auth/login" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
