import React from "react";

import { clsMerge } from "@/utils/cls-merge";

interface IContainerProps {
  className?: string;
  children?: any;
  el?: HTMLElement;
  withFullWidth?: boolean;
}

const Container: React.FC<IContainerProps> = ({
  children,
  className,
  el = "div",
  withFullWidth = false,
}) => {
  const rootClassName = clsMerge(className, {
    "max-w-[1920px] p-[4rem] content-max-w:px-0": !withFullWidth,
  });

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
