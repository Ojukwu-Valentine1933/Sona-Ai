import Splash from "../component/WelcomePageComponent/Splash";
import SignUp from "../component/authcomponent/SignUp";
// import styles from "./splashScreenPage.module.css"

const SplashScreenPage = () => {
  return (
    
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12 col-md-6 p-0">
            <Splash />
            </div>
            <div className="col-md-6 d-none d-sm-none d-md-block p-0">
              <SignUp />
            </div>
          </div>
         
        </div>
     
  );
};

export default SplashScreenPage;