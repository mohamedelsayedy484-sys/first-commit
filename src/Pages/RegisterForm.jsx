
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import BackButton from "../Components/BackButton";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  // Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const usernameError = username.length < 3 || username.length > 25;
  const emailError = !emailRegex.test(email);
  const passwordError = !passwordRegex.test(password);
  const confirmError = !confirmPassword || password !== confirmPassword;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (usernameError || emailError || passwordError || confirmError) {
      return;
    }

    login();
    navigate("/products", { replace: true });

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setSubmitted(false);
  }

  // Password visibility icon
  function EyeIcon({ visible }) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {visible ? (
          <>
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
            <path d="m3 3 18 18" />
          </>
        ) : (
          <>
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </>
        )}
      </svg>
    );
  }

  return (
    <div className="register-page">
      <div className="container py-4">
        <BackButton />

        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="register-card">
              <div className="text-center mb-4">
                <h2 className="register-title">Create Account</h2>
                <p className="register-subtitle">
                  Create your account to get started.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
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
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
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
                      Please enter a valid email address.
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>

                  <div className="password-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
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
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <EyeIcon visible={showPassword} />
                    </button>
                  </div>

                  {(password || submitted) && passwordError && (
                    <div className="text-danger small mt-1">
                      At least 8 characters, including uppercase, lowercase,
                      number and special character.
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>

                  <div className="password-wrapper">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm your password"
                      className={`form-control ${
                        (confirmPassword || submitted)
                          ? confirmError ? "is-invalid" : "is-valid"
                          : ""
                      }`}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirm(!showConfirm)}
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                    >
                      <EyeIcon visible={showConfirm} />
                    </button>
                  </div>

                  {(confirmPassword || submitted) && confirmError && (
                    <div className="text-danger small mt-1">
                      Passwords do not match.
                    </div>
                  )}
                </div>

                <button type="submit" className="register-btn">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
