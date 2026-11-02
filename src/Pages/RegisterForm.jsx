import { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  // إظهار وإخفاء الباسورد
  const [showPassword, setShowPassword] = useState();
  const [showConfirm, setShowConfirm] = useState();

  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const usernameError =
    username.length < 3 || username.length > 25;

  const emailError = !emailRegex.test(email);
  const passwordError = !passwordRegex.test(password);

  const confirmError =
    !confirmPassword || password !== confirmPassword;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
if (!usernameError && !emailError && !passwordError && !confirmError) {
  login();
  navigate("/products", { replace: true });

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSubmitted(false);
    }
  }

  return (
    <div className="container mt-5">
      <Link to="/home"
       className="btn btn-outline-dark mb-4"
      >
       ← Back to Home
      </Link>
       
      <BackButton />

      
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Sign Up</h2>

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username:</label>

                <input
                  type="text" placeholder="Please Enter your name"
                  className={`form-control ${
                    (username || submitted)
                      ? usernameError ? "is-invalid" : "is-valid" 
                      : ""
                  }`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                {(username || submitted) && usernameError && (
                  <div className="invalid-feedback">
                    Username must be between 3 and 25 characters.
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email:</label>

                <input
                  type="text" placeholder="Please Enter Email address.."
                  className={`form-control ${
                    (email || submitted)
                      ? emailError ? "is-invalid" : "is-valid"
                      : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {(email || submitted) && emailError && (
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password:</label>

                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"} 
                     placeholder="Please Enter password"
                    className={`form-control ${
                      (password || submitted)
                        ? passwordError ? "is-invalid" : "is-valid"
                        : ""
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>

                {(password || submitted) && passwordError && (
                  <div className="text-danger small mt-1">
                    At least 8 characters, one lowercase, one
                    uppercase, one number, and one special character.
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label className="form-label">
                  Confirm Password:
                </label>

                <div className="input-group">
                  <input
                    type={showConfirm ? "text" : "password" }
                    className={`form-control ${
                      (confirmPassword || submitted)
                        ? confirmError ? "is-invalid" : "is-valid"
                        : ""
                    }`}
                    placeholder="Reenter your password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? "🙈" : "👁️"}
                  </button>
                </div>
                

                {(confirmPassword || submitted) && confirmError && (
                  <div className="text-danger small mt-1">
                    Passwords do not match.
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;