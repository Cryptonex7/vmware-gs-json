import "@cds/core/icon/register.js";
import "@cds/core/divider/register.js";
import "./styles.scss";

import { ClarityIcons, userIcon } from "@cds/core/icon";
ClarityIcons.addIcons(userIcon);

interface Props {
  title: string;
  icon?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<Props> = (props: Props) => {
  return (
    <>
      <nav className="sidenav" cds-layout="p:md">
        <cds-icon shape="user" badge="success"></cds-icon>&nbsp;&nbsp;
        {localStorage.getItem("name")}
      </nav>
      <cds-divider class="divider-side" orientation="vertical"></cds-divider>
    </>
  );
};

export default Sidebar;
