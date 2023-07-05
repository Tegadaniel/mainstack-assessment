import React from "react";

export const DotIcon = ({ fill, width, height }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="12" height="12" rx="6" fill={fill} />
      </svg>
    </div>
  );
};