import styles from "./AppRoute.module.css";
import { useGetCurrentUserMutation } from "../../lib/apis/userApi";
import { useEffect, useState } from "react";
import CreateNewChatButton from "../../helpers/createNewChat";
import ChatButtonFetch from "../../helpers/getAllChats";

const NavBar = () => {
  const [chatId, setChatId] = useState("");
  const handleCreateChat = (newChatId) => {
    setChatId(newChatId);
  };

  const [getCurrentUser, { data }] = useGetCurrentUserMutation();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      getCurrentUser(token);
    }
  }, []);
  return (
    <nav className={`navbar navbar-dark  fixed-top ${styles.navbar}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className={`navbar-brand mx-auto ${styles.navbarBrand}`}>SonaAI</a>
        <div style={{ width: "40px" }}></div>

        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className={`offcanvas-header ${styles.navbar}`}>
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Dark offcanvas
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className={`offcanvas-body ${styles.navbar}`}>
          
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
              <form className="d-flex mt-3" role="search">
              {chatId ? (
                <p>Chat ID: {chatId}</p>
              ) : (
                <CreateNewChatButton onCreate={handleCreateChat} />
              )}
            </form>
           <ChatButtonFetch/>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Chat History
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
              </li> */}
            </ul>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
