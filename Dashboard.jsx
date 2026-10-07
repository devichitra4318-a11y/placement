import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import StatCard from "../Components/StatCard";

function Dashboard() {

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <main className="dashboard-main">

          <h1>Dashboard</h1>

          <p className="subtitle">
            Track your placement journey
          </p>

          <div className="stats-grid">

            <StatCard
              icon="💼"
              title="Applications"
              value="12"
            />

            <StatCard
              icon="📅"
              title="Interviews"
              value="4"
            />

            <StatCard
              icon="🎯"
              title="Shortlisted"
              value="6"
            />

            <StatCard
              icon="🏆"
              title="Selected"
              value="2"
            />

          </div>

          <div className="dashboard-grid">

            <div className="panel">

              <h2>Application Statistics</h2>

              <div className="chart">

                <div>
                  <span>Applied</span>
                  <div
                    className="bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <div>
                  <span>Shortlisted</span>
                  <div
                    className="bar"
                    style={{ width: "55%" }}
                  ></div>
                </div>

                <div>
                  <span>Interviews</span>
                  <div
                    className="bar"
                    style={{ width: "40%" }}
                  ></div>
                </div>

                <div>
                  <span>Selected</span>
                  <div
                    className="bar"
                    style={{ width: "20%" }}
                  ></div>
                </div>

              </div>

            </div>

            <div className="panel">

              <h2>Upcoming Deadlines</h2>

              <div className="deadline">
                <strong>Infosys</strong>
                <span>18 Oct 2026</span>
              </div>

              <div className="deadline">
                <strong>Wipro</strong>
                <span>20 Oct 2026</span>
              </div>

              <div className="deadline">
                <strong>Accenture</strong>
                <span>22 Oct 2026</span>
              </div>

              <div className="deadline">
                <strong>Zoho</strong>
                <span>25 Oct 2026</span>
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;