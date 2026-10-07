import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { useAuth } from "../context/AuthContext";

function Profile() {

  const { user } = useAuth();

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <main className="dashboard-main">

          <h1>My Profile</h1>

          <div className="profile-card">

            <div className="profile-avatar">
              👤
            </div>

            <h2>{user?.name}</h2>

            <p>
              {user?.email}
            </p>

            <div className="profile-info">

              <p>
                <strong>Department:</strong>
                {" "}
                {user?.department}
              </p>

              <p>
                <strong>Year:</strong>
                {" "}
                {user?.year}
              </p>

              <p>
                <strong>Placement Status:</strong>
                {" "}
                Actively Looking
              </p>

            </div>

            <button>
              Edit Profile
            </button>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Profile;