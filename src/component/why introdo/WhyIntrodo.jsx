import React, { useState, useEffect } from "react";
import country1 from "../../assets/c1.png";
import country2 from "../../assets/c3.png";
import country3 from "../../assets/c2.png";
import dash from "../../assets/dash.png";
import payrollbg1 from "../../assets/payrollbg1.png";
import payrollbg2 from "../../assets/payrollbg2.png";
import Legacy from "../../assets/Legacy.png";
import Compliances from "../../assets/Compliances.png";
import Cloud from "../../assets/Cloud.png";
import Graphics from "../../assets/Graphics.png";
import p1 from "../../assets/p1.png";
import { IoIosArrowUp } from "react-icons/io";
import "./whyintrodo.css";

const WhyIntrodo = () => {
  const [time, setTime] = useState(0); // Time in minutes (0 to 59)
  const [progress, setProgress] = useState(0); // Progress percentage (0% to 100%)
  useEffect(() => {
    const startTime = 14 * 60; // 14:00 in minutes (840 minutes)
    const endTime = 15 * 60 - 1; // 14:59 in minutes (899 minutes)
    const totalDuration = endTime - startTime + 1;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime < totalDuration) {
          const newTime = prevTime + 1;
          setProgress((newTime / totalDuration) * 100); // Sync progress bar with timer
          return newTime;
        } else {
          clearInterval(interval);
          return prevTime;
        }
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  // Format the time for display (HH:MM format)
  const formatTime = () => {
    const hours = Math.floor(time / 60) + 14; // Since it starts at 14:00
    const minutes = time % 60;
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };
  return (
    <div>
      <div className="why-introdo">
        <div className="container">
          <div className="tab-head">
            <p>WHY INTRODO?</p>
            <h3>Unlock The Perks!</h3>
          </div>
          <div className="base-card">
            <div className="base-card-left">
              <p className="pay-simplicity">Global Payroll Simplicity</p>
              <p className="pay-c1">
                Manage multi-currency payroll across the GCC and beyond, in
                English & Arabic. Seamless onboarding included!{" "}
              </p>
              <div className="run-payroll">
                <div className="payroll-card">
                  <p className="run-pay">Run Payroll</p>
                  <div className="payroll-detail-card">
                    <div className="payroll-details">
                      <img src={country1} alt="" />
                      <img src={dash} alt="" />
                      <p>AED 90,718.94</p>
                    </div>
                    <div className="payroll-details">
                      <img src={country2} alt="" />
                      <img src={dash} alt="" />
                      <p>SAR 678,100.00</p>
                    </div>
                    <div className="payroll-details">
                      <img src={country3} alt="" />
                      <img src={dash} alt="" />
                      <p>OMR 67,693.80</p>
                    </div>
                  </div>
                </div>
                <div className="payroll-bg1">
                  <img src={payrollbg1} alt="" />
                </div>
                <div className="payroll-bg2">
                  <img src={payrollbg2} alt="" />
                </div>
              </div>
            </div>
            <div className="base-card-center">
              <div className="top-section">
                <div className="center-card">
                  <div className="profile-section">
                    <img src={p1} alt="" />
                    <div className="name-date">
                      <p>Fatima Saleem</p>
                      <p>(Aug 07, 2024 - Aug 15, 2024)</p>
                    </div>
                  </div>
                  <div className="work-hour">
                    <p>Hours Worked</p>
                    <h2>{formatTime()} Hours</h2> {/* Display the timer */}
                    <div className="status-bar">
                      <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  {/* persentage */}
                  <div className="percentage">
                    <p>
                      {Math.round(progress)}% <IoIosArrowUp />
                    </p>{" "}
                    {/* Display the percentage */}
                  </div>
                </div>
              </div>
              <div className="bottom-section">
                <h3>Smart Insights</h3>
                <p>
                  Craft customized reports and dashboards to steer data-driven
                  decisions. All your historic employee data within one
                  end-to-end solution.
                </p>
              </div>
            </div>
            <div className="base-card-right">
              <p className="pay-simplicity">Legacy Harmony</p>
              <p className="pay-c1">
                Maximize operational efficiency with zero data loss. Sync all
                your business tools with an open API for seamless data
                integration.
              </p>
              <img src={Legacy} alt="" />
            </div>
          </div>
          {/* second card */}
          <div className="base-card-second">
            <div className="left-b1">
              <div>
                <p className="pay-simplicity">Rock-Solid Compliance</p>
                <p className="pay-c1">
                  Stay GCC law-aligned amidst changing regulations. Worry-free
                  compliance across locations, preventing penalties and legal
                  hassles.
                </p>
              </div>
              <img className="des-rock" src={Compliances} alt="" />
              <img className="mob-rock" src={Graphics} alt="" />
            </div>
            <div className="right-b1">
              <img src={Cloud} alt="" />
              <div className="r-pay-one">
                <p className="pay-simplicity">Cloud-Powered Savings</p>
                <p className="pay-c1">
                  Centralize people management with one HR software. Save time
                  and cut costs by leveraging cloud technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIntrodo;
