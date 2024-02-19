import React from "react";

const Dashboard = ({ selectedtap, setselectedtap }) => {
  const handleclick = (tab) => {
    setselectedtap(tab);
  };

  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: 280, minHeight: "100vh", maxHeight: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Student Dashboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => handleclick("Home")}>
            <a
              href="#!"
              className={`nav-link ${selectedtap === "Home" && "active"}`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Home
            </a>
          </li>
          <li onClick={() => handleclick("CreateClass")}>
            <a
              href="#!"
              className={`nav-link ${
                selectedtap === "CreateClass" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Create Class
            </a>
          </li>
          <li onClick={() => handleclick("Class")}>
            <a
              href="#!"
              className={`nav-link ${selectedtap === "Class" && "active"}`}
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Class
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Dashboard;
