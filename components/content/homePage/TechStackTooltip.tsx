import React from "react";
import { Tooltip } from "react-tippy";

interface TechStackTooltipProps {
  children: React.ReactNode;
  techStack: string;
}

const TechStackTooltip = ({ children, techStack }: TechStackTooltipProps) => {
  return (
    <Tooltip
      position="top"
      trigger="mouseenter"
      html={
        <p className="border-black border rounded-md text-center bg-gray-50 px-3 py-2 mb-4 w-80">
          {techStack}
        </p>
      }
    >
      {children}
    </Tooltip>
  );
};

export default TechStackTooltip;
