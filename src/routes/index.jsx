import { lazy } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import Overview from "../pages/Overview";
const NotFound = lazy(() => import("../pages/404"));

function InappPrivateRoute() {
  const isAuthed = true;
  return isAuthed ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
export default function Approute() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<InappPrivateRoute />}>
          <Route path="/" element={<Overview />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
