import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import "@cds/core/progress-circle/register.js";


import { withRouter, RouteComponentProps } from "react-router";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
import { useState } from "react";
ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps{
}

const WaitingPage: React.FC<Props> = (props: Props) => {


  return (
    <div className="wrapper">
      <h1>Hello {localStorage.getItem("name")}!</h1>{" "}
      <div className="waiting flex-col">
        <h2 className="text">Waiting for Admin to Start...</h2>
        <div className="spinner">
          <cds-progress-circle
            size="xl"
            status="info"
          ></cds-progress-circle>
        </div>
      </div>
    </div>
  );
};

export default withRouter(WaitingPage);
