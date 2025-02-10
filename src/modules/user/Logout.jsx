import React, { useEffect } from "react";

export const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
    console.log("User logged out");
    return () => {
      console.log("Logout cleanup");
    };
  }, []);

  return (
    <div>
      <h2>You have been logged out</h2>
      <p>Redirecting to login page...</p>
      <p>Please wait...</p>

      <button onClick={() => (window.location.href = "/login")}></button>
    </div>
  );
};

export default Logout;
