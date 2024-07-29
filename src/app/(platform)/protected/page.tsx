"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
const ProtectedPage = () => {
  return (
    <div>
      <UserButton showName={true} afterSignOutUrl="/" />
    </div>
  );
};

export default ProtectedPage;
