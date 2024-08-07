"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Logout;
