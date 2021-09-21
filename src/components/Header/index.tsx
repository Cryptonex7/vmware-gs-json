import "@cds/core/icon/register.js";
import "./styles.scss";
import axios from "axios";

import { ClarityIcons, vmBugIcon } from "@cds/core/icon";
import { API_URL } from "../../constants";
import { withRouter, RouteComponentProps } from "react-router";
ClarityIcons.addIcons(vmBugIcon);

interface Props extends RouteComponentProps {
  title: string;
  icon?: string;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = (props: Props) => {
  const onStart = async () => {
    const res = await axios.post(API_URL + "/api/status/start");
    console.log(res.data);
  };

  return (
    <header
      className="header"
      cds-layout="horizontal gap:md align:vertical-center p-y:sm p-x:lg"
    >
      <cds-icon size="lg" shape="vm-bug"></cds-icon>
      {props.title && (
        <h2 className="header__title" cds-layout="align:left">
          {props.title}
        </h2>
      )}
      {sessionStorage.getItem("prouser") === "proadmin" && (
        <cds-button onClick={onStart}>Start</cds-button>
      )}
      <cds-icon
        shape="user"
        status="info"
        size="lg"
        solid
        aria-label="This is an example of an icon of a user completely filled in with the blue, informational color"
      ></cds-icon>{" "}
      &nbsp; {sessionStorage.getItem("prouser")}
    </header>
  );
};

export default withRouter(Header);
