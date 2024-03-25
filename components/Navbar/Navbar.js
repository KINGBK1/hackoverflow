import React from "react";

export default function Navbar() {
    return (
        <header>
            {/* <nav className="navbar navbar-expand-lg navbar-dark fixed bg-transparent">
        <div className="container-fluid bg-transparent">
          <div className="logo-img">
            <a href="#" style={{ display: "flex" }}>
              <img src="img/aarohan-logo.png" style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                float: "left",
              }} />&nbsp;&nbsp;<img src="img/logo.png" style={{ float: "left", }} alt />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" style={{ textAlign: "right" }}>
            <ul className="navbar-nav ml-auto" id="navbar-drawer">
              <li className="nav-item" style={{ fontFamily: "Poppins" }}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item" style={{ fontFamily: "Poppins" }}>
                <a className="nav-link" href="#">
                  Discord
                </a>
              </li>
              <li className="nav-item" style={{ fontFamily: "Poppins" }}>
                <a
                  className="nav-link"
                  href="/schedule"
                >
                  Schedule
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav> */}

            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center justify-content-between no-gutters">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo-img">
                                    <a href="/" style={{ display: "flex" }}>
                                        <img
                                            src="img/IMG-20240307-WA0009.jpg"
                                            style={{
                                                height: "50px",
                                                width: "50px",
                                                borderRadius: "50%",
                                                float: "left",
                                            }}
                                        />
                                        &nbsp;&nbsp;
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <a href="/" className="active:active-color">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/schedule">Schedule</a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://discord.gg/dUe9m53m"
                                                >
                                                    Discord
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <div className="buy_ticket">
                  <a href="#" className="boxed-btn-white">
                    Register!
                  </a>
                </div>
              </div> */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
