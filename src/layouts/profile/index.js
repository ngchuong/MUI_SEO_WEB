import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "layouts/profile/components/ProfileInfoCard";
import FormDialog from "layouts/profile/components/Dialog";

import { requestUpdateUser } from "api/apiAdmin";
import { getCookie } from "../../utils/cookie";

const userInfo = getCookie("user") ? JSON.parse(getCookie("user")) : {};
function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateUser = (data) => {
    console.log(data);
    dispatch(requestUpdateUser(data));
  };

  // const editUserInfo = () => {
  //   console.log(2);
  // };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ProfileInfoCard
        title="Thông tin cá nhân"
        info={{
          fullName: `${userInfo.name}`,
          mobile: `${userInfo.telephone}`,
          email: `${userInfo.email}`,
          location: `${userInfo.address}`,
          balance: `${userInfo.balance} vnđ`,
        }}
        openDialog={handleClickOpen}
        shadow={true}
      />
      {open && (
        <FormDialog
          handleClose={handleClose}
          open={open}
          onSubmit={updateUser}
          userInfo={userInfo}
        />
      )}
    </DashboardLayout>
  );
}

export default Profile;
