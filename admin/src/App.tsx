import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import CreateProject from "./components/Projects/CreateProject";
import CreateType from "./components/Projects/CreateType";
import ProjectList from "./components/Projects/List/List";
import { checkLoginAsync } from "./featureds/Auth/authActions";
import { getIsAuthenticated } from "./featureds/Auth/authSlice";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import MainLayout from "./layouts/MainLayout";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ProjectPage from "./pages/Projects/ProjectPage";
import CreatePage from "./pages/Projects/ProjectPage";
import Register from "./pages/Register";
import Skills from "./pages/Skills";

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
          <Route path="/">
            <Route
              path=""
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
              path="register"
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
              path="forgot-password"
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
          </Route>

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
            path="/project"
            element={
              isAuthenticated ? (
                <MainLayout>
                  <ProjectPage />
                </MainLayout>
              ) : (
                <Login />
              )
            }
          >
            <Route path="create-project" element={<CreateProject />} />
            <Route path="create-type" element={<CreateType />} />
            <Route path="all" element={<ProjectList />} />
          </Route>
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
