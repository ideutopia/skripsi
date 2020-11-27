import React from "react";
import { Jumbotron } from "../../components/molecules";
import { Footer, Header } from "../../components/organism";
import { pagesString } from "../../data";
const Help = () => {
  return (
    <div>
      <Header />
      <Jumbotron
        title={pagesString.help.judul}
        lead={pagesString.help.lead}
        desc={pagesString.help.deskripsi}
        className="jumbotron"
      />
      <div className="content-wrapper">
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              <a
                className="list-group-item list-group-item-action active"
                id="list-home-list"
                data-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="home"
              >
                Cara Install
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-profile-list"
                data-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="profile"
              >
                Prompt Install tidak muncul
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="messages"
              >
                Aplikasi Crash
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-settings-list"
                data-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings"
              >
                Cara Uninstall
              </a>
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                {/* List  */}
                <ul className="list-group">
                  <li className="list-group-item">
                    {pagesString.help.caraInstall[0]}
                  </li>
                  <li className="list-group-item">
                    {pagesString.help.caraInstall[1]}
                  </li>
                  <li className="list-group-item">
                    {pagesString.help.caraInstall[2]}
                  </li>
                </ul>
                {/* Akhir List */}
              </div>
              <div
                className="tab-pane fade"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <ul className="list-group">
                  <li className="list-group-item">
                    {pagesString.help.promptInstall[0]}
                  </li>
                  <li className="list-group-item">
                    {pagesString.help.promptInstall[1]}
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                <ul className="list-group">
                  <li className="list-group-item">
                    {pagesString.help.tidakCukupRuang}
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                <ul className="list-group">
                  <li className="list-group-item">
                    {pagesString.help.uninstall}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
