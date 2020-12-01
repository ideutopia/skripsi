import React from "react";
import { useHistory } from "react-router-dom";
const List = ({ link, deskripsi, judul }) => {
  const history = useHistory();
  return (
    <div>
      <a
        className="list-group-item list-group-item-action mt-2"
        onClick={() => history.push(link)}
      >
        <div className="d-flex w-100 justify-content-between">
          <h2 className="material-icons">article</h2>
          <h5 className="mb-1">{judul}</h5>
          <small className="material-icons">open_in_full</small>
        </div>
        <p className="mb-1">{deskripsi}</p>
        <small>
          <b>Klik untuk selengkapnya</b>
        </small>
      </a>
    </div>
  );
};

export default List;
