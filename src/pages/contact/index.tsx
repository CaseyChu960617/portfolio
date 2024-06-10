import { motion } from "framer-motion";
import Link from "next/link";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import PrimaryLayout from "@/layouts/primary-layout";
import { FRAMER_VARIANTS } from "@/lib/framer";
import { NextPageWithLayout } from "@/pages/page";

interface IContactProps {
  // Add custom props here
}

const ContactPage: NextPageWithLayout<IContactProps> = () => {
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
          <div className="text-4xl">Contacts</div>
          <div className="text-2xl">Please feel free to contact me for any job opportunity</div>
          <div className="flex w-full flex-wrap gap-[10px]">
            <Button className={"h-[60px]"} variant={"outline"}>
              <Link className={"flex flex-row items-center gap-[10px]"} href="/projects">
                <div>View Projects</div>
              </Link>
            </Button>
            <Button className={"h-[60px]"} variant={"outline"}>
              <Link className={"flex flex-row items-center gap-[10px]"} href="/projects">
                <div>View Projects</div>
              </Link>
            </Button>
            <Button className={"h-[60px]"} variant={"outline"}>
              <Link className={"flex flex-row items-center gap-[10px]"} href="/projects">
                <div>View Projects</div>
              </Link>
            </Button>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

ContactPage.getLayout = (page: React.ReactNode) => <PrimaryLayout>{page}</PrimaryLayout>;

export default ContactPage;
