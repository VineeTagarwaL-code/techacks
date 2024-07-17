import React from "react";
import { cn } from "../utils/cn";
type props = {
  children: React.ReactNode;
  className?: string;
};
export const SectionWrapper = ({ children, className }: props) => {
  return (
    <div
      style={{
        zIndex: 3,
      }}
      className={cn(
        "max-w-[1200px] lg:min-w-[1090px] min-w-[100vw] ",
        className
      )}
    >
      {children}
    </div>
  );
};
