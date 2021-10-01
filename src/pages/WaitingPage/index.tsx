import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import "@cds/core/progress-circle/register.js";

import { withRouter, RouteComponentProps } from "react-router";
import ReactJson from "react-json-view";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
import { useEffect, useState } from "react";
ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {
  getSpreadsheet: any;
  json?: any;
}

const WaitingPage: React.FC<Props> = (props: Props) => {
  document.body.setAttribute("cds-theme", "dark");

  const waitAndGetJSON = async () => {
    const response = await props.getSpreadsheet(
      "1eACv1lASyY-ZT3dLU94qTrdz8-TLDY_kezfmRe5ydjc",
      "AIzaSyCQau8PQIx8TXwDna_J_CU0OE7Uu4FXvFQ"
    );
  };

  useEffect(() => {
    document.body.setAttribute("cds-theme", "dark");
  }, []);

  // curl \
  // 'https://sheets.googleapis.com/v4/spreadsheets/1eACv1lASyY-ZT3dLU94qTrdz8-TLDY_kezfmRe5ydjc/values/A%3Az?key=[YOUR_API_KEY]' \
  // --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  // --header 'Accept: application/json' \
  // --compressed

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
