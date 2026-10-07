import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <aside className="sidebar">

      <h2>🎓 Placement</h2>

      <nav>

        <Link to="/dashboard">
          🏠 Dashboard
        </Link>

        <Link to="/jobs">
          💼 Jobs
        </Link>

        <Link to="/applications">
          📋 Applications
        </Link>

        <Link to="/interviews">
          📅 Interviews
        </Link>

        <Link to="/notifications">
          🔔 Notifications
        </Link>

        <Link to="/profile">
          👤 Profile
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;