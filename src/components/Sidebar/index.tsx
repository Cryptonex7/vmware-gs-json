import "@cds/core/icon/register.js";
import "@cds/core/divider/register.js";
import "./styles.scss";

import { ClarityIcons, userIcon } from "@cds/core/icon";
import { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import TextField from "../TextField";

import "@cds/core/button/register.js";
ClarityIcons.addIcons(userIcon);

interface Props extends RouteComponentProps {
  title: string;
  icon?: string;
  users?: any;
  getSpreadsheet?: any;
}

const Sidebar: React.FC<Props> = (props: Props) => {
  const [spreadsheetId, setSpreadsheetId] = useState("");

  const handleKeyPress = (event: any) => {
    onSubmit();
  };

  const onSubmit = () => {
    props.getSpreadsheet(spreadsheetId);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="sidenav" cds-layout="p:md">
        <TextField
          label="Spreadsheet ID"
          placeholder="Google Sheet Spreadsheet ID"
          message="You can find your Spreadsheet ID in the URL of your google sheet."
          onChange={(e: any) => setSpreadsheetId(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <br />
        <br />

        <cds-button onClick={onSubmit}>Get Spreadsheet</cds-button>
      </div>
      <cds-divider class="divider-side" orientation="vertical"></cds-divider>
    </>
  );
};

export default withRouter(Sidebar);
