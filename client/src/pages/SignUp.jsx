import React, { useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../Instance/Instance";
import { toast } from "react-toastify";

const SignUp = () => {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      instance
        .post("/api/signup", value)
        .then((res) => {
          if (res.status === 201) {
            toast.success(res.data.msg);
            setLoading(false);
            setError(false);
          }
        })
        .catch((e) => {
          setLoading(loading);
          setError(true);
          console.log(e);
        });
    } catch (e) {
      setError(true);
      console.log(e);
    }
    setValue({ ...value, username: "", email: "", password: "" });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl">SignUp</h1>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <input
          value={value.username}
          onChange={(e) => setValue({ ...value, username: e.target.value })}
          className="p-2 rounded my-4 bg-gray-100"
          placeholder="Username"
          type="text"
        />
        <input
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
          className="p-2 rounded my-4 bg-gray-100"
          placeholder="Email"
          type="email"
        />
        <input
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
          className="p-2 rounded my-4 bg-gray-100"
          placeholder="Password"
          type="password"
        />
        <button
          type="submit"
          className="p-2 rounded my-4 hover:opacity-95 text-white bg-slate-700"
        >
          {loading ? "Loading..." : "SignUp"}
        </button>
      </form>
      <div>
        <p>
          Have an account?{" "}
          <span className="text-blue-400 cursor-pointer">
            <Link to="/sign-in">Sign in</Link>
          </span>
        </p>
      </div>
      <div>
        <p className="text-red-400">{error && "Somethin went wrong"}</p>
      </div>
    </div>
  );
};

export default SignUp;
