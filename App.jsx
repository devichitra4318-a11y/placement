import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Jobs from "./Pages/Jobs";
import Applications from "./Pages/Applications";
import Interviews from "./Pages/Interviews";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/interviews"
          element={<Interviews />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;