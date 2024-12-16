import React from "react";

interface HorizontalCategoryDividerProps {
  categoryName: string;
}

const HorizontalCategoryDivider: React.FC<HorizontalCategoryDividerProps> = ({
  categoryName,
}) => {
  return (
    <div className="flex items-center gap-2">
      <span>{categoryName}</span>
      <div className="border-t border-gray-500 h-0.5 w-full mt-1"></div>
    </div>
  );
};

export default HorizontalCategoryDivider;
