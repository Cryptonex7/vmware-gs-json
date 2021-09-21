import "@cds/core/icon/register.js";
import "@cds/core/divider/register.js";
import "./styles.scss";

import { ClarityIcons, userIcon } from "@cds/core/icon";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { withRouter, RouteComponentProps } from "react-router";

ClarityIcons.addIcons(userIcon);

interface Props extends RouteComponentProps {
  title: string;
  icon?: string;
  users?: any;
  getLeaderboard?: any;
}

const Sidebar: React.FC<Props> = (props: Props) => {

  const nameshorter = (name: string) => {
    if(name.length > 15) {
      const fname = name.split(" ");
      return fname[0].substr(0, 15) + "...";
    } else {
      return name;
    }
  };

  
  return (
    <>
      <div className="sidenav" cds-layout="p:md">
        {props.users?.map((user: any, idx: number) => (
          <div className="leaderrow flex-row just-sb full-width">
            <span className="prousername">
              <cds-icon shape="user" badge={user.ready ? "success" : "danger"} size="md"></cds-icon>#
              {idx + 1}&nbsp;&nbsp;&nbsp;{nameshorter(user.name)}
            </span>
            <span className="prousername">{user.score}</span>
          </div>
        ))}
      </div>
      <cds-divider class="divider-side" orientation="vertical"></cds-divider>
    </>
  );
};

export default withRouter(Sidebar);
