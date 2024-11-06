import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-[1200px] flex-col gap-12 p-8 min-[1220px]:px-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;
