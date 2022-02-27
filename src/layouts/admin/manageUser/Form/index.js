import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import ProfileInfoCard from "layouts/profile/components/ProfileInfoCard";

export default function FormDialog({ handleClose, open, dataForm }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Thông tin chi tiết user</DialogTitle>
        <DialogContent>
          <ProfileInfoCard
            title="Thông tin cá nhân"
            info={dataForm}
            shadow={false}
            isEdit={false}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
