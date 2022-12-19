import { Button, IconButton, InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { InputForm, useStyles } from "./loginStyles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = () => setIsShowPassword(!isShowPassword);
  const handleMouseDownPassword = () => setIsShowPassword(!isShowPassword);

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };
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
      <Box component="form" onSubmit={handleLogin}>
        <InputForm
          value={email}
          id="email"
          label="email"
          variant="outlined"
          size="medium"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputForm
          value={password}
          id="password"
          label="password"
          variant="outlined"
          size="medium"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          type={isShowPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {isShowPassword ? <Visibility /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          color="secondary"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            marginTop: "8px",
            fontWeight: 600,
            padding: "10px",
            ":hover": {
              boxShadow: "6px 6px 0px rgba(0,0,0,1)",
            },
            borderRadius: 0,
            background: "#e0f954 !important",
          }}
        >
          Login
        </Button>

        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "18px",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Link to="/forgot-password">
            <Typography
              variant="h2"
              fontSize={14}
              color="blue"
              fontWeight="400"
              sx={{
                textDecoration: "underline",
                marginBottom: {
                  mobile: "8px",
                  tablet: "0",
                  laptop: "0",
                },
              }}
            >
              Forgot password?
            </Typography>
          </Link>

          <Link to="/register">
            <Typography
              variant="h2"
              fontSize={14}
              color="blue"
              fontWeight="400"
              sx={{
                textDecoration: "underline",
              }}
            >
              Dont have an account? Sign up
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
