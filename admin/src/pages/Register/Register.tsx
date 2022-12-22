import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { TextError, useStyles } from "./registerStyles";
import { Link } from "react-router-dom";
import { RegisterTypes } from "../../common/types";
import { useAppDispatch } from "../../app/hooks";
import { registerAsync } from "../../featureds/Auth/authActions";
import { ToastContainer } from "react-toastify";

const Register: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data: RegisterTypes = {
      email,
      userName,
      password,
      confirmPassword,
    };
    dispatch(registerAsync(data));
  };

  return (
    <>
      <Box component="div" className={classes.container}>
        <Typography
          variant="h2"
          noWrap
          align="center"
          fontWeight="bold"
          fontSize="50px"
          mb={2}
          sx={{
            fontSize: {
              mobile: "40px",
              tablet: "50px",
              laptop: "50px",
            },
          }}
        >
          Portfolio App
        </Typography>

        <Box component="form" width={"100%"} onSubmit={handleRegister}>
          <TextField
            type="email"
            label="Email"
            fullWidth
            size="medium"
            helperText="Please enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="text"
            label="Name"
            fullWidth
            size="medium"
            helperText="Please enter your name"
            required
            sx={{
              marginTop: 2,
            }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            fullWidth
            size="medium"
            helperText="Please enter your password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            sx={{
              marginTop: 2,
            }}
          />
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm password"
            fullWidth
            size="medium"
            helperText="Please enter your password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    onMouseDown={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            sx={{
              marginTop: 2,
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="medium"
            color="secondary"
            sx={{
              marginTop: 2,
              padding: "10px",
              fontWeight: "600",
              ":hover": {
                boxShadow: "6px 6px 0px rgba(0,0,0,1)",
              },
              borderRadius: 0,
              background: "#e0f954 !important",
            }}
          >
            Register
          </Button>
          <Link to="/login">
            <Typography
              variant="h2"
              sx={{
                fontSize: "14px",
                marginTop: 2,
                textAlign: "center",
              }}
            >
              Already have an account?{" "}
              <Typography
                variant="body1"
                sx={{
                  color: "blue",
                  fontSize: "14px",
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                Login now
              </Typography>
            </Typography>
          </Link>
        </Box>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Register;
