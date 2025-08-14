import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignAndLog.css";

function SignAndLog() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [action, setAction] = useState("Sign Up");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (mode) => {
    if (mode === "Sign Up") {
      if (!name || !email || !password || !confirmPassword) {
        setSuccessMessage("Please fill in all fields for Sign Up.");
        return;
      }
      if (password !== confirmPassword) {
        setSuccessMessage("❌ Passwords do not match.");
        return;
      }
      setSuccessMessage(`✅ Signed up successfully as ${name}`);
      console.log("Signed up:", { name, email, password });
    } else {
      if (!email || !password) {
        setSuccessMessage("Please enter email and password for Log in.");
        return;
      }
      setSuccessMessage(`✅ Logged in successfully as ${email}`);
      console.log("Logged in:", { email, password });
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const switchAction = (mode) => {
    setAction(mode);
    setSuccessMessage("");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-3 fw-bold">{action}</h2>
            <div className="text-center mb-4">
              <div className="underline mx-auto"></div>
            </div>

            <form>
              {action === "Sign Up" && (
                <>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </>
              )}

              {action === "Log in" && (
                <>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-end mb-3">
                    <a href="#" className="text-decoration-none text-primary">
                      Lost Password?
                    </a>
                  </div>
                </>
              )}

              <div className="d-flex justify-content-between button_lebel">
                <button
                  type="button"
                  className={`btn ${action === "Sign Up" ? "btn_clo" : "btn_out"}`}
                  onClick={() => {
                    switchAction("Sign Up");
                    handleSubmit("Sign Up");
                  }}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className={`btn ${action === "Log in" ? "btn_clo" : "btn_out"}`}
                  onClick={() => {
                    switchAction("Log in");
                    handleSubmit("Log in");
                  }}
                >
                  Log in
                </button>
              </div>
            </form>

            {successMessage && (
              <div className="alert alert-info mt-4 text-center" role="alert">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignAndLog;