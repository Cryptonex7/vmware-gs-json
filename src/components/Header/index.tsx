import "@cds/core/icon/register.js";
import "./styles.scss";

import { ClarityIcons, vmBugIcon } from "@cds/core/icon";
ClarityIcons.addIcons(vmBugIcon);

interface Props {
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
    </header>
  );
};

export default Header;
