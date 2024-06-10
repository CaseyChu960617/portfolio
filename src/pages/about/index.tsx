import PrimaryLayout from "@/layouts/primary-layout";
import { NextPageWithLayout } from "../page";
import Container from "@/components/container";
import { motion } from "framer-motion";
import { FRAMER_VARIANTS } from "@/lib/framer";

type Props = {
  // Add custom props here
};

const AboutPage: NextPageWithLayout = () => {
  return (
    <motion.div
      variants={FRAMER_VARIANTS}
      initial="enter"
      animate="exit"
      transition={{
        duration: 1,
      }}
      className="relative z-[100]"
    >
      <Container className="mx-auto flex flex-col items-start gap-[40px]">
        <div className="text-sm font-bold md:text-md lg:text-xl">About Myself</div>
        <div className="text-base md:text-sm lg:text-lg">
          <span>{`Hello, My name is Casey Chu`}</span>
          <br></br>
          <span>Full-Stack Software Engineer</span>
        </div>
        <div className="mt-[30px] text-sm font-bold md:text-md lg:text-xl">Education</div>
        <div className="text-base md:text-sm lg:text-lg">
          <span>{`BSc. Computer Science`}</span>
          <br></br>
          <span>The Chinese University of Hong Kong (2016-2022)</span>
        </div>
      </Container>
    </motion.div>
  );
};

AboutPage.getLayout = (page: React.ReactNode) => <PrimaryLayout>{page}</PrimaryLayout>;

export default AboutPage;
