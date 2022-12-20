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
import { useStyles } from "./registerStyles";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
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

      <Box component="form" width={"100%"}>
        <TextField
          type="email"
          label="Email"
          fullWidth
          size="medium"
          helperText="Please enter your email"
          required
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
        />
        <TextField
          type={showPassword ? "text" : "password"}
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
          type={showPassword ? "text" : "password"}
          label="Confirm password"
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
        <Button
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
  );
};

export default Register;
