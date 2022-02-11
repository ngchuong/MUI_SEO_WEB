/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Icon from "@mui/material/Icon";
import Dashboard from "./layouts/dashboard";
// import Tables from "./layouts/tables";
import Billing from "./layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";
import DoTask from "./layouts/task";
import Guideline from "./layouts/guideline";
import Home from "./layouts/home";

import ManageTask from "./layouts/admin/manageTask";
import ManageUser from "./layouts/admin/manageUser";

const routeUser = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Làm nhiệm vụ kiếm tiền",
    key: "task",
    icon: <Icon fontSize="small">task</Icon>,
    route: "/task",
    component: <DoTask />,
  },
  {
    type: "collapse",
    name: "Hướng dẫn làm nhiệm vụ",
    key: "guideline",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/guide",
    component: <Guideline />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  {
    type: "collapse",
    name: "Rút tiền",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Tài khoản",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

const routeAdmin = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Quản lý user",
    key: "manage-user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/manage-user",
    component: <ManageUser />,
  },
  {
    type: "collapse",
    name: "Quản lý nhiệm vụ",
    key: "manage-task",
    icon: <Icon fontSize="small">task</Icon>,
    route: "/manage-task",
    component: <ManageTask />,
  },
  // {
  //   type: "collapse",
  //   name: "table",
  //   key: "manage-table",
  //   icon: <Icon fontSize="small">task</Icon>,
  //   route: "/manage-table",
  //   component: <Tables />,
  // },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

const getRoutes = (isRoleAdmin) => {
  const routes = isRoleAdmin ? routeAdmin : routeUser;
  return routes;
};

export default getRoutes;
