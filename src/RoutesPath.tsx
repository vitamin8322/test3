import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./configs/routes";
import Login1 from "./page/Login1/Login1";
import Login2 from "./page/Logon2/Login2";
import Home from "./page/Home/Home";
import Layout from "./components/Layout/Layout";
import Register from "./page/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomeRoute from "./components/ProtectedRoute/HomeRoute";

interface Props {}

export const RoutesPath = (props: Props) => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Router>
        <Layout />

        {/* <Routes> */}
        {/* </Routes> */}
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.home} element={<Home />} />
          </Route>

          <Route element={<HomeRoute />}>
            <Route path={ROUTES.register} element={<Register />} />
            <Route path={ROUTES.login2} element={<Login2 />} />
            <Route path={ROUTES.login1} element={<Login1 />} />
          </Route>
          <Route path='/' element={<Register />} />
        </Routes>
      </Router>
    </Suspense>
  );
};
