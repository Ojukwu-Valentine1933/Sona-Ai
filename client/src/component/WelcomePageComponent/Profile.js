import React, { useEffect, useState } from "react";
import { auth} from "../authcomponent/Firebase";
// import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
        console.log(user)
        setUserDetails(user);
      //   console.log(user);
      //   const docRef = doc(db, "Users", user.uid);
      //   const docSnap = await getDoc(docRef);
      //   if (docSnap.exists()) {
      //     setUserDetails(docSnap.data());
      //     console.log(docSnap.data());
      //   } else {
      //     console.log("User not logged in !");
      //   }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogOut = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="" style={{height: "100vh"}}>
      {userDetails ? (
        <>
          <h1 className="text-white">Welcome {userDetails.displayName}</h1>
          <div>
            <p className="text-white">{userDetails.email}</p>
            {/* <p>{userDetails.firstName}</p>
            <p>{userDetails.lastName}</p> */}
          </div>
        </>
      ) : (
        <p className="text-white">Loading...</p>
      )}
      <button onClick={handleLogOut}></button>
    </div>
  );
};
export default Profile;
