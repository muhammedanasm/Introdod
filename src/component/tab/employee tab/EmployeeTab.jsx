import React from "react";
import msg from "../../../assets/msgem.png";
import prgm from "../../../assets/prgem.png";
import edit from "../../../assets/editem.png";
import card02 from "../../../assets/Card02em.png";
import card03 from "../../../assets/Card03em.png";
import x1 from "../../../assets/x1.png";
import x2 from "../../../assets/x2.png";

const EmployeeTab = () => {
  return (
    <div>
      <div className="Hrtab-parent">
        <div className="hr-left">
          <div className="hr-base">
            <img src={msg} alt="" />
            <p>Streamline Workforce Management</p>
          </div>
          <div className="hr-base">
            <img src={prgm} alt="" />
            <p>Smooth Employee Onboarding </p>
          </div>
          <div className="hr-base">
            <img src={edit} alt="" />
            <p>Enhance Internal Communication </p>
          </div>
        </div>
        <div className="hr-right">
          <div className="hr-info-em">
            <div className="hr-contents-em">
              <p>
                Get clarity on tasks, access key information and perform tasks
                independently, fostering a culture of trust and ownership.
              </p>
            </div>
            <div className="hr-contents-em">
              <p>
                Experience a pain-free onboarding experience with timely and
                accurate payroll processes – a positive start to your new role!
              </p>
            </div>
            <div className="hr-contents-em" style={{ borderBottom: "none" }}>
              <p>
                Stay connected with real-time updates, polls, and surveys
                through our HRMS for an engaging and informed experience.
              </p>
            </div>
          </div>
          <div className="card02em">
            <img className="hrimg" src={card02} alt="" />
          </div>
          <div className="card03em">
            <img className="hrimg" src={card03} alt="" />
          </div>
          <div className="card02emmob">
            <img src={x1} alt="" />
          </div>
          <div className="card03emmob">
            <img src={x2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTab;
