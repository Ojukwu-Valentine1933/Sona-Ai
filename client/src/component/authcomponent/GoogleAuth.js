import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";


const GoogleAuth = () => {
  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };
  const googleLogin = debounce(async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (result.user) {
        toast.success("User logged in Succefully", {
          position: "center",
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  }, 300);
  return (
    <>
      <div onClick={googleLogin}>
        <img
          src={require("../../assets/google-auth-dark.png")}
          width={"40px"}
          alt="signup"
          height={"20px"}
        />
      </div>
      {/* <div >
        <button className={`googleSigninButton ${styles.googleSigninButton }`} >
          <img
            src={require("../../assets/google-auth-icon.png")}
            alt="Google Icon"
            className={`googleIcon ${styles.googleIcon}` } onClick={googleLogin}
          />
          <span className={`${styles.googleSigninButtonSpan}`}>Sign in with Google</span>
        </button>
      </div> */}
    </>
  );
};
export default GoogleAuth;
