import PrimaryLayout from "@/layouts/primary-layout";
import { NextPageWithLayout } from "../page";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { FRAMER_VARIANTS } from "@/lib/framer";

type Props = {
  // Add custom props here
};

const ContactPage: NextPageWithLayout = () => {
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
          <div className="text-4xl">Contacts</div>
          <div className="text-2xl">Please feel free to contact me for any job opportunity</div>
          <div className="flex w-full flex-wrap gap-[10px]">
            <Button variant={"outline"} className={"h-[60px]"}>
              <Link href="/projects" className={"flex flex-row items-center gap-[10px]"}>
                <Code className={"h-[30px] w-[30px]"} />
                <div>View Projects</div>
                <Code2 className={"h-[30px] w-[30px]"} />
              </Link>
            </Button>
            <Button variant={"outline"} className={"h-[60px]"}>
              <Link href="/projects" className={"flex flex-row items-center gap-[10px]"}>
                <Code className={"h-[30px] w-[30px]"} />
                <div>View Projects</div>
                <Code2 className={"h-[30px] w-[30px]"} />
              </Link>
            </Button>
            <Button variant={"outline"} className={"h-[60px]"}>
              <Link href="/projects" className={"flex flex-row items-center gap-[10px]"}>
                <Code className={"h-[30px] w-[30px]"} />
                <div>View Projects</div>
                <Code2 className={"h-[30px] w-[30px]"} />
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
