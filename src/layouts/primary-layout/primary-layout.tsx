import { motion } from "framer-motion";
import React from "react";

import NavBar from "@/components/nav-bar";
import ParticleContainer from "@/components/particle-container";
import { FRAMER_VARIANTS } from "@/lib/framer";

interface IPrimaryLayoutProps {
  children?: any;
}

const PrimaryLayout: React.FC<IPrimaryLayoutProps> = ({ children }) => {
  return (
    <>
      <motion.div
        animate="exit"
        className="relative bg-radial-gradient"
        initial="enter"
        transition={{
          duration: 1,
        }}
        variants={FRAMER_VARIANTS}
      >
        <ParticleContainer className="z-[50]" />
        <div className="absolute bottom-0 z-[60] aspect-[16/9] max-h-[500px] w-full bg-mountain-behind bg-contain"></div>
        <div className="absolute bottom-0 z-[60] aspect-[16/9] max-h-[500px] w-full bg-mountain-front bg-contain"></div>
        <div className="absolute right-[20%] top-[35%] z-[60] h-[50px] w-[50px] rounded-full bg-[#d9d9f7] shadow-moon md:h-[100px] md:w-[100px]"></div>
        <NavBar />
        {/* 64px is the height of header, update it value if has changes */}
        <main className={"min-h-[calc(100vh-80px)] pb-[500px]"}>{children}</main>
      </motion.div>
    </>
  );
};

export default PrimaryLayout;
