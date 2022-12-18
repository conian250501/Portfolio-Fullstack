import { Button, TextField, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./loginStyles";

type Props = {};

const Login = (props: Props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div className={classes.container}>
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
        <TextField
          id="email"
          label="email"
          variant="outlined"
          size="medium"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="password"
          variant="outlined"
          size="medium"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            float: "right",
            marginTop: "8px",
            marginBottom: "12px",
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
            flexDirection: {
              mobile: "column",
              tablet: "row",
              laptop: "row",
            },
          }}
        >
          <Link to="/forgotpassword">
            <Typography
              variant="h2"
              fontSize={14}
              color="blue"
              fontWeight="400"
              sx={{
                textDecoration: "underline",
                marginBottom: {
                  mobile: "8px",
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
    </div>
  );
};

export default Login;
