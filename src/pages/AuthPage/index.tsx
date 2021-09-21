import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import axios from "axios";
import { API_URL } from "../../constants";

import { withRouter, RouteComponentProps } from "react-router";
import { useEffect, useState } from "react";
import TextField from "../../components/TextField";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {}

const AuthPage: React.FC<Props> = (props: Props) => {
  document.body.removeAttribute("cds-theme");

  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("prouser") !== null) {
      document.body.setAttribute("cds-theme", "dark");
      props.history.push("/waiting");
    }
  }, []);
  const onEnter = async () => {
    const res = await axios.post(API_URL + "/api/login", {
      name: name,
      score: 0,
    });

    if (res.data.id) {
      sessionStorage.setItem("prouser", name);
      document.body.setAttribute("cds-theme", "dark");
      props.history.push("/waiting");
    } else {
      if (res.data.id === null) {
        setError("Username Already Taken");
      } else {
        setError("Unknown Error, Please Try again!");
      }
    }
  };

  return (
    <div className="flex-row top-container">
      <div className="flex-col left">
        <div className="brand flex-row">
          <cds-icon
            shape="vm-bug-inverse"
            size="xl"
            inverse
            solid
            className="icon"
          />
          <span className="title">VMware LogoPro</span>
        </div>
        <div className="form-container">
          <TextField
            onKeyPress={handleKeyPress}
            onChange={(e: any) => setName(e.target.value)}
            placeholder="Please Enter Your Name"
            message="This name will be used to put you on the leaderboard - make sure you only use your name, and not use your colleague's as a proxy :)"
            error={error}
          />

          <br />
          <cds-button block onClick={onEnter}>
            Enter
          </cds-button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default withRouter(AuthPage);
