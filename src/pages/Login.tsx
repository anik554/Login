import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navber from "../components/Navber";
import backgroundImage from "../assets/images/isto.jpg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

interface FormData {
  password: string;
  userName: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<Partial<FormData>>({});
  const [valid, setValid] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    password: "",
    userName: "",
  });

  // const handleSignUpClick = () => {
  //   navigate("/SignUp");
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    let validationError: Partial<FormData> = {};

    try {
      const res = await axios.get("http://localhost:3000/Registration");
      const userData: FormData[] = res.data;

      const foundUser = userData.find(
        (user) => user.userName === formData.userName
      );

      if (foundUser) {
        if (foundUser.password === formData.password) {
          alert("Login Successfully");
          navigate("/About");
          setLoggedIn(true);
        } else {
          isValid = false;
          validationError.password = "Wrong Password";
        }
      } else {
        isValid = false;
        validationError.userName = "Username does not exist";
      }
    } catch (err) {
      console.error(err);
    }

    setError(validationError);
    setValid(isValid);
  };

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backdropFilter: "none"
      }}
    >
      <div className="wallpaper">
        <span className="bg-animation"></span>
        {loggedIn && <Navber />}
        <div className="form-box login">
          <h1>Login</h1>
          {!valid && (
            <span style={{ color: "red" }}>
              {error.userName} {error.password}
            </span>
          )}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                required
                name="userName"
                onChange={handleChange}
                value={formData.userName}
              />
              <label htmlFor="">Username</label>
              <PersonIcon className="i" color="inherit" />
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
              <label htmlFor="">Password</label>
              <LockIcon className="i" color="inherit" />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="logreg-link">
              <p>
                Don't have an account?{" "}
                {/* <button onClick={handleSignUpClick} className="register-link">
                  Sign up
                </button> */}
              </p>
            </div>
          </form>
        </div>
        <div className="info-text login">
          <h2>Welcome Back!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            architecto!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
