import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MasterCard from "examples/Cards/MasterCard";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

import BillingInformation from "layouts/billing/components/BillingInformation";

import { reqGetAllWithdraw } from "actions/withdraw";
import { requestWithdraw } from "api/withdraw";
import { getCookie, setCookie } from "utils/cookie";
import { useModal } from "components/Modal";
import { SimpleDialog, ConfirmDialog } from "components/Modal/dialog";

const userInfo = getCookie("user") ? JSON.parse(getCookie("user")) : {};

function Billing() {
  const dispatch = useDispatch();
  const [inputMoney, setInputMoney] = useState(0);
  const { setModal, unSetModal } = useModal();

  const listWithdrawal = useSelector((state) => state.user.allWithdrawal);
  useEffect(() => {
    dispatch(reqGetAllWithdraw(userInfo.id));
  }, []);

  const onChangeMoney = (e) => {
    setInputMoney(e.target.value);
  };

  const doWithdraw = async () => {
    if (inputMoney < 10000) {
      setModal(<SimpleDialog content={<div>Số tiền tối thiểu được rút là 10.000 đồng</div>} />);
      return;
    }
    if (inputMoney > userInfo.balance) {
      setModal(<SimpleDialog content={<div>Số dư không đủ</div>} />);
      return;
    }

    let res;
    try {
      res = await requestWithdraw(inputMoney);
    } catch (err) {
      setModal(<SimpleDialog content={<div>Có lỗi xảy ra</div>} />);
      return;
    }
    if (res && /20[0-9]/.test(res.status)) {
      const newData = { ...userInfo, balance: userInfo.balance - inputMoney };
      setCookie("user", newData);
      setModal(<SimpleDialog content={<div>Rút tiền thành công</div>} />);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  // TODO: display social id
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <MDBox my={2}>{`Số tiền hiện tại: ${userInfo.balance} đồng`}</MDBox>
                  <MDBox mb={2}>
                    <MDTypography variant="button" fontWeight="regular" color="primary">
                      * Số tiền tối thiểu được rút là 10.000 đồng
                    </MDTypography>
                  </MDBox>
                  <MDBox>
                    <MDInput
                      type="number"
                      fullWidth
                      label="Nhập số tiền muốn rút"
                      value={inputMoney}
                      onChange={onChangeMoney}
                    />
                  </MDBox>

                  <MDButton onClick={doWithdraw} size="small" color="primary">
                    Rút tiền
                  </MDButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <BillingInformation bills={listWithdrawal} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
