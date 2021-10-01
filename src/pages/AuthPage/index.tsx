import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import axios from "axios";
import { API_URL } from "../../constants";
import GoogleLogin from "react-google-login";

import { withRouter, RouteComponentProps } from "react-router";
import { useEffect, useState } from "react";
import TextField from "../../components/TextField";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {}

const AuthPage: React.FC<Props> = (props: Props) => {
  document.body.removeAttribute("cds-theme");

  const responseGoogle = (response: any) => {
    console.log(response);
    console.log(response.profileObj);

    if (response.accessToken) {
      console.log("access token: ", response.accessToken);
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("name", response.profileObj.name);
      props.history.push("/waiting");
    }
  };

  useEffect(() => {
  }, []);
  

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
          <span className="title">VMware GS-JSON</span>
        </div>
        <div className="form-container">
          <GoogleLogin
            clientId="544641852709-f8nc72gnfuvv6kpessguu7nbjatj3sh3.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"
            fetchBasicProfile={true}
            redirectUri="http://localhost:3000/waiting"
            accessType="online"
            responseType="permission id_token"
          />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default withRouter(AuthPage);
