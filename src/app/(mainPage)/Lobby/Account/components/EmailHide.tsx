"use client";
import { useState } from "react";

const EmailHide = ({ email }: { email: string }) => {
  const [showFullEmail, setShowFullEmail] = useState(false);

  const toggleEmailDisplay = () => setShowFullEmail(!showFullEmail);

  const formatEmail = (email: string | undefined) => {
    if (!email) return "";

    return showFullEmail ? email : email.split("@")[0] + "@***********";
  };
  return (
    <div className="flex items-end gap-2">
      <div>
        <p className="uppercase">Email</p> <p>{formatEmail(email)}</p>
      </div>
      <button
        onClick={toggleEmailDisplay}
        className="text-blue-600 hover:underline">
        {showFullEmail ? "Reveal" : "Reveal"}
      </button>
    </div>
  );
};

export default EmailHide;
