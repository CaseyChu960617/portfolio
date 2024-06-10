import PrimaryLayout from "@/layouts/primary-layout";
import { NextPageWithLayout } from "./page";
import Container from "@/components/container";
import { Code, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FRAMER_VARIANTS } from "@/lib/framer";
import ParticleContainer from "@/components/particle-container/ParticleContainer";

type Props = {
  // Add custom props here
};

const HomePage: NextPageWithLayout = () => {
  return (
    <>
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
          <div className="z-[999] w-[60%] min-w-[250px] pt-[100px] text-sm font-bold md:w-[500px] md:pl-[60px] md:text-md lg:w-[720px] lg:text-xl">
            <span>{`Coding the Future: Transforming Concepts into `}</span>
            <span className="text-primary-light">Digital Innovations</span>
          </div>
          {/* <Button className={'h-[60px] z-[999]'}>
                        <Link href='/projects' className={'flex flex-row items-center gap-[10px]'}>
                            <div>View Projects</div>
                        </Link>
                    </Button>
                    <Button className={'h-[60px] z-[999]'}>
                        <Link href='/contact' className={'flex flex-row items-center gap-[10px]'}>
                            <div>Contact Me</div>
                        </Link>
                    </Button> */}
        </Container>
      </motion.div>
    </>
  );
};

HomePage.getLayout = (page: React.ReactNode) => <PrimaryLayout>{page}</PrimaryLayout>;

export default HomePage;
