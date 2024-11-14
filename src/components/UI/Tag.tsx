import React from "react";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <div className="border text-teal-400 px-4 py-1 rounded-full text-sm font-medium shadow-md inline">
      {label}
    </div>
  );
};

export default Tag;
