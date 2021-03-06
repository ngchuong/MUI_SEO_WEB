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
import Billing from "./layouts/billing";
// import RTL from "layouts/rtl";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";
// import ReceiveTask from "./layouts/task/receiveTask";
// import DoTask from "./layouts/task/doTask";
import DoOnlyTask from "./layouts/task";
// import Guideline from "./layouts/guideline";
import Home from "./layouts/home";
import FeederPage from "./layouts/feeder_page";

import ManageTask from "./layouts/admin/manageTask";
import ManageUser from "./layouts/admin/manageUser";
import ManageWithdrawal from "./layouts/admin/manageWithdrawal";

export const routeDefault = [
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
export const routeUser = [
  // {
  //   type: "collapse",
  //   name: "Nh???n nhi???m v???",
  //   key: "receive-task",
  //   icon: <Icon fontSize="small">task_alt</Icon>,
  //   route: "/receive-task",
  //   component: <ReceiveTask />,
  // },
  // {
  //   type: "collapse",
  //   name: "L??m nhi???m v??? ki???m ti???n",
  //   key: "do-task",
  //   icon: <Icon fontSize="small">task</Icon>,
  //   route: "/do-task",
  //   component: <DoTask />,
  // },
  {
    type: "collapse",
    name: "L??m nhi???m v??? ki???m ti???n",
    key: "do-task",
    icon: <Icon fontSize="small">task</Icon>,
    route: "/do-task",
    component: <DoOnlyTask />,
  },
  {
    type: "collapse",
    name: "R??t ti???n",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "T??i kho???n",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "feeder page",
    key: "feeder-page",
    icon: <Icon fontSize="small">yes</Icon>,
    route: "/feeder-page",
    component: <FeederPage />,
  },
];

export const routeAdmin = [
  {
    type: "collapse",
    name: "Qu???n l?? user",
    key: "manage-user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/manage-user",
    component: <ManageUser />,
  },
  {
    type: "collapse",
    name: "Qu???n l?? nhi???m v???",
    key: "manage-task",
    icon: <Icon fontSize="small">task</Icon>,
    route: "/manage-task",
    component: <ManageTask />,
  },
  {
    type: "collapse",
    name: "Qu???n l?? r??t ti???n",
    key: "manage-withdraw",
    icon: <Icon fontSize="small">payment</Icon>,
    route: "/manage-withdrawal",
    component: <ManageWithdrawal />,
  },
];
