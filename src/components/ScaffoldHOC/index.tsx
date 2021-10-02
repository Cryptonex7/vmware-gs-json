import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

import Header from "../Header";
import Sidebar from "../Sidebar";
import axios from "axios";

interface WrapProps {
  getSpreadsheet: any;
  json: any;
}

const ScaffoldHOC = (WrapComponent: React.FC<WrapProps>, title: string) => {
  const HocContent = (props: any) => {
    const { history } = props;

    const [json, setJson] = useState({});

    const getSpreadsheet = async (spreadsheetId: string) => {
      const URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A%3Az`;
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
      };

      const response = await axios.get(URL, { headers });
      console.log(response.data);
      setJson(response.data);
      return response.data;
    };

    useEffect(() => {
      if (
        localStorage.getItem("accessToken") === "" ||
        localStorage.getItem("accessToken") === null
      ) {
        history.push("/auth");
      }
    }, [history]);

    return (
      <div className="" cds-layout="vertical align:stretch">
        <Header title={"VMware GS-JSON"} />
        <div
          cds-layout="horizontal align:vertical-stretch wrap:none"
          className="below-nav"
        >
          <Sidebar title="SideBar" getSpreadsheet={getSpreadsheet} />

          <div cds-layout="vertical align:stretch">
            <div className="main-content">
              <div cds-layout="vertical gap:md p-x:lg">
                {/* wrapped component */}
                <WrapComponent getSpreadsheet={getSpreadsheet} json={json} />
              </div>
            </div>
            {/* <Footer>Footer</Footer> */}
          </div>
        </div>
      </div>
    );
  };

  return withRouter(HocContent);
};
export default ScaffoldHOC;
