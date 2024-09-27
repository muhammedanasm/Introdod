import React from "react";
import msg from "../../../assets/msgm1.png";
import prgm from "../../../assets/prgm1.png";
import edit from "../../../assets/editm1.png";
import card02 from "../../../assets/Card02m1.png";
import card03 from "../../../assets/Card03m1.png";
import z1 from "../../../assets/z1.png";
import z2 from "../../../assets/z2.png";

const ManagerTab = () => {
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
          <div className="hr-info-m1">
            <div className="hr-contents">
              <p>
                Simplify task management for a boost in team productivity. Clear
                assignments, monitored deadlines and smoother workflows await!
              </p>
            </div>
            <div className="hr-contents">
              <p>
                Welcome new team members with ease – our automated workflows
                minimize admin hassle for quick integration into team dynamics.
              </p>
            </div>
            <div className="hr-contents" style={{ borderBottom: "none" }}>
              <p>
                Keep the team engaged and informed on project milestones,
                fostering a positive, motivated environment for collaborative
                success.
              </p>
            </div>
          </div>
          <div className="card02m1">
            <img className="hrimg" src={card02} alt="" />
          </div>
          <div className="card03m2">
            <img className="hrimg" src={card03} alt="" />
          </div>
          <div className="z-card02m1">
            <img src={z1} alt="" />
          </div>
          <div className="z-card02m2">
            <img src={z2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerTab;
