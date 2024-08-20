"use client";

import { signOut } from "next-auth/react";

const Logout = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Logout;
