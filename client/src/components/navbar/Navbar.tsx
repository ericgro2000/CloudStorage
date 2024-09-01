import "./navbar.css";
import Logo from "../../assets/imgs/clodyimg.jpeg";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/store";
import { logout } from "store/reducers/userReducer";
const Navbar = () => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const dispatch = useAppDispatch();

  return (
    <div className="navbar">
      <div className="container">
        {/* <img src={Logo} alt="" className="navbar__logo"/> */}
        <div className="navbar__header">Cloudy</div>
        {!isAuth ? (
          <>
            <div className="navbar__login">
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className="navbar__registration">
              <NavLink to="/registration">Registration</NavLink>
            </div>
          </>
        ) : (
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            <NavLink to="/login">Logout</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
