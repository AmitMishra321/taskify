import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const OrganizationPage = () => {
  const { userId, orgId } = auth();
  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};

export default OrganizationPage;
