import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import faceImage from "../assets/images/1.png";
import DGFPLogo from "../assets/images/dgfpLogo.png";
import Govlog from "../assets/images/govLogo.png";
import bgImage from "../assets/images/isto.jpg";
const Login2 = () => {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
    setPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setUsernameFocused(false);
  };

  const handleBlur = () => {
    setUsernameFocused(false);
    setPasswordFocused(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#081b29",
        fontFamily: "poppins, sans-serif",
        color: "white",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "700px",
          padding: "20px",
          border: "3px solid #0ef",
          borderRadius: "10px",
          boxShadow: "0 0 30px #0ef",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "linear-gradient(45deg, #081b29, #0ef)",
          transform: "rotate(0) skewY(0)",
          transformOrigin: "bottom right",
          borderBottom: "3px solid #0ef",
        }}
      >
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} sm={12} lg={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img
                src={Govlog}
                alt=""
                width={47}
                height={47}
                style={{ padding: 10 }}
              />
              <img src={DGFPLogo} alt="DGFPLogo" width={100} height={60} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <Typography
              align="center"
              sx={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Welcome to{" "}
              <span style={{ color: "red" }}>
                <b>SAM</b>
              </span>
            </Typography>
            <div style={{ textAlign: "center", paddingTop: "1rem" }}>
              <img
                src={faceImage}
                alt="faceImage"
                width={"250"}
                height={"250"}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} padding={3}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Login
            </Typography>

            <TextField
              label="Username"
              size="small"
              variant="standard"
              type="text"
              fullWidth
              sx={{ marginBottom: "15px" }}
              className={`textfield${usernameFocused ? " focused" : ""}`}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon
                      sx={{ color: usernameFocused ? "#0ef" : "inherit" }}
                    />
                  </InputAdornment>
                ),
                sx: { color: usernameFocused ? "#fff" : "inherit" },
              }}
              InputLabelProps={{
                className: usernameFocused ? "focused-label" : "",
              }}
              onFocus={handleUsernameFocus}
              onBlur={handleBlur}
            />
            <TextField
              label="Password"
              size="small"
              variant="standard"
              type="password"
              fullWidth
              sx={{ marginBottom: "15px" }}
              className={`textfield${passwordFocused ? " focused" : ""}`}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon
                      sx={{ color: passwordFocused ? "#0ef" : "inherit" }}
                    />
                  </InputAdornment>
                ),
                sx: { color: passwordFocused ? "#fff" : "inherit" },
              }}
              InputLabelProps={{
                className: passwordFocused ? "focused-label" : "",
              }}
              onFocus={handlePasswordFocus}
              onBlur={handleBlur}
            />

            <Button
              variant="contained"
              fullWidth
              className="btn"
              size="large"
              sx={{
                borderRadius: "40px",
                marginBottom: "15px",
                fontWeight: "bold",
                
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
          <Typography align="center" fontSize={"11px"} variant="subtitle2" color={"lightBlue"} >
              {" "}
              Technical Assistant By:{" "}
              <span style={{color: "lightBlue"}}>
                <b>Crystal Technology Bangladesh Ltd.</b>
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login2;
