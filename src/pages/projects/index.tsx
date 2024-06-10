import PrimaryLayout from "@/layouts/primary-layout";
import { NextPageWithLayout } from "../page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/container";
import { useTheme } from "next-themes";
import clsx from "clsx";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import { FRAMER_VARIANTS } from "@/lib/framer";

type Props = {
  // Add custom props here
};

const ProjectsPage: NextPageWithLayout = () => {
  let data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <>
      <motion.div
        variants={FRAMER_VARIANTS}
        initial="enter"
        animate="exit"
        transition={{
          duration: 2,
        }}
        className="relative z-[100]"
      >
        <Container className="mx-auto flex flex-col items-start gap-[40px]">
          <div className="text-4xl">Projects</div>
          <div className="grid w-full grid-cols-1 gap-[40px] lg:grid-cols-2 2xl:grid-cols-3">
            {data.map((item, index) => {
              return <ProjectCard key={index} />;
            })}
          </div>
        </Container>
      </motion.div>
    </>
  );
};

ProjectsPage.getLayout = (page: React.ReactNode) => <PrimaryLayout>{page}</PrimaryLayout>;

export default ProjectsPage;
