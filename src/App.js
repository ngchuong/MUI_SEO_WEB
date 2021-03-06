import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// react-router components
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";

// Material Dashboard 2 React routes
import { routeDefault, routeUser, routeAdmin } from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

import { updateUserInfo } from "store/reducers/user";
import { reqGetCurrentTask } from "actions/task";
import { requesVerify } from "./api/index";
import { setCookie, getCookie, eraseCookie } from "./utils/cookie";
import { isMobile } from "./utils";

export default function App() {
  const navigate = useNavigate();
  const usedDispatch = useDispatch();
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const [isVerify, setIsVerify] = useState(false);

  const { pathname } = useLocation();

  const userInfo = getCookie("user") ? JSON.parse(getCookie("user")) : {};

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // request data
  useEffect(() => {
    if (userInfo && userInfo.id && !userInfo.is_admin && isMobile()) {
      usedDispatch(reqGetCurrentTask());
    }
  }, [pathname]);

  // verify every when redirect
  useEffect(async () => {
    if (pathname !== "/home") {
      let responseVerify;
      try {
        responseVerify = await requesVerify();
      } catch (err) {
        eraseCookie("user");
        return;
      }

      if (responseVerify && /20[0-9]/.test(responseVerify.status)) {
        eraseCookie("user");
        setCookie("user", responseVerify.data);
        usedDispatch(updateUserInfo(responseVerify.data));
        setIsVerify(true);
      } else {
        eraseCookie("user");
        navigate("/authentication/sign-in");
      }
    }
  }, [pathname]);

  const isRoleAdmin = userInfo && userInfo.is_admin;
  const isPageHome = window.location.href.includes("home");

  // routing
  const checkRoutes = (isSignIn, isAdmin) => {
    let routes = routeDefault;
    if (isSignIn) {
      routes = isAdmin ? [...routes, ...routeAdmin] : [...routes, ...routeUser];
    }

    return routes;
  };

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const routeNeedFilter = ["sign-in", "sign-up", "home", "feeder-page"];
  const displayRouter =
    checkRoutes(isVerify, isRoleAdmin).filter((el) => !routeNeedFilter.includes(el.key)) || [];

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {isVerify && !isPageHome && layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="B???ng ??i???u khi???n"
            routes={displayRouter}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
        </>
      )}
      <Routes>
        {getRoutes(checkRoutes(userInfo.email, isRoleAdmin))}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}
