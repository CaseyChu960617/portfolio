import { motion } from "framer-motion";

import Container from "@/components/container";
import PrimaryLayout from "@/layouts/primary-layout";
import { FRAMER_VARIANTS } from "@/lib/framer";
import { NextPageWithLayout } from "@/pages/page";

interface IHomeProps {
  // Add custom props here
}

const HomePage: NextPageWithLayout<IHomeProps> = () => {
  return (
    <>
      <motion.div
        animate="exit"
        className="relative z-[100]"
        initial="enter"
        transition={{
          duration: 1,
        }}
        variants={FRAMER_VARIANTS}
      >
        <Container className="mx-auto flex flex-col items-start gap-[40px]">
          <div className="z-[999] w-[60%] min-w-[250px] pt-[100px] text-sm font-bold md:w-[500px] md:pl-[60px] md:text-md lg:w-[720px] lg:text-xl">
            <span>{`Coding the Future: Transforming Concepts into `}</span>
            <span className="text-primary-light">Digital Innovations</span>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

HomePage.getLayout = (page: React.ReactNode) => <PrimaryLayout>{page}</PrimaryLayout>;

export default HomePage;
