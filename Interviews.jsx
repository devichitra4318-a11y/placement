import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function Interviews() {

  const interviews = [
    {
      company: "Infosys",
      position: "Frontend Developer",
      date: "12 Oct 2026",
      time: "10:00 AM"
    },
    {
      company: "TCS",
      position: "Software Developer",
      date: "15 Oct 2026",
      time: "2:00 PM"
    },
    {
      company: "Zoho",
      position: "React Developer",
      date: "18 Oct 2026",
      time: "11:30 AM"
    }
  ];

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <main className="dashboard-main">

          <h1>Interview Schedule</h1>

          <p className="subtitle">
            Your upcoming interviews
          </p>

          <div className="interview-list">

            {interviews.map((interview, index) => (

              <div
                className="interview-card"
                key={index}
              >

                <div className="calendar-icon">
                  📅
                </div>

                <div>

                  <h2>
                    {interview.position}
                  </h2>

                  <p>
                    {interview.company}
                  </p>

                  <p>
                    📅 {interview.date}
                  </p>

                  <p>
                    🕐 {interview.time}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Interviews;