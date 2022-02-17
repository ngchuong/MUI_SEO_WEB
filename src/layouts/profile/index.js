import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "layouts/profile/components/ProfileInfoCard";
import FormDialog from "layouts/profile/components/Dialog";

import { requestUpdateUser } from "api/apiAdmin";

import { useModal } from "components/Modal";
import { SimpleDialog, ConfirmDialog } from "components/Modal/dialog";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setModal, unSetModal } = useModal();
  const [open, setOpen] = useState(false);

  const userInfo = useSelector((state) => state.user.userInfo);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateUser = async (data) => {
    console.log(data);
    let res;
    try {
      res = await requestUpdateUser(userInfo.id, data);
    } catch (err) {
      setModal(<SimpleDialog content={<div>Cập nhật thông tin thất bại!</div>} />);
    }

    console.log(res, "res");
    if (res && /20[0-9]/.test(res.status)) {
      setModal(<SimpleDialog content={<div>Cập nhật thông tin thành công</div>} />);
    }
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
