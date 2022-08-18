import "./App.css";
import Profile from "./pages/profile/Profile";
import Signin from "./pages/sign-in/Signin";
import { Routes, Route } from "react-router-dom";

function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Signin />;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Signin /> */}
      </Routes>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
