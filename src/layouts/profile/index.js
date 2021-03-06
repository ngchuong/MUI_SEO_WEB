import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "layouts/profile/components/ProfileInfoCard";
import FormDialog from "layouts/profile/components/Dialog";
import MDTypography from "components/MDTypography";
import { reqUpdateUser } from "actions/user";

import { useModal } from "components/Modal";
import { SimpleDialog, ConfirmDialog } from "components/Modal/dialog";
import { isMobile } from "utils";

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

  const updateUser = (id, data, files) => {
    dispatch(reqUpdateUser(id, data, files));
    handleClose();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {isMobile() ? (
        <ProfileInfoCard
          title="Thông tin cá nhân"
          info={userInfo}
          openDialog={handleClickOpen}
          shadow={true}
          isEdit={true}
        />
      ) : (
        <MDTypography sx={{ fontStyle: "italic" }}>Chỉ khả dụng trên điện thoại.</MDTypography>
      )}

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
