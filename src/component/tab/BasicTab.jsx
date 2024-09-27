import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import hrdesable from "../../assets/hr1.png";
import hractive from "../../assets/hractive.png";
import mngrdefault from "../../assets/mn1.png";
import mngractive from "../../assets/mn2.png";
import empdefault from "../../assets/emp1.png";
import empactive from "../../assets/emp2.png";
import "./basictab.css";
import HrTab from "./hr tab/HrTab";
import ManagerTab from "./manager tab/ManagerTab";
import EmployeeTab from "./employee tab/EmployeeTab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTab = () => {
  const [value, setValue] = useState(0);
  let autoSwitchTimer = null;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    resetAutoSwitch();
  };
  // Auto-switch tabs every 5 seconds
  useEffect(() => {
    startAutoSwitch();
    return () => {
      clearTimeout(autoSwitchTimer); // Cleanup on unmount
    };
  }, [value]);
  const startAutoSwitch = () => {
    autoSwitchTimer = setTimeout(() => {
      setValue((prevValue) => (prevValue + 1) % 3); // Loop through tabs (0, 1, 2)
    }, 5000); // 5 seconds interval
  };
  const resetAutoSwitch = () => {
    clearTimeout(autoSwitchTimer); // Clear the previous timer
    startAutoSwitch(); // Start a new timer
  };
  const getActiveTabStyle = (tabIndex) => {
    if (tabIndex === 0) {
      return { background: "#3A86FF!important" };
    }
    if (tabIndex === 1) {
      return {
        color: "#361863",
        fontFamily: "var(--font-family)",
        fontWeight: 600,
        background: "transparent",
        border: "1px solid #361863",
        borderRadius: "50px",
        padding: "20px 15px 20px 5px",
        height: "45px",
        display: "flex",
        flexDirection: "row",
      };
    }
    if (tabIndex === 2) {
      return { background: "#FF8100" };
    }
    return {};
  };
  return (
    <div>
      <div className="Tab-parent">
        <div className="shedule-demo">
          <button>Schedule a Demo</button>
        </div>
        <div className="container">
          <div className="tab-head">
            <p>EMPOWER EVERY ROLE </p>
            <h3>Triple the benefits!</h3>
          </div>
          <div className="tab-section">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <div className="tabsec1">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label={
                        <>
                          <img
                            src={value === 0 ? hractive : hrdesable}
                            alt="HR Managers"
                            style={{ marginRight: "10px" }}
                          />
                          For HR Managers
                        </>
                      }
                      {...a11yProps(0)}
                      className={`hr-tab ${
                        value === 0 ? "activebtn" : "unactivebtn"
                      }`}
                      style={getActiveTabStyle(0)}
                    />
                    <Tab
                      label={
                        <>
                          <img
                            src={value === 0 ? mngrdefault : mngractive}
                            alt="HR Managers"
                            style={{ marginRight: "10px" }}
                          />
                          For Line Managers
                        </>
                      }
                      {...a11yProps(1)}
                      className={`line-manager-tab ${
                        value === 1 ? "activebtn" : "unactivebtn"
                      }`}
                      style={getActiveTabStyle(1)}
                    />
                    <Tab
                      label={
                        <>
                          <img
                            src={value === 2 ? empactive : empdefault}
                            alt="HR Managers"
                            style={{ marginRight: "10px" }}
                          />
                          For Employees
                        </>
                      }
                      {...a11yProps(2)}
                      className={`employee-tab ${
                        value === 2 ? "activebtn" : "unactivebtn"
                      }`}
                      style={getActiveTabStyle(2)}
                    />
                  </Tabs>
                </div>
              </Box>
              <div style={{ background: "f0f7ff" }}>
                <CustomTabPanel value={value} index={0}>
                  <HrTab />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <ManagerTab />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <EmployeeTab />
                </CustomTabPanel>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTab;
