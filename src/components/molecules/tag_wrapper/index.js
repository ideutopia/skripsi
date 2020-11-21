import React from "react";
import { Tag } from "../../atoms";
import "./Tag_Wrapper.css";

const TagWrapper = ({ tag1 }) => {
  return (
    <div className="Tag_Wrapper">
      <Tag name={tag1} />
    </div>
  );
};

export default TagWrapper;
