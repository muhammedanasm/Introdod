import React, { useState } from "react";
import logo from "../../assets/logowhite.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkdedin from "../../assets/linkdedin.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import gpay from "../../assets/Google play.png";
import appstore from "../../assets/App Store.png";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.png";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import l4 from "../../assets/l4.png";
import inp from "../../assets/inp.png";
import { Select } from "antd";
import "./footer.css";

const Footer = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div>
      <div className="footer-parent">
        <div className="container">
          <div className="footer-head">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-head-center">
              <p>HR Updates, straight to your Inbox - Subscribe Today </p>
              <div className="inp">
                <input type="text" placeholder="Enter Work Email" />
                <img src={inp} alt="" />
              </div>
            </div>
            <div className="footer-head-right">
              <div className="laguage2">
                <Select
                  showSearch
                  optionFilterProp="label"
                  onChange={onChange}
                  onSearch={onSearch}
                  defaultValue="EN"
                  options={[
                    {
                      value: "EN",
                      label: "EN",
                    },
                    {
                      value: "ML",
                      label: "ML",
                    },
                    {
                      value: "HI",
                      label: "HI",
                    },
                  ]}
                />
              </div>
              <div className="social-media">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkdedin} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
          {/* Footer Sections - Collapsible on Mobile */}
          <div className="footer-section">
            {/* Products Section */}
            <div className="collapsible">
              <h3
                onClick={() => toggleSection("products")}
                className="section-title"
              >
                Products{" "}
                {openSection === "products" ? (
                  <FaChevronDown className="arrow-icon" />
                ) : (
                  <FaChevronRight className="arrow-icon" />
                )}
              </h3>
              <div
                className={`p-lists ${
                  openSection === "products" ? "open" : ""
                }`}
              >
                <p>Core HR</p>
                <p>Employee Management</p>
                <p>Leave Management</p>
                <p>Time & Attendance</p>
                <p>Payroll Management</p>
                <p>People Analytics</p>
                <p>
                  Recruitment <span>NEW</span>
                </p>
                <p>
                  Performance Management <span>COMING SOON</span>
                </p>
              </div>
            </div>

            {/* Resources Section */}
            <div className="collapsible">
              <h3
                onClick={() => toggleSection("resources")}
                className="section-title"
              >
                Resources
                {openSection === "resources" ? (
                  <FaChevronDown className="arrow-icon" />
                ) : (
                  <FaChevronRight className="arrow-icon" />
                )}
              </h3>
              <div
                className={`p-lists ${
                  openSection === "resources" ? "open" : ""
                }`}
              >
                <p>All Resources</p>
                <p>Blogs</p>
                <p>Case Studies</p>
                <p>Product Videos</p>
                <p>HR Glossary</p>
              </div>
            </div>

            {/* Platform Section */}
            <div className="collapsible">
              <h3
                onClick={() => toggleSection("platform")}
                className="section-title"
              >
                Platform
                {openSection === "platform" ? (
                  <FaChevronDown className="arrow-icon" />
                ) : (
                  <FaChevronRight className="arrow-icon" />
                )}
              </h3>
              <div
                className={`p-lists ${
                  openSection === "platform" ? "open" : ""
                }`}
              >
                <p>Log In</p>
                <p>Schedule a Demo</p>
                <p>Use Cases</p>
                <p>Integrations</p>
                <p>Pricing</p>
              </div>
            </div>
            <div className="Mobileapp">
              <h3>Mobile App</h3>
              <div className="mob-apps">
                <img src={gpay} alt="Google Play" />
                <img className="appstores" src={appstore} alt="App Store" />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <img src={l1} alt="" />
            <img src={l1} alt="" />
            <img src={l2} alt="" />
            <img src={l3} alt="" />
            <img src={l4} alt="" />
          </div>
          <div className="footer-end">
            <div className="privacy-terms">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Cookie Policy</p>
            </div>
            <p className="copyright">
              Copyright © 2024 KPI Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
