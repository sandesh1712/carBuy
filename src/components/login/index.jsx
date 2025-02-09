import "./login.scss";

export default function Login() {
  const submitAction = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login-container">
      <div id="login-box">
        <div className="login-form-header">
          <h4>Login</h4>
        </div>
        <div>
          <div>
            <label>Username or Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div>
            <label>Password</label>
            <input type="text" className="form-control" required />
          </div>
        </div>
        <div>
          <div>
            <a className="link link-primary" href="#">Don't have an account ? Please sign up</a>
          </div>
          <div>
            <button
              className="btn"
              id="login-button"
              onClick={submitAction}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
