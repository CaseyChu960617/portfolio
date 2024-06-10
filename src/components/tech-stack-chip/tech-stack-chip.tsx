import { clsMerge } from "@/utils/cls-merge";

interface ITechStackChipProps {
  name: string;
}

const TechStackChip: React.FC<ITechStackChipProps> = ({ name }) => {
  return (
    <div className={clsMerge("rounded-full px-4 py-2 text-sm font-semibold", "bg-primary")}>
      {name}
    </div>
  );
};

export default TechStackChip;
