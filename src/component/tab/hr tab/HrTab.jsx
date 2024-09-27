import React from "react";
import msg from "../../../assets/messages.svg";
import prgm from "../../../assets/programming.svg";
import edit from "../../../assets/edit.png";
import card02 from "../../../assets/card02.png";
import card03 from "../../../assets/card03.png";
import mobcard2 from "../../../assets/abc1.png";
import mobcard3 from "../../../assets/abc2.png";

const HrTab = () => {
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
          <div className="hr-info">
            <div className="hr-contents">
              <p>
                Handle employee information digitally on our user-friendly
                platform. With automation, accuracy is guaranteed for reliable
                record-keeping.{" "}
              </p>
            </div>
            <div className="hr-contents">
              <p>
                Simplify onboarding, capture essential employee data and
                automate payroll for seamless employee experiences.
              </p>
            </div>
            <div className="hr-contents" style={{ borderBottom: "none" }}>
              <p>
                Facilitate company-wide communication, keeping everyone in the
                loop with important announcements, subsidiary changes and HR
                policy updates.
              </p>
            </div>
          </div>
          <div className="card02">
            <img className="hrimg" src={card02} alt="" />
          </div>
          <div className="card03">
            <img className="hrimg" src={card03} alt="" />
          </div>
          <div className="mob-card02">
            <img src={mobcard2} alt="" />
          </div>
          <div className="mob-card03">
            <img src={mobcard3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrTab;
