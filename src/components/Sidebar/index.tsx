import "@cds/core/icon/register.js";
import "@cds/core/divider/register.js";
import "./styles.scss";

interface Props {
  title: string;
  icon?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<Props> = (props: Props) => {
  return (
    <>
      <nav className="sidenav" cds-layout="p:md">
        {props.title && <h3 className="sidenav__title">{props.title}</h3>}
      </nav>
      <cds-divider
        class="divider-side"
        orientation="vertical"
      ></cds-divider>
    </>
  );
};

export default Sidebar;
