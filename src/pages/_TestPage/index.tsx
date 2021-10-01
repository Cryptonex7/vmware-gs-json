import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";

import { withRouter, RouteComponentProps } from "react-router";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
import { useState } from "react";
ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {}

const TestPage: React.FC<Props> = (props: Props) => {
  return (
    <div className="">
      <h1>Hello {localStorage.getItem("prouser")}!</h1>{" "}
    </div>
  );
};

export default withRouter(TestPage);
