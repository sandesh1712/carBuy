import { Link } from "react-router-dom";
import "./login.scss";

export default function Signup() {
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
        <h1>Sign Up</h1>
      </div>

      {/* body */}
      <hr />
      <div className="grid grid-cols-4 gap-4">
        <div className="sm:col-span-4 mt-2">
            <label htmlFor="username" className="block text-gray-900">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
            />
        </div>

        <div className="sm:col-span-4 mt-2">
            <label htmlFor="phone" className="block text-gray-900">
              Phone
            </label>
            <input
              id="phone"
              type="tele"
              className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
            />
        </div>

        <div className="sm:col-span-2 mt-2">
            <label htmlFor="password" className="block text-gray-900">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
            />
        </div>
        
        <div className="sm:col-span-2 mt-2">
            <label htmlFor="password" className="block text-gray-900">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
            />
        </div>
        
        <div className="sm:col-span-4 mt-2">
            <label htmlFor="birthdate" className="block text-gray-900">
              Birth Date
            </label>
            <input
              id="birthdate"
              type="date"
              className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
            />
        </div>

        <div className="sm:col-span-2 mt-2">
          <label htmlFor="password" className="block text-gray-900">
           Password
          </label>
          <input
            id="password"
            type="password"
            className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
          />
        </div>
        <div className="sm:col-span-2 mt-2">
          <label htmlFor="password" className="block text-gray-900">
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            className="rounded-md block min-w-0 w-full grow py-1.5 pr-3 pl-1 text-base text-gray-900 sm:text-sm/6 border border-gray-300"
          />
        </div>
      </div>


      {/* footer */}
      <div className="sm:col-span-4">
        <div className="mt-3">
          <Link
            to="/login"
            className="underline link text-sky-600 hover:text-purple-600"
          >
            Already have an account ? Login
          </Link>
        </div>
        <div className="mt-3">
          <button
            id="login-btn"
            className="w-xl px-4 py-2 border border-gray-600 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
