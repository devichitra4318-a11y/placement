import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function Notifications() {

  const notifications = [
    {
      icon: "📅",
      title: "Interview Reminder",
      message: "Your Infosys interview is tomorrow.",
      time: "2 hours ago"
    },
    {
      icon: "🏢",
      title: "New Company Update",
      message: "Zoho has opened applications.",
      time: "5 hours ago"
    },
    {
      icon: "📢",
      title: "Placement Announcement",
      message: "TCS campus drive registration is open.",
      time: "1 day ago"
    }
  ];

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <main className="dashboard-main">

          <h1>Notifications</h1>

          <p className="subtitle">
            Stay updated with placement activities
          </p>

          <div className="notifications">

            {notifications.map(
              (notification, index) => (

                <div
                  className="notification-card"
                  key={index}
                >

                  <div className="notification-icon">
                    {notification.icon}
                  </div>

                  <div>

                    <h3>
                      {notification.title}
                    </h3>

                    <p>
                      {notification.message}
                    </p>

                    <small>
                      {notification.time}
                    </small>

                  </div>

                </div>

              )
            )}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Notifications;