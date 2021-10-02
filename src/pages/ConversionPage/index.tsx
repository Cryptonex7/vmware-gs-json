import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import "@cds/core/progress-circle/register.js";

import { withRouter, RouteComponentProps } from "react-router";
import ReactJson from "react-json-view";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
import { useEffect } from "react";
ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {
  getSpreadsheet: any;
  json?: any;
}

const WaitingPage: React.FC<Props> = (props: Props) => {
  document.body.setAttribute("cds-theme", "dark");

  useEffect(() => {
    document.body.setAttribute("cds-theme", "dark");
  }, []);

  return (
    <div className="wrapper full-width full-height">
      <div className="waiting full-width full-height">
        <ReactJson
          src={props.json}
          iconStyle="square"
          displayObjectSize={true}
          theme="brewer"
          name={false}
          indentWidth={4}
          displayDataTypes={false}
        />
      </div>
    </div>
  );
};

export default withRouter(WaitingPage);
