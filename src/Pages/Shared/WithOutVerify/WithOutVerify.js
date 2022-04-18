import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const WithOutVerify = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  return (
    <div className="text-center">
      <h1 className="text-danger"> veryfy your account</h1>
      <button
        onClick={async () => {
          await sendEmailVerification();
          alert("Sent email");
        }}
      >
          send veryfy email again
      </button>
    </div>
  );
};

export default WithOutVerify;
