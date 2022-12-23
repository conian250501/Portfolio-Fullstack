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
import { toast, ToastContainer } from "react-toastify";
import { FieldValues, useForm } from "react-hook-form";

const Register = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleRegister = (value: FieldValues | RegisterTypes) => {
    dispatch(registerAsync(value as RegisterTypes));
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

        <Box
          component="form"
          width={"100%"}
          onSubmit={handleSubmit(handleRegister)}
        >
          <TextField
            type="email"
            label="Email"
            fullWidth
            size="medium"
            helperText="Please enter your email"
            required
            // value={email}
            {...register("email", {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
            // onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <TextError>*Email invalid</TextError>}
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
            {...register("userName", { maxLength: 25 })}
          />

          {errors.userName && (
            <TextError>*Name must be less than 25 characters</TextError>
          )}

          <TextField
            type={showPassword ? "text" : "password"}
            {...register("password", {
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            })}
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

          {errors.password && (
            <>
              <TextError>*Password must be less 8 character</TextError>
              <TextError>*Password must include 1 number</TextError>
              <TextError>
                *Password must include 1 uppercase character
              </TextError>
            </>
          )}
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
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
                    onMouseDown={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            sx={{
              marginTop: 2,
            }}
          />
          {errors.confirmPassword && (
            <TextError>*Password dont match</TextError>
          )}

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
