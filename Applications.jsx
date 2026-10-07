import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function Applications() {

  const applications = [
    {
      company: "TCS",
      position: "Software Developer",
      status: "Shortlisted"
    },
    {
      company: "Infosys",
      position: "Frontend Developer",
      status: "Interview"
    },
    {
      company: "Wipro",
      position: "Java Developer",
      status: "Applied"
    },
    {
      company: "Zoho",
      position: "React Developer",
      status: "Selected"
    }
  ];

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <main className="dashboard-main">

          <h1>My Applications</h1>

          <p className="subtitle">
            Track all your job applications
          </p>

          <div className="applications-list">

            {applications.map((application, index) => (

              <div
                className="application-card"
                key={index}
              >

                <div>

                  <h2>
                    {application.position}
                  </h2>

                  <p>
                    {application.company}
                  </p>

                </div>

                <span
                  className={`status ${application.status.toLowerCase()}`}
                >
                  {application.status}
                </span>

              </div>

            ))}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Applications;