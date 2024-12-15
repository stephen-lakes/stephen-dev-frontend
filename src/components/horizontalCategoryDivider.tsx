import React from "react";

interface HorizontalCategoryDividerProps {
  categoryName: string;
}

const HorizontalCategoryDivider: React.FC<HorizontalCategoryDividerProps> = ({
  categoryName,
}) => {
  return (
    <>
      <span>{categoryName}</span>
      <div className="border-t border-gray-500 h-0.5 w-full mt-1"></div>
    </>
  );
};

export default HorizontalCategoryDivider;
