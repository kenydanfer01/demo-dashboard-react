import "../../assets/css/sidebar.css";
import { useState } from "react";
import Home from "../../pages/Home";

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className={sidebar ? "p-0" : "p-0 close"}>
        <div className="logo-name">
          <div className="logo-image">
            <img src="images/logo.png" alt="" />
          </div>
          <span className="logo_name">CodingLab</span>
        </div>
        <div className="menu-items">
          <ul className="p-0 nav-links">
            <li>
              <a href="#">
                <i className="m-2 fa-solid fa-house"></i>
                <span className="link-name">Dahsboard</span>
              </a>
            </li>
          </ul>
          <ul className="logout-mode">
            <li className="mode">
              {sidebar ? (
                <>
                  <i className="fa-regular fa-sun"></i>
                  <span className="link-name">Dark Mode</span>
                </>
              ) : (
                <span>&nbsp;</span>
              )}
              <div className="mode-toggle">
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <section className="dashboard">
        <div className="top">
          <i className="fa-solid fa-bars fa-2xl" onClick={showSidebar}></i>
          <div className="search-box">
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Search here..." />
          </div>
          <img src="images/profile.jpg" alt="" />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
