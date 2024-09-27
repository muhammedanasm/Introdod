import React from "react";
import logo from "../../assets/Introdo.png";
import profile from "../../assets/profile.png";
import { Select } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";

const Header = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div>
      <div className="Header-section">
        <div className="sub-head">
          <p>
            Happy Employees, Effortless HR: Experience the introdo Advantage.
            <span>Try it for Free!</span>
          </p>
        </div>
        <div className="Navbar-section">
          <div className="container">
            <div className="Navbar">
              <div className="left-section">
                <img src={logo} alt="logo" />
                <p>
                  Products <IoIosArrowDown />
                </p>
                <p>
                  Solutions <IoIosArrowDown />
                </p>
                <p>Pricing</p>
                <p>Partner Program </p>
                <p>
                  Resources <IoIosArrowDown />
                </p>
                <p>
                  About Us <IoIosArrowDown />
                </p>
              </div>
              <div className="right-section">
                <div className="laguage">
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
                <div className="login">
                  <p>Log In</p>
                  <img src={profile} alt="" />
                </div>
                <div className="hamburger">
                  <RxHamburgerMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
