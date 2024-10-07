// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import toast from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";
// import { auth } from "../firebase";
// import { getUser, useLoginMutation } from "../redux/api/userAPI";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
// import { MessageResponse } from "../types/api-types";
// import { userExist, userNotExist } from "../redux/reducer/userReducer";
// import { useDispatch } from "react-redux";

const Login = () => {
//   const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

//   const [login] = useLoginMutation();

  const loginHandler = async () => {
   
  };

  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>

        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Date of birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <p>Already Signed In Once</p>
          <button onClick={loginHandler}>
            <FcGoogle />
             <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;