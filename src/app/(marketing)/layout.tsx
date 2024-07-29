import React from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="h-full pt-40 pb-32 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
