import React from "react";

const MediaObject = ({ title, img, desc }) => {
  return (
    <div className="card mt-1">
      <div className="card-body">
        <div class="media">
          <img src={img} class="align-self-center mr-3" alt="..." />
          <div class="media-body">
            <h6 class="mt-0">{title}</h6>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaObject;
