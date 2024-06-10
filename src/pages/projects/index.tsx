import { motion } from "framer-motion";

import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
import PrimaryLayout from "@/layouts/primary-layout";
import { FRAMER_VARIANTS } from "@/lib/framer";
import { NextPageWithLayout } from "@/pages/page";

interface IProjectsProps {
  // Add custom props here
}

const ProjectsPage: NextPageWithLayout<IProjectsProps> = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <>
      <motion.div
        animate="exit"
        className="relative z-[100]"
        initial="enter"
        transition={{
          duration: 2,
        }}
        variants={FRAMER_VARIANTS}
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
