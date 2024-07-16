import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./SignUp.module.css";
import nameIcon from "../../assets/Vector.png";
import emailIcon from "../../assets/mdi_email.png";
import { Link } from "react-router-dom";
import "../../App";
import { GoogleLogin } from "@react-oauth/google";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation/Animation - 1719994113942.json";
import { useLoginWithGoogleMutation } from "../../lib/apis/authApis";
import { useGetCurrentUserMutation } from "../../lib/apis/userApi";


const SignUp = ({ onGetStartedClick }) => {

  const navigate = useNavigate()

  const [loginWithGoogle, {isError, isLoading, isSuccess, data, error}] = useLoginWithGoogleMutation()
  const [getCurrentUser,  {data: userData}] = useGetCurrentUserMutation()

  const {user} = useSelector(state => state.userState)


  const loginSuccess = async (response) => {
   await loginWithGoogle(response.credential)
  };


  const loginFailure = (response) => {
    console.log("Login failed:", response);
  };

  useEffect(() => {
    if(isSuccess){
        localStorage.setItem("authToken", data?.token)
        navigate("/new-chat")
    }
  }, [isError, isLoading, isSuccess])

  useEffect(() => {
    if(user) {
      navigate("/new-chat")
    }
  }, [user, getCurrentUser])


  useEffect(() => {
   const token = localStorage.getItem("authToken")
   if(token){
    getCurrentUser(token)
   }
   
  }, [])
  

  return (
    <>
      {/* <div style={{backgroundColor: "pink"}}>
        <h1 className="text-black">Sign Up</h1>
      </div> */}

      <div className={`signUpPage ${styles.signUpDiv}`}>
        <div className={`container ${styles.centeredCard}`}>
          <div className="row" style={{}}>
            <div
              className="card text-white  mb-3"
              style={{ width: "100%", backgroundColor: "#202020" }}
            >
              <div className={`card-body text-white ${styles.SignUpForm}`}>
                <Lottie
                  className="flex-end"
                  animationData={animationData}
                  style={{ height: "150px" }}
                />
                <h1
                  className={`card-title text-center ${styles.h1}`}
                  style={{ fontSize: "40px" }}
                >
                  SonaAI
                </h1>

                <p
                  className="card-subtitle mb-2  text-center"
                  style={{
                    fontFamily: "Sedan, serif",
                    fontSize: "11px",
                    fontWeight: "100",
                    color: "#999999",
                  }}
                >
                  Please Sign Up To A New Account{" "}
                </p>

                <form className={`${styles.form}`}>
                  <div className="mb-3">
                    <div className={`mb-3 ${styles.inputContainer}`}>
                      <img
                        src={nameIcon}
                        alt="icon"
                        className={`icon ${styles.icon}`}
                      />
                      <input
                        type="text"
                        className={`form-control ${styles.input}`}
                        id="exampleInputName1"
                        placeholder="First Name"
                        style={{
                          width: "100%",
                          height: "45px",
                          borderRadius: "15px",

                          border: "#333333",
                        }}
                      />
                    </div>
                    <div className={`mb-3 ${styles.inputContainer}`}>
                      <img
                        src={nameIcon}
                        alt="icon"
                        className={`icon ${styles.icon}`}
                      />
                      <input
                        type="text"
                        className={`form-control ${styles.input}`}
                        id="exampleInputName1"
                        placeholder="Last Name"
                        style={{
                          width: "100%",
                          height: "45px",
                          borderRadius: "15px",

                          border: "#333333",
                        }}
                      />
                    </div>
                    <div className={`${styles.inputContainer}`}>
                      <img
                        src={emailIcon}
                        alt="icon"
                        className={`icon ${styles.icon}`}
                      />
                      <input
                        type="email"
                        className={`form-control ${styles.input}`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Your Email"
                        style={{
                          width: "100%",
                          height: "45px",
                          borderRadius: "15px",
                          border: "#333333",
                        }}
                      />
                    </div>
                  </div>
                  <Link to={"/new-chat"}>
                    <button
                      type="submit"
                      className={`btn mt-3  text-white`}
                      style={{
                        width: "100%",
                        height: "45px",
                        borderRadius: "15px",
                        backgroundColor: "#d71e1f",
                        border: "#333333",
                      }}
                      onClick={onGetStartedClick}
                    >
                      Create Account
                    </button>
                  </Link>
                  <div>
                    <p className={`text-center text-white`}>or</p>
                    {/* <GoogleAuth /> */}
                    <GoogleLogin
                      onSuccess={loginSuccess}
                      width={"300px"}
                      height={"100px"}
                      
                      onFaliure={loginFailure}
                    />
                  </div>

                  <div>
                    <p
                      className="text-center "
                      style={{ fontSize: "11px" }}
                    >
                      Already Have Account?{" "}
                      <Link to={"/auth"} style={{ color: "#d71e1f" }}>
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
