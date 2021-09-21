import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import "@cds/core/progress-circle/register.js";

import { withRouter, RouteComponentProps } from "react-router";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {
  getLeaderboard: any;
}

const WaitingPage: React.FC<Props> = (props: Props) => {
  const [ready, setReady] = useState(false);

  const onReady = async () => {
    const res = await axios.post(API_URL + "/api/ready", {
      name: sessionStorage.getItem("prouser"),
      score: null,
    });

    setReady(res.data.ready);
  };

  const checkForStart = async () => {
    const res = await axios.get(`${API_URL}/api/status/start`);
    console.log(res);
    if (res.data?.value === "true") {
      props.history.push("/game");
    }
  };

  useEffect(() => {
    const x = setInterval(function () {
      checkForStart();
      props.getLeaderboard();
    }, 2000);

    return () => {
      clearInterval(x);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="waiting flex-col">
        <h1>Hello {sessionStorage.getItem("prouser")}!</h1>
        <h2 className="text">Waiting for Admin to Start...</h2>
        <div className="spinner">
          <cds-progress-circle size="xl" status="info"></cds-progress-circle>
        </div>
        <br />
        <br />
        {!ready && (
          <>
            <h1 className="danger">
              WARNING: You have NOT marked yourself ready!
            </h1>
            <h2 className="danger">
              Please make sure to do so by clicking on the button below.
            </h2>
            <cds-button onClick={onReady} status="warning">
              CLick Here Mark Yourself Ready to Participate
            </cds-button>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(WaitingPage);
