import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
interface ProtectRouteProps {
  children: ReactNode;
}
const Providers: FC<ProtectRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = Boolean(localStorage.getItem("userData"));
  useEffect(() => {
    if (isAuth && (pathname === "/" || pathname === "/registration")) {
      navigate("/home");
    } else if (!isAuth && pathname === "/home") {
      navigate("/");
    }
  }, [isAuth, pathname, navigate]);
  return children;
};

export default Providers;
