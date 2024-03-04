import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import Registration from "../pages/registration/Registration";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Layout;
