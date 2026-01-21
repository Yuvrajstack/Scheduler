import "./login.css";
import loginBg from "../assets/login-bg.jpg";
import { FaUser, FaLock, FaEye } from "react-icons/fa";

const Login = () => {

  return (
    <div className="login-wrapper">
    <div
 className="login-left"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        
  </div>

  <div className="login-right">
        <div className="login-card">
          <h2>
     LOG IN TO TRACK
          <br />
         YOUR STUDY STREAK
          </h2>

          <p className="sub-text">
            Access your syllabus, timetable
      <br />
      and daily progress dashboard
          </p>

          <div className="input-box">
            <FaUser className="input-icon" />
      <input type="email" placeholder="ENTER EMAIL" />
          </div>

          <div className="input-box">
          <FaLock className="input-icon" />
            <input type="password" placeholder="ENTER PASSWORD" />
         <FaEye className="eye-icon" />
          </div>

          <div className="options">
         <label>
              <input type="checkbox" /> Remember me
          </label>
   <a href="#">Forgot password?</a>
          </div>

          <button
     className="login-btn"
            
          >
            START MY STREAK
          </button>

          <p
className="bottom-text"
        style={{ cursor: "pointer", textDecoration: "underline" }}
            
          >
            CREATE A NEW ACCOUNT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
