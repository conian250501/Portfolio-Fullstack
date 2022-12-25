import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { checkLoginAsync } from "./featureds/Auth/authActions";
import { getIsAuthenticated } from "./featureds/Auth/authSlice";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";

function App() {
  const isAuthenticated = useAppSelector(getIsAuthenticated);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkLoginAsync());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/register"
            element={
              !isAuthenticated ? (
                <DefaultLayout>
                  <Register />
                </DefaultLayout>
              ) : (
                <NotFound />
              )
            }
          />

          <Route
            path="/forgot-password"
            element={
              !isAuthenticated ? (
                <MainLayout>
                  <ForgotPassword />
                </MainLayout>
              ) : (
                <NotFound />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Profile />
                </MainLayout>
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/projects"
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Projects />
                </MainLayout>
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/skills"
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Skills />
                </MainLayout>
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/contacts"
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Contacts />
                </MainLayout>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
