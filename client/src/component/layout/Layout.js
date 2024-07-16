import AppRoute from "./Approute";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation()

  const {pathname} = location;
  return (
    <>
      <header>
        {pathname === "/new-chat" && <NavBar />}
      </header>
      <main>
        <AppRoute />
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
