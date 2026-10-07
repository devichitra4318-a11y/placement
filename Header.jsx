import { useAuth } from "../context/AuthContext";

function Header() {

  const { user, logout } = useAuth();

  return (
    <header className="top-header">

      <div>
        <h2>Student Placement Dashboard</h2>

        <p>
          Welcome back, {user?.name}
        </p>
      </div>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </header>
  );
}

export default Header;