import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [error, setError] = useState<Partial<FormData>>({});
  const [valid, setValid] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    let validationError: Partial<FormData> = {};
    // if (formData.userName === " " || formData.userName === null) {
    //   isValid = false;
    //   validationError.userName = "UserName is Required";
    // }
    // if (formData.email === " " || formData.email === null) {
    //   isValid = false;
    //   validationError.email = "Email is Required";
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   isValid = false;
    //   validationError.email = "Email is not Valid";
    // }
    if (formData.password === " " || formData.password === null) {
      isValid = false;
      validationError.password = "Password is Required";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationError.password = "Password is less than 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      isValid = false;
      validationError.confirmPassword = "Password does not match";
    }

    setError(validationError);
    setValid(isValid);

    if (Object.keys(validationError).length === 0) {
      axios
      .post("http://localhost:3000/Registration", formData)
      .then((res) => {
        if (res.status === 201) {
          setFormData(res.data);
          alert("Form Submitted");
          navigate('/')
        }
        // setFormData({
        //   userName: "",
        //   email: "",
        //   password: "",
        //   confirmPassword: "",
        // });
      })
      .catch((err) => console.log(err)); 
    }
  };

  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate("/");
  };

  return (
    <div className="body">
      <div className="wallpaper">
        <span className="bg-animation"></span>
        {!valid && (
          <span style={{color: "red"}}>
            {error.password}{" "}
            {error.confirmPassword}
          </span>
        )}
        <div className="form-box register">
          <h1>Registration</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                required
                type="text"
                name="userName"
                onChange={handleChange}
                value={formData.userName}
              />
              <label htmlFor="">Username</label>
              <i className="bx bxs-user"></i>
            </div>
            
            <div className="input-box">
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <label htmlFor="">Email</label>
              <i className="bx bx-envelope"></i>
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
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
              <label htmlFor="">Confirmed Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Sign up
            </button>
            <div className="logreg-link">
              <p>
                Already have an Account?{" "}
                <button onClick={handleSignUpClick} className="register-link">
                  Sign in
                </button>
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

export default SignUp;
