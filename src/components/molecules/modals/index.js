import React from "react";
import "./modal.css";
const Modals = () => {
  return (
    <div
      className="modal fade"
      id="modalContact"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Kontak
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Modal Body */}
            <ul className="list-group">
              <li className="list-group-item">
                Apabila ada Masukkan atau saran silahkan mengubungi kontak
                berikut :
              </li>

              <li className="list-group-item list-group-item-secondary">
                <i className="material-icons">email</i>: taftianilham@gmail.com{" "}
              </li>
              <li className="list-group-item list-group-item-success">
                <i className="material-icons">chat</i>:+628995998447{" "}
              </li>
              <li className="list-group-item list-group-item-danger">
                <i className="material-icons">open_in_browser</i>
                :ideutopia.github.io
              </li>
            </ul>
            {/* Akhir konten */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
