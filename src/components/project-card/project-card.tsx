import TechStackChip from "@/components/tech-stack-chip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { clsMerge } from "@/utils/cls-merge";

interface IProjectCardProps {}

const ProjectCard: React.FC<IProjectCardProps> = ({}) => {
  const dummyTech = ["Firebase", "React", "Next.js", "TailwindCSS", "Typescript", "Python"];

  return (
    <Card className={clsMerge("min-w-[300px] bg-card backdrop-blur-sm")}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Card Content Test pokepgoeamg pogomeapgoea gepoamgpoemea pogempogmespgomse
          pgoemspgespoigesmpgose gpeosmgpesogmse
        </p>
      </CardContent>
      <div className={clsMerge("mt-4 flex flex-row flex-wrap gap-[10px] p-6 pt-0")}>
        {dummyTech.map((item, index) => {
          return <TechStackChip key={index} name={item} />;
        })}
      </div>
    </Card>
  );
};

export default ProjectCard;
