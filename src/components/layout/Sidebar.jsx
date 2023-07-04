import "../../assets/css/sidebar.css";
import { useState } from "react";
import ContentMainRoutes from "../../routes/ContentMainRoutes";
import { ItemsMenuData } from "../data/ItemsMenuData";

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className={sidebar ? "p-0" : "p-0 close"}>
        <div className={sidebar ? "logo-name pt-3 px-3" : "logo-name pt-1 px-3"}>
          <div className="logo-image">
            <img src="../src/assets/images/mdpLogo.jpg" alt="" />
          </div>
          <span className="logo_name">Planillas MDP</span>
        </div>
        <div className="menu-items ">
          <ul className="p-0 nav-links">
            {ItemsMenuData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>
                    <i className={item.iconClass + " m-3"}></i>
                    <span className="link-name">{item.title}</span>
                  </a>
                </li>
              );
            })}
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
          <img src="../src/assets/images/perfil2.jpg" alt="" />
        </div>
        <div className="dash-content">
          <div className="overview">
          </div>
          <div className="activity">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
