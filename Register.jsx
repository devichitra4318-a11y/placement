import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !email || !password) {

      setError("Please fill all fields.");

      return;
    }

    alert("Registration successful!");

    navigate("/");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>🎓 Placement Portal</h1>

        <h2>Create Account</h2>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?
          {" "}

          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;