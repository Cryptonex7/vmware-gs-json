import "@cds/core/icon/register.js";
import "./styles.scss";

import { ClarityIcons, vmBugIcon } from "@cds/core/icon";
import { withRouter, RouteComponentProps } from "react-router";
ClarityIcons.addIcons(vmBugIcon);

interface Props extends RouteComponentProps {
  title: string;
  icon?: string;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = (props: Props) => {
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
      <cds-icon
        shape="user"
        status="info"
        size="lg"
        solid
        aria-label="This is an example of an icon of a user completely filled in with the blue, informational color"
      ></cds-icon>{" "}
      &nbsp; {localStorage.getItem("name")}
    </header>
  );
};

export default withRouter(Header);
