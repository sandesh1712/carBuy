import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const submitAction = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="m-auto max-w-md overflow-hidden rounded-xl bg-white"
      id="login-box"
    >
      {/* header */}
      <div className="login-title sm:col-span-4">
        <h1>Login</h1>
      </div>

      {/* body */}
      <hr />

      <div className="sm:col-span-4">
        <div className="mt-2">
          <label htmlFor="username" className="block text-gray-900">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password" className="block text-gray-900">
            Passowrd
          </label>
          <input
            id="password"
            type="password"
            className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
          />
        </div>
      </div>

      <hr />

      {/* footer */}
      <div className="sm:col-span-4">
        <div className="mt-2">
          <Link
            to="/signup"
            className="underline link text-sky-600 hover:text-purple-600"
          >
            Don't have an account ? Sign Up
          </Link>
        </div>
        <div className="mt-2">
          <button
            id="login-btn"
            className="w-xl px-4 py-2 border border-gray-600 rounded-md"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
